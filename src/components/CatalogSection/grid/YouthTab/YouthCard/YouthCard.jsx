import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import youthIcon from "../../icons/youth.png";

export default function YouthCard({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={youthIcon}
        cardTitle={"Молодежная карта"}
      >
        <CardRow value={"10"} suffix={"%"} text={"кэшбэк на фастфуд и кафе"} />
        <CardColumn topText={"в подарок"} botText={"стикерпак на телефон"} />
      </CardConstructor>
    </>
  );
}
