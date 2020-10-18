import { IonContent, IonHeader, IonTitle, IonButtons, IonToolbar, IonApp, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonBadge, IonBackButton } from '@ionic/react';
import React from 'react';

const Add: React.FC = () => {
    return (
        <IonApp>

            <IonHeader >

                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Invesment</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

            </IonContent>
        </IonApp>
    );
};

export default Add