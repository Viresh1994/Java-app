package com.wss.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wss.dao.DeviceDAO;
import com.wss.entity.NetworkDevices;
import com.wss.service.DeviceService;

@Service
@Transactional
public class DeviceServiceImpl implements DeviceService {

	@Autowired
	private DeviceDAO deviceDAO;
	
	@Override
	public List<NetworkDevices> getAllDevices() {

		return deviceDAO.getAllDevices();
	}

	@Override
	public void addDevice(NetworkDevices nd) {
		
		deviceDAO.addDevice(nd);
	}

}
