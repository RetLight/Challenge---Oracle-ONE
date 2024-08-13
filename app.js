const input = document.querySelector(".userText")
const output = document.querySelector(".encrypted")

const textNegrita = document.querySelector(".textNegrita")
const textSin = document.querySelector(".textSin")
const timmy = document.querySelector(".timmy")
const copyButton = document.querySelector(".copy")

const noc = document.querySelector(".aux")

noc.classList.add("hidden")

function btnEncrypt (){
    const text = input.value
    let aux = Encrypt(text)
    output.textContent = aux
    updateVisibility(aux)
}

function btnDesencrypt () {
    const text = input.value
    let aux = Desencrypt(text)
    output.textContent = aux
    updateVisibility(aux)
}

function updateVisibility (text) {
    if(text) {
        textNegrita.classList.add("hidden")
        textSin.classList.add("hidden")
        timmy.classList.add("hidden")
        noc.classList.remove("hidden")
    }else{
        textNegrita.classList.remove("hidden")
        textSin.classList.remove("hidden")
        timmy.classList.remove("hidden")
        noc.classList.add("hidden")
    }
}

function Encrypt (text){
    const aux = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }

    let ans = ''

    for (let i = 0; i < text.length; i++) {
        if (aux[text[i]]){
            ans += aux[text[i]]
        }else{
            ans += text[i]
        }
    }

    return ans
}

function Desencrypt (text){
    const aux = {
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober:'o',
        ufat: 'u'
    }

    let ans = text

    Object.keys(aux).forEach(clave => {
        const regex = new RegExp(clave, 'g')
        ans = ans.replace(regex, aux[clave])
    })

    return ans
}

function copy () {
    const textToCopy = output.textContent;
    
    if (textToCopy) {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);
        
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999);
        
        document.execCommand("copy");
        
        document.body.removeChild(tempTextArea);
    }
}

copyButton.addEventListener("click", copy);