function fig(){
    document.getElementById("fig").style.display = "block";
    document.getElementById("s3__left").style.display = "none"; 
};
function nofig(){
    document.getElementById("fig").style.display = "none";
    document.getElementById("s3__left").style.display = "flex"; 
};
function html(){
    document.getElementById("html").style.display = "block";
    document.getElementById("s3__left").style.display = "none"; 
};
function nohtml(){
    document.getElementById("html").style.display = "none";
    document.getElementById("s3__left").style.display = "flex"; 
};
function ps(){
    document.getElementById("ps").style.display = "block";
    document.getElementById("s3__left").style.display = "none"; 
};
function nops(){
    document.getElementById("ps").style.display = "none";
    document.getElementById("s3__left").style.display = "flex"; 
};
function phy(){
    document.getElementById("phy").style.display = "block";
    document.getElementById("s3__left").style.display = "none"; 
};
function nophy(){
    document.getElementById("phy").style.display = "none";
    document.getElementById("s3__left").style.display = "flex"; 
};
function blen(){
    document.getElementById("blen").style.display = "block";
    document.getElementById("s3__left").style.display = "none"; 
};
function noblen(){
    document.getElementById("blen").style.display = "none";
    document.getElementById("s3__left").style.display = "flex"; 
};
function vegas(){
    document.getElementById("vegas").style.display = "block";
    document.getElementById("s3__left").style.display = "none"; 
};
function novegas(){
    document.getElementById("vegas").style.display = "none";
    document.getElementById("s3__left").style.display = "flex"; 
};
let tab = function() {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
        })
    }
};
tab();
var a = 1;
function burgeractive(){
    a=a+1;
    burgerclose(a)
}
function burgerclose(){
    if (a % 2 === 0) {
        document.getElementById('burger0').classList.add('burger-active');
        document.getElementById('burger0').classList.remove('burger-noactive');
        document.getElementById("burger").style.display = "block";
        document.getElementById("header").style.backgroundColor = '#2C2D49';
        document.getElementById("overlay1").style.display = "block"; 
	}
	else{
        document.getElementById('burger0').classList.remove('burger-active');
        document.getElementById('burger0').classList.add('burger-noactive');
        document.getElementById("burger").style.display = "none"; 
        document.getElementById("header").style.backgroundColor = '#191924';
        document.getElementById("overlay1").style.display = "none";
    }
}
// $('.modal__close').on('click', function(){
//     $('.overlay, #consultation, #thanks').fadeOut('slow');
// });
// $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
//     $(this)
//         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
// });



