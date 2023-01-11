const maxCharacterCodes = 65534;
const startEncrypt = () => { // Empezamos la Encriptacion
    let valor = document.getElementById('valores').value; // Obtenemos el valor el cual vamos a encriptar
    if (valor.length > 0) { // Se comprueba que no este vacio
        console.log(String.fromCharCode(55357));
        const codes = convertCharCode(valor); // Convertimos los valores a codigos de caracter
        //const newCodes = codes.map(e => { return e + 1}); 
        const getMethods = getMethodsEncryptable(); // Obtenemos los metodos los cuales vamos a encriptar
        let encrypLvl1Var = encryptLvl1(getMethods, codes); // Hacemos la encriptacion de "nivel 1"

        let encryptationEnd = unionEncrypted(getMethods.numbers, encrypLvl1Var);
        document.getElementById('result').innerText = "Encriptacion: " + encryptationEnd;
        //console.log(codes);

        desencriptableValue(encryptationEnd);
    }else {
        console.log("No puedes dejar espacios en blanco");
    }
}

const convertCharCode = (valores) => {
    let map = Array.prototype.map;
    return map.call(valores, (char) => { return char.charCodeAt(0); });
}

const desconvertCharCode = (valores) => {
    let map = Array.prototype.map;
    return map.call(valores, (char) => { return String.fromCharCode(char) })
}
const getNumsRandom = (min, max) => { return Math.floor(Math.random() * (max-min) + min); }

const getMethodsEncryptable = () => {
    const methods = [
        120, // Suma
        121, // Multiplicacion
    ];
    return {
        methods: [
            methods[getNumsRandom(0, 1)],
            // methods[getNumsRandom(0, 1)],
        ],
        numbers: [
            getNumsRandom(100, 1000),
            // getNumsRandom(100, 10000),
        ],
    }
}

const encryptLvl1 = (methods, codes) => {
    return codes.map(code => {
        let num = methods.numbers[0];
        return code + num;
    });
}

const unionEncrypted = (number, valuesEncrypter) => {
    const numberConvert = (desconvertCharCode(number).toString()).replace(/,/g, '');
    const valuesConvert = (desconvertCharCode(valuesEncrypter).toString()).replace(/,/g, '');
    return valuesConvert + numberConvert;
};



const desencriptableValue = (value) => {
    const numberDesc = convertCharCode([value[value.length - 1]])[0];
    const arrayValues = convertCharCode(Array.from(value)).slice(0, value.length -1); // Obtenemo el array con todos los valores y sin el numero de conversion
    
    const descCharCode = desconvertCharCode(proccessDescEncript(arrayValues, numberDesc));
    
    const valueDescEncript = (descCharCode.toString()).replace(/,/g, '');

    console.log(value);
}

const proccessDescEncript = (values, number) => {
    return values.map(value => {
        return value - number;
    });
}