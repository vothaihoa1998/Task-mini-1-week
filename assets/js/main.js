$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

$(document).ready(function(){
    $('.header-slick').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover:true,
        autoplaySpeed:1000,
        dots: true,
        arrows: false,
        infinite: true
    });

    // add btn pause play
    var bannerslickList = document.getElementsByClassName('slick-dots');
    var btnBannerPausePlay = document.createElement('button');
    var iconPause = document.createElement('i');
    iconPause.classList.add('fas');
    iconPause.classList.add('fa-pause');
    btnBannerPausePlay.classList.add("btn-pause-play");
    btnBannerPausePlay.id = 'btn-pause-play';
    btnBannerPausePlay.appendChild(iconPause);
    bannerslickList[0].appendChild(btnBannerPausePlay);

    // event click btn pause/play
    btnBannerPausePlay.onclick  = ()=>{
        var child = btnBannerPausePlay.childNodes;
        var nameClassChild = child[0].classList[1];
        if(nameClassChild==="fa-pause")
        {
            btnBannerPausePlay.innerHTML = '<i class="fas fa-play"></i>';
            $('.header-slick').slick('slickPause');
        }
        else{
            btnBannerPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
            $('.header-slick').slick('slickPlay');
        }
    }
});