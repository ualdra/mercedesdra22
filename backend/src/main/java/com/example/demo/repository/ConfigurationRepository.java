package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.Configuration;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.repository.query.Param;


@RepositoryRestResource
public interface ConfigurationRepository extends CrudRepository<Configuration, Long> {
    List<Configuration> findById(@Param("id") long id);
    List<Configuration> findByUrl(@Param("url") String url);
}