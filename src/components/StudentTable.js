import React from "react";

const StudentTable = ({students}) =>{

    return (<>
    <h1>table will comes here...</h1>
    <div className="p-4">
        <table className="border">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Std</th>
                    <th>Roll No</th>
                    <th>Mobile No</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student,i)=>{
                    return(
                        <tr>
                            <td>{i+1}</td>
                            <td>{student.name}</td>
                            <td>{student.std}</td>
                            <td>{student.rollNo}</td>
                            <td>{student.mobile}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    </>)
}

export default StudentTable;