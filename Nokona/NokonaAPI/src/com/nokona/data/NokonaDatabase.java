package com.nokona.data;

import java.util.List;

import com.nokona.exceptions.DataNotFoundException;
import com.nokona.exceptions.DuplicateDataException;
import com.nokona.model.Employee;

public interface NokonaDatabase {
	List<Employee> getEmployees();
	Employee getEmployee(int key) throws DataNotFoundException;
	Employee getEmployee(String empID) throws DataNotFoundException;
	void putEmployee(Employee employee) throws DuplicateDataException;
	void deleteEmployee(int key) throws DataNotFoundException;
	void deleteEmployee(String empID) throws DataNotFoundException;
	
}
