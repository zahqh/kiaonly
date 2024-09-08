const yesBtn = document.querySelector(".yes-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "😍😘💋❤️";
  gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJjcWxucng2OWozc3E0emc1ejducG1mOHI4ejJjenA3aTM4M3Y4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CovYKTrzRJeUNnOhb6/giphy.gif";
});
;

   
