package com.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.entities.Employee;
import com.employee.services.EmpService;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class HomeController {
    @Autowired
    private EmpService empService;

    @PostMapping("/create")
    public ResponseEntity<Employee> createEmp(@RequestBody Employee emp) {

        Employee savedResult = empService.createEmp(emp);

        return ResponseEntity.ok(savedResult);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable("id") Long id) {

        Employee employee = empService.getEmployee(id);
        return ResponseEntity.ok(employee);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Employee>> getAllEmps() {

        List<Employee> allEmployees = empService.getAllEmployees();
        return ResponseEntity.ok(allEmployees);
    }

    @PutMapping("up/{id}")
    public ResponseEntity<Employee> putMethodName(@PathVariable("id") Long id, @RequestBody Employee emp) {
        Employee updatedEmployee = empService.updateEmployee(id, emp);

        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/del/{id}")
    public ResponseEntity<String> deleteMethod(@PathVariable("id") Long id) {
        empService.deleteEmp(id);

        return ResponseEntity.ok("Employee deleted sucessfully");
    }

}
