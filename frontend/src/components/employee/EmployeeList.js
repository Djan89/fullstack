/* eslint-disable react/jsx-no-bind*/
import React, {PropTypes}  from 'react';
import {Link} from 'react-router';

const EmployeeList = ({employees, onDelete}) => {
  return (
    <table className="table table-condensed">
      <thead>
        <tr>
          <th>SID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => {
          return (
            <tr key={employee.id}>
            <td><Link to={'/employee/' + employee.id}>{employee.sid}</Link></td>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td><button className="btn btn-danger btn-sm" onClick={() => onDelete(employee.id)}>Delete</button></td>
          </tr>
        );})}
      </tbody>
    </table>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default EmployeeList;
