package com.example.demo.controller;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.entity.Car;
import com.example.demo.repository.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {

    @Autowired
    private CarRepository repository;

    @GetMapping(path = "/cars")
    public List<Car> allCars() {
        return (List<Car>) repository.findAll();
    }
    @GetMapping(path = "/car/{id}")
    public List<Car> findById(@PathVariable("id") long id) {
        return repository.findById(id);
    }
    @Transactional
    @GetMapping(path = "/car/modelo/{modelo}")
    public List<Car> findByModelo(@PathVariable("modelo") String modelo) {
        return repository.findByModelo(modelo);
    }
    @Transactional
    @GetMapping(path = "/car/carroceria/{carroceria}")
    public List<Car> findByCarroceria(@PathVariable("carroceria") String carroceria) {
        return repository.findByCarroceria(carroceria);
    }
    @PostMapping(path = "/car")
    public Car createUser(@RequestBody Car car) {
        return repository.save(car);
    }
    @PostMapping(path = "/cars")
    public void createUser(@RequestBody ArrayList<Car> cars) {
        for(Car car : cars){
            repository.save(car);
        } 
    }
    @PutMapping(path = "/car/{id}")
    public Car updateUser(@PathVariable long id, @RequestBody Car car) {
        repository.deleteById(id);
        return repository.save(car);
    }
    @DeleteMapping(path = "/car/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        repository.deleteById(id);
    }
}