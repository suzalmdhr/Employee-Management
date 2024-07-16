package com.employee.services;

import java.util.List;

import com.employee.entities.Employee;

public interface EmpService {

    public Employee createEmp(Employee emp);


    public Employee getEmployee(Long id);


    public List<Employee> getAllEmployees();

    public Employee updateEmployee(Long id,Employee emp);

    public void deleteEmp(Long id);
}
