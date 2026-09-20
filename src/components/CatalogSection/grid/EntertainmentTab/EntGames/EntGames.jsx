import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import gameIcon from "../../icons/game.png";

export default function EntGames({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={gameIcon}
        cardTitle={"Гейминг"}
      >
        <CardRow
          prefix={"до"}
          value={"10"}
          suffix={"%"}
          text={"возврат за донаты и игры"}
        />
        <CardColumn topText={"розыгрыши"} botText={"девайсов каждый месяц"} />
      </CardConstructor>
    </>
  );
}
