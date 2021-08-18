window.onload = function() {
let classStates = document.querySelector("#dropdown-state"); // peguei pai do options
let states = [
                            'AC',
                            'AL',
                            'AP',
                            'AM',
                            'BA',
                            'CE',
                            'DF',
                            'ES',
                            'GO',
                            'MA',
                            'MS',
                            'MT',
                            'MG',
                            'PA',
                            'PB',
                            'PR',
                            'PE',
                            'PI',
                            'RJ',
                            'RN',
                            'RS',
                            'RO',
                            'RR',
                            'SC',
                            'SP',
                            'SE',
                            'TO',
                        ];

function addEstados () {
    for (let i = 0; i < states.length; i += 1) {
    let create = document.createElement('option');
    let allStates = states[i]
    classStates.appendChild(create).innerText = allStates;
    classStates.appendChild(create).value = allStates
        }
    }
addEstados();
}