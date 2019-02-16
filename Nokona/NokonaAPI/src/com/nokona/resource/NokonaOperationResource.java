package com.nokona.resource;

import javax.inject.Inject;
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
import com.nokona.data.NokonaDatabaseOperation;
import com.nokona.db.NokonaDAOMapper;
import com.nokona.enums.DAOType;
import com.nokona.exceptions.DataNotFoundException;
import com.nokona.exceptions.DatabaseException;
import com.nokona.exceptions.DuplicateDataException;
import com.nokona.model.Operation;

@Path("/operations")
public class NokonaOperationResource {
	@Inject
	private NokonaDatabaseOperation db = (NokonaDatabaseOperation) NokonaDAOMapper.getDAO(DAOType.OPERATION);

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{operation}")
	public Response getOperation(@PathParam("operation") String operation) {
//		int key = -1;
		Operation op;
//		if (operation.matches("\\d+")) {
//			key = Integer.parseInt(operation);
//		}
		try {
//			if (key != -1) {
//				op = db.getOperation(key);
//			} else {
				op = db.getOperation(operation);
//			}
		} catch (DataNotFoundException ex) {
			return Response.status(404).entity("{\"error\":\"" + operation + " not found\"}").build();
		} catch (DatabaseException ex ) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		
		return Response.status(200).entity(op).build();
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response getOperations() {
		try {
			return Response.status(200).entity(db.getOperations()).build();
		} catch (DatabaseException ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	// @Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response updateOperation(String opIn) {

		Gson gson;
		Operation op;
		try {
			gson = new Gson();
			op = gson.fromJson(opIn, Operation.class);
		} catch (JsonSyntaxException jse) {
			return Response.status(400).entity(jse.getMessage()).build();
		}
		try {
			op = db.updateOperation(op);
		} catch (DuplicateDataException e) {
			return Response.status(400).entity(e.getMessage()).build();
		}catch (DatabaseException ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}

		return Response.status(200).entity(op).build();
	}
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	// @Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response addOperation(String opIn) {

		
		Gson gson;
		Operation op;
		try {
			gson = new Gson();
			op = gson.fromJson(opIn, Operation.class);
		} catch (JsonSyntaxException jse) {
			return Response.status(400).entity(jse.getMessage()).build();
		}
		try {
			op = db.addOperation(op);
		} catch (DuplicateDataException e) {
			return Response.status(400).entity(e.getMessage()).build();
		}catch (DatabaseException ex) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		return Response.status(200).entity(op).build();
	}
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{operation}")
	public Response deleteOperation(@PathParam("operation") String operation) {
//		int key = -1;
//		if (operation.matches("\\d+")) {
//			key = Integer.parseInt(operation);
//		}
		try {
//			if (key != -1) {
//				db.deleteOperation(key);
//			} else {
				db.deleteOperation(operation);
//			}
		} catch (DataNotFoundException ex) {
			return Response.status(404).entity("{\"error\":\"" + operation + " not found\"}").build();
		} catch (DatabaseException ex ) {
			return Response.status(404).entity("{\"error\":\"" + ex.getMessage() + "\"}").build();
		}
		
		return Response.status(200).entity("{\"Success\":\"200\"}").build();
	}

}
