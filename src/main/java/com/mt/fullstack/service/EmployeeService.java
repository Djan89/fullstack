package com.mt.fullstack.service;

import com.mt.fullstack.entity.Employee;
import com.mt.fullstack.entity.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeBySid(String sid) {
        return employeeRepository.findBySidEquals(sid);
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.saveAndFlush(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.delete(id);
    }
}
