package com.edtest.edbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EdBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EdBackendApplication.class, args);
        System.out.println("Backend is running at http://localhost:8888");
    }

}
