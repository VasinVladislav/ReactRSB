import { useStyles } from "./style";

export default function LevelOne({
  levelOneData,
  levelOneTab,
  handleTabChange,
}) {
  const classes = useStyles();

  return (
    <>
      <nav className={classes.topNav}>
        {levelOneData?.map((menu) => (
          <button
            key={menu.id}
            className={`${classes.navButton} ${levelOneTab === menu.name ? classes.active : ""}`}
            onClick={() => handleTabChange(menu.name, null)}
          >
            {menu.text}
          </button>
        ))}
      </nav>
    </>
  );
}
