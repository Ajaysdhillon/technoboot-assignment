import React, { useState } from "react";
import Swal from "sweetalert2";

import { studentsData } from "../../data";

import Header from "./Header";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";

function Dashboard() {
  const [students, setStudents] = useState(studentsData);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {};

  const handleDelete = () => {};
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            students={students}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          studnets={students}
          setStudnets={setStudents}
          setIsAdding={setIsAdding}
        />
      )}

      {isEditing && (
        <Edit
          students={students}
          selectedStudent={selectedStudent}
          setStudents={setStudents}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
