package com.example.demo.backend.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.backend.module.Bookmodule;
import com.example.demo.backend.repositary.Bookrepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/booking")

public class Bookcontrol {
	@Autowired
	Bookrepo repo;
	
	@PostMapping("/posting")
	public String pos(@RequestBody Bookmodule d) {
		repo.save(d);
		return "booking Success";
	}

	
	@DeleteMapping("/delete/{id}")
	public String deletedata(@PathVariable String id)
	{
		repo.deleteById(id);
		return "Deleted";
	}

	
	

}
