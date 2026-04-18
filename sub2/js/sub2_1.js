$(document).ready(function () {
  $('.table').hide();
  $('.table').eq(0).show();

  $('.tab_menu .tab').removeClass('active');
  $('.tab_menu .tab').eq(0).addClass('active');

  $('.tab_menu .tab').each(function (index) {
    $(this).on('click', function (e) {
      e.preventDefault();

      $('.table').hide();
      $('.table').eq(index).show();

      $('.tab_menu .tab').removeClass('active');
      $(this).addClass('active');

      applySearch();
    });
  });

  function getSearchIndexes($table) {
    if ($table.hasClass('table1')) {
      return { numIndex: 3, nameIndex: 4 };
    }
    return { numIndex: 4, nameIndex: 5 };
  }

  function applySearch() {
    var dept = $('#jdept').val().trim();
    var type = $('#jtype').val().trim();
    var keyword = $('#case_search').val().trim();

    var $activeTable = $('.table:visible');
    if (!$activeTable.length) return;

    var idx = getSearchIndexes($activeTable);
    var normalizedKeyword = keyword.toLowerCase();

    $activeTable.find('tbody tr').each(function () {
      var $row = $(this);
      var rowDept = $row.children().eq(0).text().trim();
      var rowType = $row.children().eq(2).text().trim();
      var rowNum = $row.children().eq(idx.numIndex).text().trim();
      var rowName = $row.children().eq(idx.nameIndex).text().trim();

      var matchedDept = !dept || rowDept === dept;
      var matchedType = !type || rowType === type;
      var matchedKeyword =
        !normalizedKeyword ||
        rowNum.toLowerCase().indexOf(normalizedKeyword) > -1 ||
        rowName.toLowerCase().indexOf(normalizedKeyword) > -1;

      $row.toggle(matchedDept && matchedType && matchedKeyword);
    });
  }

  $('.searchBtn').on('click', function (e) {
    e.preventDefault();
    applySearch();
  });

  $('#case_search').on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      applySearch();
    }
  });

  $('#jdept, #jtype').on('change', applySearch);
});