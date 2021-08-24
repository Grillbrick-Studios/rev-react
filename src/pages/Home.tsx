import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useBible } from "../hooks";
//import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const bible = useBible();
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
        <div>{JSON.stringify(bible)}</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
