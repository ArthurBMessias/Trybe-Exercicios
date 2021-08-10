let newTitle = document.createElement('h3');

let creatNewTitle = document.createTextNode('This is the new title')

newTitle.appendChild(creatNewTitle);

let body = document.querySelector('body');

body.appendChild(newTitle)