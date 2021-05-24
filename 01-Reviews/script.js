// Local datas
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// content reviews
const personImg = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const txt = document.getElementById('info');

// buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn'); 

let currentItem = 0;

// load content
window.addEventListener('load', showPerson);

function showPerson() {
    personImg.src = reviews[currentItem].img;
    author.innerText = reviews[currentItem].name;
    job.innerText = reviews[currentItem].job;
    txt.innerText = reviews[currentItem].text;
}

// buttons action
nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson()
})

prevBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson()
})