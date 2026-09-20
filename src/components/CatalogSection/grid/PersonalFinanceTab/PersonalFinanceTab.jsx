import PersonalCredit from "./PersonalCredit/PersonalCredit";
import PersonalDebit from "./PersonalDebit/PersonalDebit";
import PersonalInvest from "./PersonalInvest/PersonalInvest";
import PersonalLoan from "./PersonalLoan/PersonalLoan";

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
