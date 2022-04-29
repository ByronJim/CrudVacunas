import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import EmpleadoModel from './Empleado';

import { removeEmpleados, searchEmpleados } from './EmpleadoApi';







const EmpleadoLista: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [empleados, setEmpleados] = useState<EmpleadoModel[]>([]);
const history=useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchEmpleados();
    setEmpleados(result);
  }
  const   remove = async (id: string) => {
    await removeEmpleados(id);
    search();
  }

  const addEmpleado = () => {
    history.push('/page/empleados/new');
  }

  const editEmpleado = (id:string) => {
    history.push('/page/empleados/'+id);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonTitle>Gestion de empleados</IonTitle>
            <IonItem>
              <IonButton color='primary' fill='solid' slot='end' size='default' onClick={addEmpleado}>
                <IonIcon icon={add} />
                Agregar empleado
              </IonButton>
            </IonItem>
            <IonGrid className='table'>
              <IonRow >
                <IonCol>Cedula</IonCol>
                <IonCol>Nombres</IonCol>
                <IonCol>Apellidos</IonCol>
                <IonCol>Correo</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>
              {empleados.map((empleado: EmpleadoModel) =>
                <IonRow >
                  <IonCol >{empleado.cedula}</IonCol>
                  <IonCol>{empleado.nombres}</IonCol>
                  <IonCol>{empleado.apellidos}</IonCol>
                  <IonCol>{empleado.correo}</IonCol>
                  <IonCol>
                    <IonButton fill='solid' color='primary'
                    onClick={() => editEmpleado(String(empleado.id))}>
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>
                    <IonButton fill='solid' color='danger' 
                    onClick={() => remove(String(empleado.id))}>
                      <IonIcon icon={close} slot="icon-only" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              )}



            </IonGrid>
          </IonCard>
        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default EmpleadoLista;
