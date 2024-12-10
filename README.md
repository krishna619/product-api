# Products API

A RESTful API built with Express.js that interacts with the DummyJSON API to manage product data. This project demonstrates best practices in Node.js development, including proper error handling, caching, and environment configuration.

## Features

- **RESTful Endpoints** for product management
- **In-Memory Caching** to optimize external API calls
- **Input Validation** for data integrity
- **Error Handling** with detailed responses
- **Environment Configuration** using dotenv
- **CORS Support** for cross-origin requests
- **Health Check Endpoint** for monitoring

## Tech Stack

- Node.js
- Express.js
- Axios for HTTP requests
- dotenv for environment management
- CORS for cross-origin support

## Project Structure

```
products-api/
│
├── src/                    # Source directory
│   ├── config/            # Configuration files
│   ├── middleware/        # Express middleware
│   ├── routes/            # Route definitions
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   └── server.js          # Express app initialization
│
├── .env                   # Environment variables (not in git)
└── package.json          # Project dependencies
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd products-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # Development mode
    npm run dev

   ```

## API Endpoints

### GET /products
- Fetches all products from the DummyJSON API
- Response includes cached data (5-minute cache duration)

### POST /products
- Adds a new product to the in-memory store
- Required fields: title, price, category
- Validates input data before adding

### GET /health
- Returns API health status and environment info

## API Documentation

A complete Postman collection is included in the repository. To use it:

1. Import `Products-API.postman_collection.json` into Postman
2. Update the `baseUrl` variable if needed
3. Start making requests!

## Response Examples

### GET /products Success Response
```json
[
  {
    "id": 1,
    "title": "iPhone 9",
    "price": 549,
    "category": "smartphones"
    // ... other fields
  }
]
```

### POST /products Request Body
```json
{
  "title": "New Product",
  "price": 99.99,
  "category": "electronics"
}
```

### Error Response
```json
{
  "error": "Validation failed",
  "details": "Missing required fields: price"
}
```

## Error Handling

The API implements comprehensive error handling:
- Validation errors (400)
- External API errors (503)
- Server errors (500)


