import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const employees = [
  {
    id: "1",
    sid: "I649531",
    name: "Mamadjan 1",
    role: "Developer"
  },
  {
    id: "2",
    sid: "I649532",
    name: "Mamadjan 2",
    role: "Developer"
  },
  {
    id: "3",
    sid: "I649533",
    name: "Mamadjan 3",
    role: "Developer"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (employee) => {
  return replaceAll(employee.sid, ' ', '-');
};

class EmployeeApi {
  static getAllEmployees() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], employees));
      }, delay);
    });
  }

  static saveEmployee(employee) {
    employee = Object.assign({}, employee); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minEmployeeNameLength = 3;
        if (employee.name.length < minEmployeeNameLength) {
          reject(`Name must be at least ${minEmployeeNameLength} characters.`);
        }

        if (employee.id) {
          const existingEmployeeIndex = employees.findIndex(emp => emp.id == employee.id);
          employees.splice(existingEmployeeIndex, 1, employee);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new employees in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          employee.id = generateId(employee);
          employees.push(employee);
        }

        resolve(employee);
      }, delay);
    });
  }

  static deleteEmployee(employeeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfEmployeeToDelete = employees.findIndex(emp => emp.id == employeeId);
        employees.splice(indexOfEmployeeToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

module.exports = EmployeeApi;
