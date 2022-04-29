import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Empleado from './Empleado';
import { saveEmpleados, searchEmpleadoById } from './EmpleadoApi';





const EmpleadoEditar: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const routematch: any = useRouteMatch("/page/empleados/:id")
    const [empleado, setEmpleado] = useState<Empleado>({});
    const history = useHistory();
    let id = routematch?.params?.id;
    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {

        if (id === 'new') {
            setEmpleado({});
        }
        else{
            let result = await searchEmpleadoById(id);
            setEmpleado(result);
        }

    }

    const save = async () => {
        await saveEmpleados(empleado);
        history.push('/page/empleados');
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
                        <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>
                        <IonRow>
                            <IonCol>

                            </IonCol>
                            <IonCol>

                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Cedula</IonLabel>
                                    <IonInput type="number" onIonChange={e => empleado.cedula = Number(e.detail.value)}
                                        value={empleado.cedula}> </IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="stacked">Nombres</IonLabel>
                                    <IonInput onIonChange={e => empleado.nombres = String(e.detail.value)}
                                        value={empleado.nombres}> </IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellidos</IonLabel>
                                    <IonInput onIonChange={e => empleado.apellidos = String(e.detail.value)}
                                        value={empleado.apellidos}> </IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="stacked">Correo Electronico</IonLabel>
                                    <IonInput type="email" onIonChange={e => empleado.correo = String(e.detail.value)}
                                        value={empleado.correo}> </IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>






                        <IonItem>
                            <IonButton onClick={save} color='success' fill='solid' slot='end' size='default'>
                                <IonIcon icon={checkmark} />
                                Guardar
                            </IonButton>
                        </IonItem>

                    </IonCard>
                </IonContent>

            </IonContent>
        </IonPage>
    );
};

export default EmpleadoEditar;
