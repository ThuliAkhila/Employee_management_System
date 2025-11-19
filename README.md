# StaffEase – Employee Management System

StaffEase is a Full-Stack HR & Employee Automation Platform built using React, Node.js, Express, and MongoDB.

It simplifies HR workflows using role-based access, JWT authentication, AI Inspired modules, and an intuitive UI.

---

# Features

JWT-based Authentication for secure access

Role-Based Dashboard (Admin / HR / Employee)

Smart Leave Management with auto-balance

Grievance Redressal Module

NLP-Based Resume Analyzer

Feedback Sentiment Analyzer

Report Generation (PDF/CSV)

Employee Profile & Document Management

---
# Technologies Used

# Frontend
 React,
Axios,
React Router,
CSS

# Backend
Node.js,
Express.js,
Multer,
JWT Authentication,
bcrypt,
NLP Libraries

# Database
MongoDB


---
 # How to Run
 
### Install Required Software
Make sure these are installed on your system:
Node.js (v16+)
MongoDB (local or Atlas)
Git
Check installation:
node -v
npm -v
mongod --version

### 2. Clone the Project
git clone https://github.com/your-username/StaffEase.git
cd StaffEase

### 3. Install Backend Dependencies
cd backend
npm install
## 4. Create Backend .env File
Inside backend/, create a file named:

.env

Add this:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/staffease
JWT_SECRET=yourSecretKey
(Use your Atlas URL if using MongoDB Cloud)
### 5. Start Backend Server
npm start
or (if using nodemon)
npm run dev
Backend runs at: http://localhost:5000
### 6. Install Frontend Dependencies
Open a new terminal:
cd frontend
npm install
### 7. Start the Frontend
npm start

# workFlow(screenshots)
### AUTHENTICATION
<img width="1617" height="687" alt="image" src="https://github.com/user-attachments/assets/9bbc3227-7066-49de-a693-d54d9a9e4221" />

### HR DASHBOARD
<img width="2909" height="867" alt="image" src="https://github.com/user-attachments/assets/e4ba12d4-574c-4790-9507-b121f1b398dc" />

### EMPLOYEE DASHBOARD

<img width="1193" height="672" alt="image" src="https://github.com/user-attachments/assets/67a861fc-d6a8-4b76-a110-78ddefcfba06" />

### HR DASHBOARD TO ADD/UPDATE/DELETE EMPLOYEEES
<img width="1752" height="828" alt="image" src="https://github.com/user-attachments/assets/2f8a4964-0c18-4f6f-af9b-3f70c83c7b63" />
<img width="1884" height="822" alt="image" src="https://github.com/user-attachments/assets/2909c1ab-8050-4880-a3a4-83fdb7ee0df9" />
<img width="2400" height="1350" alt="image" src="https://github.com/user-attachments/assets/a08d5da8-fdda-4267-bfbf-96a9c1f4dc65" />

### Resume checker
<img width="2400" height="1350" alt="image" src="https://github.com/user-attachments/assets/fe1bceb4-b4b4-4a78-9886-53a9f7bd17b6" />


### LEAVE MANAGEMENT

<img width="792" height="579" alt="image" src="https://github.com/user-attachments/assets/e5cc014d-6844-4dd8-b847-8feec3b978e2" />


<img width="884" height="520" alt="image" src="https://github.com/user-attachments/assets/d5839196-af21-4415-b2b6-1c22a88d2f13" />

### Sentiment analysis

<img width="1481" height="624" alt="image" src="https://github.com/user-attachments/assets/761b6696-f750-4662-807e-e531062bc2f1" />


<img width="770" height="656" alt="image" src="https://github.com/user-attachments/assets/8995ac6b-dee6-4fbf-9b5d-183432053ac7" />



### LEAVE VISULAIZATION

<img width="1480" height="646" alt="image" src="https://github.com/user-attachments/assets/bdb64626-3426-4b0b-b517-5df5a1d03026" />


### Employee Reports

<img width="1671" height="601" alt="image" src="https://github.com/user-attachments/assets/7e7a5053-def0-4b9c-b08e-0fd74aaa3294" />



### Tracking complaints

<img width="1125" height="751" alt="image" src="https://github.com/user-attachments/assets/e9b79498-540e-459a-9178-e4976975b46d" />

### Greivance Redressal

<img width="1016" height="746" alt="image" src="https://github.com/user-attachments/assets/b42ccbe5-eeb9-4dc8-9962-2d9c21c2b548" />



