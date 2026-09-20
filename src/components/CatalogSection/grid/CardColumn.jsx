export default function CardColumn({ topText, botText }) {
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
