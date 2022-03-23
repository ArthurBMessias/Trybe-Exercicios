enum Colors {
    Black = 'Preto',
    White = 'Branco',
    Red = 'Vermelho',
    Silver = 'Prata'
}

enum Turn {
    Left = 'left',
    Right = 'right',
    Front = 'front',
    Back = 'back'
}

enum Door {
    Open = 'open',
    Close = 'close'
}

class Car {
    brand: string;
    color: Colors;
    doors: number;

    constructor(brand: string, color: Colors, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk(): string{
        return 'HONK HONK HONK EHAHAHAHHAHABHAH EEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    }
    
    openTheDoor(door: Door){
        return `Its time to let the door ${Door.Open}`;
    }

    closeTheDoor(door: Door){
        return `Its time to let the door ${Door.Close}`;

    }

    turnOn(){
        return `Lets run vrum vrum ON`

    }

    turnOff(){
        return `Go a mimir bye`

    }

    speedUp(){
        return `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`


    }

    speedDown(){
        return `Pare`

    }

    stop(){

    }

    turn(direction: Turn){
        if( direction === 'left'){
            return Turn.Left
        }
        if( direction === 'right'){
            return Turn.Right

        }
        if( direction === 'front'){
            return Turn.Front

        }
        if( direction === 'back'){
            return Turn.Back

        }
    }



}

const car = new Car('volkswagen', Colors.White, 4); // "cria carro"

car.openTheDoor(Door.Open); // abre porta motorista
car.turnOn(); // liga
car.speedUp(); // acelera
car.turn(Turn.Front) // siga em frente 
car.turn(Turn.Left) // vira a esquerda
car.speedUp() // acelerando novamente
car.turn(Turn.Right) // vira a direita
car.turn(Turn.Front) // Siga em frente
car.turn(Turn.Right) // Vira a direita
car.turn(Turn.Right) // Vira a direita
car.stop() // para o cara