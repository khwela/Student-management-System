import React from "react";

const StudentList = ({ students }) => {
  return (
    <div>
      {students.map((student, index) => (
        <div key={index}>
          <h3>{student.fullName}</h3>
          <p>{student.email}</p>
          <p>{student.course}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
