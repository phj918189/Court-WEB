$(document).ready(function () {
    function getParams() {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      return {
        key: params.get('key'),
        value: params.get('value'),
      };
    }
  
    const { key, value } = getParams();
  
    $.ajax({
      url: './case.json',
      dataType: 'json',
      success: function (data) {
        const useData = data.case;
  
        function updateCount(arr) {
          $('.result_count').text(`총 ${arr.length}건`);
        }
  
        function dataPrint(arr) {
          let text = `
            <table>
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
  
          text += `
              </tbody>
            </table>
          `;
  
          $('.case_list').html(text);
          updateCount(arr);
        }
  
        function emptyPrint(message) {
          $('.case_list').html(`<span>${message}</span>`);
          $('.result_count').text('총 0건');
        }
  
        if (key && value) {
          const filteredByParam = useData.filter(item =>
            String(item[key] || '').includes(value)
          );
  
          if (filteredByParam.length > 0) {
            dataPrint(filteredByParam);
          } else {
            emptyPrint('조건에 해당하는 결과가 없습니다.');
          }
        } else {
          dataPrint(useData);
        }
  
        function runSearch() {
          const searchValue = $('#case_search').val().trim();

          if (searchValue === '') {
            dataPrint(useData);
            return;
          }

          const filteredData = useData.filter(item =>
            String(item.Num).includes(searchValue) ||
            String(item.Title).includes(searchValue)
          );

          if (filteredData.length > 0) {
            dataPrint(filteredData);
          } else {
            emptyPrint('검색어에 해당하는 결과가 없습니다.');
          }
        }

        $('.searchBtn').on('click', function (e) {
          e.preventDefault();
          runSearch();
        });
  
        $('#case_search').on('keydown', function (e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            runSearch();
          }
        });
      },
      error: function () {
        $('.case_list').html('<span>데이터를 불러오는 데 실패했습니다.</span>');
        $('.result_count').text('총 0건');
      }
    });
  });