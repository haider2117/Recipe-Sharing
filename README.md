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

This project uses a split deployment strategy:
- **Frontend** → Vercel
- **Backend** → Railway (or Render)

### Deploy Backend to Railway

1. **Create Railway Account**: Visit [railway.app](https://railway.app)

2. **Deploy from GitHub**:
   ```bash
   # Push your code to GitHub first (already done!)
   
   # In Railway dashboard:
   # - Click "New Project"
   # - Select "Deploy from GitHub repo"
   # - Choose your repository
   # - Select "backend" directory
   ```

3. **Set Environment Variables** in Railway:
   ```
   PORT=5000
   JWT_SECRET=your_production_secret_here_make_it_strong
   NODE_ENV=production
   ```

4. **Get your Railway URL** (e.g., `https://your-app.railway.app`)

### Deploy Frontend to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy from frontend directory**:
   ```bash
   cd frontend
   vercel
   ```

3. **Set Environment Variable** in Vercel:
   ```
   NEXT_PUBLIC_API_URL=https://your-railway-backend-url.railway.app/api
   ```

4. **Follow prompts**:
   - Link to existing project? → No
   - Project name → recipe-sharing
   - Framework → Next.js
   - Deploy? → Yes

### Alternative: Deploy Backend to Render

1. Visit [render.com](https://render.com)
2. Create "New Web Service"
3. Connect your GitHub repository
4. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables (same as Railway)

### Post-Deployment

1. **Update Frontend Environment**:
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Add `NEXT_PUBLIC_API_URL` with your backend URL
   - Redeploy

2. **Test Your Deployment**:
   - Visit your Vercel URL
   - Register a new account
   - Try creating a recipe

**Note**: The backend uses in-memory storage. For production, consider adding MongoDB or PostgreSQL.

## License

MIT
