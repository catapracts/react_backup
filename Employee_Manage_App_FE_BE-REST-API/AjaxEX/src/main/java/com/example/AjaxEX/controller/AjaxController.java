package com.example.AjaxEX.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.AjaxEX.dto.AjaxDTO;


@Controller
public class AjaxController 
{
	// http://localhost:9696/ex01
	@GetMapping("/ex01")
	public String ex01()
	{
		System.out.println("ajax-ex-01 request success");

		return "index";
	}
	
	// http://localhost:9696/ex02

	@PostMapping("/ex02")
	public @ResponseBody String ex02()
	{
		System.out.println("ajax-ex-02 request success");
		return "Hello";
	}
	

	@GetMapping("/ex03")
	public @ResponseBody String ex03(@RequestParam("param1") String param1, @RequestParam("param2") String param2)
	{
		System.out.println("ajax-ex-03 request success");
		System.out.println("param1의 값 : " + param1);
		System.out.println("param2의 값 : " + param2);
		return "ajax-ex-03 request success";
	}
	

	@PostMapping("/ex04")
	public @ResponseBody String ex04(@RequestParam("param1") int param1, @RequestParam("param2") String param2)
	{
		System.out.println("ajax-ex-04 request success");
		System.out.println("param1의 값 : " + (param1 + 10));
		System.out.println("param2의 값 : " + param2);
		return "ajax-ex-04 request success";
	}
	

	@GetMapping("/ex05")
	public @ResponseBody AjaxDTO ex05(@ModelAttribute AjaxDTO ajaxDTO)
	{
		System.out.println("ajax-ex-05 request success");
		System.out.println("param1의 값 : " + ajaxDTO.getParam1());
		System.out.println("param2의 값 : " + ajaxDTO.getParam2());
		return ajaxDTO;
	}	
	
	
	
}
