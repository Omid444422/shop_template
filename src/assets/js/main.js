$(document).ready(function(){

    function default_events(){
        // داخل این فانکشن شما دستورهایی که میخواهید با لود شدن صفحه انجام شوند رو بنویسید
        $('#logged_in_user div').hide();
        //پنهان کردن سرچ بار
        $('#search_input').hide();

        // بستن لیست یوزر در حالت موبایل
        $('#user_list').hide();
    }
    $(window).on('load',default_events);

    // جهت باز و بسته کردن بخش کاربر لاگین شده
$('#logged_in_user a').on('click',function(){
    $('#logged_in_user div').toggle();
    clicked = true;
})


$('.beuty-list').on('mouseenter',function(event){
    $(event.target.children[1]).animate({width:'100%'});
    const interval = setInterval(() => {
        if(event.target.children[1].style.width === '100%'){
            $(event.target.children[1]).hide();
            clearInterval(interval);
        }
    },2500);
})

$('.beuty-list').on('mouseleave',function(event){
    $('.beuty-list div').animate({width:'0%'});
    $(event.target.children[1]).show();
})


$('#btn_show_search_input').on('click',function(){
    $('#search_input').toggle();
    $('#btn_show_search_input').hide();
})

$('#close_btn').on('click',function(){
    $('#search_input').hide();
    $('#btn_show_search_input').show();
})

$('#btn_show_navbar').on('click',function(){
    $('#navbar_list').slideToggle();
})

$('#show_user_list').on('click',function(){
$('#user_list').slideToggle();
})



});