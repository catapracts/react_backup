package com.example.AjaxEX.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.AjaxEX.entity.Movie;

public interface movieRepository extends JpaRepository<Movie, Integer>
{

}
