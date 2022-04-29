package com.challenge.vacunas.repositories;

import com.challenge.vacunas.models.EmpleadoModel;
import com.challenge.vacunas.models.TipoVacuna;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;

@Repository
public interface EmpleadoRepository extends CrudRepository<EmpleadoModel, Long> {

  public abstract ArrayList<EmpleadoModel> findByEstadoVacunacion(boolean estadoVacunacion);

  public abstract ArrayList<EmpleadoModel> findByTipoVacuna(TipoVacuna tipoVacuna);

  public abstract ArrayList<EmpleadoModel> findByFechaVacunacionBetween(Date fechaInicio, Date fechaFin);
}
