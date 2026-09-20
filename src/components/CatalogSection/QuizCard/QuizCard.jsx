import face1 from "../assets/face1.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import up from "../assets/up.png";

export default function QuizCard({ classes }) {
  return (
    <>
      <div className={classes.quizCard}>
        <div className={classes.quizCardTop}>
          <h3>Не знаете какой продукт Вам подойдет?</h3>
          <div className={classes.quizTextBot}>
            <p>
              Пройдите интерактивный квиз и узнайте, чего Вы хотите на самом
              деле{" "}
            </p>
            <img src={up} alt="" />
          </div>
        </div>
        <div className={classes.quizFooter}>
          <div className={classes.avatarStack}>
            <img src={face1} className={classes.circle} alt="" />
            <img src={face2} className={classes.circle} alt="" />
            <img src={face3} className={classes.circle} alt="" />
          </div>
          <button className={classes.quizBtn}>
            <div className={classes.quizCounter}>158+</div>
            <div className={classes.quizText}>Проходят квиз прямо сейчас</div>
          </button>
        </div>
      </div>
    </>
  );
}
