$(document).ready(function () {
    // Отримання ID користувача з URL
    var urlParams = new URLSearchParams(window.location.search);
    var userId = urlParams.get('userId');

    // Перевірка, чи ID користувача валідне число
    if (!isNaN(userId) && userId !== null) {
        getUserDetails(userId);
    } else {
        // Якщо ID недійсне, можна перенаправити на головну сторінку
        window.location.href = "index.html";
    }

    // Деталі про користувача
    function getUserDetails(userId) {
        $.get("https://jsonplaceholder.typicode.com/users/" + userId, function (user) {
            displayUserDetails(user);
        });
    }

    // Відображення деталей користувача
    function displayUserDetails(user) {
        var userDetails = $("#user-details");
        userDetails.empty();

        userDetails.append("<p>Name: " + user.name + "</p>");
        userDetails.append("<p>Email: " + user.email + "</p>");
        userDetails.append("<p>Phone: " + user.phone + "</p>");
        userDetails.append("<p>Website: " + user.website + "</p>");
        userDetails.append("<p>Address: " + user.address + "</p>");
    }
});
