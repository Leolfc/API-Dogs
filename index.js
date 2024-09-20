




async function dogs() {
  try {
    const mostraDog = await fetch("https://dog.ceo/api/breeds/image/random");
    const imgDog = await mostraDog.json();
    const imagem = document.createElement("img");
    const botaoGerar = document.createElement('button')
    
    imagem.classList='minha-Imagem'
    imagem.src = imgDog.message;
    imagem.style.flex='1 1 auto';
    imagem.style.width = "100%";
    imagem.src = imgDog.message;
    document.body.appendChild(imagem);
    document.body.appendChild(botaoGerar);
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
