// قائمه الجمل
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  "Don’t let yesterday take up too much of today.",
  "You learn more from failure than from success. Don’t let it stop you.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "Be yourself; everyone else is already taken.",
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "So many books, so little time.",
  "A room without books is like a body without a soul.",
  "If you tell the truth, you don't have to remember anything.",
  "Always forgive your enemies; nothing annoys them so much.",
  "You only live once, but if you do it right, once is enough.",
];
// ايجاد العناصر ف ال html
const quoteButton = document.getElementById("quoteButton");
const quoteButton2 = document.getElementById("quoteButton2");
const quoteDisplay = document.getElementById("quoteDisplay");

// وظيفه لعرض جمل عشوائيه
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
}

// اظافه event listener علي الزر
quoteButton.addEventListener("click", showRandomQuote);
quoteButton2.addEventListener("click", showRandomQuote);
