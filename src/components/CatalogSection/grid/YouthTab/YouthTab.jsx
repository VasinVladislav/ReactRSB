import YouthCard from "./YouthContent/YouthCard";
import YouthEducation from "./YouthContent/YouthEducation";
import YouthSub from "./YouthContent/YouthSub";
import YouthTravel from "./YouthContent/YouthTravel";

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