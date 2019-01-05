package com.nokona.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.enterprise.inject.Default;
import javax.inject.Inject;

import com.nokona.data.NokonaDatabase;
import com.nokona.exceptions.DataNotFoundException;
import com.nokona.exceptions.DatabaseException;
import com.nokona.exceptions.DuplicateDataException;
import com.nokona.model.Employee;

@Default
public class NokonaDAO implements NokonaDatabase {
	private static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	private static String DB_URL = "jdbc:mysql://localhost:3306/Nokona";
	private static String USER_NAME = "root";
	private static String PASSWORD = "xyz123";
	private Connection conn;
	PreparedStatement psGetEmployeeByKey;
	PreparedStatement psGetEmployeeByEmpId;
	PreparedStatement psGetEmployees;



	public NokonaDAO() throws DatabaseException {
		connectToDB();
	}

	private void connectToDB() throws DatabaseException {
		if (conn == null) {
			try {
				Class.forName(JDBC_DRIVER);
				conn = DriverManager.getConnection(DB_URL, USER_NAME, PASSWORD);
			} catch (ClassNotFoundException e) {
				System.err.println("Class not found: " + e.getMessage());

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DatabaseException(e.getMessage(), e);
			}
//			try {
//				conn.close();
//			} catch (SQLException e) {
//				System.err.println(e.getMessage());
//				throw new DatabaseException(e.getMessage(), e);
//			}
		}
	}

	@Override
	public List<Employee> getEmployees() {
		List<Employee> employees = new ArrayList<Employee>();
		if (psGetEmployees == null) {
			try {
				psGetEmployees = conn.prepareStatement("Select * from Employee order by EmpID");
				
			} catch (SQLException e) {
				System.err.println(e.getMessage());
			}
		}
		try {
			ResultSet rs = psGetEmployees.executeQuery();
			while (rs.next()) {
				employees.add(convertEmployeeFromResultSet(rs));
			} 
		} catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		return employees;
	}

	@Override
	public Employee getEmployee(int key) throws DataNotFoundException {
		Employee emp = null;
		if (psGetEmployeeByKey == null) {
			try {
				psGetEmployeeByKey = conn.prepareStatement("Select * from Employee where Employee.key = ?");
				
			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DataNotFoundException(e.getMessage());
			}
		}
		try {
			psGetEmployeeByKey.setInt(1,  key);
			ResultSet rs = psGetEmployeeByKey.executeQuery();
			if (rs.next()) {
				emp = convertEmployeeFromResultSet(rs);
			} else {
				throw new DataNotFoundException("Employee key " + key + " is not in DB");
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DataNotFoundException(e.getMessage(), e);
		}
		return emp;

	}

	private Employee convertEmployeeFromResultSet(ResultSet rs) throws SQLException {
		int key = rs.getInt("Key");
		String lName = rs.getString("LastName");
		String fName = rs.getString("FirstName");
		int  barCodeId = rs.getInt("BarCodeID");
		int laborCode =  rs.getInt("LaborCode");
		String empId =  rs.getString("EmpID");
		boolean active = (rs.getInt("Active") > 0) ? true : false;
		return new Employee(key, lName, fName, barCodeId, laborCode, empId, active);
	}

	@Override
	public Employee getEmployee(String empID) throws DataNotFoundException {
		Employee emp = null;
		if (psGetEmployeeByEmpId == null) {
			try {
				psGetEmployeeByEmpId = conn.prepareStatement("Select * from Employee where Employee.EmpID = ?");
				
			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DataNotFoundException(e.getMessage());
			}
		}
		try {
			psGetEmployeeByEmpId.setString(1,  empID);
			ResultSet rs = psGetEmployeeByEmpId.executeQuery();
			if (rs.next()) {
				emp = convertEmployeeFromResultSet(rs);
			} else {
				throw new DataNotFoundException("Employee EmpID " + empID + " is not in DB");
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DataNotFoundException(e.getMessage(), e);
		}
		return emp;
	}

	@Override
	public void putEmployee(Employee employee) throws DuplicateDataException {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteEmployee(int key) throws DataNotFoundException {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteEmployee(String empID) throws DataNotFoundException {
		// TODO Auto-generated method stub

	}

}
