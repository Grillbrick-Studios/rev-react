import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { ChapterView } from "../components";
import "./Home.css";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>REV App</IonTitle>
          <IonSearchbar
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
            placeholder="Enter Verse"
            inputmode="search"
            enterkeyhint="go"
            autocomplete="on"
            animated
            autocorrect="on"
          />
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
