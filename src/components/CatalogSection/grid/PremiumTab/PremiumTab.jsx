import PremCard from "./PremiumContent/PremCard";
import PremCashback from "./PremiumContent/PremCashback";
import PremConcierge from "./PremiumContent/PremConcierge";
import PremWealth from "./PremiumContent/PremWealth";

export default function PremiumTab({ classes }) {
  return (
    <>
      <PremCard classes={classes} />
      <PremConcierge classes={classes} />
      <PremCashback classes={classes} />
      <PremWealth classes={classes} />
    </>
  );
}
