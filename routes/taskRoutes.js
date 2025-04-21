import express from 'express';
import { 
  getTasks, 
  getTask, 
  createTask, 
  updateTask, 
  deleteTask,
  completeTask
} from '../controller/taskController.js';

const router = express.Router();

// Get all tasks
router.get('/task', getTasks);  // Changed from '/' to '/task'

// Get single task
router.get('/task/:id', getTask); 

// Create task
router.post('/task', createTask); 

// Update task
router.put('/task/:id', updateTask);  

// Delete task
router.delete('/task/:id', deleteTask);  

// Mark task as complete
router.patch('/task/:id/complete', completeTask);  

export default router;