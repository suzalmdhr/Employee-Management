package com.employee.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.dao.EmpDao;
import com.employee.entities.Employee;

@Service
public class EmpServiceImpl implements EmpService {
    @Autowired
    private EmpDao empDao;

    @Override
    public Employee createEmp(Employee emp) {
        
        Employee result = empDao.save(emp);
        System.out.println(result);
        return result;
    }

    @Override
    public Employee getEmployee(Long id) {
        Employee employee = empDao.findById(id).get();
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
       List<Employee> allEmps = empDao.findAll();
        return allEmps;
    }

    @Override
    public Employee updateEmployee(Long id,Employee emp) {
        Employee oldEmp = empDao.findById(id).get();
        oldEmp.setFirstName(emp.getFirstName());
        oldEmp.setLastName(emp.getLastName());
        oldEmp.setEmail(emp.getEmail());
        System.out.println("hello world");
        System.out.println(oldEmp);
        empDao.save(oldEmp);
        
        return oldEmp;
    }

    @Override
    public void deleteEmp(Long id) {
       empDao.deleteById(id);
        
    }


    


    
    


    

}
