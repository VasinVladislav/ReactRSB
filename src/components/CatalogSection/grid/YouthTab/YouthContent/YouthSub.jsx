import CardConstructor, {CardRow} from "../../CardConstructor";
import subscriptionIcon from "../../icons/sub.png";

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
