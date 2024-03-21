package com.example.AjaxEX.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.AjaxEX.dto.MovieDTO;
import com.example.AjaxEX.entity.Movie;
import com.example.AjaxEX.service.MovieService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class MovieController 
{
	// DI 객체 주입 : @RequiredArgsConstructor 
	private final MovieService movieService;
	
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
	
	@PostMapping("movie/create")
	public @ResponseBody Movie create(@RequestBody Movie movie)
	{
		System.out.println("movie_lab request create");
		movieService.create(movie);
		return movie;
	}
	
	
	//GET방식, Movie table 전체 내용 가져오기
	@GetMapping("/get")
	public ResponseEntity<List<MovieDTO>> getGetAll()
	{
		List<MovieDTO> movieList = movieService.getGetListAll();
		
		System.out.println("GET으로 Movie 가져오기");
		
		return new ResponseEntity<>( movieList , HttpStatus.OK);
	}
	
	
	//GET방식, Movie table 내용 중 1개 가져오기
	@GetMapping("/getone")
	public ResponseEntity<MovieDTO> getGetOne(@RequestParam("id")long i)
	{
		MovieDTO movieDTO = movieService.getGetOne(i);
		System.out.println(i);
		
		System.out.println("GET으로 Movie 1개 가져오기");
		
		return new ResponseEntity<>( movieDTO , HttpStatus.OK);
	}
	
	//PUT방식, /movie/{id}
	@PostMapping("movie/{id}")
	public ResponseEntity<MovieDTO> update(
			@PathVariable("id") long id,
			@RequestBody MovieDTO movieDTO
	)
	{
		System.out.println("movie_lab request update");
		System.out.println(id);
		System.out.println(movieDTO.getId_num());
		
		movieService.update(id,movieDTO);
		
		return ResponseEntity.ok(movieDTO); // = return new ResponseEntity<>( movieDTO , HttpStatus.OK);
	}
	
	@PostMapping("movie/delete")
	public @ResponseBody Movie delete(@RequestBody Movie movie)
	{
		System.out.println("movie_lab request delete");
		movieService.create(movie);
		return movie;
	}
	
	
	
	
	
	
	
	// Movie 의 POST 요청을 처리하는 메소드 : insert 
	@PostMapping("/movie") 
	public ResponseEntity<String> movieInsert(
			// cliet 에서 던지는 객체를 자바에서 input 
			@RequestBody MovieDTO movieDTO 
			) {
		System.out.println("=====================");
		System.out.println(movieDTO.getBackdrop_path());
		System.out.println(movieDTO.getOriginal_language());
		System.out.println(movieDTO.getTitle());
		System.out.println(movieDTO.getPoster_path());
		System.out.println("=====================");
		
		
		String complate = movieService.movieInsert(movieDTO) ; 
		
		return new ResponseEntity<String>( complate , HttpStatus.OK);
	}
	
}
