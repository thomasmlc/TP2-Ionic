import { IonContent, IonHeader, IonTitle, IonToolbar, IonApp, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonBadge } from '@ionic/react';
import React from 'react';

import './Home.css';

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonHeader >
        <IonToolbar color="primary">
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

        <IonCard routerLink="/Details">

          <IonImg src="https://www.amc-archi.com/mediatheque/3/2/5/000014523/villa-dubai.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>27/10/2020</IonCardSubtitle>
            <IonCardTitle>Round Villa</IonCardTitle>
            <IonCardSubtitle>7 Avenue du Medoc</IonCardSubtitle>


          </IonCardHeader>

          <IonCardContent>

            <IonBadge > Prix: 38 000 000 €</IonBadge>
            <IonBadge>Rent: 16 000 000 €</IonBadge>
            <IonBadge>4/5</IonBadge>


          </IonCardContent>
        </IonCard>

        <IonCard routerLink="/Details">

          <IonImg src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/25122518/lodge-villa-sofitel-the-palm-dubai-1280x675.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>27/10/2020</IonCardSubtitle>
            <IonCardTitle>Big Villa</IonCardTitle>
            <IonCardSubtitle>8 Avenue du Medoc</IonCardSubtitle>


          </IonCardHeader>

          <IonCardContent>

            <IonBadge > Prix: 48 000 000 €</IonBadge>
            <IonBadge>Rent: 23 000 000 €</IonBadge>
            <IonBadge>4/5</IonBadge>



          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonApp>
  );
};

export default Home;
