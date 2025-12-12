# Backend - Recipe Sharing API

Express.js REST API for the Recipe Sharing Platform.

## Features

- JWT Authentication (Register/Login)
- Recipe CRUD Operations
- Input Validation
- User Authorization
- CORS Support

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file (already included):

```
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

## Run

```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Health Check
```
GET /api/health
```

### Authentication

**Register**
```
POST /api/auth/register
Body: { name, email, password }
Response: { token, user: { id, name, email } }
```

**Login**
```
POST /api/auth/login
Body: { email, password }
Response: { token, user: { id, name, email } }
```

### Recipes

**Get All Recipes**
```
GET /api/recipes
Query Params: ?search=query&category=Breakfast&maxTime=30
Response: Array of recipes
```

**Get Recipe by ID**
```
GET /api/recipes/:id
Response: Recipe object
```

**Create Recipe** (Protected)
```
POST /api/recipes
Headers: { Authorization: Bearer <token> }
Body: {
  title,
  description,
  ingredients: [],
  instructions: [],
  category,
  cookingTime,
  difficulty,
  image
}
Response: Created recipe
```

**Delete Recipe** (Protected)
```
DELETE /api/recipes/:id
Headers: { Authorization: Bearer <token> }
Response: { message: "Recipe deleted successfully" }
```

## Technologies

- Express.js
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- CORS
- dotenv

## Project Structure

```
backend/
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── models/
│   ├── User.js          # User model
│   └── Recipe.js        # Recipe model with sample data
├── routes/
│   ├── auth.js          # Authentication routes
│   └── recipes.js       # Recipe routes
├── server.js            # Main server file
├── package.json
└── .env
```

## Sample Data

6 pre-loaded recipes across different categories for testing.

## Notes

- Currently uses in-memory storage
- For production, integrate a database (MongoDB, PostgreSQL)
- Change JWT_SECRET to a strong, unique secret
