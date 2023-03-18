import logo from "./logo.svg";
import "./App.css";
import StudentForm from "./components/StudentForm";
import "./index.css";
import { useState } from "react";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);

  // studebt form

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [std, setStd] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div>
      <h1>My React school</h1>
      <StudentForm
        students={students}
        editId={editId}
        setEditId={setEditId}
        setStudents={setStudents}
        name={name}
        rollNo={rollNo}
        std={std}
        mobile={mobile}
        setName={setName}
        setRollNo={setRollNo}
        setStd={setStd}
        setMobile={setMobile}
      />
      <StudentTable
        students={students}
        editId={editId}
        setEditId={setEditId}
        setName={setName}
        setRollNo={setRollNo}
        setStd={setStd}
        setMobile={setMobile}
        setStudents={setStudents}
      />
    </div>
  );
}

export default App;
