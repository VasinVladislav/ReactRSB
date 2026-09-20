import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import cinemaIcon from "../../icons/cinema.png";

export default function EntCinema({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={cinemaIcon}
        cardTitle={"Кино и театры"}
      >
        <CardRow value={"15"} suffix={"%"} text={"кэшбэк на покупку билетов"} />
        <CardColumn topText={"2 по цене 1"} botText={"в кино по средам"} />
      </CardConstructor>
    </>
  );
}
