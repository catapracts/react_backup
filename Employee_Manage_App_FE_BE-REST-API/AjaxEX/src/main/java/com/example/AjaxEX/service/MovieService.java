package com.example.AjaxEX.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.AjaxEX.dto.MovieDTO;
import com.example.AjaxEX.entity.Movie;
import com.example.AjaxEX.repository.MovieRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MovieService 
{
	private final MovieRepository movieRepository;
	
	public void create(Movie movie)
	{
		Movie m = new Movie();
		m.setBackdrop_path(movie.getBackdrop_path());
		m.setId_num(movie.getId_num());
		m.setOriginal_language(movie.getOriginal_language());
		m.setOriginal_title(movie.getOriginal_title());
		m.setOverview(movie.getOverview());
		m.setPoster_path(movie.getPoster_path());
		m.setRelease_date(movie.getRelease_date());
		m.setTitle(movie.getTitle());
		m.setVote_count(movie.getVote_count());
		movieRepository.save(m);
	}
	
	
	// PUT
	public void update(long id, MovieDTO movieDTO)
	{
		//id에 대한 Movie 객체 가지고 온다.
		Optional<Movie> op = movieRepository.findById(id);
		Movie movie = op.get();
		System.out.println(movie.getTitle());
		System.out.println(movie.getVote_count());
		
		//Movie 객체에 movieDTO
		//movie = movieDTO.createMovie();
		movie.setTitle(movieDTO.getTitle());
		movie.setOriginal_language(movieDTO.getOriginal_language());
		movie.setVote_count(movieDTO.getVote_count());
		
		//save(Movie)
		movieRepository.save(movie);
	}
	
	
	public void delete(Movie m)
	{
		movieRepository.delete(m);
	}

	
	public List<Movie> listAll()
	{
		return movieRepository.findAll();
	}
	
	//DB Movie table의 모든 record를 List<Movie>로 가지고 와서 List<MovieDTO>에 넣고 return
	// Entity -> DTO로 변환 후 return
	public List<MovieDTO> getGetListAll()
	{
		List<MovieDTO> movieDTO = new ArrayList<>();
		
		List<Movie> movieList = movieRepository.findAll();
		
		for(int i = 0; i < movieList.size(); i++)
		{
			Movie movie = movieList.get(i);
			MovieDTO m = new MovieDTO();
			m = m.of(movie);
			movieDTO.add(m);
		}

		
		return movieDTO;
		// movieList = movieDTO하면 Error 뜬다.
		//출력 확인용 주석
//		for(int i = 0; i < movieList.size(); i++)
//		{
//			Movie movie = movieList.get(i);
//			System.out.println("=========="+i+"==========");
//			System.out.println(movie.getTitle());
//			System.out.println("=========================");
//		}
	}
	
	
	// DB Movie table의 모든 record를 List<Movie>로 가지고 와서 List<MovieDTO>에 넣고 return
	// Entity -> DTO로 변환 후 return
	public MovieDTO getGetOne(long i)
	{
		
		List<Movie> movieList = movieRepository.findAll();		
		MovieDTO movieDTO = new MovieDTO();
		
		for(int a = 0; a < movieList.size(); a++)
		{
			Movie movie = movieList.get(a);
			
			MovieDTO m = new MovieDTO();
			
			if(movie.getId() == i)
			{
				m = m.of(movie);
				movieDTO = m;
			}
			
		}		
		return movieDTO;
	}

	
	public String movieInsert (MovieDTO movieDTO) 
	{
		
		// MovieDTO : Client  <===> MovieDTO <===> Movie  (Entity) ==. MovieRepository ==> DB 
		
		// movieDTO의 모든 필드의 값을 Movie (Entiy) 로 주입 
		Movie movie = movieDTO.createMovie(); 
		
		System.out.println("===Movie (Entity 의 값을 출력 ) ====");
		System.out.println(movie.getTitle());
		System.out.println(movie.getPoster_path());
		System.out.println(movie.getRelease_date());
		System.out.println(movie.getVote_count());
		System.out.println("===Movie (Entity 의 값을 출력 ) ====");
		
		movieRepository.save(movie); 
		
		return "insert 성공됨 !!!!" ; 
	}
}
