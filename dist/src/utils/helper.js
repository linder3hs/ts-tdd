"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumar = void 0;
function sumar(n1, n2) {
    if (!n1 || !n2)
        throw new Error();
    if (typeof n2 === "string" || typeof n1 === "string")
        return "No aceptamos strings";
    return n1 + n2;
}
exports.sumar = sumar;
