package com.example.AjaxEX.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.AjaxEX.entity.Movie;
import com.example.AjaxEX.repository.movieRepository;

@Controller
public class MovieController 
{
	
	@PostMapping("/movie/post")
	public @ResponseBody Movie ex07(@RequestBody Movie movie)
	{
		System.out.println("movie-lab request success");
		System.out.println("param1의 값 : " + movie.getBackdrop_path());
		System.out.println("param2의 값 : " + movie.getId_num());
		System.out.println("param3의 값 : " + movie.getOriginal_language());
		System.out.println("param4의 값 : " + movie.getOriginal_title());
		System.out.println("param5의 값 : " + movie.getOverview());
		System.out.println("param6의 값 : " + movie.getPoster_path());
		System.out.println("param7의 값 : " + movie.getRelease_date());
		System.out.println("param8의 값 : " + movie.getTitle());
		System.out.println("param9의 값 : " + movie.getVote_count());
		
		return movie;
	}
}
