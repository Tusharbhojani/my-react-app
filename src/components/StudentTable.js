import React from "react";

const StudentTable = ({
  students,
  setEditId,
  setName,
  setRollNo,
  setStd,
  setMobile,
}) => {
  return (
    <>
      <h1>Student Table</h1>
      <div className="p-4">
        <table className="border">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Std</th>
              <th>Roll No</th>
              <th>Mobile No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.std}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.mobile}</td>
                  <td>
                    <button
                      onClick={() => {
                        setEditId(student);
                        setName(student.name);
                        setRollNo(student.rollNo);
                        setStd(student.std);
                        setMobile(student.mobile);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentTable;
