import PremCard from "./PremCard/PremCard";
import PremCashback from "./PremCashback/PremCashback";
import PremConcierge from "./PremConcierge/PremConcierge";
import PremWealth from "./PremWealth/PremWealth";

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
