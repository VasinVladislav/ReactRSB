export default function CardRow({ prefix, value, suffix, text }) {
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
