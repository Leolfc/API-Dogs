




async function dogs() {
  try {
    const mostraDog = await fetch("https://dog.ceo/api/breeds/image/random");
    const imgDog = await mostraDog.json();
    const imagem = document.createElement("img");
    const botaoGerar = document.createElement('button')
    const elementoPai = document.querySelector(".container");
    imagem.classList='minha-Imagem'
    imagem.src = imgDog.message;
  elementoPai.appendChild(imagem);
    elementoPai.appendChild(botaoGerar);
    botaoGerar.classList='botaoAtualizar'
    botaoGerar.innerHTML='Atualizar'
    
    botaoGerar.addEventListener('click', ()=>{
      location.reload();
    })

  } catch (erro) {
    console.log("DEU ERRO", erro);
  }
}




dogs();
