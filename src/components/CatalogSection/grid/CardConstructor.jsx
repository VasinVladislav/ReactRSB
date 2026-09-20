export default function CardConstructor({
  classes,
  cardLink,
  cardIcon,
  cardTitle,
  children,
}) {
  return (
    <>
      <div className={classes.card}>
        <a href={cardLink} className={classes.cardHref}>
          <div className={classes.cardHeader}>
            <img src={cardIcon} />
            <h3>{cardTitle}</h3>
          </div>
          <div className={classes.cardContent}>{children}</div>
        </a>
      </div>
    </>
  );
}
