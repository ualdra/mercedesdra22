package com.example.demo.controller;
import java.util.List;
import com.example.demo.Entity.Car;
import com.example.demo.Entity.Configuration;
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
    public List<Car> findById(@PathVariable("id") long id) {
        return repository.findById(id);
    }
    @GetMapping(path = "/car/{modelo}")
    public List<Car> findByModelo(@PathVariable("modelo") String modelo) {
        return repository.findByModelo(modelo);
    }
    @GetMapping(path = "/car/{carroceria}")
    public List<Car> findByCarroceria(@PathVariable("carroceria") String carroceria) {
        return repository.findByCarroceria(carroceria);
    }
    @GetMapping(path = "/car/{id}/configurations")
    public List<Configuration> findByIdConfigurations(@PathVariable("id") long id) {
        return repository.findByIdConfigurations(id);
    }
    @PostMapping(path = "/car")
    public Car createUser(@RequestBody Car car) {
        return repository.save(car);
    }
    @PutMapping(path = "/car/{id}")
    public Car updateUser(@PathVariable int id, @RequestBody Car car) {
        return repository.save(car);
    }
    @DeleteMapping(path = "/car/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        repository.deleteById(id);
    }

    
}