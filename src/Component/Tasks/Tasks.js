import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import taskContext from '../../context/Tasks/TaskContext';

export default function Tasks(props) {
    const { id } = useParams();
    const context = useContext(taskContext);
    const { getTasksByLogId, tasks, deleteTaskById, editTaskById, addTaskById } = context;

    const [newTask, setNewTask] = useState({ description: '', status: 'Pending' });
    const [isAddingTask, setIsAddingTask] = useState(false); // Flag to toggle the task form
    const [editingTaskId, setEditingTaskId] = useState(null); // Track the task being edited
    const [editedTask, setEditedTask] = useState({ description: '', status: '' });

    const iconColor = {
        color: props.mode === '#40916c' ? '#40916c' : 'white',
    };

    useEffect(() => {
        getTasksByLogId(id);
        // eslint-disable-next-line
    }, [id]);

    const handleAddTaskChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.description) {
            let obj = { description: newTask.description, status: newTask.status, logId: id }
            addTaskById(obj); // Make sure the addTask function exists in context
            setNewTask({ description: '', status: 'Pending' }); // Reset form
            setIsAddingTask(false); // Close the form after submission
            console.log(obj)
        }
    };

    const handleCancelAddTask = () => {
        setNewTask({ description: '', status: 'Pending' });
        setIsAddingTask(false); // Close the form without submitting
    };

    const handleAddNewRow = () => {
        setIsAddingTask(true); // Open the form to add a new task
    };

    // Handle editing task row
    const handleEditTask = (taskId, taskDescription, taskStatus) => {
        setEditingTaskId(taskId); // Set the task ID for editing
        setEditedTask({ description: taskDescription, status: taskStatus }); // Pre-fill the current values
    };

    // Handle changes in the edited task
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Save the changes made during editing
    const handleSaveEdit = () => {
        if (editedTask.description) {
            editTaskById(editingTaskId, editedTask); // Make sure this function exists in context
            setEditingTaskId(null); // Close the editing mode
        }
    };

    // Cancel the editing
    const handleCancelEdit = () => {
        setEditingTaskId(null); // Close the editing mode
    };

    return (
        <div className='container my-3'>
            {/* Table */}
            <div className='row my-3'>
                <table className='table table-bordered table-hover text-white'>
                    <thead className={`table-${props.mode === '#40916c' ? 'green' : 'gray'}`}>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`table-${props.mode === '#40916c' ? '' : 'body'}`}>
                        {tasks && tasks.length > 0 ? (
                            tasks.map((element, index) => (
                                <tr key={element._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>
                                        {editingTaskId === element._id ? (
                                            <input type='text' name='description' value={editedTask.description}
                                                onChange={handleEditChange} className='form-control' />
                                        ) : (
                                            element.description
                                        )}
                                    </td>
                                    <td>
                                        {editingTaskId === element._id ? (
                                            <select name='status' value={editedTask.status}
                                                onChange={handleEditChange} className='form-control'>
                                                <option value='Pending'>Pending</option>
                                                <option value='In Progress'>In Progress</option>
                                                <option value='Done'>Done</option>
                                            </select>
                                        ) : (
                                            element.status
                                        )}
                                    </td>
                                    <td>
                                        {editingTaskId === element._id ? (
                                            <>
                                                <button className='btn btn-success fs-5 mx-2'
                                                    onClick={handleSaveEdit}>
                                                    Save
                                                </button>
                                                <button className='btn btn-danger fs-5 mx-2'
                                                    onClick={handleCancelEdit} >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <i className='bi bi-pen-fill fs-5'
                                                    style={iconColor}
                                                    onClick={() => handleEditTask(element._id, element.description, element.status)}>
                                                </i>
                                                <i className='bi bi-trash3-fill fs-5 mx-2'
                                                    style={iconColor}
                                                    onClick={() => deleteTaskById(element._id, id)}
                                                ></i>

                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan='4'>No Tasks Available</td>
                            </tr>
                        )}

                        {/* Add Task Row */}
                        {isAddingTask && (
                            <tr>
                                <td>{tasks.length + 1}</td>
                                <td>
                                    <input type='text' name='description' value={newTask.description}
                                        onChange={handleAddTaskChange} placeholder='Enter Task Description' className='form-control'
                                    />
                                </td>
                                <td>
                                    <select name='status' value={newTask.status}
                                        onChange={handleAddTaskChange} className='form-control'>
                                        <option value='Pending'>Pending</option>
                                        <option value='In Progress'>In Progress</option>
                                        <option value='Done'>Done</option>
                                    </select>
                                </td>
                                <td>
                                    <button className='btn btn-success' onClick={handleAddTask}>
                                        Save
                                    </button>
                                    <button className='btn btn-danger ms-2' onClick={handleCancelAddTask}>
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Button to Add New Task */}
            {!isAddingTask && (
                <button
                    className='btn btn-color mb-3'
                    onClick={handleAddNewRow}>
                    Add Task
                </button>
            )}
        </div>
    );
}
