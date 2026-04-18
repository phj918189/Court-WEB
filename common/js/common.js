// 전체 페이지 공통 js

// scroll animation aos

        AOS.init({
            easing: 'ease-in-out-sine'
        });




//  글로벌 네비게이션 (GNB)

$(document).ready(function() {

   var smh=$('.visual').height();                                                      //비주얼 이미지의 높이를 리턴한다   
   var on_off=false;                                                                    //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','rgba(255,255,255,1)');
                                                               //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){   
           var scroll = $(window).scrollTop();                                           //스크롤의 거리
           
           if(scroll<smh-100 ){
               $(this).css('background','rgba(255,255,255,.7)').css('border-bottom','none'); 
               //$('.dropdownmenu li a').css('color','#fff');
               //$('headerArea').css('background', 'skyblue');
               //$('.dropdownmenu li ul li').css('color', '#fff');
            //    $('.logo').css('color','#333');
           }else{
               $(this).css('background','rgba(255,255,255,1)'); 
               //$('.dropdownmenu li a').css('color','#333');
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){                                                         //스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  
                                                                                                //스크롤의 거리를 리턴하는 함수
                                                                                                //console.log(scroll);

           if(scroll>smh-100){                                                                   //스크롤이 비주얼의 높이-header높이 까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               //$('.dropdownmenu li a').css('color','#333');
           }else{                                                                                //스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','rgba(255,255,255,.7)').css('border-bottom','none');
                   //$('.dropdownmenu li a').css('color','#333');
              }
           }; 
           
        });


  
    //2depth 열기/닫기

    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:260},'fast').clearQueue();
          
       },function() {
          $('ul.dropdownmenu li.menu ul').fadeOut('fast'); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:107},'normal').clearQueue();
     });


    //  $('ul.dropdownmenu li.menu ul li a').hover(
    //     function(){
    //         $('ul.dropdownmenu li.menu ul li a',this).css('color', '#fff').css('background', 'skyblue');
    //     }
    //     ,function(){
    //         $('ul.dropdownmenu li.menu ul li a',this).css('color', '#333').css('background', 'none');
    //     }
    //  )
     
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(           //각각의 1depth 메뉴에서 마우스 엔터/리브
       function() { 
           $('a.depth1',this).css('color','#004e97');
       },function() {
          $('a.depth1',this).css('color','#333');
       }
    );
   

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:260},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:107},'normal').clearQueue();
    });
});





// 패밀리 사이트로 이동 (푸터의 more view site)

$(document).ready(function() {
   	
	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	//   $('.select .arrow').on('focus', function () {        
    //           $('.select .aList').fadeIn('slow');	
    //    });
    //    $('.select .aList li:last a').on('blur', function () {        
    //           $('.select .aList').fadeOut('fast');
    //    });
 
});


// top으로 이동
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
   
   
    $('.text').text(scroll);

    if(scroll>500){ //500이상의 거리가 발생되면
        $('.go_to_top').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.go_to_top').fadeOut('fast'); //top안보여라~~~~
    }
});

$('.go_to_top').click(function(e){
   e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); 
});

