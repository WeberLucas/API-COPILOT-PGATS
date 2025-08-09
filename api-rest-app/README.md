# API Rest - User Management and Transfer System

This project is a RESTful API built with JavaScript and Express, designed for user authentication, user management, and money transfer functionalities. It serves as a learning tool for API testing and automation.

## Features

- User registration and login
- User information retrieval
- Money transfer between users with validation rules
- In-memory data storage
- Swagger documentation for API endpoints

## Project Structure

```
api-rest-app
├── src
│   ├── controllers         # Contains controller files for handling requests
│   ├── services            # Contains service files for business logic
│   ├── models              # Contains model files for data structure
│   ├── app.js              # Initializes the Express application
│   └── swagger.js          # Configures Swagger documentation
├── server.js               # Entry point for starting the server
├── package.json            # NPM configuration file
├── README.md               # Project documentation
└── swagger.json            # Swagger configuration in JSON format
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd api-rest-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   node server.js
   ```

2. Access the API documentation:
   Open your browser and navigate to `http://localhost:3000/api-docs` to view the Swagger UI.

## API Endpoints

### Authentication

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in an existing user.

### User Management

- **GET /users**: Retrieve a list of all users.
- **GET /users/:id**: Retrieve information for a specific user.

### Money Transfers

- **POST /transfers**: Initiate a money transfer between users.

## Validation Rules

- Login requires both username and password.
- Duplicate users cannot be registered.
- Transfers to non-favored users are limited to R$ 5,000.00.

## Testing

This API can be tested using tools like Postman or Supertest for automated testing.

## License

This project is licensed under the MIT License.