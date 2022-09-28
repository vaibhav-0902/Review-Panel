// Array of Object of the Information
const reviews = [
    {
        id: 1,
        name: "sadie sink",
        job: "Ui/Ux Designer",
        img:
            "https://dazedimg-dazedgroup.netdna-ssl.com/786/0-97-1080-923/azure/dazed-prod/1230/9/1239436.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://ca-times.brightspotcdn.com/dims4/default/522c102/2147483647/strip/true/crop/4718x3604+0+0/resize/1200x917!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2F21%2F3491434e446c83711360a43f6978%2Fla-photos-1staff-471763-en-ana-de-armas-mjc-09.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// Selecting Items
let img = document.getElementById('person-img');
let author = document.getElementById('author');
let role = document.getElementById('role');
let description = document.getElementById('description');


// Selecting Buttons
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');


// Setting the initial Item
let currentItem = 0;


// Loading the initial Item when the window is loaded
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});


// Accesing person based on Items
let showPerson  = () => {
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    role.textContent = item.job;
    description.textContent = item.text;
};


// traversing Next Data
nextBtn.addEventListener('click' , () => {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// traversing Previous Data
prevBtn.addEventListener('click' , () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})