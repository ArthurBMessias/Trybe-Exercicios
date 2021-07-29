// Para aplicar o que aprendi até agora, irei retirar Feijão e adicionar Batata Frita e Carne =D

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let index = groceryList.indexOf('Feijão');
if (index > -1) {
    groceryList.splice(index, 1);
    console.log(groceryList);
}

groceryList.push ('Batata Frita', 'Carne');
    for (ind = 0; ind < groceryList.length; ind += 1) {
        let iNeedBuy = 'Eu preciso compra ' + groceryList[ind];
            console.log(iNeedBuy);
    }