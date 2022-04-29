import EmpleadoModel from "./Empleado";
import Empleado from "./Empleado";

export async function searchEmpleados() {
    let url = process.env.REACT_APP_API + 'empleados'
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }

    })

    return await response.json();
}
export async function removeEmpleados(id: string) {
    let url = process.env.REACT_APP_API + 'empleados/' + id
    await fetch(url, {
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }

    })
}

export async function saveEmpleados(empleado: EmpleadoModel) {
    let url = process.env.REACT_APP_API + 'empleados'
    console.log(empleado);
    await fetch(url, {
        "method": 'POST',
        "headers": {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           // 'Access-Control-Allow-Origin': '*',
        },
        "body": JSON.stringify(empleado)
    });

}

export async function searchEmpleadoById(id: string) {
    let url = process.env.REACT_APP_API + 'empleados/' + id
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }

    })

    return await response.json();

}