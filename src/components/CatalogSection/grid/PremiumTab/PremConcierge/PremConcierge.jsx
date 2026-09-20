import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import conciergeIcon from "../../icons/concierge.png";

export default function PremConcierge({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={conciergeIcon}
        cardTitle={"Консьерж-сервис"}
      >
        <CardColumn
          topText={"любые поручения:"}
          botText={"от билетов до аренды авто"}
        />
        <CardColumn
          topText={"страхование"}
          botText={"в поездках до $100 000"}
        />
      </CardConstructor>
    </>
  );
}
