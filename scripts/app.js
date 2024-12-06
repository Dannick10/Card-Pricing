const card = document.querySelector(".card");
function handleMouseMove(e) {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  const angle = (Math.atan2(yAxis, xAxis) * 180) / Math.PI;

  card.style.background = `linear-gradient(${angle}deg, #1E1E1E 60%, #C01C1C 130%)`;
}
function handleChangeMsg(elements, scale = 0) {
  elements?.forEach((element) => {
    element.style.transition = "transform 0.5s ease";
    element.style.transform = `scale(${scale})`;
  });
}

function verifyMoney() {
  const money = document.querySelector(".money");
  const moneyValue = parseFloat(money.textContent);
  const allCardElements = [...document.querySelectorAll(".card *")];

  if (moneyValue <= 0) {
    prisonMsg();
  } else {
    handleChangeMsg(allCardElements);
    setTimeout(renderMsg, 1000);
  }
}

function prisonMsg() {
  card.innerHTML = `
      <div class="card-body prison">
        <div class="msg">
          <div class="logo">
            <img src="public/Logo.png" alt="" />
          </div>
          <div class="card-body">
            <p>Arrested 👮</p>
          </div>
        </div>
      </div>
    `;
}

function renderMsg() {
  card.innerHTML = `
    <div class="msg">
      <div class="logo">
        <img src="public/Logo.png" alt="" />
      </div>
      <div class="card-body">
        <p>You don't have money</p>
        <button class="btn">Go Back</button>
      </div>
    </div>
  `;

  const allMsgElements = [...document.querySelectorAll(".card-body *")];
  document.querySelector(".btn").addEventListener("click", () => {
    handleChangeMsg(allMsgElements);
    setTimeout(renderCard, 1000);
  });
}
function renderCard() {
  card.innerHTML = `
    <div class="card-head">
      <div class="logo">
        <img src="public/Logo.png" alt="" />
        <span class="badge">Premium</span>
      </div>
      <div class="price">
        <h3 class="money">$75 <span>/mo</span></h3>
      </div>
      <span class="line"></span>
    </div>
    <div class="card-body">
      <p class="subtitle-info">Premium Frontend Challenge</p>
      <p class="subtitle-acess">1 Month of Access</p>
      <ul>
        <li><span><img src="/public/SVGRepo_iconCarrier.svg" alt="" /></span> 
            Tackle advanced-level frontend projects that simulate real-world development environments.</li>
        <li><span><img src="/public/SVGRepo_iconCarrier.svg" alt="" /></span> 
            Tackle advanced-level frontend projects that simulate real-world development environments.</li>
        <li><span><img src="/public/SVGRepo_iconCarrier.svg" alt="" /></span> 
            Tackle advanced-level frontend projects that simulate real-world development environments.</li>
      </ul>
      <button class="btn">Get Started</button>
    </div>
  `;

  const allCardElements = [...document.querySelectorAll(".card *")];
  document.querySelector(".btn").addEventListener("click", () => {
    handleChangeMsg(allCardElements);
    verifyMoney();
  });
}

card.addEventListener("mousemove", handleMouseMove);
document.querySelector(".btn").addEventListener("click", () => {
  verifyMoney();
});
