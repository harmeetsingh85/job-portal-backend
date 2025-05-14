# ✨ Ready to Connect Talent: Job Portal Backend API ✨

Built with **Node.js**, **Express**, **MongoDB**, and robust **JWT** authentication, this backend is engineered for a seamless job portal experience. Employers can effortlessly post opportunities, and job seekers can easily discover and apply. Secure, efficient, and ready to integrate\!

-----

## 🎯 Key Highlights

  * **Streamlined Onboarding:** Simple registration and login for both employers and users.
  * **Fortified Security:** Industry-standard `bcryptjs` for password hashing and JWT for secure authentication.
  * **Effortless Job Management (Employers):** Intuitive endpoints to create and manage job postings.
  * **Empowered Job Seekers:** Easy browsing and application process for available positions.
  * **Protected Access:** Middleware ensures only authorized users can access specific features.

-----

## ⚙️ Core Technologies

  * **Backend Powerhouse:** Node.js, Express.js
  * **Scalable Database:** MongoDB with Mongoose
  * **Rock-Solid Authentication:** JWT, bcryptjs
  * **Configuration Made Easy:** dotenv

-----
## 🔗 API Endpoints at a Glance 🚀

### 🏢 Employer Endpoints 💼

| Method | Endpoint           | Description             | Authentication |
| :----- | :----------------- | :---------------------- | :------------- |
| POST   | `/employer/signUp`   | Register employer       | ❌             |
| POST   | `/employer/signIn`   | Login employer          | ❌             |
| POST   | `/employer/createJob`| Create a job posting    | ✅             |
| GET    | `/employer/viewMyJobs`| View employer's jobs    | ✅             |
| DELETE | `/employer/deleteJob`| Delete a job posting    | ✅             |

### 🧑‍💼 User Endpoints 👩‍💼

| Method | Endpoint        | Description         | Authentication |
| :----- | :-------------- | :------------------ | :------------- |
| POST   | `/user/signUp`   | Register user       | ❌             |
| POST   | `/user/signIn`   | Login user          | ❌             |
| GET    | `/user/jobs`     | View all jobs       | ❌             |
| POST   | `/user/apply`    | Apply for a job     | ✅             |

### 🔑 Environment Configuration

Create a `.env` file in the project root and configure your environment variables. See `.env.example` for guidance.
MONGO_URL=your_mongodb_connection_string
USER_SECRET=your_jwt_secret_key

