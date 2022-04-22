package com.example.demo.Entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "modelo is mandatory")
    private String modelo;

    @NotBlank(message = "carroceria is mandatory")
    private String carroceria;

    @NotBlank(message = "imagen is mandatory")
    private String imagen;

    @OneToMany(mappedBy = "car")
    @JsonManagedReference
    private List<Configuration> configurations;

    public Car() {

    }

    public Car(@NotBlank(message = "modelo is mandatory") String modelo,
            @NotBlank(message = "carroceria is mandatory") String carroceria,
            @NotBlank(message = "imagen is mandatory") String imagen, List<Configuration> configurations) {
        this.modelo = modelo;
        this.carroceria = carroceria;
        this.imagen = imagen;
        this.configurations = configurations;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getCarroceria() {
        return carroceria;
    }

    public void setCarroceria(String carroceria) {
        this.carroceria = carroceria;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public List<Configuration> getConfigurations() {
        return configurations;
    }

    public void setConfigurations(List<Configuration> configurations) {
        this.configurations = configurations;
    }

    @Override
    public String toString() {
        return "Car [carroceria=" + carroceria + ", configurations=" + configurations + ", id=" + id + ", imagen="
                + imagen + ", modelo=" + modelo + "]";
    }
}