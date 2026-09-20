import FamilyCashback from "./FamilyContent/FamilyCashback";
import FamilyDeposit from "./FamilyContent/FamilyDeposit";
import FamilyKids from "./FamilyContent/FamilyKids";
import FamilyMortgage from "./FamilyContent/FamilyMortgage";

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
