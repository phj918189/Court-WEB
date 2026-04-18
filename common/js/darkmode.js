const toggle = document.getElementById('toggle');
const body = document.body;


toggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDarkMode);

    if (isDarkMode) {
        toggle.classList.add('dark');
        // label.textContent = 'Dark Mode';
        a = 'Dark Mode';
        
    } else {
        toggle.classList.remove('dark');
        // label.textContent = 'Light Mode';
    }

});
function applyDarkMode() {
    
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';

        if (isDarkMode) {
            applyDarkMode();
        } else {
            applyLightMode();
        }
    
    localStorage.setItem('dark-mode', 'true');
}


// const toggle = document.getElementById('toggle');
// const body = document.body;
// const label = document.getElementById('label'); // 레이블 참조 (HTML에 추가 필요)

// // 페이지 로드 시 설정 적용
// window.addEventListener('DOMContentLoaded', () => {
//     const isDarkMode = localStorage.getItem('dark-mode') === 'true';

//     if (isDarkMode) {
//         applyDarkMode();
//     } else {
//         applyLightMode();
//     }
// });

// // 다크 모드 적용 함수
// function applyDarkMode() {
//     body.classList.add('dark-mode');
//     body.classList.remove('light-mode');
//     toggle.classList.add('dark');
//     // label.textContent = 'Dark Mode';

//     // 섹션별 스타일 변경
//     document.querySelectorAll('.content_area, .content_compos, .researcher').forEach((section) => {
//         section.style.backgroundColor = '#333';
//         section.style.color = '#fff';
//     });

//     // 설정 저장
//     localStorage.setItem('dark-mode', 'true');
// }

// // 라이트 모드 적용 함수
// function applyLightMode() {
//     body.classList.remove('dark-mode');
//     body.classList.add('light-mode');
//     toggle.classList.remove('dark');
//     label.textContent = 'Light Mode';

//     // 섹션별 스타일 변경
//     document.querySelectorAll('article').forEach((article) => {
//         article.style.backgroundColor = '#fff';
//         article.style.color = '#000';
//     });

//     // 설정 저장
//     localStorage.setItem('dark-mode', 'false');
// }

// // 토글 버튼 클릭 이벤트
// toggle.addEventListener('click', () => {
//     const isDarkMode = body.classList.contains('dark-mode');
//     if (isDarkMode) {
//         applyLightMode();
//     } else {
//         applyDarkMode();
//     }
// });
