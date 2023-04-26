const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-menu');
const desc = document.querySelector('.description');
function openMenu() {
  menu.classList.remove('hidden');
  menuBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  desc.classList.add('blur');
}
function closeMenu() {
  menuBtn.classList.remove('hidden');
  menu.classList.add('hidden');
  closeBtn.classList.add('hidden');
  desc.classList.remove('blur');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

const cards = [
  {
    coach: 'Smith Rowe',
    title: 'Senior gym coach',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/p1.png',
  },
  {
    coach: 'Smith Rowe',
    title: 'Senior gym coach',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/p2.png',
  },
  {
    coach: 'John Blade',
    title: 'Gym coach',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/p3.png',
  },
  {
    coach: 'Rath Bowe',
    title: 'Food diet expert',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/p4.png',
  },
  {
    coach: 'Ali Saeed',
    title: ' Nutrition worker ',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/p5.png',
  },
  {
    coach: 'Hussein Mohamed',
    title: 'Bodybuiler',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/p6.png',
  },
];
cards.forEach((card) => {
  const speakers = document.querySelector('.speakers');
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  speaker.innerHTML = `
  <div class="speaker">
  <img src="${card.img}" alt="" class="speaker-img" />
  <div class="wrapper">
    <h2 class="speaker-name">${card.coach}</h2>
    <div class="speaker-title">${card.title}</div>
    <div class="speaker-desc"> ${card.description}
    </div>
  </div>
</div>
  `;
  speakers.append(speaker);
});
