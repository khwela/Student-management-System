# Student-management-System

Overview

This is a simple Student Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The application allows users to create, view, update, and delete student records. It demonstrates full-stack development 
skills including API design, frontend integration, and state management in React.

##Tech Stack

Frontend: React.js, Axios, JavaScript, CSS

Backend: Node.js, Express.js

Database: MongoDB (Atlas or local)

Other Tools: CORS, dotenv, Codespaces (optional)

#Setup Instructions
1. Clone the repository
git clone <your-repo-url>
cd Student-management-System

2. Backend Setup
cd Backend
npm install


Create a .env file in the Backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the backend:

node server.js


Backend will run on port 5000

Ensure CORS is enabled for frontend access

3. Frontend Setup
cd ../frontend
npm install
npm start

API Endpoints
Method	Endpoint	Description
POST	/students -	Create a new student
GET	/students	 -Get all students
PUT	/students/:id -	Update student by ID
DELETE	/students/:id	 -Delete student by ID

Challenges Faced

Network errors with Axios in Codespaces due to localhost reference. Solved by using Codespaces port preview URLs.

CORS issues between frontend and backend. Solved by enabling cors() middleware in Express.

Module not found errors in React due to incorrect import paths. Solved by fixing relative imports.

Duplicate imports / undefined state errors. Solved by managing state in App.js and passing props to child components.

MongoDB connection issues. Solved by ensuring the correct MONGO_URI with proper username/password.

Future Improvements

Add validation and error messages on frontend forms

Implement update and delete functionality in the UI

Use Tailwind CSS or a UI library for better styling

Add user authentication for secure access

Frontend runs on port 3000 (or Codespaces forwarded URL)

Axios is configured to connect to the backend URL
