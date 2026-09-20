import CardConstructor, {CardRow, CardColumn} from "../../CardConstructor";
import marketIcon from "../../icons/market.png";

export default function FamilyCashback({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={marketIcon}
        cardTitle={"Супермаркеты"}
      >
        <CardRow
          value={"5"}
          suffix={"%"}
          text={"повышенный кэшбэк на продукты"}
        />
        <CardColumn topText={"до 5 000 ₽"} botText={"лимит возврата в месяц"} />
      </CardConstructor>
    </>
  );
}
