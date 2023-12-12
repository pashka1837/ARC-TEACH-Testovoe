import { useState } from "react";
import "./App.css";
import NewTask from "./Components/NewTask/NewTask";
import { Button } from "@mui/joy";

function App() {
  const [isNewTaskOpen, setNewTaskOpen] = useState(false);

  return (
    <main>
      <Button onClick={() => setNewTaskOpen(true)}>Open</Button>
      {isNewTaskOpen && <NewTask setOpen={setNewTaskOpen} />}
    </main>
  );
}

export default App;
