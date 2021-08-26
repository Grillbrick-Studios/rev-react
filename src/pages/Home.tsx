import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ChapterView } from "../components";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonMenu side="start" menuId="main">
        <IonHeader>
          <IonTitle>REV App</IonTitle>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Bible</IonItem>
            <IonItem>Appendix</IonItem>
            <IonItem>Commentary</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonTitle>REV App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome to the REV</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ChapterView book="Genesis" chapter={1} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
