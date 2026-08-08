import fs from "fs";
import path from "path";

// Added .json extension to target your tasks.json file accurately
const filePath = process.env.NODE_ENV === "test"
  ? path.join("./data/test-tasks.json")
  : path.join("./data/tasks.json");

// Read all tasks
const readData = () => {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsedData = JSON.parse(fileContent || "[]");
        return parsedData;
    } catch (error) {
        console.error(`Error encountered: ${error.message}. Returning empty array fallback.`);
        return [];
    }
};

// Write tasks to file
const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Logic for adding tasks
const createTask = (taskData) => {
    const tasks = readData();

    const newTask = {
        id: tasks.length + 1, 
        ...taskData
    };

    tasks.push(newTask);
    writeData(tasks);
    return newTask;
};

// Logic for getting tasks
const getAllTasks = () => {
    const tasks = readData();
    return tasks;
}

const getTask = (taskId) => {
    const allTasks = readData();
    
    const task = allTasks.find(item => {
        const match = String(item.id) === String(taskId);
        return match;
    }); 

    return task;
}

const deleteTaskById = (taskId) => {
    const allTasks = readData();
    
    const tasks = allTasks.filter(item => {
        const keepItem = String(item.id) !== String(taskId);
        if (!keepItem) 
        return keepItem;
    }); 

    writeData(tasks);
    return tasks;
}

// Logic for updating tasks
const updateTaskById = (taskId, taskData) => {
    const allTasks = readData();
    let wasFound = false;

    const updatedTasks = allTasks.map(item => {
        if (String(item.id) === String(taskId)) {
            wasFound = true;
            const mergedItem = { ...item, ...taskData };
            return mergedItem;
        }
        return item;
    });

    
    writeData(updatedTasks);
    return updatedTasks;
};

const taskModal = {
    createTask,
    getAllTasks,
    getTask,
    deleteTaskById,
    updateTaskById
};

export default taskModal;
