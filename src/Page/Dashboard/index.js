import React, { useState } from "react";
import Swal from "sweetalert2";

import { studentsData } from "../../data";

import Header from "./Header";
import Add from "./Add";
import Edit from "./Edit";
import List from "./List";

function Dashboard() {
  const [students, setStudents] = useState(studentsData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return <div> Dashboard</div>;
}

export default Dashboard;