import "./App.css";
import StudentForm from "./components/StudentForm";
import "./index.css";
import { useReducer, useState } from "react";
import StudentTable from "./components/StudentTable";
const initialTasks = [];

function App() {
  const [students, dispatch] = useReducer(studentsReducer, initialTasks);

  const [editId, setEditId] = useState(null);

  function studentsReducer(students, action) {
    switch (action.type) {
      case "add":
        return [...students, action.student];
      case "edit": {
       
        return students.map((student) => {
          if (action.editId.rollNo === student.rollNo && action.editId.std === student.std) {
            return action.student;
          }
          return student;
        });
      }

      case 'delete':{
        return students.filter(({rollNo,std}) => {
          if (action.student.rollNo === rollNo && action.student.std === std) {
            return false
          }
          return true;
        });
      }
      default:
        return students;
    }
  }

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
        name={name}
        dispatch={dispatch}
        rollNo={rollNo}
        std={std}
        mobile={mobile}
        setName={setName}
        setRollNo={setRollNo}
        setStd={setStd}
        setMobile={setMobile}
      />
      <StudentTable
       dispatch={dispatch}
        students={students}
        editId={editId}
        setEditId={setEditId}
        setName={setName}
        setRollNo={setRollNo}
        setStd={setStd}
        setMobile={setMobile}
      />
    </div>
  );
}

export default App;
