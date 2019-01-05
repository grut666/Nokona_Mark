package com.nokona.resource;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import com.nokona.data.NokonaDatabase;
import com.nokona.exceptions.DataNotFoundException;

@Path("/hello")
public class NokonaResource {
	@Inject
	private NokonaDatabase db;
	@GET
	@Path("/sayHello/{user}")
	public Response dispMessage(@PathParam("user") String msg) throws DataNotFoundException
	{
		
		String message = "Welcome " + msg + "!!!";
//		System.out.println(db.getEmployee(10));
		return Response.status(200).entity(message + db.getEmployee(10).toString()).build();
	}
	

}
