
package com.example.demo.repository;

import com.example.demo.Entity.Car;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.repository.query.Param;


@RepositoryRestResource
public interface ConfigurationRepository extends CrudRepository<Car, Long> {
    List<Car> findById(@Param("id") long id);
}