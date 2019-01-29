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
import com.nokona.exceptions.DatabaseException;
import com.nokona.model.Operation;

@Path("/operations")
public class NokonaOperationResource {
	@Inject
	private NokonaDatabase db;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{operation}")
	public Response getEmployee(@PathParam("operation") String operationIn) {
		int key = -1;
		Operation operation;
		if (operationIn.matches("\\d+")) {
			key = Integer.parseInt(operationIn);
		}
		try {
			if (key != -1) {
				operation = db.getOperation(key);
			} else {
				operation = db.getOperation(operationIn);
			}
		} catch (DataNotFoundException ex) {
			return Response.status(404).entity("{\"error\":\"" + operationIn + " not found\"}").build();
		}
		catch (DatabaseException ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		return Response.status(200).entity(operation).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response getOperations() {
		return Response.status(200).entity(db.getOperations()).build();
	}

}
