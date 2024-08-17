/* JS Script File*/

/*We will trakc the ID of the current sign-in user*/
function onAuthStateChanged(user) {
    if (!user) {
        location.href = 'index.html';
    }
}

window.addEventListener('load', function () {

    document.getElementById('sign-out').addEventListener('click', function () {
        firebase.auth().signOut();
        location.href = 'index.html';
    });

    //Listen for auth state changes
    firebase.auth().onAuthStateChanged(onAuthStateChanged);

    var menu = firebase.database().ref('menu').orderByChild('flag');
    menu.on('child_added', function (data) {
        var html_menu = "<li class='nav-item dropdown'><a href='" + data.val().href + "' id='mainNavBlog' class='nav-link' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>" + data.val().value + "</a></li>";
        document.getElementById('menuTab').innerHTML += html_menu;
    });


    var projects = firebase.database().ref('projects').orderByChild('flag');
    projects.on('child_added', function (data) {
        var html_menu = '<div class="col-4"><a href="#" class="w-25 p-2 shadow-md rounded text-center text-decoration-none"><img class="img-fluid rounded w-100" src="images/project1.jpg" alt="..."><h3 class="h6 my-3 w-100"><span class="text-dark">' + data.val().title + '</span></h3></a></div>';
        document.getElementById('projectsTab').innerHTML += html_menu;
    });

});