package com.nokona.db;

import com.nokona.data.NokonaDatabase;
import com.nokona.enums.DAOType;

public class NokonaDAOMapper {
		private static NokonaDAOEmployee daoEmployee;
		private static NokonaDAOOperation daoOperation;
		private static NokonaDatabase db;
		
	public static NokonaDatabase getDAO(DAOType daoType) {
		switch(daoType) {
		case EMPLOYEE:
			db = daoEmployee;
			break;
		case OPERATION:
			db = daoOperation;
			break;
		}	
		return db;
	}
}