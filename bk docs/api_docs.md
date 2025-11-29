# GenAI Academy LMS - API Documentation

Base URL: `http://localhost:3000` (Development)  
Production URL: `https://your-app.ondigitalocean.app`

---

## 📋 Table of Contents
- [Public Auth API](#public-auth-api)
- [Authentication](#authentication)
- [Users API](#users-api)
- [Courses API](#courses-api)
- [Enrollments API](#enrollments-api)
- [Response Format](#response-format)
- [Error Codes](#error-codes)

---

## 🔓 Public Auth API

These endpoints are publicly accessible and do not require authentication.

Base path: `/api/auth`

### 1. User Signup

**Endpoint:** `POST /api/auth/signup`

**Description:** Register a new user account. Creates user in both Supabase Auth and application database.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "mobile": "+1234567890"
}
```

**Required Fields:**
- `name` (string) - User's full name
- `email` (string) - Valid email address
- `password` (string) - Minimum 6 characters recommended

**Optional Fields:**
- `mobile` (string) - Phone number

**Request:**
```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123",
    "mobile": "+1234567890"
  }'
```

**Response:** `201 Created`
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john@example.com",
      "mobile": "+1234567890",
      "role": "student",
      "status": "active",
      "createdAt": "2024-11-28T10:00:00Z",
      "updatedAt": "2024-11-28T10:00:00Z"
    },
    "session": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "...",
      "expires_in": 3600
    }
  }
}
```

**Error Responses:**

`400 Bad Request` - Missing required fields:
```json
{
  "success": false,
  "error": "Name, email, and password are required"
}
```

`409 Conflict` - User already exists:
```json
{
  "success": false,
  "error": "User with this email already exists"
}
```

---

### 2. User Login

**Endpoint:** `POST /api/auth/login`

**Description:** Login with email and password. Returns JWT token for authenticated requests.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Request:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john@example.com",
      "mobile": "+1234567890",
      "role": "student",
      "status": "active"
    },
    "session": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "...",
      "expires_in": 3600
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**

`400 Bad Request` - Missing fields:
```json
{
  "success": false,
  "error": "Email and password are required"
}
```

`401 Unauthorized` - Invalid credentials:
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

---

## 🔐 Authentication

All admin endpoints require authentication with a valid JWT token from Supabase Auth and admin role.

### Requirements:
1. **Valid JWT Token** - Obtained from Supabase Auth after login
2. **Admin Role** - User must have `role: "admin"` in the users table

### How to Authenticate:

#### Step 1: Login with Supabase Auth
```javascript
// In your frontend
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Login
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'your-password'
})

// Get the access token
const token = data.session.access_token
```

#### Step 2: Include Token in API Requests
```bash
# Add Authorization header to all requests:
curl http://localhost:3000/api/admin/users \
  -H "Authorization: Bearer <your-jwt-token>"
```

### Authentication Flow:
1. User logs in via Supabase Auth → Receives JWT token
2. JWT token is sent in `Authorization` header as `Bearer <token>`
3. Backend validates token with Supabase
4. Backend checks if user has admin role in database
5. If valid + admin → Request proceeds
6. If invalid or not admin → Returns 401/403 error

### Error Responses:

**401 Unauthorized - No Token:**
```json
{
  "success": false,
  "error": "Unauthorized - No token provided"
}
```

**401 Unauthorized - Invalid Token:**
```json
{
  "success": false,
  "error": "Unauthorized - Invalid token"
}
```

**403 Forbidden - Not Admin:**
```json
{
  "success": false,
  "error": "Forbidden - Admin access required"
}
```

**404 Not Found - User Not in Database:**
```json
{
  "success": false,
  "error": "User not found"
}
```

### Testing Authentication:

```bash
# 1. Set your token as environment variable
export TOKEN="your-jwt-token-here"

# 2. Test API with authentication
curl http://localhost:3000/api/admin/users \
  -H "Authorization: Bearer $TOKEN"
```

---

## 👥 Users API

Base path: `/api/admin/users`

### 1. Get All Users

**Endpoint:** `GET /api/admin/users`

**Description:** Retrieve all users in the system, ordered by creation date (newest first).

**Request:**
```bash
curl http://localhost:3000/api/admin/users \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john@example.com",
      "mobile": "+1234567890",
      "avatar": "https://example.com/avatar.jpg",
      "status": "active",
      "role": "admin",
      "lastActivity": "2024-11-28T10:00:00Z",
      "createdAt": "2024-11-01T10:00:00Z",
      "updatedAt": "2024-11-28T10:00:00Z"
    }
  ],
  "count": 1
}
```

---

### 2. Get User by ID (with Enrollments)

**Endpoint:** `GET /api/admin/users/:id`

**Description:** Retrieve a specific user by their UUID along with all their course enrollments.

**Parameters:**
- `id` (path, required) - User UUID

**Request:**
```bash
curl http://localhost:3000/api/admin/users/550e8400-e29b-41d4-a716-446655440000 \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "+1234567890",
    "avatar": "https://example.com/avatar.jpg",
    "status": "active",
    "role": "student",
    "lastActivity": "2024-11-28T10:00:00Z",
    "createdAt": "2024-11-01T10:00:00Z",
    "updatedAt": "2024-11-28T10:00:00Z",
    "enrollments": [
      {
        "enrollment": {
          "id": "750e8400-e29b-41d4-a716-446655440002",
          "userId": "550e8400-e29b-41d4-a716-446655440000",
          "courseId": "650e8400-e29b-41d4-a716-446655440001",
          "amountPaid": "4499.00",
          "paidAt": "2024-11-28T10:00:00Z",
          "hasPaid": true,
          "progress": 45,
          "timeSpent": 3600,
          "status": "active",
          "certificateId": "CERT-001",
          "certificateGeneratedAt": "2025-03-01T10:00:00Z",
          "createdAt": "2024-11-28T10:00:00Z",
          "updatedAt": "2024-11-28T12:00:00Z"
        },
        "course": {
          "id": "650e8400-e29b-41d4-a716-446655440001",
          "title": "Python Masterclass",
          "desc": "Learn Python from scratch to advanced",
          "type": "course",
          "price": "4999.00",
          "status": "live",
          "startDate": "2024-12-01T00:00:00Z",
          "endDate": "2025-02-28T00:00:00Z"
        }
      }
    ]
  }
}
```

**Response Notes:**
- Returns user details with an `enrollments` array
- Each enrollment includes both enrollment details and associated course information
- Enrollments are ordered by creation date (newest first)
- Empty array if user has no enrollments

**Error Response:** `404 Not Found`
```json
{
  "success": false,
  "error": "User not found"
}
```

---

### 3. Update User

**Endpoint:** `PUT /api/admin/users/:id`

**Description:** Update user details. Only provide fields you want to update.

**Parameters:**
- `id` (path, required) - User UUID

**Request Body:**
```json
{
  "name": "Jane Doe",
  "mobile": "+9876543210",
  "role": "operations",
  "status": "active"
}
```

**Request:**
```bash
curl -X PUT http://localhost:3000/api/admin/users/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "name": "Jane Doe",
    "role": "operations"
  }'
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Jane Doe",
    "email": "john@example.com",
    "mobile": "+9876543210",
    "avatar": "https://example.com/avatar.jpg",
    "status": "active",
    "role": "operations",
    "lastActivity": "2024-11-28T10:00:00Z",
    "createdAt": "2024-11-01T10:00:00Z",
    "updatedAt": "2024-11-28T12:00:00Z"
  }
}
```

**Updatable Fields:**
- `name` (string)
- `email` (string, unique)
- `mobile` (string, optional)
- `avatar` (string, optional, URL)
- `status` (enum: "active", "banned")
- `role` (enum: "admin", "operations", "student")
- `lastActivity` (timestamp)

---

### 4. Ban User

**Endpoint:** `POST /api/admin/users/:id/ban`

**Description:** Ban a user by setting their status to "banned". Banned users cannot access the platform.

**Parameters:**
- `id` (path, required) - User UUID

**Request:**
```bash
curl -X POST http://localhost:3000/api/admin/users/550e8400-e29b-41d4-a716-446655440000/ban \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "User banned successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "banned",
    "updatedAt": "2024-11-28T12:00:00Z"
  }
}
```

---

### 5. Activate User

**Endpoint:** `POST /api/admin/users/:id/activate`

**Description:** Activate a banned user by setting their status to "active".

**Parameters:**
- `id` (path, required) - User UUID

**Request:**
```bash
curl -X POST http://localhost:3000/api/admin/users/550e8400-e29b-41d4-a716-446655440000/activate \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "User activated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "active",
    "updatedAt": "2024-11-28T12:00:00Z"
  }
}
```

---

### 6. Delete User

**Endpoint:** `DELETE /api/admin/users/:id`

**Description:** Permanently delete a user from the system.

**Parameters:**
- `id` (path, required) - User UUID

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/admin/users/550e8400-e29b-41d4-a716-446655440000 \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Jane Doe",
    "email": "john@example.com"
  }
}
```

---

## 📚 Courses API

Base path: `/api/admin/courses`

### 1. Get All Courses

**Endpoint:** `GET /api/admin/courses`

**Description:** Retrieve all courses, ordered by creation date (newest first).

**Request:**
```bash
curl http://localhost:3000/api/admin/courses \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": "650e8400-e29b-41d4-a716-446655440001",
      "title": "Python Masterclass",
      "desc": "Learn Python from scratch to advanced",
      "schedule": "Mon-Fri 7PM IST",
      "type": "course",
      "topic": 1,
      "price": "4999.00",
      "payable": "4499.00",
      "certificateFee": "500.00",
      "association": "CodeKaro",
      "limit": 100,
      "banner": "https://example.com/banner.jpg",
      "startDate": "2024-12-01T00:00:00Z",
      "endDate": "2025-02-28T00:00:00Z",
      "whatsAppGroupLink": "https://chat.whatsapp.com/xyz",
      "resourcesLink": "https://drive.google.com/xyz",
      "nextClassTopic": "Advanced OOP",
      "nextClassLink": "https://meet.google.com/xyz",
      "nextClassDesc": "Deep dive into OOP concepts",
      "status": "live",
      "createdAt": "2024-11-20T10:00:00Z",
      "updatedAt": "2024-11-28T10:00:00Z"
    }
  ],
  "count": 1
}
```

---

### 2. Get Course by ID

**Endpoint:** `GET /api/admin/courses/:id`

**Description:** Retrieve a specific course by its UUID.

**Parameters:**
- `id` (path, required) - Course UUID

**Request:**
```bash
curl http://localhost:3000/api/admin/courses/650e8400-e29b-41d4-a716-446655440001 \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "650e8400-e29b-41d4-a716-446655440001",
    "title": "Python Masterclass",
    "desc": "Learn Python from scratch to advanced",
    "schedule": "Mon-Fri 7PM IST",
    "type": "course",
    "topic": 1,
    "price": "4999.00",
    "payable": "4499.00",
    "certificateFee": "500.00",
    "association": "CodeKaro",
    "limit": 100,
    "banner": "https://example.com/banner.jpg",
    "startDate": "2024-12-01T00:00:00Z",
    "endDate": "2025-02-28T00:00:00Z",
    "whatsAppGroupLink": "https://chat.whatsapp.com/xyz",
    "resourcesLink": "https://drive.google.com/xyz",
    "nextClassTopic": "Advanced OOP",
    "nextClassLink": "https://meet.google.com/xyz",
    "nextClassDesc": "Deep dive into OOP concepts",
    "status": "live",
    "createdAt": "2024-11-20T10:00:00Z",
    "updatedAt": "2024-11-28T10:00:00Z"
  }
}
```

---

### 3. Create Course

**Endpoint:** `POST /api/admin/courses`

**Description:** Create a new course.

**Request Body:** (All required fields must be provided)
```json
{
  "title": "Python Masterclass",
  "desc": "Learn Python from scratch to advanced",
  "schedule": "Mon-Fri 7PM IST",
  "type": "course",
  "topic": 1,
  "price": "4999.00",
  "payable": "4499.00",
  "certificateFee": "500.00",
  "limit": 100,
  "startDate": "2024-12-01T00:00:00Z",
  "endDate": "2025-02-28T00:00:00Z",
  "status": "private"
}
```

**Request:**
```bash
curl -X POST http://localhost:3000/api/admin/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "title": "Python Masterclass",
    "desc": "Learn Python from scratch to advanced",
    "schedule": "Mon-Fri 7PM IST",
    "type": "course",
    "topic": 1,
    "price": "4999.00",
    "payable": "4499.00",
    "certificateFee": "500.00",
    "limit": 100,
    "startDate": "2024-12-01T00:00:00Z",
    "endDate": "2025-02-28T00:00:00Z",
    "status": "private"
  }'
```

**Response:** `201 Created`
```json
{
  "success": true,
  "message": "Course created successfully",
  "data": {
    "id": "650e8400-e29b-41d4-a716-446655440001",
    "title": "Python Masterclass",
    ...
  }
}
```

**Required Fields:**
- `title` (string)
- `desc` (text)
- `schedule` (string)
- `type` (enum: "workshop", "course", "cohort", "mentorship")
- `topic` (integer)
- `price` (numeric)
- `payable` (numeric)
- `certificateFee` (numeric, default: 0)
- `limit` (integer, default: 1000)
- `startDate` (timestamp)
- `endDate` (timestamp)
- `status` (enum: "private", "live", "inProgress", "completed", default: "private")

**Optional Fields:**
- `association` (string)
- `banner` (string, URL)
- `whatsAppGroupLink` (string, URL)
- `resourcesLink` (string, URL)
- `nextClassTopic` (string)
- `nextClassLink` (string, URL)
- `nextClassDesc` (text)

---

### 4. Update Course

**Endpoint:** `PUT /api/admin/courses/:id`

**Description:** Update course details. Only provide fields you want to update.

**Parameters:**
- `id` (path, required) - Course UUID

**Request Body:**
```json
{
  "status": "live",
  "whatsAppGroupLink": "https://chat.whatsapp.com/xyz",
  "nextClassTopic": "Advanced Functions",
  "nextClassLink": "https://meet.google.com/abc"
}
```

**Request:**
```bash
curl -X PUT http://localhost:3000/api/admin/courses/650e8400-e29b-41d4-a716-446655440001 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "status": "live",
    "whatsAppGroupLink": "https://chat.whatsapp.com/xyz"
  }'
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Course updated successfully",
  "data": {
    "id": "650e8400-e29b-41d4-a716-446655440001",
    "status": "live",
    "whatsAppGroupLink": "https://chat.whatsapp.com/xyz",
    ...
  }
}
```

---

### 5. Delete Course

**Endpoint:** `DELETE /api/admin/courses/:id`

**Description:** Permanently delete a course.

**Parameters:**
- `id` (path, required) - Course UUID

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/admin/courses/650e8400-e29b-41d4-a716-446655440001 \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Course deleted successfully",
  "data": {
    "id": "650e8400-e29b-41d4-a716-446655440001",
    "title": "Python Masterclass"
  }
}
```

---

## 🎓 Enrollments API

Base path: `/api/admin/enrollments`

### 1. Get All Enrollments

**Endpoint:** `GET /api/admin/enrollments`

**Description:** Retrieve all enrollments, ordered by creation date (newest first).

**Request:**
```bash
curl http://localhost:3000/api/admin/enrollments \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": "750e8400-e29b-41d4-a716-446655440002",
      "userId": "550e8400-e29b-41d4-a716-446655440000",
      "courseId": "650e8400-e29b-41d4-a716-446655440001",
      "amountPaid": "4499.00",
      "paidAt": "2024-11-28T10:00:00Z",
      "certificateFee": "500.00",
      "coupanCode": "SAVE10",
      "invoiceId": "INV-001",
      "transactionId": "TXN-12345",
      "paymentMethod": "razorpay",
      "hasPaid": true,
      "certificateId": "CERT-001",
      "certificateGeneratedAt": "2025-03-01T10:00:00Z",
      "status": "active",
      "utmSource": "google",
      "utmMedium": "cpc",
      "utmCampaign": "winter-sale",
      "accessOnDate": "2024-12-01T00:00:00Z",
      "accessTillDate": "2025-02-28T23:59:59Z",
      "progress": 45,
      "timeSpent": 3600,
      "remark": "Good progress",
      "createdAt": "2024-11-28T10:00:00Z",
      "updatedAt": "2024-11-28T12:00:00Z"
    }
  ],
  "count": 1
}
```

---

### 2. Get Enrollment by ID

**Endpoint:** `GET /api/admin/enrollments/:id`

**Description:** Retrieve a specific enrollment by its UUID.

**Parameters:**
- `id` (path, required) - Enrollment UUID

**Request:**
```bash
curl http://localhost:3000/api/admin/enrollments/750e8400-e29b-41d4-a716-446655440002 \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": "750e8400-e29b-41d4-a716-446655440002",
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "courseId": "650e8400-e29b-41d4-a716-446655440001",
    "amountPaid": "4499.00",
    "hasPaid": true,
    "status": "active",
    ...
  }
}
```

---

### 3. Create Enrollment

**Endpoint:** `POST /api/admin/enrollments`

**Description:** Create a new enrollment (enroll a user in a course).

**Request Body:** (userId and courseId are required)
```json
{
  "userId": "550e8400-e29b-41d4-a716-446655440000",
  "courseId": "650e8400-e29b-41d4-a716-446655440001",
  "amountPaid": "4499.00",
  "paidAt": "2024-11-28T10:00:00Z",
  "hasPaid": true,
  "status": "active"
}
```

**Request:**
```bash
curl -X POST http://localhost:3000/api/admin/enrollments \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "courseId": "650e8400-e29b-41d4-a716-446655440001",
    "amountPaid": "4499.00",
    "hasPaid": true,
    "status": "active"
  }'
```

**Response:** `201 Created`
```json
{
  "success": true,
  "message": "Enrollment created successfully",
  "data": {
    "id": "750e8400-e29b-41d4-a716-446655440002",
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "courseId": "650e8400-e29b-41d4-a716-446655440001",
    "hasPaid": true,
    "status": "active",
    ...
  }
}
```

**Required Fields:**
- `userId` (UUID) - Foreign key to users table
- `courseId` (UUID) - Foreign key to courses table

**Optional Fields:**
- `amountPaid` (numeric)
- `paidAt` (timestamp)
- `certificateFee` (numeric)
- `coupanCode` (string)
- `invoiceId` (string)
- `transactionId` (string)
- `paymentMethod` (string)
- `hasPaid` (boolean, default: false)
- `certificateId` (string)
- `certificateGeneratedAt` (timestamp)
- `status` (enum: "active", "banned", default: "active")
- `utmSource` (string)
- `utmMedium` (string)
- `utmCampaign` (string)
- `accessOnDate` (timestamp, default: now())
- `accessTillDate` (timestamp)
- `progress` (integer)
- `timeSpent` (integer, in seconds)
- `remark` (text)

---

### 4. Update Enrollment

**Endpoint:** `PUT /api/admin/enrollments/:id`

**Description:** Update enrollment details. Common use: update payment status, progress, certificate info.

**Parameters:**
- `id` (path, required) - Enrollment UUID

**Request Body:**
```json
{
  "hasPaid": true,
  "amountPaid": "4499.00",
  "paidAt": "2024-11-28T10:00:00Z",
  "transactionId": "TXN-12345",
  "progress": 75
}
```

**Request:**
```bash
curl -X PUT http://localhost:3000/api/admin/enrollments/750e8400-e29b-41d4-a716-446655440002 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-jwt-token>" \
  -d '{
    "hasPaid": true,
    "progress": 75,
    "certificateId": "CERT-001",
    "certificateGeneratedAt": "2025-03-01T10:00:00Z"
  }'
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Enrollment updated successfully",
  "data": {
    "id": "750e8400-e29b-41d4-a716-446655440002",
    "hasPaid": true,
    "progress": 75,
    "certificateId": "CERT-001",
    ...
  }
}
```

---

### 5. Delete Enrollment

**Endpoint:** `DELETE /api/admin/enrollments/:id`

**Description:** Permanently delete an enrollment (unenroll a user from a course).

**Parameters:**
- `id` (path, required) - Enrollment UUID

**Request:**
```bash
curl -X DELETE http://localhost:3000/api/admin/enrollments/750e8400-e29b-41d4-a716-446655440002 \
  -H "Authorization: Bearer <your-jwt-token>"
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Enrollment deleted successfully",
  "data": {
    "id": "750e8400-e29b-41d4-a716-446655440002",
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "courseId": "650e8400-e29b-41d4-a716-446655440001"
  }
}
```

---

## 📤 Response Format

### Success Response
All successful responses follow this format:

```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

For list endpoints:
```json
{
  "success": true,
  "data": [ ... ],
  "count": 10
}
```

### Error Response
All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

---

## ⚠️ Error Codes

| Status Code | Description |
|------------|-------------|
| `200` | Success |
| `201` | Created successfully |
| `400` | Bad Request - Invalid input |
| `401` | Unauthorized - Missing or invalid token |
| `403` | Forbidden - Insufficient permissions |
| `404` | Not Found - Resource doesn't exist |
| `500` | Internal Server Error |

---

## 🔧 Common Use Cases

### Use Case 1: Enroll a User in a Course
```bash
# 1. Create/Get User ID
# 2. Get Course ID
# 3. Create Enrollment
curl -X POST http://localhost:3000/api/admin/enrollments \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-uuid",
    "courseId": "course-uuid",
    "hasPaid": false,
    "status": "active"
  }'
```

### Use Case 2: Mark Payment as Received
```bash
curl -X PUT http://localhost:3000/api/admin/enrollments/{enrollment-id} \
  -H "Content-Type: application/json" \
  -d '{
    "hasPaid": true,
    "amountPaid": "4499.00",
    "paidAt": "2024-11-28T10:00:00Z",
    "transactionId": "TXN-12345",
    "paymentMethod": "razorpay"
  }'
```

### Use Case 3: Generate Certificate
```bash
curl -X PUT http://localhost:3000/api/admin/enrollments/{enrollment-id} \
  -H "Content-Type: application/json" \
  -d '{
    "certificateId": "CERT-2024-001",
    "certificateGeneratedAt": "2025-03-01T10:00:00Z"
  }'
```

### Use Case 4: Update Course Status to Live
```bash
curl -X PUT http://localhost:3000/api/admin/courses/{course-id} \
  -H "Content-Type: application/json" \
  -d '{
    "status": "live",
    "whatsAppGroupLink": "https://chat.whatsapp.com/xyz",
    "resourcesLink": "https://drive.google.com/xyz"
  }'
```

---

## 📝 Notes

- All timestamps should be in ISO 8601 format: `YYYY-MM-DDTHH:mm:ssZ`
- All UUIDs are v4 format
- Numeric fields (price, payable, etc.) should be strings with 2 decimal places
- **Authentication is REQUIRED** - All endpoints need valid JWT token with admin role
- CORS is configured for localhost:3000, localhost:5173, localhost:5174
- User must exist in both Supabase Auth AND users table with admin role

---

## 🚀 Quick Test Commands

```bash
# Health check (no auth required)
curl http://localhost:3000/

# Set your token first
export TOKEN="your-jwt-token-here"

# Get all users
curl http://localhost:3000/api/admin/users \
  -H "Authorization: Bearer $TOKEN"

# Get all courses
curl http://localhost:3000/api/admin/courses \
  -H "Authorization: Bearer $TOKEN"

# Get all enrollments
curl http://localhost:3000/api/admin/enrollments \
  -H "Authorization: Bearer $TOKEN"
```

## 🔑 Getting Your First Admin Token

1. **Create a user in Supabase Auth Dashboard:**
   - Go to Authentication → Users → Add User
   - Create user with email/password

2. **Add user to your database with admin role:**
   ```sql
   INSERT INTO users (name, email, role, status)
   VALUES ('Admin User', 'admin@example.com', 'admin', 'active');
   ```

3. **Login via Supabase to get token:**
   ```javascript
   const { data } = await supabase.auth.signInWithPassword({
     email: 'admin@example.com',
     password: 'your-password'
   })
   const token = data.session.access_token
   ```

4. **Use token in all API requests**

