package com.example.demo.backend.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.backend.module.Contmodule;

public interface Contrepo extends JpaRepository<Contmodule, Integer> {

}
