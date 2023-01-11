import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let hotprice = document.getElementsByClassName('hot');
  const fireEmoji='&#128293;';

  for(let i=0; i<hotprice.length; i++){
    hotprice[0].innerHTML+=fireEmoji;
  }

});
