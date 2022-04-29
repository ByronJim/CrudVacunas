export default interface EmpleadoModel {
    id?:string;
    cedula?: number;
    nombres?: string;
    apellidos?: string;
    correo?: string;
    fechaNacimiento?:string;
    direccionDomicilio?:string;
    telefonoMovil?:string;
    estadoVacunacion?:boolean;
    tipoVacuna?:string;
    fechaVacunacion?:string;
    numeroDosis?:number;

}