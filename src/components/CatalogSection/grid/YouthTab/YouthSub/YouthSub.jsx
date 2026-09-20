import subscriptionIcon from "../../icons/sub.png";
import CardConstructor from "../../CardConstructor";
import CardRow from "../../CardRow";

export default function YouthSub({ classes }) {
  return (
    <>
      <CardConstructor
        classes={classes}
        cardLink={"#"}
        cardIcon={subscriptionIcon}
        cardTitle={"Подписка со скидкой"}
      >
        <CardRow
          value={"0"}
          suffix={"₽"}
          text={"первый месяц за музыку и кино"}
        />
        <CardRow value={"5"} suffix={"%"} text={"кэшбэк на шеринг самокатов"} />
      </CardConstructor>
    </>
  );
}
