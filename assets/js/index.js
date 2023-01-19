const btn = document.getElementById('btn-dark');
btn.addEventListener('click', trocar);

let container = document.getElementById('ctn-id');
let body = document.querySelector('body');
let texts = document.getElementById('text-dark');
let contact = document.getElementById('contact-dark');
let footer = document.getElementById('footer-dark');



let imagemAtual = "assets/img/sun.png";

function mudarImagemBotao() {

  let change = document.getElementById("btn-img");
    
  if (imagemAtual === "assets/img/sun.png") {
      change.src = "assets/img/moon.png";
      imagemAtual = "assets/img/moon.png";
    } else {
      change.src = "assets/img/sun.png";
      imagemAtual = "assets/img/sun.png";
    }
}

let textoAtual = "Dark off"

function mudarTxtBotao() {

let changeTxt = document.getElementById('btn-span');

if(textoAtual === "Dark off") {
  changeTxt.textContent = "Dark on"
  textoAtual = "Dark on"
} else {
  changeTxt.textContent = "Dark off"
  textoAtual = "Dark off"
}


}

function mudarLinks() {
  let links = document.querySelectorAll('#link-dark');

  links.forEach(element => {
    element.classList.toggle('link-dark')
  })

}

function trocar(){
  
  btn.classList.toggle('btn-style') 
  body.classList.toggle("dark")
  container.classList.toggle("ctn-dark")
  texts.classList.toggle("texts-dark")
  contact.classList.toggle("contact-dark");
  footer.classList.toggle("dark-p")

  mudarLinks()
  mudarImagemBotao();
  mudarTxtBotao();
}

