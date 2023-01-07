import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  //const [tasks, setTasks] = useState([]);
  return (
    <>
      <TaskForm/>
      <TaskList/>
    </>
  );
}

export default App;
