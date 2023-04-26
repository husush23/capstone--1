const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');
const desc = document.querySelector('.description');
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menu.classList.remove('hidden');
  menuBtn.classList.add('hidden');
  closeMenu.classList.remove('hidden');
  desc.classList.add('blur');
});
closeMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menuBtn.classList.remove('hidden');
  menu.classList.add('hidden');
  closeMenu.classList.add('hidden');
  desc.classList.remove('blur');
});

const cards = [
  {
    coach: 'Smith Rowe',
    title: 'Senior gym coach',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/coach-1.jpg',
  },
  {
    coach: 'Smith Rowe',
    title: 'Senior gym coach',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/coach-2.jpg',
  },
  {
    coach: 'John Blade',
    title: 'Gym coach',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/coach-3.jpg',
  },
  {
    coach: 'Rath Bowe',
    title: 'Food diet expert',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/coach-4.jpg',
  },
  {
    coach: 'Ali Saeed',
    title: ' Nutrition worker ',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/coach-5.jpg',
  },
  {
    coach: 'Hussein Mohamed',
    title: 'Bodybuiler',
    description:
      ' Lorem ipsum dolor, sit amet consectetur adipisicing elit Similique itaque distinctio inventore perspiciatis hic veniam doloribus quasi laboriosam adipisci In esse nulla quis officiisaspernatur sequi quaerat voluptates repudiandae vitae libero earum',
    img: './img/coach-6.jpg',
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
