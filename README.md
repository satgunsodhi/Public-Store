# Product Store 🛒

A full-stack MERN application for managing product listings with CRUD functionality.

## Features

- Create, read, update, and delete products
- Modern UI with Chakra UI components
- Dark/light mode toggle
- Responsive design
- Real-time UI updates without page refreshes
- MongoDB database integration

## Tech Stack

### Frontend
- React 19
- React Router v7
- Chakra UI for styling
- Zustand for state management
- Vite for build tooling

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- RESTful API architecture

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- MongoDB account and connection string
- Git

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/product-store.git
   cd product-store
   ```

2. Create a `.env` file in the root directory with your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

3. Install dependencies
   ```
   npm install
   cd frontend
   npm install
   cd ..
   ```

4. Start the development server
   ```
   npm run dev
   ```

This will start both the backend server and the frontend development server concurrently.

## API Endpoints

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | /api/products   | Get all products     |
| POST   | /api/products   | Create a new product |
| PUT    | /api/products/:id | Update a product   |
| DELETE | /api/products/:id | Delete a product   |

## Deployment

To deploy the application to production:

1. Build the frontend
   ```
   npm run build
   ```

2. Start the production server
   ```
   npm start
   ```

The application will serve the built frontend files from the backend.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## Acknowledgments

- Chakra UI for the component library
- Zustand for state management
- Vite for the build tool
