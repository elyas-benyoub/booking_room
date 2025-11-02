import "./App.css";
import Card from "./components/Card";
import Warn from "./components/Warn";

export default function App() {
  const textRight = "Tu as reçu un code de session ? Il te suffit de le saisir pour rejoindre ton match de foot à 5 ! En quelques secondes, tu retrouvestes amis ou d’autres joueurs prêts à en découdre sur le terrain. Pasbesoin d’organiser, juste entre le code, valide, et profite du jeu !"
  const textLeft = "Envie de jouer ? Lance ta propre session de foot ! Définis ton match, partage ton code et rassemble ton équipe en un rien de temps. Organiser un foot n’a jamais été aussi simple — tu choisis, tu invites, tu joues !"
  return (
  
    <div className="flex flex-col w-full">
   
      <div className="flex flex-row w-full justify-evenly">
        <Card text ={textLeft}imgUrl={"src/assets/create.png"} btn={"Créer une session"} />
        <Card text={textRight}imgUrl={"src/assets/join.png"} btn={"Rejoindre une session"} />
      </div>
       <Warn/>
    </div>
  );
}

// export default App;
