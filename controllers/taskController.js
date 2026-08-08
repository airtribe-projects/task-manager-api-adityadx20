import taskModal from '../models/taskModal.js';

// Handle create tasks
const createTask = (req, res) => {
    const { title, description, completed } = req.body;

    // VALIDATION: Check for missing fields required by tests
    if (!title || description === undefined || completed === undefined) {
        return res.status(400).json({ error: "Missing required fields: title, description, and completed are mandatory." });
    }

    // VALIDATION: Check for strict data types
    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: "Invalid data: completed must be a boolean." });
    }

    const newTask = taskModal.createTask({ title, description, completed });
    res.status(201).json(newTask); // 201 is correct here!
};

// Handle get all tasks
const getAllTasks = (req, res) => {
    const allTasks = taskModal.getAllTasks();
    res.status(200).json(allTasks); // Fixed: Changed 201 to 200
};

// Handle get single task by ID
const getTaskById = (req, res) => {
    const id = req.params.id;
    const task = taskModal.getTask(id);

    // ERROR HANDLING: Return 404 if the task doesn't exist
    if (!task) {
        return res.status(404).json({ error: `Task with ID ${id} not found` });
    }

    res.status(200).json(task); // Fixed: Changed 201 to 200
};

// Handle delete task
const deleteTaskById = (req, res) => {
    const id = req.params.id;
    
    // First, verify if the task actually exists before deleting
    const taskCheck = taskModal.getTask(id);
    if (!taskCheck) {
        return res.status(404).json({ error: `Cannot delete. Task with ID ${id} not found` });
    }

    const tasks = taskModal.deleteTaskById(id);
    res.status(200).json(tasks); // Fixed: Changed 201 to 200
};

// Handle update task
const updateTaskById = (req, res) => {
    const id = req.params.id;
    const body = req.body;

    // First, verify if the task actually exists before updating
    const taskCheck = taskModal.getTask(id);
    if (!taskCheck) {
        return res.status(404).json({ error: `Cannot update. Task with ID ${id} not found` });
    }

    // VALIDATION: Your test suite tests "PUT with invalid data" expecting a 400
    if (body.completed !== undefined && typeof body.completed !== 'boolean') {
        return res.status(400).json({ error: "Invalid data: completed must be a boolean value." });
    }

    const tasks = taskModal.updateTaskById(id, body);
    res.status(200).json(tasks); // Fixed: Changed 201 to 200
};

export const taskController = {
    createTask,
    getAllTasks,
    getTaskById,
    deleteTaskById,
    updateTaskById
};
