import * as types from './actionTypes';
const EmployeeApi = require('../api/EmployeeApi');

export function createEmployee(employee){
    return {type: types.CREATE_EMPLOYEE, employee};
}

export function updateEmployee(employee){
    return {type: types.UPDATE_EMPLOYEE, employee};
}

export function loadEmployeesSuccess(employees){
    return {type: types.LOAD_EMPLOYEES, employees};
}

export function deleteEmployeesSuccess(id){
    return {type: types.DELETE_EMPLOYEE, id};
}

export function loadEmployees() {
  return dispatch => {
    return EmployeeApi.getAllEmployees()
    .then(employees => {
      dispatch(loadEmployeesSuccess(employees));
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function saveEmployee(employee) {
  return (dispatch) => {
    return EmployeeApi.saveEmployee(employee)
    .then(savedEmployees => {
      employee.id ? dispatch(updateEmployee(savedEmployees)) : dispatch(createEmployee(savedEmployees));
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function deleteEmployee(id) {
  return (dispatch) => {
    return EmployeeApi.deleteEmployee(id)
    .then(savedEmployees => dispatch(deleteEmployeesSuccess(id)))
    .catch(error => {
      throw(error);
    });
  };
}