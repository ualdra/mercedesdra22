package com.example.demo.controller;

import java.util.List;

import com.example.demo.Entity.Car;
import com.example.demo.repository.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class CarController {

    @Autowired
    private CarRepository repository;

    @GetMapping(path = "/cars")
    public List<Car> allcars() {
        return (List<Car>) repository.findAll();
    }

    @GetMapping(path = "/car/{id}")
    public List<Car> findBylastName(@PathVariable("id") long id) {
        return repository.findById(id);
    }

    @PutMapping(path = "/car/{id}")
    public Car updateUser(@PathVariable int id, @RequestBody Car car) {
        return repository.save(car);
    }

    
}