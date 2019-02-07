package com.nokona.data;

import java.util.List;

import com.nokona.exceptions.DatabaseException;
import com.nokona.model.Employee;
import com.nokona.model.Operation;

public interface NokonaDatabase {
	List<Employee> getEmployees() throws DatabaseException;
	Employee getEmployee(long key) throws DatabaseException;
	Employee getEmployee(String empID) throws DatabaseException;
	Employee updateEmployee(Employee employee) throws DatabaseException;
	Employee addEmployee(Employee employee) throws DatabaseException;
	void deleteEmployee(long key) throws DatabaseException;
	void deleteEmployee(String empID) throws DatabaseException;
	Operation getOperation(long key) throws DatabaseException;
	Operation getOperation(String operationIn) throws DatabaseException;
	List<Operation> getOperations();
	
}
