package com.Erik.RepoAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.Erik.RepoAPI.model.entity")
@EnableJpaRepositories(basePackages = "com.Erik.repoAPI.model.repository")

public class RepoApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(RepoApiApplication.class, args);
    }

}
