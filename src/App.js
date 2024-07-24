import React from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import "./index.css";
import { useReducer, useState } from "react";
import StudentTable from "./components/StudentTable";
import {
  StudentsProvider,
} from "./components/StudentsContext";
import { SignupForm } from "./components/formik/FormikForm";
import { FormikHookForm } from "./components/formik/FormikHookForm";
import { LearnContext} from "./components/hook/LearnContext";
import Component from "./components/hook/custom/Component";


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
        {/* <LearnContext /> */}
        <Component />
        {/* <h1>My React school</h1> */}
        {/* <SignupForm /> */}
        {/* <FormikHookForm/> */}
        {/* <StudentForm
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
        /> */}
      </div>
    </StudentsProvider>
  );
}

export default App;
