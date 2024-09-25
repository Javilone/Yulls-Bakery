const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
const whatsappLink = `https://wa.me/${phoneNumber}`;

const linkElement = document.getElementById("whatsapp-link");
if (linkElement) {
  linkElement.href = whatsappLink;
}
