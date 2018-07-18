document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });


    });
    console.log('page responding');
    // addEventListener
    let sidebar = document.getElementById("sidebar");
    if (window.screen.width < 768) {
        console.log('screen width less than 768');

        if (sidebar.classList.contains('active')) {
            console.log('active turned off?');
            sidebar.classList.remove('active');
        } else {
            console.log('active turned off?');
        }
    }
});