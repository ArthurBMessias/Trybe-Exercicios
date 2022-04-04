enum Brand {
    LG = 'LG',
    SONY = 'SONY',
    SAMSUNG = 'SAMSUNG',
    PHILIPS = 'PHILIPS'
}

enum Connections {
    HDMI = 'HDMI',
    AV = 'AV',
    SMART = 'SMART'
}

class Tv {
   private _size: number;
    private _resolution: number;
    private _connections: string;
    private _connectedTo?: string;
    brand: Brand;

    constructor(size: number, resolution: number, connections: string, brand: Brand, connectedTo?: string ){
    this._size= size;
    this._resolution= resolution;
    this._connections= connections;
    this._connectedTo= connectedTo;
    this.brand= brand;

    }

    turnOn(): string{
        return ` A TV de marca ${this.brand} tem o tamanho de ${this._size} polegadas, resolução de ${this._resolution}k com conexão em ${this._connections} e esta ligada`
    }

    getConnectedTo(): string {
        return  this._connectedTo;
    }


}

const firstTv = new Tv(55, 4, 'HDMI', Brand.LG );
console.log(firstTv);
console.log(firstTv.turnOn())