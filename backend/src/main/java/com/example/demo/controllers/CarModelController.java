package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.Entity.Car;
import com.example.demo.repositories.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("models")
public class CarModelController {

    @Autowired
    private CarRepository repository;


    @GetMapping("")
  List<Car> findAll(@RequestParam(required = false) Long id) {
    if (id == null)
      return (List<Car>) repository.findAll();

    List<Car> car = new ArrayList<Car>();
    car.add(repository.findById(id).get());
    return car;
  }

  @PostMapping("")
  ResponseEntity<Car> create(@RequestBody Car car) {
    return ResponseEntity.ok().body(repository.save(car));
  }

  @PostMapping("")
  ResponseEntity<List<Car>> createAll(@RequestBody List<Car> cars) {
      for (Car car: cars){
        repository.save(car);
      }
    return ResponseEntity.ok().body(findAll(null));
  }
    
}
