import React, { useState } from "react";

const StudentForm = ({
  students,
  setStudents,
  editId,
  setEditId,
  name,
  rollNo,
  std,
  mobile,
  setName,
  setRollNo,
  setStd,
  setMobile,
}) => {
  console.log({
    students,
    setStudents,
    editId,
    setEditId,
    name,
    rollNo,
    std,
    mobile,
    setName,
    setRollNo,
    setStd,
    setMobile,
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (editId) {
      const newStudentList = students.map((student) => {
        if (editId.rollNo === student.rollNo && editId.std === student.std) {
          return { name, rollNo, std, mobile };
        }
        return student;
      });

      setStudents([...newStudentList]);
      setEditId(null);
    } else {
      setStudents([...students, { name, rollNo, std, mobile }]);
    }
    setName("");
    setRollNo("");
    setStd("");
    setMobile("");
  }

  return (
    <>
      <form className="p-4">
        <h1 className="text-lg">{editId ? `Edit` : `Add`} Student</h1>

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
