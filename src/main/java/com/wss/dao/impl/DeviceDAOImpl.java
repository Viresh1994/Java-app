package com.wss.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wss.dao.DeviceDAO;
import com.wss.entity.NetworkDevices;

@Repository
public class DeviceDAOImpl implements DeviceDAO {

	@Autowired
	@PersistenceContext
	private EntityManager em;
	private EntityManager em2;
	
	public static List<Double> list = new ArrayList<>();
	@SuppressWarnings("unchecked")
	@Override
	public List<NetworkDevices> getAllDevices() {
		int s;
		Query query=null;
		try{
		CriteriaBuilder builder=em.getCriteriaBuilder();
		CriteriaQuery<NetworkDevices> cQuery=builder.createQuery(NetworkDevices.class);
		Root<NetworkDevices> root = cQuery.from(NetworkDevices.class);
		cQuery.select(root);
		query = em.createQuery(cQuery);
		}
		catch(Exception ex)
		{

		}

		return query.getResultList();
	}

	@Override
	public void addDevice(NetworkDevices nd) {
		
		em.persist(nd);
	}

	public void method()
	{

	}

	 public void populateList() {
        for (int i = 0; i < 10000000; i++) {
            list.add(1.0);
        }
    }

}
