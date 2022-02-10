const setTimeoutPromise = () => {
  return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('2. o tempo passou'));
        }, 3000);
    })
}

async function main() {
    console.log(' 1. Inicio')

    await setTimeoutPromise()


    console.log('3. Fim')
    }

    main()

    console.log('4. Terminou');