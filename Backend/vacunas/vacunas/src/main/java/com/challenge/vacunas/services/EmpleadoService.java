package com.challenge.vacunas.services;

import com.challenge.vacunas.models.EmpleadoModel;
import com.challenge.vacunas.models.TipoVacuna;
import com.challenge.vacunas.repositories.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

@Service
public class EmpleadoService {
    @Autowired
    EmpleadoRepository empleadoRepository;

    public ArrayList<EmpleadoModel> obtenerEmpleados(){
        return (ArrayList<EmpleadoModel>) empleadoRepository.findAll();
    }
    public EmpleadoModel guardarEmpleado (EmpleadoModel empleado){
        return empleadoRepository.save(empleado);
    }

    public Optional<EmpleadoModel> obtenerPorId(Long id){
        return empleadoRepository.findById(id);
    }
    public ArrayList<EmpleadoModel> obtenerPorEstadoVacunacion(boolean estadoVacunacion){
        return empleadoRepository.findByEstadoVacunacion(estadoVacunacion);
    }

    public ArrayList<EmpleadoModel> obtenerPorTipoVacuna(TipoVacuna tipoVacuna){
        return empleadoRepository.findByTipoVacuna(tipoVacuna);
    }

    public ArrayList<EmpleadoModel> obtenerPorFechaVacunacion(Date fechaInicio, Date fechaFin){
        return empleadoRepository.findByFechaVacunacionBetween(fechaInicio, fechaFin);
    }

    public boolean eliminarEmpleado(Long id){
        try {
            empleadoRepository.deleteById(id);
            return true;
        }catch (Exception err){
            return false;
        }
    }
}
