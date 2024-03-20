package com.example.AjaxEX.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Movie 
{
	private String backdrop_path;
	
	@Id
	private int id_num;
	
	private String original_language;
	
	private String original_title;
	
	private String overview;
	
	private String poster_path;
	
	private String release_date;
	
	private String title;
	
	private int vote_count;
	
	public Movie(
			String backdrop_path1,
			int id_num1,
			String original_language1,
			String original_title1,
			String overview1,
			String poster_path1,
			String release_date1,
			String title1,
			int vote_count1
	)
	{
		backdrop_path = backdrop_path1;
		id_num = id_num1;
		original_language = original_language1;
		original_title = original_title1;
		overview = overview1;
		poster_path = poster_path1;
		release_date = release_date1;
		title = title1;
		vote_count = vote_count1;
		
	}
	
}
