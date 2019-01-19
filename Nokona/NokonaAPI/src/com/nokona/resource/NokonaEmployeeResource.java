package com.nokona.resource;


import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.nokona.data.NokonaDatabase;
import com.nokona.exceptions.DataNotFoundException;
import com.nokona.model.Employee;

@Path("/")
public class NokonaEmployeeResource {
	@Inject
	private NokonaDatabase db;
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/employees/{user}")
	public Response getEmployee(@PathParam("user") String user) 
	{
		int key = -1;
		Employee emp;
		if (user.matches("\\d+")) {
			key = Integer.parseInt(user);
		}
		try {
		if (key != -1) {
			emp = db.getEmployee(key);
		} else {
			emp = db.getEmployee(user);
		}
		}
		catch(DataNotFoundException ex) {
			return Response.status(404).entity("{\"error\":\"" + user + " not found\"}").build();
		}
		return Response.status(200).entity(emp).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/employees")
	public Response getEmployees() 
	{	
		return Response.status(200).entity(db.getEmployees()).build();
	}

}
