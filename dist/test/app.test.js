"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
global.fetch = vitest_1.vi.fn();
(0, vitest_1.describe)("Probando app", () => {
    (0, vitest_1.it)("Esperamos que el estado de la app sea 200", () => {
        (0, vitest_1.expect)(fetch).toHaveBeenCalledWith("http://localhost:9000");
    });
});
