"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const helper_1 = require("../src/utils/helper");
(0, vitest_1.describe)("Test para el modulo de app", () => {
    (0, vitest_1.it)("primero probamos el error si no tenemos parametros", () => {
        (0, vitest_1.expect)(() => (0, helper_1.sumar)()).toThrow();
    });
    (0, vitest_1.it)("probamos que la suma de los valores sea la correcta", () => {
        (0, vitest_1.expect)((0, helper_1.sumar)(1, 4)).toBe(5);
    });
    (0, vitest_1.it)("probamos que pasara si mandamos un string como paremetro", () => {
        (0, vitest_1.expect)((0, helper_1.sumar)(1, "2")).toBe("No aceptamos strings");
    });
    (0, vitest_1.it)("probamos que pasara si mandamos un string como paremetro", () => {
        (0, vitest_1.expect)((0, helper_1.sumar)("1", 2)).toBe("No aceptamos strings");
    });
});
