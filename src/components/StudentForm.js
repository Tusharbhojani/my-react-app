import React, { useState } from "react";

const StudentForm = ({students, setStudents}) => {
  console.log({students, setStudents});
  
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState('');
  const [std, setStd] = useState("");
 
  const [mobile, setMobile] = useState("");

  function handleSubmit(e){
    e.preventDefault(); 
    setStudents([...students, {name,rollNo,std,mobile}])
  }

  return (
    <>
      <form className="p-4">
        <h1 className="text-lg">Add Student</h1>

        <div className="flex flex-col">
          <div>
            <label htmlFor="">Name:</label> <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border"
              type="text"
            />
          </div>

          <div>
            <label htmlFor="">Std:</label> <br />
            <input
              value={std}
              onChange={(e) => setStd(e.target.value)}
              className="border"
              type="number"
            />
          </div>

          <div>
            <label htmlFor="">Roll No:</label> <br />
            <input
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="border"
              type="text"
            />
          </div>

          <div>
            <label htmlFor="">Mobile:</label> <br />
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border"
              type="number"
            />
          </div>
        </div>
        
        <button
          className="border bg-blue-800 text-white p-2 rounded-"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default StudentForm;
