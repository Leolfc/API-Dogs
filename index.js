async function dogs() {
  try {
    const mostraDog = await fetch("https://dog.ceo/api/breeds/image/random");
    const imgDog = await mostraDog.json();
    const imagem = document.createElement("img");
    imagem.src = imgDog.message;
    imagem.style.flex='1 1 auto';
    imagem.style.width = "100%";
   
    imagem.src = imgDog.message;
    document.body.appendChild(imagem);
  } catch (erro) {
    console.log("DEU ERRO", erro);
  }
}

dogs();
