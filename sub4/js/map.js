



document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".transport-btn");
  const routeInfo = document.getElementById("route-info");

  const routes = {
    subway: `2호선 서초역 5번 출구(정문방향), 6번출구(동문방향)에서 도보 10분.
    6번 출구 동문을 이용하시면 더욱 편리하게 이동할 수 있습니다.`,
    bus: `일반버스 간선 405, 740, 지선 5413
          마을버스 서초02, 서초11, 서초13, 서초21
          직행버스(수원방면) 1553, 3000, 3003, 3200, 6501, 7501
          광역버스(인천방면) 9100, 9200, 9201, 9300, M6405, M6410`,
    car: "서초대로를 따라 대법원 주차장 입구 이용 (주차료 유료)."
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const route = button.getAttribute("data-route");
      routeInfo.textContent = routes[route];
      routeInfo.style.display = "block";
    });
  });
});


// // 다음 지도 API 설정
// var mapContainer = document.getElementById('map'); // 지도를 표시할 div
// var mapOption = {
//   center: new kakao.maps.LatLng(37.494087, 127.008936), // 대법원 좌표
//   level: 3 // 지도의 확대 레벨
// };

// // 지도 생성
// var map = new kakao.maps.Map(mapContainer, mapOption);

// // 마커 생성
// var markerPosition = new kakao.maps.LatLng(37.494087, 127.008936); 
// var marker = new kakao.maps.Marker({
//   position: markerPosition
// });
// marker.setMap(map);

// // 인포윈도우 추가
// var infowindow = new kakao.maps.InfoWindow({
//   content: '<div style="padding:5px;">대한민국 대법원</div>'
// });
// infowindow.open(map, marker);