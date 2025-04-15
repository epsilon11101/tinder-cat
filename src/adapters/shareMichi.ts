export const shareMichi = (
  redSocial: string,
  michiUrl: string,
  name: string
) => {
  //! si la app esta en deploy cambiar esta url por nuestra ruta
  const text = `Mira este michi: ${name}`;

  let shareUrl = "";
  switch (redSocial) {
    case "whatsapp":
      shareUrl = `https://wa.me/?text=${encodeURIComponent(
        text + " " + michiUrl
      )}`;
      break;
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        michiUrl
      )}`;
      break;
  }

  window.open(shareUrl, "_blank");
};
