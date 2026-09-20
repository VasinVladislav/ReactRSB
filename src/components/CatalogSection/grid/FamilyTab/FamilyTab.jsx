import FamilyCashback from "./FamilyCashback/FamilyCashback";
import FamilyDeposit from "./FamilyDeposit/FamilyDeposit";
import FamilyKids from "./FamilyKids/FamilyKids";
import FamilyMortgage from "./FamilyMortgage/FamilyMortgage";

export default function FamilyTab({ classes }) {
  return (
    <>
      <FamilyKids classes={classes} />
      <FamilyDeposit classes={classes} />
      <FamilyMortgage classes={classes} />
      <FamilyCashback classes={classes} />
    </>
  );
}
