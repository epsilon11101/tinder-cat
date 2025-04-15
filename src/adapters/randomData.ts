export function getGender() {
  const indiceAleatorio = Math.floor(Math.random() * 2);

  return indiceAleatorio === 0 ? "Male" : "Female";
}

export function getAge() {
  return String(Math.floor(Math.random() * 12) + 1);
}
