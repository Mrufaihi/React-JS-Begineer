import { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  // this for Adding a Task to Tasks array, Store value of input the add.
  const [task, setTask] = useState('');

  // ADD✅
  function handleAddTask() {
    // if input value is (not empty) after trim(whitepace) THEN ADD
    if (task.trim().length > 0) {
      setTasks((t) => [...t, task]);
      setTask('');
    }
  }

  //DELETE✅
  function handleDeleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => index !== i));
  }

  //CHANGE✅
  function handleTaskChange(e) {
    setTask(e.target.value);
  }

  //UP⌚
  // prettier-ignore
  function handleUpClick(index) {
    // only gonna happen if element is not already at top
    if (index > 0) {
      const updatedArray = [...tasks]; // new array to copy prev array

      // Destructering: [value[index (1)], value[index - 1 (0)]] = [position[index-1 (0)], position[index (1)]]
      [updatedArray[index], updatedArray[index - 1]] = [updatedArray[index - 1], updatedArray[index]];
      setTasks(updatedArray);
    }
  }

  //DOWN🕗
  // prettier-ignore
  function handleDownClick(index) {
    //only gonna happen when index is not last
    if (index < tasks.length - 1) {
      const updatedArray = [...tasks]; // new array to copy prev array

      // Destructering: [value[index (0)], value[index + 1 (1)]] = [position[index + 1 (1)], position[index (0)]]
      [updatedArray[index], updatedArray[index + 1]] = [updatedArray[index + 1], updatedArray[index]];
      setTasks(updatedArray);
    }
  }

  return (
    <div className="to-do-list">
      <h2 className="heading">ToDoList</h2>

      {/* input */}
      <span>
        <input
          onChange={handleTaskChange}
          value={task}
          className="input"
          type="text"
          placeholder="Add Task..."
        />
        <button className="btn btn-add" onClick={handleAddTask}>
          Add
        </button>
      </span>

      {/* List */}

      <ol className="list">
        {tasks.map((task, index) => (
          <li key={index} className="item">
            <span className="item__text">{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="btn btn-delete"
            >
              delete
            </button>
            <button
              onClick={() => handleDownClick(index)}
              className="btn  btn-down"
            >
              👇
            </button>
            <button
              onClick={() => handleUpClick(index)}
              className="btn  btn-up"
            >
              👆
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
