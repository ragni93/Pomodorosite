package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/hei")
    public String hei(String navn){
        return "Hei verden "+navn;
    }
}
