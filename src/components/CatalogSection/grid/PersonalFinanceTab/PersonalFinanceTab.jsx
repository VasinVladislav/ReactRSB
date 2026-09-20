import PersonalCredit from "./PersonalFinanceContent/PersonalCredit";
import PersonalDebit from "./PersonalFinanceContent/PersonalDebit";
import PersonalInvest from "./PersonalFinanceContent/PersonalInvest";
import PersonalLoan from "./PersonalFinanceContent/PersonalLoan";

export default function PersonalFinanceTab({ classes }) {
  return (
    <>
        <PersonalCredit classes={classes} />
        <PersonalDebit classes={classes} />
        <PersonalLoan classes={classes} />
        <PersonalInvest classes={classes} />
    </>
  );
}
