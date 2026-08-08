# Task Manager API

This is my backend API for managing a list of tasks. It is built using Node.js and Express. The data is saved locally inside a file called `tasks.json`.

---

## How to Set Up and Run

1. **Install tools**  
   Open your terminal in this project folder and run:
   ```bash
   npm install
   ```

2. **Start the server**  
   To start running the API locally, run:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

3. **Run the tests**  
   To verify that all the test cases pass, run:
   ```bash
   npm test
   ```

---

## API Endpoints & Testing

All routes start with `/tasks`. You can test these in Postman by sending a JSON body when required.

### 1. Get All Tasks
* **Method:** GET  
* **URL:** `http://localhost:3000/tasks`  
* **Response:** `200 OK` with an array of tasks.

### 2. Get Single Task
* **Method:** GET  
* **URL:** `http://localhost:3000/tasks/1`  
* **Response:** `200 OK` if found, or `404 Not Found`.

### 3. Create a Task
* **Method:** POST  
* **URL:** `http://localhost:3000/tasks`  
* **JSON Body Example:**
  ```json
  {
    "title": "Set up environment",
    "description": "Install Node.js and npm",
    "completed": false
  }
  ```
* **Response:** `201 Created` with the new task data.

### 4. Update a Task
* **Method:** PUT  
* **URL:** `http://localhost:3000/tasks/1`  
* **JSON Body Example:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "completed": true
  }
  ```
* **Response:** `200 OK` with the updated task list.

### 5. Delete a Task
* **Method:** DELETE  
* **URL:** `http://localhost:3000/tasks/1`  
* **Response:** `200 OK` with the remaining tasks array.
