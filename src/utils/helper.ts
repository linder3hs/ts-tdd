export function sumar(n1: number, n2: number) {
  if (!n1 || !n2) throw new Error();

  validateIfNumber(n1, n2);

  return n1 + n2;
}

export function restar(n1: number, n2: number) {
  validateIfNumber(n1, n2);

  return n1 - n2;
}

function validateIfNumber(n1: number, n2: number) {
  if (typeof n2 === "string" || typeof n1 === "string")
    return "No aceptamos strings";
}
