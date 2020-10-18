import { IonContent, IonMenu, IonItem, IonInput, IonItemDivider, IonModal, IonButton, IonHeader, IonFab, IonFabButton, IonIcon, IonTitle, IonToolbar, IonApp, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonBadge, IonNav, IonList, IonGrid, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import { add } from 'ionicons/icons';

import './Home.css';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonApp>
      <IonHeader >
        <IonToolbar color="primary">
          <IonTitle>Invesment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)} color="secondary">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <IonList>
            <IonItemDivider color="primary">Add new villa</IonItemDivider>
            <IonItem>
              <IonInput placeholder="Nom"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Prix €"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Surface m²"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Prix des rénovations €"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Loyer €"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Temps de vacances (mois)"></IonInput>
            </IonItem>
            <IonItem>
              <IonInput placeholder="Photo (Lien)"></IonInput>
            </IonItem>
          </IonList>
          <IonGrid>
            <IonRow>
              <IonButton onClick={() => setShowModal(false)}>Add</IonButton>
              <IonButton color="danger" onClick={() => setShowModal(false)}>Cancel</IonButton>
            </IonRow>
          </IonGrid>


        </IonModal>

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
            <IonBadge>5/5</IonBadge>
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
            <IonBadge>3/5</IonBadge>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonApp>
  );
};

export default Home;
