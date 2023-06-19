package com.example.demo.backend.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.backend.module.Signmodule;

public interface Signrepo extends JpaRepository<Signmodule,String> {



	Signmodule findByUsername(String user);

}
