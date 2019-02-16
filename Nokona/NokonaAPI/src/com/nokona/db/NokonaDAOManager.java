package com.nokona.db;

import javax.inject.Inject;
import javax.inject.Singleton;

import com.nokona.data.NokonaDatabase;
import com.nokona.enums.DAOType;
import com.nokona.exceptions.DatabaseException;
//@Singleton
public class NokonaDAOManager {
private  static NokonaDAOEmployee daoEmployee;
private  static NokonaDAOOperation daoOperation;
private  static NokonaDatabase db;
//	@Inject	
	public NokonaDAOManager() {
			
	}
		
	public  static NokonaDatabase getDAO(DAOType daoType) throws DatabaseException {
		switch(daoType) {
		case EMPLOYEE:
			if (daoEmployee == null) {
				daoEmployee = new NokonaDAOEmployee();
			}
			db = daoEmployee;
			break;
		case OPERATION:
			if (daoOperation == null) {
				daoOperation = new NokonaDAOOperation();
			}
			db = daoOperation;
			break;
		}	
		return db;
//		try {
//			return new NokonaDAOEmployee();
//		} catch (DatabaseException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return null;
	}
	public String Hello() {
		return "Hello";
	}
}