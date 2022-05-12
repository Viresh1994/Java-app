package com.wss.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wss.entity.NetworkDevices;
import com.wss.service.DeviceService;

@Controller
public class DevicesController {

	@Autowired
	private DeviceService deviceService;
	
	@RequestMapping(value="getAllDevices", produces="application/json")
	@ResponseBody
	public List<NetworkDevices> getAllDevices() {
		
		List<NetworkDevices> devices = deviceService.getAllDevices();

		return devices;
	}
	
	@RequestMapping(value="addDevice", method=RequestMethod.POST)
	public String addDevice(@RequestParam("devicename") String devicename, @RequestParam("ipaddress") String ipaddress, @RequestParam("portnumber") String portnumber, @RequestParam("devicetype") String devicetype, @RequestParam("reachable") boolean reachable, @RequestParam("protocol") String protocol) {
		
		NetworkDevices nd = new NetworkDevices();
		nd.setDeviceName(devicename);
		nd.setDeviceType(devicetype);
		nd.setIpAddress(ipaddress);
		nd.setPort(portnumber);
		nd.setProtocol(protocol);
		nd.setReachable(reachable);
		
		deviceService.addDevice(nd);
		
		return "wss";
	}
}
