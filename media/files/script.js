const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click", ()=> {
  let rand = Math.random() * 7100;
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate(" + rand + "deg)";

    setTimeout(() => {
    }, 4000);
});
