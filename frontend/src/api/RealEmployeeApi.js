import 'whatwg-fetch';

class EmployeeApi {
    static getAllEmployees() {
        return fetch('/api/employees', {method: 'get'}).then(response => response.json());
    }

    static saveEmployee(employee) {
        return fetch('/api/saveEmployee',
            {
                method: 'post',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(employee)
            }).then(response => response.json());
    }

    static deleteEmployee(id) {
        return fetch('/api/deleteEmployee',
            {
                method: 'post',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(id)
            });
    }
}

module.exports = EmployeeApi;
