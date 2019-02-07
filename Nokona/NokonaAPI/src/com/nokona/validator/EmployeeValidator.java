package com.nokona.validator;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.nokona.exceptions.DatabaseException;
import com.nokona.exceptions.DuplicateDataException;
import com.nokona.model.Employee;

// No duplicate empID
// No duplicate barCodeID
public class EmployeeValidator {
	private static PreparedStatement updatePS;

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

		String errors = "";
		if (updatePS == null) {
			try {
				updatePS = conn.prepareStatement(
						"Select Employee.key from Employee where BarCodeID = ? or EmpID = ?");
			} catch (SQLException e) {
				errors += e.getMessage() + "\n";
			}	
		} else {
				try {
					updatePS.setInt(1, employeeIn.getBarCodeID());
					updatePS.setString(2, employeeIn.getEmpId());
					ResultSet rs = updatePS.executeQuery();
					if (rs.next()) {
						errors += "Add: Bar Code ID or Emp ID already in use\n";
					}
					rs.close();
				} catch (SQLException e) {
					errors += e.getMessage() + "\n";
				}
				
			}
		return errors;
	}

	public static String validateUpdate(Employee employeeIn, Connection conn) {
		String errors = "";
		if (updatePS == null) {
			try {
				updatePS = conn.prepareStatement(
						"Select Employee.key from Employee where Employee.key <> ? and (BarCodeID = ? or EmpID = ?)");
			} catch (SQLException e) {
				errors += e.getMessage() + "\n";
			}	
		} else {
				try {
					updatePS.setLong(1, employeeIn.getKey());
					updatePS.setInt(2, employeeIn.getBarCodeID());
					updatePS.setString(3, employeeIn.getEmpId());
					ResultSet rs = updatePS.executeQuery();
					if (rs.next()) {
						errors += "Update: Bar Code ID or Emp ID already in use\n";
					}
					rs.close();
				} catch (SQLException e) {
					errors += e.getMessage() + "\n";
				}
				
			}
		return errors;
			
		}


}
