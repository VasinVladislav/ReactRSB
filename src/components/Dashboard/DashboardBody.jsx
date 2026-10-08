import Cards from "./LeftSection/Cards";
import Credits from "./LeftSection/Credits";
import Deposit from "./LeftSection/Deposits";
import BankProduct from "./RightSection/BankProduct";
import { useStyles } from "./style";

export default function DashboardBody() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.main}>
        <div className={classes.mainContainer}>
          <div className={classes.cardsBlock}>
            <Cards />
            <Deposit />
            <Credits />
          </div>
          <BankProduct/>
        </div>
      </div>
    </>
  );
}
