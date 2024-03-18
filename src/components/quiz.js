import { useState, useEffect } from 'react';
import { quiz } from '../data/quizdata';
import '../styles/quiz.css';
import songUrl from "../music/soundtrack.mp3";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    const modal = document.getElementById("myModal");
    const modalCloseBtn = document.getElementsByClassName("close")[0];
    
    if (!audioPlayed && activeQuestion > -1) {
      modal.style.display = "block";
    }

    modalCloseBtn.onclick = function() {
      modal.style.display = "none";
    };

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }, [audioPlayed]);

  const playAudio = () => {
    const audio = new Audio(songUrl);
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    audio.play()
      .then(() => {
        console.log('Audio started playing.');
        setAudioPlayed(true);
      })
      .catch(error => console.error('Error playing audio:', error));
  };

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className='quiz-body'>
      <div className="quiz-container">
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
              <span className="total-question">/{addLeadingZero(questions.length)}</span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
          </div>
        )}
      </div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" style={{color:"red"}}>X</span>
          <h1>Would you like to enhance your quiz experience with the epic sounds of the Avatar soundtrack?</h1>
          <button className='btn btn-primary' onClick={playAudio}>Yes, Let's Rock!</button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
