export function sumar(n1: number, n2: number) {
  if (!n1 || !n2) throw new Error();
  if (typeof n2 === "string" || typeof n1 === "string")
    return "No aceptamos strings";

  return n1 + n2;
}
