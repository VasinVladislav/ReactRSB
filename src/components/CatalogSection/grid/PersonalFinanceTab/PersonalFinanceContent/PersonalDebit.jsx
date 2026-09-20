import CardConstructor, {CardRow} from "../../CardConstructor";
import cardIcon from "../../icons/card.png";

export default function PersonalDebit({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={cardIcon}
        cardTitle={"Дебетовая карта"}
      >
        <CardRow
          prefix={"до"}
          value={"30"}
          suffix={"%"}
          text={"кэшбэк у партнеров"}
        />
        <CardRow
          value={"0"}
          suffix={"₽"}
          text={"за снятие в любых банкоматах"}
        />
      </CardConstructor>
    </>
  );
}
