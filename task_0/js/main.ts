interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 25,
  location: "Cairo"
};

const student2: Student = {
  firstName: "Sara",
  lastName: "Ali",
  age: 23,
  location: "Alexandria"
};

const studentsList: Student[] = [student1, student2];

// إنشاء الجدول
const table = document.createElement("table");
table.border = "1";
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);