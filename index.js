const express = require("express");
const bodyParser = require("body-parser");
const questions = require("./questions");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get("/questions", (req, res) => {
  const AllQuestions = [];
  questions.map((que) => {
    AllQuestions.push({
      question: que.question,
      options: que.options,
    });
  });
  res.json(AllQuestions);
});

app.post("/submit", (req, res) => {
  const submittedAnswers = req.body.answers;
  let score = 0;
  const feedback = [];

  submittedAnswers.forEach((submittedAnswer) => {
    const question = questions.find(
      (q) => q.question === submittedAnswer.question
    );
    if (question && question.answer === submittedAnswer.answer) {
      score++;
      feedback.push({
        question: question.question,
        correct: true,
        correctAnswer: question.answer,
      });
    } else {
      feedback.push({
        question: question.question,
        correct: false,
        correctAnswer: question.answer,
        wrongAnswer: submittedAnswer.answer,
      });
    }
  });

  res.json({ score, feedback });
});

app.listen(port, () => {
  console.log(`Quiz app listening at http://localhost:${port}`);
});
