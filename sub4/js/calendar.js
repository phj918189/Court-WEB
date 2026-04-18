

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var datw

// 오늘 날짜로 처리하기

    var da = new Date();
    var gmonth=(da.getMonth()+1);
    var gdate=(da.getDate());

    if(gmonth<10)gmonth='0'+gmonth;
    if(gdate<10)gdate='0'+gdate;
    var idate =da.getFullYear() +'-'+gmonth+'-'+gdate;

    // console.log(idate);   


    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prevYear,prev,next,nextYear, today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      initialDate: idate,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2020-06-01',
          
        },
        {
          start: '2020-06-02',
          display: 'background',
          color: 'red'
        },
        {
          title: 'Long Event',
          start: '2020-06-07',
          end: '2020-06-10'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-06-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-06-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2020-06-11',
          end: '2020-06-13'
        },
        {
          title: 'Meeting',
          start: '2020-06-12T10:30:00',
          end: '2020-06-12T12:30:00',
          color: '#f00'
          
        },
        {
          title: 'Lunch',
          start: '2020-06-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2020-06-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2020-06-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2020-06-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2020-06-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-06-28'
        }
      ]
    });

    calendar.render();
  });