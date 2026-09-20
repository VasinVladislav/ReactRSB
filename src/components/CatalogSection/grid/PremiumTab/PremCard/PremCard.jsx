import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import metalIcon from "../../icons/metal.png";

export default function PremCard({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={metalIcon}
        cardTitle={"Премиальная металлическая"}
      >
        <CardColumn topText={"безлимитный"} botText={"доступ в бизнес-залы"} />
        <CardColumn topText={"выделенная линия"} botText={"поддержки 24/7"} />
      </CardConstructor>
    </>
  );
}
