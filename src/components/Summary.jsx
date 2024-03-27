import Img from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";
import Answer from "./Answer.jsx";

export default function Summary({ userAnswers }) {
  const skippedAnswer = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  const skippedAnswerShare = Math.round(
    (skippedAnswer.length / userAnswers.length) * 100
  );
  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = 100 - correctAnswerShare - skippedAnswerShare;
  return (
    <div id="summary">
      <img src={Img} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped...</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Answered Correctly...</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Answered Incorrectly...</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="user-answer">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
