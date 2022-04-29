package com.challenge.vacunas.models;

public enum TipoVacuna {
    SPUTNIK ("Sputnik"),
    ASTRAZENEKA ("AstraZeneca"),
    PFIZER ("Pfizer"),
    JHONSON ("Jhonson&Jhonson");

    private final String nombre;
    TipoVacuna(String nombre){
        this.nombre=nombre;
    }

    public String getNombre() {
        return nombre;
    }
}
