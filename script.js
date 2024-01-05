$(document).ready(function () {
    // Отримання постів
    function getPosts() {
        $.get("https://jsonplaceholder.typicode.com/posts", function (data) {
            displayPosts(data);
        });
    }

    // Відображення постів в слайдері
    function displayPosts(posts) {
        var postSlider = $("#post-slider");
        postSlider.empty();

        posts.slice(0, 10).forEach(function (post) {
            var postElement = $("<div class='post'>");
            postElement.text(post.title);
            postElement.click(function () {
                window.location.href = "user.html?userId=" + post.userId;
            });
            postSlider.append(postElement);
        });

        postSlider.slick({
            slidesToShow: 3,  
            slidesToScroll: 1, 
            autoplay: true, 
            autoplaySpeed: 2000,
            prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
            nextArrow: "<button type='button' class='slick-next'>Next</button>"
        });
    }

    // Отримання списку користувачів
    function getUsers() {
        $.get("https://jsonplaceholder.typicode.com/users", function (data) {
            displayUsers(data);
        });
    }

    // Cписок користувачів
    function displayUsers(users) {
        var userList = $("#user-list");
        userList.empty();

        users.forEach(function (user) {
            var userElement = $("<div class='user'>");
            userElement.append("<img src='https://placekitten.com/50/50' alt='User Photo'>");
            userElement.append("<p>" + user.name + "</p>");
            userElement.click(function () {
                window.location.href = "user.html?userId=" + user.id;
            });
            userList.append(userElement);
        });
    }

    getPosts();
    getUsers();
// Варіант слайдера 2
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);
});
