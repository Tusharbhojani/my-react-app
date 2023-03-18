import logo from "./logo.svg";
import "./App.css";
import StudentForm from "./components/StudentForm";
import "./index.css";
import { useState } from "react";
import StudentTable from "./components/StudentTable";


function App() {
const [students, setStudents] = useState([]);
  return (
    <div>
      <h1>My React school</h1>
      <StudentForm students={students} setStudents={setStudents} />
      <StudentTable students={students}/>
      
    </div>
  );
}

export default App;
