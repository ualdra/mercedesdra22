package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "configurations")

public class Configuration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    
    @NotBlank(message = "URL is mandatory")
    @Column(name = "url", length = 1024)
    private String url;

    @OneToOne(fetch = FetchType.EAGER, targetEntity = Car.class)
    @JoinColumn(name = "car_id")
    @JsonBackReference
    private Car car;

    public Configuration() {
   
    }

    public Configuration(@NotBlank(message = "URL is mandatory") String url, Car car) {
        this.url = url;
        this.car = car;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }
}
