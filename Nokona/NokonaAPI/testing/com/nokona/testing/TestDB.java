package com.nokona.testing;

import static org.junit.Assert.assertTrue;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;

import com.nokona.data.NokonaDatabase;

class TestDB {
	@Inject
	private  NokonaDatabase db;
	@Test
	void test() {
		assertTrue("Null db", db != null);
	}

}
