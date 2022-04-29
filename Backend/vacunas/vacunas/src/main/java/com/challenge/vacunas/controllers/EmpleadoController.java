package com.challenge.vacunas.controllers;

import com.challenge.vacunas.models.EmpleadoModel;
import com.challenge.vacunas.models.TipoVacuna;
import com.challenge.vacunas.services.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
//@CrossOrigin
@RestController
@RequestMapping("/api/empleados")
public class EmpleadoController {
    @Autowired
    EmpleadoService empleadoService;

    @GetMapping()

    public ArrayList<EmpleadoModel>obtenerEmpleados(){
        return empleadoService.obtenerEmpleados();
    }

    @PostMapping(consumes = {"application/json"})
    public EmpleadoModel guardarEmpleado(@RequestBody EmpleadoModel empleado){
        return this.empleadoService.guardarEmpleado(empleado);
    }

    @GetMapping(path = "/{id}")
    public Optional <EmpleadoModel>obtenerPorId(@PathVariable("id") Long id){
        return this.empleadoService.obtenerPorId(id);
    }
    @GetMapping(path = "/search/estado")
    public ArrayList <EmpleadoModel>obtenerPorEstadoVacunacion(@RequestParam("estadoVacuna") boolean estadoVacuna){
        return this.empleadoService.obtenerPorEstadoVacunacion(estadoVacuna);
    }

    @GetMapping(path = "/search/tipo")
    public ArrayList <EmpleadoModel>obtenerPorTipoVacuna(@RequestParam("tipoVacuna") TipoVacuna tipoVacuna){
        return this.empleadoService.obtenerPorTipoVacuna(tipoVacuna);
    }
    @GetMapping(path = "/search/fecha")
    public ArrayList <EmpleadoModel>obtenerPorFechaVacunacion(@RequestParam("fechaInicio") Date fechaInicio,@RequestParam("fechaFin") Date fechaFin ){
        return this.empleadoService.obtenerPorFechaVacunacion(fechaInicio,fechaFin);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.empleadoService.eliminarEmpleado(id);
        if (ok){
            return "Se elimino el usuario con id"+ id;
        }else {
            return "No se pudo eliminar el usuario con id"+ id;
        }
    }

}
