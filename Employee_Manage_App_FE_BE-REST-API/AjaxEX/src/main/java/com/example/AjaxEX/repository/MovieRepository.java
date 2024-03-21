package com.example.AjaxEX.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.AjaxEX.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer>
{
	Optional<Movie> findById(long id);
}
