import 'whatwg-fetch';

const getApiUrl = uri => process.env.API_HOST + uri;

class EmployeeApi {
    static getAllEmployees() {
        return fetch(getApiUrl('/api/employees'), {method: 'get'}).then(response => response.json());
    }

    static saveEmployee(employee) {
        return fetch(getApiUrl('/api/saveEmployee'),
            {
                method: 'post',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(employee)
            }).then(response => response.json());
    }

    static deleteEmployee(id) {
        return fetch(getApiUrl('/api/deleteEmployee'),
            {
                method: 'post',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify(id)
            });
    }
}

module.exports = EmployeeApi;
