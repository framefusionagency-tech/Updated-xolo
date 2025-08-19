#!/usr/bin/env python3
"""
Backend API Testing for XOLO Energy Drink
Tests the FastAPI backend endpoints to ensure proper functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"
print(f"🔗 Testing backend at: {API_BASE_URL}")

def test_health_check():
    """Test the health check endpoint /api/"""
    print("\n🏥 Testing Health Check Endpoint...")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check endpoint working correctly")
                print(f"   Response: {data}")
                return True
            else:
                print(f"❌ Health check returned unexpected message: {data}")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check request failed: {e}")
        return False

def test_cors_configuration():
    """Test CORS configuration"""
    print("\n🌐 Testing CORS Configuration...")
    try:
        # Test preflight request
        headers = {
            'Origin': 'https://example.com',
            'Access-Control-Request-Method': 'GET',
            'Access-Control-Request-Headers': 'Content-Type'
        }
        
        response = requests.options(f"{API_BASE_URL}/", headers=headers, timeout=10)
        
        if response.status_code in [200, 204]:
            cors_headers = response.headers
            if 'Access-Control-Allow-Origin' in cors_headers:
                print("✅ CORS configuration working")
                print(f"   Allow-Origin: {cors_headers.get('Access-Control-Allow-Origin')}")
                return True
            else:
                print("⚠️  CORS headers not found in preflight response")
                return False
        else:
            print(f"❌ CORS preflight failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ CORS test request failed: {e}")
        return False

def test_status_endpoints():
    """Test status check endpoints (POST and GET)"""
    print("\n📊 Testing Status Check Endpoints...")
    
    # Test POST /api/status
    try:
        test_data = {
            "client_name": "XOLO_Test_Client"
        }
        
        response = requests.post(
            f"{API_BASE_URL}/status", 
            json=test_data,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            if 'id' in data and 'client_name' in data and 'timestamp' in data:
                print("✅ POST /api/status working correctly")
                print(f"   Created status check with ID: {data['id']}")
                
                # Test GET /api/status
                get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
                if get_response.status_code == 200:
                    get_data = get_response.json()
                    if isinstance(get_data, list) and len(get_data) > 0:
                        print("✅ GET /api/status working correctly")
                        print(f"   Retrieved {len(get_data)} status checks")
                        return True
                    else:
                        print("⚠️  GET /api/status returned empty or invalid data")
                        return False
                else:
                    print(f"❌ GET /api/status failed with status {get_response.status_code}")
                    return False
            else:
                print(f"❌ POST /api/status returned invalid data structure: {data}")
                return False
        else:
            print(f"❌ POST /api/status failed with status {response.status_code}")
            print(f"   Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status endpoints test failed: {e}")
        return False

def test_server_stability():
    """Test server stability with multiple requests"""
    print("\n🔄 Testing Server Stability...")
    try:
        success_count = 0
        total_requests = 5
        
        for i in range(total_requests):
            response = requests.get(f"{API_BASE_URL}/", timeout=5)
            if response.status_code == 200:
                success_count += 1
        
        if success_count == total_requests:
            print(f"✅ Server stability test passed ({success_count}/{total_requests} requests successful)")
            return True
        else:
            print(f"⚠️  Server stability test partial success ({success_count}/{total_requests} requests successful)")
            return success_count > total_requests // 2
            
    except Exception as e:
        print(f"❌ Server stability test failed: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting XOLO Energy Drink Backend API Tests")
    print("=" * 60)
    
    tests = [
        ("Health Check", test_health_check),
        ("CORS Configuration", test_cors_configuration),
        ("Status Endpoints", test_status_endpoints),
        ("Server Stability", test_server_stability)
    ]
    
    results = {}
    
    for test_name, test_func in tests:
        try:
            results[test_name] = test_func()
        except Exception as e:
            print(f"❌ {test_name} test crashed: {e}")
            results[test_name] = False
    
    print("\n" + "=" * 60)
    print("📋 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name:20} : {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests PASSED! Backend is functioning correctly.")
        return True
    elif passed > 0:
        print("⚠️  Some backend tests FAILED. Backend has issues that need attention.")
        return False
    else:
        print("💥 All backend tests FAILED. Backend is not functioning.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)