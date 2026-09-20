import CardConstructor, {CardRow} from "../../CardConstructor";
import travelIcon from "../../icons/palm.png";

export default function YouthTravel({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={travelIcon}
        cardTitle={"Путешествия"}
      >
        <CardRow
          prefix={"до"}
          value={"7"}
          suffix={"%"}
          text={"авиабилеты с кэшбэком"}
        />
        <CardRow
          value={"0"}
          suffix={"₽"}
          text={"за переводы по СБП без лимитов"}
        />
      </CardConstructor>
    </>
  );
}
