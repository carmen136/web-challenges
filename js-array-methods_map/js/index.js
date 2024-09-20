console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});

console.log(lowerCaseAnswers);


const questionsAndAnswersTogether = cards.map((card) => {
  return `${card.question} - ${card.answer}`;
}); // ["How often can I use <header>? - As often as you like.", ...]

console.log(questionsAndAnswersTogether);


const questionAndAnswer = cards.map((card) => {
  return {question: card.question, answer: card.answer};
}); // hier solen mit question und answer Objekte entstehen

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer }; // ist nur für den Test da -> npm run test

console.log(questionAndAnswer);


// In the `./index.js` file, there is a `cards` array with three objects.

// Below this array, you will find a couple of variables (e.g. `lowerCaseAnswers`). They all are initialized with `null`.

// And now it's your turn: delete the value `null` and write code such that the variables have a value corresponding to their name. Use `map` to achieve this goal.

// You will find some hints as comments.
