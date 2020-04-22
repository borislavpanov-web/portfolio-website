/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



//<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//     <a class="navbar-brand" href="#">Borislav Panov</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
//             aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
//         <span onclick class="navbar-toggler-icon"></span>
//     </button>
//
//     <div class="collapse navbar-collapse" id="navbarColor02">
//         <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//                 <a class="nav-link" href="index.html" style="color: grey">Home</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="about.html" style="color: white">Contact <span
//                         class="sr-only">(current)</span></a>
//             </li>
//         </ul>
//     </div>
// </nav>
// <div>