document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('heroes-container');

const heroes = [
  {
    name: 'Batman',
    position: 'Detective',
    skills: ['Martial Arts', 'Stealth', 'Intelligence'],
    strengths: ['Strategic Thinking', 'Combat Skills'],
    weaknesses: ['No Superpowers'],
    biography: 'A member of the Justice League and an iconic hero in DC Comics. His real identity is Bruce Wayne, a wealthy businessman. He dedicated his life to fighting crime after the murder of his parents.',
    img: 'batman.jpg',
    class: ''
  },
  {
    name: 'Superman',
    position: 'Alien Superhero',
    skills: ['Flight', 'Super Strength', 'Heat Vision'],
    strengths: ['Invulnerability', 'Super Speed'],
    weaknesses: ['Kryptonite'],
    biography: 'Also known as Man of Steel and Clark Kent. Born on another planet called Krypton, he was sent to Earth as a baby. He has superpowers such as flight, super strength, and laser vision.',
    img: 'superman.png',
    class: 'text-bg-primary mb-3'
  },
  {
    name: 'Wonder Woman',
    position: 'Amazonian Warrior',
    skills: ['Hand-to-Hand Combat', 'Lasso of Truth', 'Super Strength'],
    strengths: ['Agility', 'Flight'],
    weaknesses: ['Strong Emotions'],
    biography: 'Also known as Diana Prince. She is from the island of Themyscira. She has superpowers such as superhuman strength, agility, and the ability to fly. She left her homeland to fight for justice.',
    img: 'Wonderwoman.png',
    class: 'text-bg-primary mb-3'
  },
  {
    name: 'The Flash',
    position: 'Speedster',
    skills: ['Super Speed', 'Time Travel', 'Reflexes'],
    strengths: ['Quick Thinking', 'Agility'],
    weaknesses: ['High Metabolism'],
    biography: 'Also known as Barry Allen. His main superpower is super speed. He can travel through time.',
    img: 'flash.png',
    class: 'text-bg-info mb-3'
  },
  {
    name: 'Cyborg',
    position: 'Tech Genius',
    skills: ['Hacking', 'Cybernetics', 'Engineering'],
    strengths: ['Superhuman Strength', 'Advanced Technology'],
    weaknesses: ['Reliance on Technology'],
    biography: 'Cyborg is also known as Victor Stone. He possesses superhuman strength and has built-in weapons and gadgets. His father, a scientist, replaced his damaged body with cybernetic technology to save his life.',
    img: 'cyborg.jpg',
    class: 'text-bg-warning p-3'
  },
  {
    name: 'Aquaman',
    position: 'King of Atlantis',
    skills: ['Swimming', 'Marine Communication', 'Trident Combat'],
    strengths: ['Underwater Breathing', 'Superhuman Strength'],
    weaknesses: ['Dehydration'],
    biography: 'He is also known as Arthur Curry. He is the king of the underwater kingdom of Atlantis. He has superpowers such as breathing underwater and talking with marine animals. He has superhuman strength and can swim fast. He tries to protect the ocean world and the surface.',
    img: 'aquaman.png',
    class: ''
  }
];
function createCard(hero) {
  const card = document.createElement('div');
  card.className = `col-sm mb-4 ${hero.class}`;

  card.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${hero.img}" alt="${hero.name}">
      <div class="card-body">
        <h5 class="card-title">${hero.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${hero.position}</h6>
        <p class="card-text"><strong>Skills:</strong> ${hero.skills.join(', ')}</p>
        <p class="card-text"><strong>Strengths:</strong> ${hero.strengths.join(', ')}</p>
        <p class="card-text"><strong>Weaknesses:</strong> ${hero.weaknesses.join(', ')}</p>
        <p class="card-text">${hero.biography}</p>
      </div>
    </div>
  `;

  container.appendChild(card);
}

heroes.forEach(hero => createCard(hero));
});