

export async function homePage() {

    const homeContent = document.querySelector(".homeContent");

    if (homeContent) {
      homeContent.innerHTML = `
<div><img src="/images/gamer.jpg" alt="gamer in front of a computer"></img></div>
<br>
<div><button class="productsbutton" onclick="window.location.href ='./products/'">Visit our products</button></div>
                                `;
} else {
    //This console error is for developers:
      console.error('homeContent not found in the HTML');
  }
}
