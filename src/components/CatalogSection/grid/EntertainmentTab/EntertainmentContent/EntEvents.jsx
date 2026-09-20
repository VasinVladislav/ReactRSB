import CardConstructor, {CardColumn} from "../../CardConstructor";
import festIcon from "../../icons/fest.png";

export default function EntEvents({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={festIcon}
        cardTitle={"Концерты и фесты"}
      >
        <CardColumn
          topText={"ранний доступ"}
          botText={"к предзаказу билетов"}
        />
        <CardColumn
          topText={"проход без очереди"}
          botText={"по QR-коду банка"}
        />
      </CardConstructor>
    </>
  );
}
