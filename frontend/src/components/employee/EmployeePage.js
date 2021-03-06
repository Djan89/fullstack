import React, {PropTypes}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import EmployeeList from './EmployeeList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class EmployeePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddEmployeePage = this.redirectToAddEmployeePage.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    redirectToAddEmployeePage() {
        browserHistory.push('/employee');
    }

    deleteEmployee(id) {
        this.props.actions.deleteEmployee(id);
        toastr.success("Employee Deleted Successfully");
    }

    render() {
        return (
            <div>
                <h1 className="well well-sm">Employees</h1>
                <input type="submit" className="btn btn-primary" value="Add Employee"
                    onClick={this.redirectToAddEmployeePage} />
                <EmployeeList employees={this.props.employees} onDelete={this.deleteEmployee} />
            </div>
        );
    }
}

EmployeePage.propTypes = {
    employees: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return { employees: state.employees };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);
