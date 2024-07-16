package com.employee.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.entities.Employee;

public interface EmpDao extends JpaRepository<Employee,Long> {

}
