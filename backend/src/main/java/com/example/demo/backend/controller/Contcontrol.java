package com.example.demo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.backend.module.Contmodule;
import com.example.demo.backend.repositary.Contrepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/contact")
public class Contcontrol {
	
	
	@Autowired
	Contrepo repo;
	
	
	@PostMapping("/postdataaa")
	public String con(@RequestBody Contmodule d)
	{
		repo.save(d);
		return "we will contact you soon!!!";
	}

}
