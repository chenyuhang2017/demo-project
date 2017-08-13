

        $(function () {

            let data = {}
            $.get('/abc',function (res) {
                if (res.code == 0){
                    data = res.data
                }

                var test =template('navList',data);


                var test1 =template('sever-list',data);

                $('#navUl').append(test);

                $('#sever').append(test1)


                $(".banner-text").hover(
                    function () {
                        // $(this).css("position","relative")
                        console.log(231213)
                        $(this).find('ul').css("display","block")
                        $(this).find('img').removeAttr("src").attr("src","imgs/icon1.png").css("margin-left",'42'+'px')

                        // $("p").css("color","red");
                    },function () {
                        $(this).find('ul').css("display","none")
                        $(this).find('img').removeAttr("src").attr("src","img/right.png").css("margin-left","0px")
                    }
                );
            })
        })
