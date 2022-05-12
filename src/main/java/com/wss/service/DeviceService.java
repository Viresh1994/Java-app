package com.wss.service;

import java.util.List;

import com.wss.entity.NetworkDevices;

public interface DeviceService {

	public List<NetworkDevices> getAllDevices();

	public void addDevice(NetworkDevices nd);
}
