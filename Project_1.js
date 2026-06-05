const quotes = [
  "Believe in yourself and all that you are.",
  "Success is the sum of small efforts repeated daily.",
  "Dream big, work hard, stay focused.",
  "Every day is a new opportunity to grow.",
  "Mistakes are proof that you are trying.",
  "Stay positive, work hard, and make it happen.",
  "Your only limit is your mindset.",
  "Progress is better than perfection.",
  "Difficult roads often lead to beautiful destinations.",
  "Do something today that your future self will thank you for.",
  "The best way to predict the future is to create it.",
  "Never stop learning because life never stops teaching.",
  "Small steps every day lead to big results.",
  "Success begins at the end of your comfort zone.",
  "Focus on the goal, not the obstacles.",
  "Hard work beats talent when talent doesn't work hard.",
  "Stay patient and trust your journey.",
  "Great things take time, keep going.",
  "You are stronger than you think.",
  "Consistency is the key to success."
];
const button=document.getElementById("second");
const h1=document.querySelector("h1");
button.addEventListener("click",()=>
{
    const index=Math.floor(Math.random()*20);
    h1.textContent=quotes[index];
})