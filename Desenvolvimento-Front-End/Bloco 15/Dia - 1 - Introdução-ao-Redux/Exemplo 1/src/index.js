import "./styles.css";

const Redux = require("redux");

// Em Redux nós utilizamos o actionCreator , que nada 
//mais do que uma função que retorna uma action. 
//Para o nosso exemplo, iremos usar uma actionCreator
// chamada fazerLogin
const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});

const ESTADO_INICIAL = {
  login: false,
  email: ""
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email
      };
    default:
      // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

// store.dispatch(fazerLogin("alguem@email.com"));
// aqui o dispatch enviando a intenção para o reducer

store.dispatch(fazerLogin('turmessias@gmail'))

console.log(store.getState());
// Vamos verificar o output

// { login: true, email: 'alguem@email.com' }
