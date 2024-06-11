document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('cards-container');

  function createCard(title, imgSrc, description, cardClass = '') {
    const card = document.createElement('div');
    card.className = `col-sm mb-4 ${cardClass}`;

    container.appendChild(card);
  }

  createCard('Batman', 'batman.jpg', 'A member of the Justice League and an iconic hero in DC Comics. His real identity is Bruce Wayne, a wealthy businessman. He dedicated his life to fighting crime after the murder of his parents.');
  createCard('Superman', 'superman.png', 'Also known as Man of Steel and Clark Kent. Born on another planet called Krypton, he was sent to Earth as a baby. He has superpowers such as flight, super strength, and laser vision.', 'text-bg-primary mb-3');
  createCard('Wonder Woman', 'Wonderwoman.png', 'Also known as Diana Prince. She is from the island of Themyscira. She has superpowers such as superhuman strength, agility, and the ability to fly. She left her homeland to fight for justice.', 'text-bg-primary mb-3');
  createCard('The Flash', 'flash.png', 'Also known as Barry Allen. His main superpower is super speed. He can travel through time.', 'text-bg-info mb-3');
  createCard('Cyborg', 'cyborg.jpg', 'Cyborg is also known as Victor Stone. He possesses superhuman strength and has built-in weapons and gadgets. His father, a scientist, replaced his damaged body with cybernetic technology to save his life.', 'text-bg-warning p-3');
  createCard('Aquaman', 'aquaman.png', 'He is also known as Arthur Curry. He is the king of the underwater kingdom of Atlantis. He has superpowers such as breathing underwater and talking with marine animals. He has superhuman strength and can swim fast. He tries to protect the ocean world and the surface.');
});
