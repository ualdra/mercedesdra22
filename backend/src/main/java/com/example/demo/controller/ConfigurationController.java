package com.example.demo.controller;

import java.util.List;

import com.example.demo.Entity.Configuration;
import com.example.demo.repository.ConfigurationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfigurationController {

    @Autowired
    private ConfigurationRepository repository;

    @GetMapping(path = "/configurations")
    public List<Configuration> allConfiguration() {
        return (List<Configuration>) repository.findAll();
    }
    @GetMapping(path = "/configuration/{id}")
    public List<Configuration> findById(@PathVariable("id") long id) {
        return repository.findById(id);
    }
    @GetMapping(path = "/configuration/url/{url}")
    public List<Configuration> findByUrl(@PathVariable("url") String url) {
        return repository.findByUrl(url);
    }
     @PostMapping(path = "/configuration")
    public Configuration createConfiguration(@RequestBody Configuration configuration) {
        return repository.save(configuration);
    }
    @PutMapping(path = "/configuration/{id}")
    public Configuration updateConfiguration(@PathVariable long id, @RequestBody Configuration configuration) {
        repository.deleteById(id);
        return repository.save(configuration);
    }
    @DeleteMapping(path = "/configuration/{id}")
    public void deleteConfiguration(@PathVariable("id") Long id) {
        repository.deleteById(id);
    }
 
}
