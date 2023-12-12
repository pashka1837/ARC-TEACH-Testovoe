import { useState } from "react";
import "./App.css";
import NewTask from "./Components/NewTask/NewTask";
import { Button } from "@mui/joy";
import TaskList from "./Components/TaskList/TaskList";

function App() {
  const [isNewTaskOpen, setNewTaskOpen] = useState(false);

  return (
    <main>
      <Button onClick={() => setNewTaskOpen(true)}>Open</Button>
      {isNewTaskOpen && <NewTask setOpen={setNewTaskOpen} />}
      <TaskList />
    </main>
  );
}

export default App;
