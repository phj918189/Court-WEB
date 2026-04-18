

// var fragment = $('#listBox #sessions li a.current').attr('href');

// fragment = fragment.replace('#', ' #');
// $('.details').load(fragment);

// $('#listBox #sessions li a').on('click', function(e){
//     e.preventDefault();
//     fragment = this.href;

//     fragment = fragment.replace('#', ' #');
//     $('#details').load(fragment);

//     $('#sessions a.current').removeClass('current');
//     $(this).addClass('current');
// })


$('.big_box > div:eq(0)').show(); // 첫번째 탭 내용만 열어라
           //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***

$('.tabs .tab-button').each(function (index) {  // index=0 1 2
  $(this).click(function(e){
      e.preventDefault();   // <a> href="#" 값을 강제로 막는다    
      console.log(index);

      $(".big_box > div").hide(); //모든 탭내용을 안보이게...
      $(".big_box > div:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
      $('.tabs li a').removeClass('active'); //모든 탭메뉴를 비활성화
      $(this).addClass('active'); // 클릭한 해당 탭메뉴만 활성화

 });
});
