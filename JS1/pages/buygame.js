export async function buyGame() {

    const buyGame = document.querySelector(".buygame");

    if (buyGame) {
      buyGame.innerHTML = `
      <div class="checkout"><img src="/images/furious-front.png" alt="gamer in front of a computer"></img></div>
<div><p>Price: $11.99</div>
<div><p>Discount: $3.69</div>
<div><p>Total: $8.30</div>
                                `;
} else {
    //This console error is for developers:
      console.error('buygame not found in the HTML');
  }
}
