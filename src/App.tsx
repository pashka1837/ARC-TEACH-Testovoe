import { useState } from "react";
import "./App.css";
import NewTask from "./Components/NewTask/NewTask";
import { Button } from "@mui/joy";
import TaskList from "./Components/TaskList/TaskList";
import TaskBar from "./Components/TaskBar/TaskBar";

function App() {
  const [isNewTaskOpen, setNewTaskOpen] = useState(false);

  return (
    <main>
      <TaskBar />
      <Button onClick={() => setNewTaskOpen(true)}>Add Task</Button>
      {isNewTaskOpen && <NewTask setOpen={setNewTaskOpen} />}
      <TaskList />
    </main>
  );
}

export default App;
