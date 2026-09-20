import YouthCard from "./YouthCard/YouthCard";
import YouthEducation from "./YouthEducation/YouthEducation";
import YouthSub from "./YouthSub/YouthSub";
import YouthTravel from "./YouthTravel/YouthTravel";

export default function YouthTab({ classes }) {
  return (
    <>
      <YouthCard classes={classes}/>
      <YouthSub classes={classes}/>
      <YouthTravel classes={classes}/>
      <YouthEducation classes={classes}/>
    </>
  );
}