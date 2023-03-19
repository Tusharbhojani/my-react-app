import { createContext, useContext, useReducer } from "react";

export const StudentsContext = createContext(null);
export const StudentsDispatchContext = createContext(null);

const initialTasks = [];

export function StudentsProvider({ children }) {
  const [students, dispatch] = useReducer(studentsReducer, initialTasks);

  function studentsReducer(students, action) {
    switch (action.type) {
      case "add":
        return [...students, action.student];
      case "edit": {
        return students.map((student) => {
          if (
            action.editId.rollNo === student.rollNo &&
            action.editId.std === student.std
          ) {
            return action.student;
          }
          return student;
        });
      }

      case "delete": {
        return students.filter(({ rollNo, std }) => {
          if (action.student.rollNo === rollNo && action.student.std === std) {
            return false;
          }
          return true;
        });
      }
      default:
        return students;
    }
  }

  return (
    <StudentsContext.Provider value={students}>
      <StudentsDispatchContext.Provider value={dispatch}>
        {children}
      </StudentsDispatchContext.Provider>
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  const dispatch = useContext(StudentsDispatchContext);
  const students = useContext(StudentsContext);
  return {dispatch, students};
}
