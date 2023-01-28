// elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")

// funções
const getletterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
const getletterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*-+\|";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getletterLowerCase, getletterUpperCase, getNumber, getSymbol) => {
    let password = ''

    const passwordLength = 10

    const generators = [
        getletterLowerCase,
        getletterUpperCase,
        getNumber,
        getSymbol
    ]
    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomvalue = generators[Math.floor(Math.random() * generators.length)]()

            password +=randomvalue
        })
    }
    password = password.slice(0, passwordLength);

    generatePasswordElement.style.display = "block"
    generatePasswordElement.querySelector('h4').innerText = password;
}

// eventos
generatePasswordButton.addEventListener('click', () => {
    generatePassword(getletterLowerCase, getletterUpperCase, getNumber, getSymbol);
})