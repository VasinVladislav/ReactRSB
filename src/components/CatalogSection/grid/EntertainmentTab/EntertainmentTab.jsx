import EntCinema from "./EntCinema/EntCinema";
import EntEvents from "./EntEvents/EntEvents";
import EntGames from "./EntGames/EntGames";
import EntRestaurants from "./EntRestaurants/EntRestaurants";

export default function EntertainmentTab({ classes }) {
  return (
    <>
      <EntCinema classes={classes} />
      <EntGames classes={classes} />
      <EntRestaurants classes={classes} />
      <EntEvents classes={classes} />
    </>
  );
}
