package com.wss;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.wss.controller.DevicesController;
import com.wss.controller.LoginContoller;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UnitTest {

	@Autowired
	private LoginContoller loginController;
	
	@Autowired
	private DevicesController devicesController;
	
	@Test
	public void loginContollerLoginPage() {
		Assert.assertEquals("login", loginController.getLoginPage());
	}
	
	@Test
	public void devices() {
		if(null != devicesController.getAllDevices()) {
			Assert.assertTrue("Output is not a null object", true);
		}else {
			Assert.fail();
		}
	}

}
