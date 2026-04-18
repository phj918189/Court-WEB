
// 메인 비쥬얼 처리 코드


    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var direct=1;
    var position=0;
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때

    
    
    $('.btn1').css('background','#004E97'); //첫번째 불켜
    $('.btn1').css('width','150px'); // 버튼의 너비 증가
    $('.btn1').find('span').css('width', '100px');
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link1 span').delay(1500).animate({opacity:1},'slow');
 
    function gallery_change(){
      $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
      $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
      //$('.gallery li:eq('+(cnt+1)+')').fadeIn('slow');  // link대신 eq를 사용하여 카운트 하기
      
      //  for(var i=1;i<=imageCount;i++){
      //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
      //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
      //   }
        
        $('.mbutton').css('background','rgba(255, 255, 255, 0.613)'); //버튼불다꺼!!
        $('.mbutton').css('width','50px'); // 버튼 원래의 너비
        $('.btn'+cnt).css('background','#004E97').css('width','150px');//자신만 불켜
        $('.btn'+cnt).find('span').css('width', '150px').css('transition', 'all 3s');    
  
        $('.gallery li span')
        // .css('top',210)
        .css('opacity',0);
        $('.gallery .link'+cnt).find('span').delay(0).animate({ opacity:1},'slow');
    }
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 3이 되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
      console.log(cnt);
      gallery_change();

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~3이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
      
		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
        cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
        cnt=2; 
		  }else if($target.is('.btn3')){ 
        cnt=3; 
		  }

      // cnt = $(this).index('.mbutton')+1;    //위의 if문을 함수를 사용하여 한줄로 줄인 경우
      
      gallery_change();

     
      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-pause"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{                           // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-pause"></i>');
		   onoff=true; 
	   }
  });	



  

  // 섹션 2 영역 아코디언
    
//     var timeonoff;
    // var imageCount2=$('.eventSlideMenu ul li').size();  
     //var cnt2=1;		// 리스트의 순서
 
//      function move_gallery(){
//       cnt2++;         // 1234 1234

//       $('.eventSlideMenu ul li').removeClass('current');
//       $('.eventSlideMenu ul li:eq('+ (cnt2-1) +')').addClass('current'); 
   
//    if(cnt==1){
//         $('.eventSlideMenu .img02').animate({left:[900,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img03').animate({left:[1000,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img04').animate({left:[1100,'easeOutQuad']},1000).clearQueue(); 
//    }else if(cnt==2){
//         $('.eventSlideMenu .img02').animate({left:[100,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img03').animate({left:[1000,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img04').animate({left:[1100,'easeOutQuad']},1000).clearQueue();
//    }else if(cnt==3){
//         $('.eventSlideMenu .img02').animate({left:[100,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img03').animate({left:[200,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img04').animate({left:[1100,'easeOutQuad']},1000).clearQueue();
//    }else if(cnt==4){
//         $('.eventSlideMenu .img02').animate({left:[100,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img03').animate({left:[200,'easeOutQuad']},1000).clearQueue();
//         $('.eventSlideMenu .img04').animate({left:[300,'easeOutQuad']},1000).clearQueue();
//    }
   
//     if(cnt==imageCount)cnt=0;
//     }
 
  //  timeonoff= setInterval(move_gallery, 4000);
 
 $('.eventSlideMenu ul li:eq(0)').addClass('current');  

 $('.eventSlideMenu ul li span').mouseenter(function(event){
    var $target=$(event.target);  // var $target = $(this)

  clearInterval(timeonoff);
  $('.eventSlideMenu ul li').removeClass('current');
  $(this).parent().addClass('current');   

     if($(this).is('.buttonMenu01')){  //첫번째 버튼에 마우스 오버되면
         $('.eventSlideMenu .img02').animate({left:[900,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img03').animate({left:[1000,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img04').animate({left:[1100,'easeOutQuad']},1000).clearQueue();
         //cnt=1;
     }else if($(this).is('.buttonMenu02')){//두번째 버튼에 마우스 오버되면
         $('.eventSlideMenu .img02').animate({left:[100,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img03').animate({left:[1000,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img04').animate({left:[1100,'easeOutQuad']},1000).clearQueue();
         //cnt=2;
     }else if($(this).is('.buttonMenu03')){
         $('.eventSlideMenu .img02').animate({left:[100,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img03').animate({left:[200,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img04').animate({left:[1100,'easeOutQuad']},1000).clearQueue();
         //cnt=3;
     }else if($(this).is('.buttonMenu04')){
         $('.eventSlideMenu .img02').animate({left:[100,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img03').animate({left:[200,'easeOutQuad']},1000).clearQueue();
         $('.eventSlideMenu .img04').animate({left:[300,'easeOutQuad']},1000).clearQueue();
         //cnt=0;
     }
    //timeonoff= setInterval(move_gallery, 4000);  //부활~~
 });


     // 비쥬얼 영역 text 타이핑
    
     // var smh= $('.visual').height();  //메인 비주얼의 높이
     // var h111= $('.intro').offset().top-800 ; //section 1높이
     // var h222= $('.case').offset().top-800 ;

     // $(window).on('scroll', function(){
     //      var scroll = $(window).scrollTop(); //스크롤 탑의 좌표를 담음

     //      $('.text').text(scroll);           // 스크롤 좌표 값을 찍는다.

     //      if(scroll>h222){
     //           const content = "모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다."

     //           let typingIdx = 0;
          
     //           function typing (){
     //                if (typingIdx < content.length){
     //                     $(".case .section2_left strong").append(content[typingIdx]);
     //                     typingIdx++;
          
     //                }else {
     //                     clearInterval(clear1);
     //                }
     //           }
     //           let clear1 = setInterval(typing, 100);
     //      }

     // })



// 섹션 5



$('.guide .guide_right>li:eq(0) .guide_content').show();
$('.guide .guide_right>li:eq(0) a.guide_menu').css({'color':'#17538f', 'font-weight':'700'});

 $('.guide .guide_right>li a.guide_menu').click(function(e){
     e.preventDefault();
     var ind = $(this).index('.guide .guide_right li>a');  // 0 1 2 3
     $('.guide .guide_right li .guide_content').slideUp('fast');
     $('.guide .guide_right li:eq('+ ind +') .guide_content').slideDown('slow');

     $('.guide .guide_right li a.guide_menu').css({'color':'#333', 'font-weight':'normal'});
     $(this).css({'color':'#17538f', 'font-weight':'700'});

     if(ind==0){
          $('.guide .guide_left a').attr('href','./sub4/sub4_1.html');
     }else if(ind==1){
          $('.guide .guide_left a').attr('href','#');
     }else if(ind==1){
          $('.guide .guide_left a').attr('href','#');
     }else if(ind==1){
          $('.guide .guide_left a').attr('href','./sub4/sub4_3.html');
     }

 });

 $('.guide .guide_right>li:eq(1) .guide_content li a').click(function(e){
       e.preventDefault();
       var ind = $(this).index('.guide .guide_right>li:eq(1) .guide_content li a');  // 0 1 2 3

       $('.guide .guide_left img').attr('src','./images/section5/gallery/gal'+ (ind+1) +'.jpg');
 });

 $('.guide .guide_right>li:eq(2) .guide_content li a').click(function(e){
    e.preventDefault();
    var ind = $(this).index('.guide .guide_right>li:eq(2) .guide_content li a');  // 0 1 2 3

    $('.guide .guide_left img').attr('src','./images/section5/security/security0'+ (ind+1) +'.jpg');
});

$('.guide .guide_right>li:eq(3) .guide_content a').click(function(e){
    e.preventDefault();
    $('.guide .guide_left img').attr('src','./images/section5/4.jpg');
});