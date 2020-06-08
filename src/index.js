const employees = [
  {
    first_name: "Ali",
    last_name: "Osama",
    age: 26,
    department_id: 2
  },
  {
    first_name: "Mustafa",
    last_name: "Allan",
    age: 35,
    department_id: 2
  },
  {
    first_name: "Hala",
    last_name: "Ali",
    age: 22,
    department_id: 1
  },
  {
    first_name: "Sara",
    last_name: "Khaled",
    age: 26,
    department_id: 12
  },
  {
    first_name: "Shams",
    last_name: "Naji",
    age: 31,
    department_id: 3
  }
];

const departments = [
  {
    id: 1,
    name: "Education"
  },
  {
    id: 2,
    name: "Public Relations"
  },
  {
    id: 12,
    name: "Sales"
  },
  {
    id: 3,
    name: "Customer Service"
  }
];

const selector = document.getElementById("department-select");
// Step 0:
// Use the departments array to create dynamic options
// for the selector. Each option should have the
// id of the department as value, and the name as text
departments.forEach(dep => {
  selector.insertAdjacentHTML(
    "beforeend",
    `
    <option value="${dep.id}">${dep.name}</option>
    `
  );
});

// Step 1:
// Use map and find and sort, to create an array of strings
// that has entries like the following:
// Ali Osama is below 30 in the Public Relations department
// The strings should be sorted based on the employee's age
// Use console.log to show them

function logRenderedEmployees() {
  let newArr = [];
  let sortedEmployee = employees.sort((a, b) => {
    return a.age - b.age;
  });
  sortedEmployee.map(x => {
    let checkAge = x.age > 30 ? "older 30" : "below 30";
    let checkDep = "";
    for (let dep of departments) {
      if (dep.id === x.department_id) {
        checkDep = dep.name;
      }
    }
    newArr.push(
      `${x.first_name} ${
        x.last_name
      } is ${checkAge} in the ${checkDep} Department`
    );

    return newArr;
  });
  console.log(newArr);
}
logRenderedEmployees();
console.log(employees);
// Step 2: create an array of
// employees who are over the age of 30
// The employee object shoud have a fullname property
// as well that is a combination of first_name + last_name
// Use console.log to show them
function lastEmployee() {
  let newArr = [];
  // console.log(newArr);
  employees.filter(x => {
    let full_name = `${x.first_name} ${x.last_name}`;
    x.full_name = full_name;
    if (x.age > 30) {
      newArr.push(x);
    }
  });

  return newArr;
}
lastEmployee();
console.log(lastEmployee());

// Step 3:
// Use the html select button to show all
// the employees in the selected department and their age
// when the selector change, also change the h2 to look like
// Employees in Customer Service
// instead of Employees in ${department_name}
let employeeUl = document.getElementById("emp-list");
let depHeader = document.getElementsByTagName("h2")[0];
let employeeLists = document.getElementsByTagName("li");

selector.addEventListener("change", () => {
  for (let dep of departments) {
    if (dep.id == selector.value) {
      depHeader.innerHTML = `Employees in ${dep.name}`;
    }
  }
  for (let employeeList of employeeLists) {
    if (employeeList.id == selector.value) {
      employeeList.style.display = "block";
    } else {
      employeeList.style.display = "none";
    }
  }
});

employees.forEach(x => {
  employeeUl.insertAdjacentHTML(
    "beforeend",
    `
   <li id=${x.department_id}>${x.full_name} is ${x.age}</li>
  `
  );
});
