import { useStyles } from "./style";
import detailsTransfer from "../assets/detailsTransfer.png";
import Invoices from "../assets/Invoices.png";
import phone from "../assets/phone.png";
import phoneTransfer from "../assets/phoneTransfer.png";

export default function BankProduct() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bankProduct}>
        <div className={classes.bankProductContainer}>
          <div className={classes.bankProductItem}>
            <img className={classes.productImg} src={Invoices} alt="" />
            Счета на оплату
          </div>
          <div className={classes.bankProductItem}>
            <img className={classes.productImg} src={phoneTransfer} alt="" />{" "}
            Перевести по телефону
          </div>
          <div className={classes.bankProductItem}>
            <img className={classes.productImg} src={detailsTransfer} alt="" />{" "}
            Перевести по реквизитам
          </div>
          <div className={classes.bankProductItem}>
            <img className={classes.productImg} src={phone} alt="" /> Оплатить
            мобильный
          </div>
        </div>
        <div className={classes.bankProductContainer}></div>
      </div>
    </>
  );
}
