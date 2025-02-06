package com.techstack;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.techstack.entity")  
public class TechStackApplication {
    public static void main(String[] args) {
        SpringApplication.run(TechStackApplication.class, args);
        System.out.println("Started......");
    }
}
