const isValid = (cep) => {
const regex = /0[0-9]{5}-[0-9]{3}$/;
return regex.test(cep);
}

const isExist = () => {
    
}

module.exports = {
    isValid
}