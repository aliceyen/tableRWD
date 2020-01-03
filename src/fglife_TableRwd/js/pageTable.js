$(function () {
    resizeWindow();

    //視窗縮放
    $(window).resize(function () {
        resizeWindow();
    });

    //水平滾動
    $('.container-block').scroll(function () {
        scrollWindow(this);
    });
});

function resizeWindow() {
    $('.container-block').each(function () {
        if ($(this)[0].scrollWidth > $(this)[0].clientWidth) //有scrollbar時
            $(this).siblings('.red').addClass('show');
        else
            $(this).siblings('.red').removeClass('show');
    });
}

function scrollWindow(obj) {
    var $obj = $(obj);
    if (Math.round($obj.width() + $obj.scrollLeft()) == $obj[0].scrollWidth) //滑到最右邊
    {
        $obj.siblings('.red').removeClass('show');
    }
    else {
        $obj.siblings('.red').addClass('show');
    }
}