(function() {
    var script1 = document.createElement("script");
    script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    script1.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script1);

    var script2 = document.createElement("script");
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js";
    script2.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script2);

})();

const getApplicationRequestList = function () {

    $.getJSON(
        "https://smart.e-koreatech.ac.kr/getApplicationRequestList?now_page=1&callback=?",

        function(data) {

            alert(zzz);

        });

return
    $.ajax({
        type: 'post',
        url: 'https://smart.e-koreatech.ac.kr/getApplicationRequestList',
        // data: formData,
        data: { now_page: 1},
        dataType: "jsonp",
        // contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        success: function (rs) {
            // if (rs.success === true) {
            //     if (!alert('제출이 정상적으로 완료되었습니다.')) {
            //         closeTab();
            //     }
            // } else {
            //     alert('제출하지 못하였습니다..')
            // }
        },
        failure: function (e) {
            // alert('제출하지 못하였습니다...')
        }
    });
};