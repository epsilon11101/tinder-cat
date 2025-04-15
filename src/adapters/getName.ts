export function getName(listaNombres: string[]) {
  const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);

  const michiName = listaNombres[indiceAleatorio];

  return michiName;
}
