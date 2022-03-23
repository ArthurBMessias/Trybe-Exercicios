"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var table;
(function (table) {
    table[table["km"] = 1000] = "km";
    table[table["hm"] = 100] = "hm";
    table[table["dam"] = 10] = "dam";
    table[table["m"] = 1] = "m";
    table[table["dm"] = 0.1] = "dm";
    table[table["cm"] = 0.01] = "cm";
    table[table["mn"] = 0.001] = "mn";
})(table || (table = {}));
function convert(valor, unidadeBase, unidadeConversao) {
    if (unidadeBase === 'km' && unidadeConversao === 'hm') {
        return valor / 10;
    }
}
exports.convert = convert;
