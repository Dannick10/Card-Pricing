const card = document.querySelector(".card");
const allCards = [...document.querySelectorAll(".card *")]
const btn = document.querySelector(".btn");
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  let angle = (Math.atan2(yAxis, xAxis) * 180) / Math.PI;

  card.style.background = `linear-gradient(${angle}deg, #1E1E1E 60%, #C01C1C 130%)`;
});


btn.addEventListener("click", ()=> {
    allCards.map((card) => {
        card.style.transition = "transform 0.5s ease";
        card.style.transform = "scale(0) rotate(120deg)";
    })

    setTimeout(() => {
        allCards.map((card) => {
            card.style.transition = "transform 0.5s ease";
            card.style.transform = "scale(1)";
        })
    }, 500);
})

const RenderCard = () => {
    card.innerHTML = `<div class="card-head">
    <div class="logo">
      <img src="public/Logo.png" alt="" />
      <span class="badge">Premium</span>
    </div>
    <div class="price">
      <h3>$75 <span>/mo</span></h3>
    </div>
    <span class="line"></span>
  </div>
  <div class="card-body">
    <p class="subtitle-info">Premium Frontend Challenge</p>
    <p class="subtitle-acess">1 Mouth of Acess</p>
    <ul>
      <li>
        <span><img src="/public/SVGRepo_iconCarrier.svg" alt="" /></span>
        Tackle advanced-level frontend projects that simulate real-world
        development environments.
      </li>
      <li>
        <span><img src="/public/SVGRepo_iconCarrier.svg" alt="" /></span>
        Tackle advanced-level frontend projects that simulate real-world
        development environments.
      </li>
      <li>
        <span><img src="/public/SVGRepo_iconCarrier.svg" alt="" /></span>
        Tackle advanced-level frontend projects that simulate real-world
        development environments.
      </li>
      <button class="btn">Get Started</button>
    </ul>
  </div>`
}