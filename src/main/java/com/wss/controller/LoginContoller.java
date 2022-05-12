package com.wss.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginContoller {

	@Autowired
	private HttpSession session;
	
	@RequestMapping({"/","home"})
	public String getHomePage() {
		return "index";
	}
	
	@RequestMapping(value="login", method=RequestMethod.GET)
	public String getLoginPage() {
		return "login";
	}
	
	@RequestMapping(value="login", method=RequestMethod.POST)
	public String authenticate(@RequestParam("username") String username, @RequestParam("password") String password, HttpServletRequest request, HttpServletResponse response) {
		
		session=request.getSession();
		response.setHeader("Cache-Control",
		"no-cache, no-store, must-revalidate");
		response.setHeader("Pragma", "no-cache");
		response.setDateHeader("Expires", 0);
		
		session.setAttribute("username", username);
		return "redirect:wss";
	}
	
	@RequestMapping("wss")
	public String getUserHome(HttpServletRequest request) {
		
		session=request.getSession(false);
		if(session!=null)
			return "wss";
		
		return "login";
	}
	
	@RequestMapping("logout")
	public String logout(HttpServletRequest request) {
		
		session=request.getSession(false);
		session.invalidate();
		
		return "redirect:login";
	}
	
	@RequestMapping("analytics")
	public String getAnalytics() {
		
		return "analytics";
	}
}
