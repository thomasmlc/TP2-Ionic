import { IonContent, IonHeader, IonTitle, IonButtons, IonToolbar, IonApp, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonBadge, IonBackButton } from '@ionic/react';
import React from 'react';

const Details: React.FC = () => {
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
                <IonCard routerLink="/Details">

                    <IonImg src="https://www.meretdemeures.com/media/CACHE/images/uploads/266633a4-2bc7-4e68-9972-eec27115a191/157927bba9bdb6c2dc253bbf320def85.jpg" />
                    <IonCardHeader>
                        <IonCardSubtitle>27/10/2020</IonCardSubtitle>
                        <IonCardTitle>White Villa</IonCardTitle>
                        <IonCardSubtitle>6 Avenue du Medoc</IonCardSubtitle>


                    </IonCardHeader>

                    <IonCardContent>

                        <IonBadge > Prix: 28 000 000 €</IonBadge>
                        <IonBadge>Rent: 14 000 000 €</IonBadge>
                        <IonBadge>4/5</IonBadge>




                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonApp>
    );
};

export default Details