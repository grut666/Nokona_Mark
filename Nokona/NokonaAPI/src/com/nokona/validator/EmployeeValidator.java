package com.nokona.validator;

import java.sql.Connection;

import com.nokona.model.Employee;
// No duplicate empID
// No duplicate barCodeID
public class EmployeeValidator {

	public static Employee format(Employee employee) {
		employee.setFirstName(formatFirstName(employee.getFirstName()));
		employee.setLastName(formatLastName(employee.getLastName()));
		employee.setEmpId(formatEmpId(employee.getEmpId()));
		return employee;
	}
	public static String formatFirstName(String firstName) {
		return firstName.trim().toUpperCase();
	}
	public static String formatLastName(String lastName) {
		return lastName.trim().toUpperCase();
	}
	public static String formatEmpId(String empId) {
		return empId.trim().toUpperCase();
	}
	public static String validateAdd(Employee employeeIn, Connection conn) {

		return "";
	}
	public static String validateUpdate(Employee employeeIn, Connection conn) {

		return "";
	}
}
