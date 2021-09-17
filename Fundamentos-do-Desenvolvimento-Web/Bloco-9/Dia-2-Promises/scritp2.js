// // const fetch = require('node-fetch');

// // function verifiedFetch(url) {
// //   return new Promise((resolve, reject) => {
// //     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
// //       fetch(url)
// //         .then((r) => r.json())
// //         .then((r) => resolve(r.value));
// //     } else {
// //       reject(new Error('endpoint não existe'));
// //     }
// //   });
// // }

// // mod.cjs
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       resolve ou fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// function sendJokeToFriend(name) {
//   const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((err) => err);
//   console.log(message);
// }

// sendJokeToFriend("Anna");

// arquivo para demonstrar erros.