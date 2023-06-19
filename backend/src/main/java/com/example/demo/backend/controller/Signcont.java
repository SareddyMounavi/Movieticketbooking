package com.example.demo.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.backend.module.Signmodule;
import com.example.demo.backend.repositary.Signrepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/hostaa")
public class Signcont {
	
	@Autowired	
	Signrepo repo;

		@PostMapping("/logindara")
		public String mthd(@RequestBody Signmodule d)
		{
		 String user=d.getUsername();
		 Signmodule m=repo.findByUsername(user);
			if(m==null)
			{	
				repo.save(d);
				return "added";
			}
			else
			{
				return "user alredy exist";
			}
		}
			@PostMapping("/login/{mname}/{pass}")
			public String login(@PathVariable String mname,@PathVariable String pass) {
				
				Signmodule ll=repo.findByUsername(mname);
				if(ll == null) {
					return "invalid username";
				}
				else {
					if(ll.getPassword().equals(pass)) {
						return "success";
					}
					else {
						return "invalidpassword";
					}
				}
			}

}
