package com.example.demo.repositories;

import com.example.demo.Entity.Car;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders ="*")
@RepositoryRestResource 
public interface CarRepository extends CrudRepository<Car, Long> { 

}