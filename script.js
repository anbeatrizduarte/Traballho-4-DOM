const botaoGerarBotoes = document.getElementById("bttCriarBut");
const iptMax = document.getElementById("iptMax");
const resultado = document.getElementById("resultado");

botaoGerarBotoes.addEventListener('click', () => {
    const buttons = iptMax.value;
    const number = generateRandomNumber(0, buttons - 1);

    for (let i = 0; i != buttons; i++) {
        if (i == number) {
            document.body.appendChild(generateButton(i + 1, true));
            continue;
        };
        document.body.appendChild(generateButton(i + 1, false));
    }
});



function generateButton(buttonName, isButton) {
    const elem = document.createElement('button');
    elem.setAttribute('class', 'box');
    elem.setAttribute('id', buttonName);
    if (isButton) {
        elem.name = buttonName;

        elem.onclick = () => {
            resultado.innerHTML = '<span style="color:green">Parabêns! Você acertou :)</span>';
        }
    } else {
        elem.onclick = () => {
            resultado.innerHTML = '<span style="color:red">Você errou :(</span>';
        }
    }
    elem.innerText = buttonName;
    return elem;
}



function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}