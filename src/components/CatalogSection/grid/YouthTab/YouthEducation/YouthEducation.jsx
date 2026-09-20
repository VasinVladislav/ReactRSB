import CardColumn from "../../CardColumn";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";
import educationIcon from "../../icons/diploma.png";

export default function YouthEducation({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={educationIcon}
        cardTitle={"Кредит на образование"}
      >
        <CardRow value={"3"} suffix={"%"} text={"с господдержкой"} />
        <CardColumn
          topText={"оплата основного долга"}
          botText={"после учебы"}
        />
      </CardConstructor>
    </>
  );
}
