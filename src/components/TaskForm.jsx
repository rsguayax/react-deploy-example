import { useContext, useState } from "react";
import {TaskContext} from  '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        placeholder="escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        placeholder="escribe descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
