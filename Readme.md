# Task Manager API

This is a simple project to manage a list of tasks. It uses **Node.js** and **Express**. It saves all your data inside a text file called `tasks.json`.

---

## 🛠️ Tools Used

* **Node.js**: The software used to run JavaScript code on a computer.
* **Express**: A tool used to build website routes easily.
* **Tap & Supertest**: Tools used to test the code and check for errors.

---

## 🚀 How to Install and Run

### 1. Install Dependencies
Open your computer terminal in this project folder and type this command to download the required tools:
```bash
npm install
```

### 2. Start the Server
To turn on your API server, run this command:
```bash
npm start
```
Your server is now open and waiting for requests at: `http://localhost:3000`

---

## 🧪 How to Run Tests

To check if your code has any errors and ensure it passes all instructor requirements, close your active server and run this command:
```bash
npm test
```

---

## 🛣️ API Paths (Endpoints)

All website paths start with `/tasks`.

| Action | Path | What it does | Response Code |
| :--- | :--- | :--- | :--- |
| **GET** | `/tasks` | Shows a list of all your tasks | `200 OK` |
| **GET** | `/tasks/:id` | Shows only one task by its ID number | `200 OK` / `404 Not Found` |
| **POST** | `/tasks` | Creates and saves a new task | `201 Created` / `400 Bad Request` |
| **PUT** | `/tasks/:id` | Changes the details of an existing task | `200 OK` / `400` / `404` |
| **DELETE** | `/tasks/:id` | Removes a task completely | `200 OK` / `404 Not Found` |

### Example Data Format (JSON Payload)

When you make a **POST** or **PUT** request using Postman, send your data exactly like this:
```json
{
  "title": "Set up environment",
  "description": "Install Node.js, npm, and git",
  "completed": true
}
```

---

## 📁 Project Structure

* **data/tasks.json**: The file where your tasks are saved.
* **routes/taskRoutes.js**: Handles the website path links.
* **controllers/taskController.js**: Checks if data sent by the user is correct.
* **models/taskModal.js**: Handles reading and writing data inside the `tasks.json` file.
* **test/server.test.js**: The automatic testing code.
* **app.js**: Sets up the Express application.
* **package.json**: Holds information about scripts and dependencies.
