package com.example.AjaxEX.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor // 자동으로 기본생성자 만들어주는 Annotation
public class AjaxDTO
{
	// 다른 생성자가 있으면 기본생성자 명시해줘야함 - @NoArgsConstructor // 자동으로 기본생성자 만들어주는 Annotation
	
	//객체주입을 위해 만든 생성자
	public AjaxDTO(String data1, String data2)
	{
		param1 = data1;
		param2 = data2;
	}
	private String param1;
	private String param2;
}
