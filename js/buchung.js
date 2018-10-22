$(document).ready(function () {

    const picked = document.querySelector('.demo-picked');
    const last = document.querySelector('.demo-last');
    var selectedDate = null;
    function updateInfo() {
        if (this.lastSelectedDay) {
            picked.innerHTML = '';
            for (days of this.selectedDays) {
                var li = document.createElement('li');
                li.innerHTML = days;
            }
            var d = new Date(0);
            d.setUTCSeconds(li.innerHTML);
            selectedDate = d;
            console.log(formatDate(selectedDate));
        }
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const myCalendar = new HelloWeek({
        selector: '.hello-week',
        lang: 'en',
        langFolder: './calendar/langs/',
        format: false,
        weekShort: true,
        monthShort: false,
        multiplePick: false,
        defaultDate: false,
        todayHighlight: true,
        disablePastDays: true,
        disabledDaysOfWeek: false,
        disableDates: false,
        weekStart: 1,
        daysHighlight: false,
        range: false,
        minDate: false,
        maxDate: false,
        onLoad: updateInfo,
        onChange: updateInfo,
        onSelect: updateInfo,
        onClear: updateInfo
    });

});