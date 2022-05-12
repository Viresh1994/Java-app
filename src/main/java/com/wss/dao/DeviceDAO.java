package com.wss.dao;

import java.util.List;

import com.wss.entity.NetworkDevices;

public interface DeviceDAO {

	public List<NetworkDevices> getAllDevices();

	public void addDevice(NetworkDevices nd);
}
