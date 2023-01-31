import { describe, it, expect } from "vitest";
import { sumar } from "../src/utils/helper";

describe("Test para el modulo de app", () => {
  it("primero probamos el error si no tenemos parametros", () => {
    expect(() => sumar()).toThrow();
  });

  it("probamos que la suma de los valores sea la correcta", () => {
    expect(sumar(1, 4)).toBe(5);
  });

  it("probamos que pasara si mandamos un string como paremetro", () => {
    expect(sumar(1, "2")).toBe("No aceptamos strings");
  });

  it("probamos que pasara si mandamos un string como paremetro", () => {
    expect(sumar("1", 2)).toBe("No aceptamos strings");
  });
});
