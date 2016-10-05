package com.mt.fullstack.entity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Employee findBySidEquals(String firstName);

    List<Employee> findByName(String firstName);

    List<Employee> findByRole(String lastName);
}
