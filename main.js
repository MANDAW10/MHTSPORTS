
// =================show menu===============

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Ouvrir le panier
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu');
  });
}

// Fermer le panier
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu');
  });
}



document.addEventListener('DOMContentLoaded', function () {
  var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    slidesPerView: "auto",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// ==================show scroll up====================

function scrollup(){
  const scrollup = document.getElementById('scroll-up');

  if(this.scrollY >= 350) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup)


// ================questions accordion================

const accordionItem = document.querySelectorAll('.questions_item')

accordionItem.forEach((item) => {
  const accordionHeader = item.querySelector('.questions_header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if(openItem && openItem !== item){
      toggleItem(openItem)
    }
  })
}) 

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions_content')

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }
 else{
  accordionContent.style.height = accordionContent.scrollHeight + 'px'
  item.classList.add('accordion-open')
 }
}
// ===================send message watshappp============
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire par défaut

  // Récupération des valeurs du formulaire
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation des champs
  if (!name || !email || !subject || !message) {
      alert('Tous les champs doivent être remplis.');
      return;
  }

  // Numéro de téléphone de l'entreprise (au format international sans les signes + ni les espaces)
  const phoneNumber = '776063650'; // Assurez-vous que ce numéro est correct

  // Création du message à envoyer via WhatsApp avec des sauts de ligne
  const whatsappMessage = `Bonjour, je viens de m'inscrire sur votre site Web.\n\n` +
                          `Nom: ${name}\n` +
                          `Email: ${email}\n` +
                          `Ma Localisation: ${subject}\n` +
                          `Message: ${message}`;
  
  // Encodage du message pour l'URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Création du lien vers WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Affichage du lien pour débogage (facultatif)
  console.log('WhatsApp URL:', whatsappURL);

  // Redirection vers WhatsApp
  window.location.href = whatsappURL;
});





    


   // Ajoute un gestionnaire d'événements pour le bouton "Add to Cart"
document.getElementById('add-to-cart').addEventListener('click', function() {
  // Fonction pour récupérer les valeurs des champs du produit
  function getProductData() {
      return {
          team: document.getElementById('team').value,
          color: document.getElementById('color').value,
          size: document.getElementById('size').value,
          quantity: document.getElementById('quantity').value
      };
  }

  // Fonction pour créer un message WhatsApp encodé
  function createWhatsAppMessage(data) {
      const message = `*Product Details*\n\n` +
                      `Equipe: ${data.team}\n` +
                      `Couleurr: ${data.color}\n` +
                      `Taille: ${data.size}\n` +
                      `Quantité: ${data.quantity}`;
      return encodeURIComponent(message);
  }

  // Fonction pour créer l'URL WhatsApp
  function createWhatsAppURL(encodedMessage) {
      const phoneNumber = '776063650'; // Numéro de téléphone de l'entreprise
      return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  // Fonction principale pour gérer l'envoi du message
  function sendWhatsAppMessage() {
      const productData = getProductData();
      const encodedMessage = createWhatsAppMessage(productData);
      const whatsappURL = createWhatsAppURL(encodedMessage);

      // Redirection vers WhatsApp
      window.location.href = whatsappURL;
  }

  // Appel de la fonction principale pour envoyer le message
  sendWhatsAppMessage();
});


// ================toggle=================

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show');
  });
});



document.getElementById('nav-toggle').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show'); // Assurez-vous de définir la classe 'show' dans vos styles CSS pour afficher/masquer le menu
});







