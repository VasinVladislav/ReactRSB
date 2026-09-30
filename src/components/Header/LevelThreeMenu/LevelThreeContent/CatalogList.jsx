// Список с предложениями банка

export default function CatalogList({
  classes,
  levelOneTab,
  handleTabChange,
  levelThreeData,
}) {
  return (
    <>
      {/* Третий уровень */}
      <div className={classes.column}>
        {levelThreeData?.map((item) => (
          <button
            key={item.id}
            className={classes.navButton}
            onClick={() => {
              window.open(item.href, "_blank");
              handleTabChange(levelOneTab, null);
            }}
          >
            {item.text}
          </button>
        ))}
      </div>
    </>
  );
}
