export async function buyGame() {

    const buyGame = document.querySelector(".buygame");

    if (buyGame) {
      buyGame.innerHTML = `
      <div class="checkout"><img src="/images/furious-front.png" alt="gamer in front of a computer"></img></div>
<table>
  <thead>
    <tr>
      <th colspan="2">Checkout</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Price:</td>
      <td>$11.99</td>
    </tr>
    <tr>
    <td>Discount:</td>
    <td>$3.69</td>
  </tr>
  <tr>
  <td>Total:</td>
  <td>$8.30</td>
</tr>
  </tbody>
</table>

                                `;
} else {
    //This console error is for developers:
      console.error('buygame not found in the HTML');
  }
}

{/* <div><p>Price: $11.99</div>
<div><p>Discount: $3.69</div>
<div><p>Total: $8.30</div> */}