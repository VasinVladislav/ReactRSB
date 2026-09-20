import CardConstructor, {CardRow, CardColumn} from "../../CardConstructor";
import restaurantIcon from "../../icons/restaurant.png";

export default function EntRestaurants({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={restaurantIcon}
        cardTitle={"Рестораны"}
      >
        <CardRow
          prefix={"до"}
          value={"20"}
          suffix={"%"}
          text={"скидка на бронь столов"}
        />
        <CardColumn topText={"бесплатный комплимент"} botText={"от шефа"} />
      </CardConstructor>
    </>
  );
}
