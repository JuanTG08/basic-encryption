const startDesencrypt = () => {
    let value = document.getElementById('desc').value;
    let desencriptableVal = desencriptableValue(value);
    document.getElementById('result').innerText = "Desencriptacion: " + desencriptableVal;
}

const convertCharCode = (valores) => {
    let map = Array.prototype.map;
    return map.call(valores, (char) => { return char.charCodeAt(0); });
}

const desconvertCharCode = (valores) => {
    let map = Array.prototype.map;
    return map.call(valores, (char) => { return String.fromCharCode(char) })
}

const desencriptableValue = (value) => {
    const numberDesc = convertCharCode([value[value.length - 1]])[0];
    const arrayValues = convertCharCode(Array.from(value)).slice(0, value.length -1); // Obtenemo el array con todos los valores y sin el numero de conversion
    
    const descCharCode = desconvertCharCode(proccessDescEncript(arrayValues, numberDesc));
    
    const valueDescEncript = (descCharCode.toString()).replace(/,/g, '');

    console.log(valueDescEncript);
    return valueDescEncript;
}

const proccessDescEncript = (values, number) => {
    return values.map(value => {
        return value - number;
    });
}