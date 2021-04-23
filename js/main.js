//슬릭구현

$(document).ready(function(){
    //mainSlider
    $('.mainImg').slick({
        dots:true,
        prevArrow:'<div class="prevBtn">이전</div>',
        nextArrow:'<div class="nextBtn">다음</div>',
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
    })
    
   
    
    //mainCon01
    $('.con01Menu').slick({
     slidesToShow:3,
     slidesToScroll:1,
     dots:false,  //네모난 버튼 없애기
     prevArrow:$('.prevBtn01'),
     nextArrow:$('.nextBtn01'),
 });
    //mainCon05
    $('.con05Img').slick({
        slidesToShow:2,
        slidesToScroll:2,
        dots:false,  //네모난 버튼 없애기
        prevArrow:$('.prevBtn05'),
        nextArrow:$('.nextBtn05'),
    })
   
    //wow
    new WOW().init();
})

 $(window).scroll(function(){
        var sc_top=$(this).scrollTop();  //scrollTop이 var sc_top변환됨,위에 $(window)=$(this) 같은내용
      
         if(sc_top>900){
            $('.snsIcon').addClass('fixed');
        }else if(sc_top<900){
            $('.snsIcon').removeClass('fixed');
        }
    })
