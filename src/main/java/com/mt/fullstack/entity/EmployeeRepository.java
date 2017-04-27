package com.mt.fullstack.entity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Employee findBySidEquals(String sid);

    List<Employee> findByName(String name);

    List<Employee> findByRole(String role);
}
