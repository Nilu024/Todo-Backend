import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: [{ type: String, enum: ['Work', 'Personal', 'Health', 'Fitness', 'Education', 'Shopping'], default: ['Personal'] }],
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date },
    reminderTime: { type: Date },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
