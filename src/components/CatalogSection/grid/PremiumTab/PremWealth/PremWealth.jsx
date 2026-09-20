import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import goldIcon from "../../icons/gold.png";

export default function PremWealth({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={goldIcon}
        cardTitle={"Управление капиталом"}
      >
        <CardColumn topText={"персональный"} botText={"финансовый советник"} />
        <CardColumn topText={"доступ"} botText={"к закрытым фондам и IPO"} />
      </CardConstructor>
    </>
  );
}
