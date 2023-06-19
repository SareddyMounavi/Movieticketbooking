package com.example.demo.backend.repositary;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.backend.module.Bookmodule;

public interface Bookrepo extends JpaRepository<Bookmodule,String>
{



}
