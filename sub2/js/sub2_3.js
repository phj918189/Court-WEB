$(document).ready(function () {
    // URL 파라미터 가져오기 함수
    function getParams() {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        return {
            key: params.get('key'),
            value: params.get('value'),
        };
    }

    // 파라미터 가져오기
    const { key, value } = getParams();

    // AJAX 처리
    $.ajax({
        url: './case.json', // JSON 파일 경로
        dataType: 'json', // 데이터 타입
        success: function (data) {
            const useData = data.case; // case 배열 가져오기

            // 데이터 출력 함수
            function dataPrint(arr) {
                let text = '<table>';
                text += `
                    <thead>
                        <tr>
                            <th>번 호</th>
                            <th>제 목</th>
                        </tr>
                    </thead>
                    <tbody>
                `;

                arr.forEach(item => {
                    text += `
                        <tr>
                            <td>${item.Num}</td>
                            <td>${item.Title}</td>
                        </tr>
                    `;
                });

                text += '</tbody></table>';
                $('.case_list').html(text); // case_list에 출력
            }

            // 검색 버튼 클릭 이벤트
            $('.searchBtn').click(function (e) {
                e.preventDefault(); // 기본 동작 방지
                const searchValue = $('#case_search').val(); // 입력값 가져오기

                const filteredData = useData.filter(item => 
                    item.Num.includes(searchValue) || 
                    item.Title.includes(searchValue)
                ); // 검색 필터

                if (filteredData.length > 0) {
                    dataPrint(filteredData); // 검색 결과 출력
                } else {
                    $('.case_list').html('<span>검색어에 해당하는 결과가 없습니다.</span>');
                }
            });

            // 페이지 로드 시 모든 데이터 출력
            dataPrint(useData);
        },
        error: function () {
            $('.case_list').html('<span >데이터를 불러오는 데 실패했습니다.</span>');
        }
    });
});
