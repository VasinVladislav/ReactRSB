import EntCinema from "./EntertainmentContent/EntCinema";
import EntEvents from "./EntertainmentContent/EntEvents";
import EntGames from "./EntertainmentContent/EntGames";
import EntRestaurants from "./EntertainmentContent/EntRestaurants";

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
