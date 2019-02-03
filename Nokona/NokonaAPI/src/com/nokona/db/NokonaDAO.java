package com.nokona.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.enterprise.inject.Default;

import com.nokona.data.NokonaDatabase;
import com.nokona.exceptions.DataNotFoundException;
import com.nokona.exceptions.DatabaseException;
import com.nokona.exceptions.DuplicateDataException;
import com.nokona.exceptions.NullInputDataException;
import com.nokona.formatter.EmployeeFormatter;
import com.nokona.model.Employee;
import com.nokona.model.Operation;
import com.nokona.validator.EmployeeValidator;

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
	PreparedStatement psPutEmployee;

	PreparedStatement psGetOperationByKey;
	PreparedStatement psGetOperationByOpCode;
	PreparedStatement psGetOperations;

	PreparedStatement psDelEmployeeByKey;
	PreparedStatement psDelEmployeeByEmpId;

	public NokonaDAO() throws DatabaseException {
		connectToDB();
	}

	private void connectToDB() throws DatabaseException {
		if (conn == null) {
			try {
				Class.forName(JDBC_DRIVER);
				conn = DriverManager.getConnection(DB_URL, USER_NAME, PASSWORD);
				conn.setAutoCommit(true);
			} catch (ClassNotFoundException e) {
				System.err.println("Class not found: " + e.getMessage());

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DatabaseException(e.getMessage(), e);
			}
			// try {
			// conn.close();
			// } catch (SQLException e) {
			// System.err.println(e.getMessage());
			// throw new DatabaseException(e.getMessage(), e);
			// }
		}
	}

	@Override
	public List<Employee> getEmployees() throws DatabaseException {
		List<Employee> employees = new ArrayList<Employee>();
		if (psGetEmployees == null) {
			try {
				psGetEmployees = conn.prepareStatement("Select * from Employee order by EmpID");

			} catch (SQLException e) {
				throw new DatabaseException(e.getMessage(), e);
			}
		}
		try {
			ResultSet rs = psGetEmployees.executeQuery();
			while (rs.next()) {
				employees.add(convertEmployeeFromResultSet(rs));
			}
		} catch (SQLException e) {
			throw new DatabaseException(e.getMessage(), e);
		}
		return employees;
	}

	@Override
	public Employee getEmployee(long key) throws DatabaseException {
		Employee emp = null;
		if (psGetEmployeeByKey == null) {
			try {
				psGetEmployeeByKey = conn.prepareStatement("Select * from Employee where Employee.key = ?");

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DatabaseException(e.getMessage(), e);
			}
		}
		try {
			psGetEmployeeByKey.setLong(1, key);
			ResultSet rs = psGetEmployeeByKey.executeQuery();
			if (rs.next()) {
				emp = convertEmployeeFromResultSet(rs);
			} else {
				throw new DataNotFoundException("Employee key " + key + " is not in DB");
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DatabaseException(e.getMessage(), e);
		}
		return EmployeeFormatter.format(emp);

	}

	@Override
	public Employee getEmployee(String empID) throws DatabaseException {
		if (empID == null) {
			throw new NullInputDataException("empID cannot be null");
		}
		Employee emp = null;
		if (psGetEmployeeByEmpId == null) {
			try {
				psGetEmployeeByEmpId = conn.prepareStatement("Select * from Employee where Employee.EmpID = ?");

			} catch (SQLException e) {
				throw new DatabaseException(e.getMessage(), e);
			}
		}
		try {
			psGetEmployeeByEmpId.setString(1, empID);
			ResultSet rs = psGetEmployeeByEmpId.executeQuery();
			if (rs.next()) {
				emp = convertEmployeeFromResultSet(rs);
			} else {
				throw new DataNotFoundException("Employee EmpID " + empID + " is not in DB");
			}
		} catch (SQLException e) {

			throw new DatabaseException(e.getMessage(), e);
		}
		return emp;
	}

	private Employee convertEmployeeFromResultSet(ResultSet rs) throws SQLException {
		int key = rs.getInt("Key");
		String lName = rs.getString("LastName");
		String fName = rs.getString("FirstName");
		int barCodeId = rs.getInt("BarCodeID");
		int laborCode = rs.getInt("LaborCode");
		String empId = rs.getString("EmpID");
		boolean active = (rs.getInt("Active") > 0) ? true : false;
		return EmployeeFormatter.format(new Employee(key, lName, fName, barCodeId, laborCode, empId, active));
	}

	@Override
	public Employee putEmployee(Employee employeeIn) throws DatabaseException {

		if (psPutEmployee == null) {
			try {
				psPutEmployee = conn.prepareStatement(
						"Insert into Employee (LastName, FirstName, BarCodeID, LaborCode, EmpID, Active) values (?,?,?,?,?,?)",
						PreparedStatement.RETURN_GENERATED_KEYS);

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DatabaseException(e.getMessage());
			}
		}
		Employee formattedEmployee = EmployeeFormatter.format(employeeIn);
		String validateMessage = EmployeeValidator.validateUpdate(employeeIn, conn);
		if (!"".equals(validateMessage)) {
			throw new DatabaseException(validateMessage);
		}
		try {
			psPutEmployee.setString(1, formattedEmployee.getLastName());
			psPutEmployee.setString(2, formattedEmployee.getFirstName());
			psPutEmployee.setInt(3, formattedEmployee.getBarCodeID());
			psPutEmployee.setInt(4, formattedEmployee.getLaborCode());
			psPutEmployee.setString(5, formattedEmployee.getEmpId());
			psPutEmployee.setInt(6, formattedEmployee.isActive() ? 1 : 0);
			int rowCount = psPutEmployee.executeUpdate();

			if (rowCount != 1) {
				throw new DatabaseException("Error.  Inserted " + rowCount + " rows");
			}
			Employee newEmp = new Employee();
			try (ResultSet generatedKeys = psPutEmployee.getGeneratedKeys()) {
				if (generatedKeys.next()) {
					newEmp.setKey(generatedKeys.getLong(1));
					return getEmployee(generatedKeys.getLong(1));
				} else {
					throw new SQLException("Creating user failed, no ID obtained.");
				}
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DuplicateDataException(e.getMessage(), e);
		}
	}

	@Override
	public void deleteEmployee(long key) throws DatabaseException {
		if (psDelEmployeeByKey == null) {
			try {
				psDelEmployeeByKey = conn.prepareStatement("Delete From Employee where BarCodeID = ?");

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DatabaseException(e.getMessage());
			}
		}
		try {
			psDelEmployeeByKey.setLong(1, key);
			int rowCount = psDelEmployeeByKey.executeUpdate();

			if (rowCount == 0) {
				throw new DataNotFoundException("Error.  Delete BarCode " + key + " failed");
			}

		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DatabaseException(e.getMessage(), e);
		}

	}

	@Override
	public void deleteEmployee(String empID) throws DatabaseException {
		if (empID == null) {
			throw new NullInputDataException("empID cannot be null");
		}
		if (psDelEmployeeByEmpId == null) {
			try {
				psDelEmployeeByEmpId = conn.prepareStatement("Delete From Employee where EmpID = ?");

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DatabaseException(e.getMessage());
			}
		}
		try {
			psDelEmployeeByEmpId.setString(1, empID);
			int rowCount = psDelEmployeeByEmpId.executeUpdate();

			if (rowCount == 0) {
				throw new DataNotFoundException("Error.  Delete Emp ID " + empID + " failed");
			}

		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DatabaseException(e.getMessage(), e);
		}

	}


	@Override
	public Operation getOperation(long key) throws DataNotFoundException {
		Operation operation = null;
		if (psGetOperationByKey == null) {
			try {
				psGetOperationByKey = conn.prepareStatement("Select * from Operation where Operation.key = ?");

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DataNotFoundException(e.getMessage());
			}
		}
		try {
			psGetOperationByKey.setLong(1, key);
			ResultSet rs = psGetOperationByKey.executeQuery();
			if (rs.next()) {
				operation = convertOperationFromResultSet(rs);
			} else {
				throw new DataNotFoundException("Operation key " + key + " is not in DB");
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DataNotFoundException(e.getMessage(), e);
		}
		return operation;
	}

	@Override
	public Operation getOperation(String opCode) throws DataNotFoundException {
		Operation operation = null;
		if (psGetOperationByOpCode == null) {
			try {
				psGetOperationByOpCode = conn.prepareStatement("Select * from Operation where Operation.OpCode = ?");

			} catch (SQLException e) {
				System.err.println(e.getMessage());
				throw new DataNotFoundException(e.getMessage());
			}
		}
		try {
			psGetOperationByOpCode.setString(1, opCode);
			ResultSet rs = psGetOperationByOpCode.executeQuery();
			if (rs.next()) {
				operation = convertOperationFromResultSet(rs);
			} else {
				throw new DataNotFoundException("Operation OPCode " + opCode + " is not in DB");
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			throw new DataNotFoundException(e.getMessage(), e);
		}
		return operation;
	}

	@Override
	public List<Operation> getOperations() {
		List<Operation> operations = new ArrayList<Operation>();
		if (psGetOperations == null) {
			try {
				psGetOperations = conn.prepareStatement("Select * from Operation order by opCode");

			} catch (SQLException e) {
				System.err.println(e.getMessage());
			}
		}
		try {
			ResultSet rs = psGetOperations.executeQuery();
			while (rs.next()) {
				operations.add(convertOperationFromResultSet(rs));
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		return operations;
	}

	private Operation convertOperationFromResultSet(ResultSet rs) throws SQLException {
		int key = rs.getInt("Key");
		String opCode = rs.getString("OpCode");
		String description = rs.getString("Description");
		double hourlyRateSAH = rs.getDouble("HourlyRateSAH");
		int laborCode = rs.getInt("LaborCode");
		int lastStudyYear = rs.getInt("LastStudyYear");

		return new Operation(opCode, description, hourlyRateSAH, laborCode, key, lastStudyYear);
	}

}
