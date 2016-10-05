package com.mt.fullstack.controller;

import com.mt.fullstack.entity.Employee;
import com.mt.fullstack.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.Objects.nonNull;

@RestController
@RequestMapping("api")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @RequestMapping(path = "employees", method = RequestMethod.GET)
    public List<Employee> employee() {
        return employeeService.getEmployees();
    }

    @RequestMapping(path = "employeeBySid", method = RequestMethod.GET)
    public Employee employeeBySid(String sid) {
        return employeeService.getEmployeeBySid(sid);
    }

    @RequestMapping(path = "saveEmployee", method = RequestMethod.POST, consumes = "application/json")
    public Employee saveEmployee(@RequestBody Employee employee) {
        if(nonNull(employee)) {
            return employeeService.saveEmployee(employee);
        }

        return null;
    }

    @RequestMapping(path = "deleteEmployee", method = RequestMethod.POST, consumes = "application/json")
    public void deleteEmployee(@RequestBody Long id) {
        if(nonNull(id)){
            employeeService.deleteEmployee(id);
        }
    }
}
