$(document).ready(() => {

    $('#Home').on("click", function(r) {
        menuFontReset();
        selectImage(r, 'images/home.png');
    });

    $('#Seoul').on('click', (r) => {
        menuFontReset();
        selectImage(r, 'images/Seoul.png');
    });

    $('#Tokyo').on('click', (r) => {
        menuFontReset();
        selectImage(r, 'images/Tokyo.png');
    });

    $('#Paris').on('click', (r) => {
        menuFontReset();
        selectImage(r, 'images/Paris.png');
    });

    $("#photo").on('mouseover', () => {
        $("#photo").css("box-shadow", "5px 5px");
    });

    $("#photo").on('mouseout', () => {
        $("#photo").css("box-shadow", "none");
    });

});



function selectImage(r, src) {
    console.log(r);
    var target = r.currentTarget;
    $('#photo').attr('src', src);
    $(target).css('font-weight', 'bold');
};

function menuFontReset() {
    $('#Home').css('font-weight', 'normal');
    $('#Seoul').css('font-weight', 'normal');
    $('#Tokyo').css('font-weight', 'normal');
    $('#Paris').css('font-weight', 'normal');
};