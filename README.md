# Recipe Sharing Website

A full-stack recipe sharing platform where users can discover, share, and manage recipes. Built with Next.js, Tailwind CSS, and Express.js with JWT authentication.

## Tech Stack

**Frontend:**
- Next.js 14 (React 18)
- Tailwind CSS
- Axios
- React Icons

**Backend:**
- Node.js & Express.js
- JWT Authentication
- bcryptjs
- express-validator

## Features

- Browse and search recipes by title or ingredients
- Filter recipes by category and cooking time
- User authentication (register/login)
- Submit and manage your own recipes
- Responsive design with modern UI/UX
- Protected routes and authorization

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation & Setup

### 1. Clone and Install

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Environment Configuration

**Backend** (`backend/.env`):
```env
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## Project Structure

```
├── backend/
│   ├── middleware/        # Authentication middleware
│   ├── models/           # User and Recipe models
│   ├── routes/           # API routes
│   ├── server.js         # Express server
│   └── .env             # Environment variables
│
└── frontend/
    ├── app/              # Next.js pages (App Router)
    ├── components/       # React components
    ├── context/          # Auth context
    ├── lib/              # API client
    └── .env.local       # Environment variables
```

## API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |

### Recipes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/recipes` | Get all recipes | No |
| GET | `/api/recipes/:id` | Get single recipe | No |
| POST | `/api/recipes` | Create recipe | Yes |
| DELETE | `/api/recipes/:id` | Delete recipe | Yes |

**Query Parameters for GET `/api/recipes`:**
- `search` - Search by title or ingredients
- `category` - Filter by category
- `maxTime` - Filter by cooking time

## Key Features

### User Features
- Register and login with JWT authentication
- Submit recipes with ingredients and instructions
- Delete your own recipes
- Browse all recipes with search and filters

### Recipe Management
- Dynamic ingredient and instruction fields
- Category selection (Breakfast, Lunch, Dinner, Desserts, Vegan, Snacks)
- Cooking time and difficulty level
- Form validation

### UI/UX
- Responsive design (mobile, tablet, desktop)
- Search functionality
- Category and time filters
- Loading states and error handling
- Clean, modern interface

## Sample Data

The application includes 6 pre-loaded recipes for testing:
- Classic Pancakes
- Vegan Buddha Bowl
- Chocolate Lava Cake
- Mediterranean Pasta Salad
- Grilled Salmon with Herbs
- Homemade Pizza Margherita

## Security

- Passwords hashed with bcryptjs
- JWT token-based authentication
- Protected routes with authorization
- Input validation on all forms
- CORS configuration

## Development Notes

- Currently uses in-memory storage (arrays)
- Easily upgradeable to MongoDB/PostgreSQL
- Environment variables for configuration
- Modular code structure for scalability

## Production Deployment

**Backend:**
1. Set up a production database
2. Update JWT_SECRET with a strong secret
3. Deploy to Heroku, Railway, or similar platform

**Frontend:**
1. Run `npm run build` in the frontend directory
2. Deploy to Vercel, Netlify, or similar platform
3. Update `NEXT_PUBLIC_API_URL` to production API URL

## License

MIT
