(function () {

    $(function () {
        $(".cy li").click(function () {
            var text = $(this).text();
            $('.city').html(text);
            // window.location.href="./header.html"
        })
    })
    }
)()