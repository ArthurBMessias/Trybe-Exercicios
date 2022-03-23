type Slices = 4 | 6 | 8;
type Flavours = 'Calabresa' | 'Marguerita' | 'Nutella' | 'Frango' | 'Pepperoni' | 'Palmito' | 'Cogumelo' | 'Goiabada com Queijo' | 'Marshmallow'
type Types = 'Comum' | 'Vegetariana' | 'Doce';

interface Pizza {
    flavor: string;
    slices: Slices;
    type: Types;
}

const calabresa: Pizza ={
    flavor: 'Calabresa',
    slices: 8,
    type: 'Comum'
}

const marguerita: Pizza ={
    flavor: 'Marguerita',
    slices: 6,
    type: 'Vegetariana',
}

const nutella: Pizza ={
    flavor: 'Nutella',
    slices: 4,
    type: 'Doce'
}

