package com.challenge.vacunas.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "Empleado")
@Getter @Setter
public class EmpleadoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    @Column(unique = true,length = 10)
    private Long cedula;
    private String nombres;
    private String apellidos;
    private String correo;
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;
    private String direccionDomicilio;
    private String telefonoMovil;
    private boolean estadoVacunacion;
    private TipoVacuna tipoVacuna;
    @Temporal(TemporalType.DATE)
    private Date fechaVacunacion;
    @Column(length = 1)
    private int numeroDosis;
    private String usuario;
    private String contrasena;




}
