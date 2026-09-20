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
export function CardRow({ prefix, value, suffix, text }) {
  return (
    <>
      <div className="cardRow">
        <div className="card-number-row">
          <span>{prefix}</span>
          <span className="digit">{value}</span>
          <span className="sign">{suffix}</span>
        </div>
        <span className="text">{text}</span>
      </div>
    </>
  );
}
export function CardColumn({ topText, botText }) {
  return (
    <>
      <div className="cardColumn">
        <span>
          <b>{topText}</b>
        </span>
        <span>{botText}</span>
      </div>
    </>
  );
}
