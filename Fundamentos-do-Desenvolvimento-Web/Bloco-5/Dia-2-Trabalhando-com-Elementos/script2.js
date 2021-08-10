function brotherFather () {
    let father = document.querySelector('#pai');
    let createUncle = document.createElement('section');
    father.appendChild(createUncle);
}
brotherFather()

function deleteFather () {
    let father = document.querySelectorAll('.list-my-sons');
    for (let i = 0; i < father.length; i += 1){
        let item = father[i];
            if (item.innerText.includes ('conteudo,string que quero excluir')) {
                createUncle.removeChild(item)
            }
    }
}
deleteFather()