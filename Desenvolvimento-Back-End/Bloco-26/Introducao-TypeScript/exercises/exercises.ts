export function greeter(name: string) {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

export function diamond(biggerDiagonal: number, smallerDiagonal: number): number {
    return (biggerDiagonal* smallerDiagonal) / 2;
}

export function trapeze(height: number, smallerBase: number, biggerBase: number): number {
    return (height * (biggerBase + smallerBase)) / 2;
}

export function circle(r: number, PI: number): number {
    return (r * r) * PI;
}