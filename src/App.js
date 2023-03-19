import React from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import "./index.css";
import { useReducer, useState } from "react";
import StudentTable from "./components/StudentTable";
import {
  StudentsProvider,
} from "./components/StudentsContext";

function App() {
  const [editId, setEditId] = useState(null);
  // studebt form

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [std, setStd] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <StudentsProvider>
      <div>
        <h1>My React school</h1>
        <StudentForm
          name={name}
          std={std}
          rollNo={rollNo}
          mobile={mobile}
          setName={setName}
          setRollNo={setRollNo}
          setStd={setStd}
          setMobile={setMobile}
          editId={editId}
          setEditId={setEditId}
        />
        <StudentTable
          setName={setName}
          setRollNo={setRollNo}
          setStd={setStd}
          setMobile={setMobile}
          setEditId={setEditId}
        />
      </div>
    </StudentsProvider>
  );
}

export default App;
