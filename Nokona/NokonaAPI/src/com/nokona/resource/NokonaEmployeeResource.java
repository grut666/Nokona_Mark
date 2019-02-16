package com.nokona.resource;

import javax.inject.Inject;
import javax.inject.Named;
import javax.inject.Singleton;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.nokona.data.NokonaDatabase;
import com.nokona.data.NokonaDatabaseEmp;

import com.nokona.db.NokonaDAOManager;
import com.nokona.enums.DAOType;
import com.nokona.exceptions.DataNotFoundException;
import com.nokona.exceptions.DatabaseException;
import com.nokona.exceptions.DuplicateDataException;
import com.nokona.model.Employee;

@Path("/employees")

public class NokonaEmployeeResource {
//	@Inject
//	private static NokonaDAOManager dbMgr;
//	@Inject // @Named("nokonaDAOEmployee")
	private static NokonaDatabaseEmp db;

//	public NokonaEmployeeResource()  {
//		db =  (NokonaDatabaseEmp) dbMgr.getDAO(DAOType.EMPLOYEE);
//		db = new NokonaDAOEmployee();
//		
//	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{user}")
	public Response getEmployee(@PathParam("user") String user) {
		
		Employee emp;
		
		try {
				getDB();
				emp = db.getEmployee(user);
	
		} catch (DataNotFoundException ex) {
			return Response.status(404).entity("{\"error\":\"" + user + " not found\"}").build();
		} catch (DatabaseException ex ) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		catch (Exception ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + db + "\"}").build();
		}
		
		return Response.status(200).entity(emp).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response getEmployees() {

			
	
		try {
			getDB();
			return Response.status(200).entity(db.getEmployees()).build();
		} catch (DatabaseException ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		catch (Exception ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() +  db +"\"}").build();
		}
		
		
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	// @Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response updateEmployee(String empIn) {

		// Employee emp = gson.fromJson(empIn, Employee.class);
		Gson gson;
		Employee emp;
		try {
			gson = new Gson();
			emp = gson.fromJson(empIn, Employee.class);
		} catch (JsonSyntaxException jse) {
			return Response.status(400).entity(jse.getMessage()).build();
		}
		try {
			getDB();
			emp = db.updateEmployee(emp);
		} catch (DuplicateDataException e) {
			return Response.status(400).entity(e.getMessage()).build();
		}catch (DatabaseException ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		catch (Exception ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}

		return Response.status(200).entity(emp).build();
	}
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	// @Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response addEmployee(String empIn) {

		// Employee emp = gson.fromJson(empIn, Employee.class);
		Gson gson;
		Employee emp;
		try {
			gson = new Gson();
			emp = gson.fromJson(empIn, Employee.class);
		} catch (JsonSyntaxException jse) {
			return Response.status(400).entity(jse.getMessage()).build();
		}
		try {
			getDB();
			emp = db.addEmployee(emp);
		} catch (DuplicateDataException e) {
			return Response.status(400).entity(e.getMessage()).build();
		}catch (DatabaseException ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		catch (Exception ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		return Response.status(200).entity(emp).build();
	}
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{user}")
	public Response deleteEmployee(@PathParam("user") String user) {
		
		try {
			getDB();
			
				db.deleteEmployee(user);

		} catch (DataNotFoundException ex) {
			return Response.status(404).entity("{\"error\":\"" + user + " not found\"}").build();
		} catch (DatabaseException ex ) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		catch (Exception ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		
		return Response.status(200).entity("{\"Success\":\"200\"}").build();
	}
	private void getDB() throws DatabaseException {

		if (db == null) {
			db = (NokonaDatabaseEmp) NokonaDAOManager.getDAO(DAOType.EMPLOYEE);
		}
	}

}
