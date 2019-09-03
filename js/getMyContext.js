function getSidebar(sidebar) {
    $.ajax({
        type: "get",
        async: false,
        url: "./json/sidebar.json",
        datatype: "json",
        success: function (json) {
            var bar_con = '';
            json.pages.forEach(page => {
                bar_con += '<li class="nav-item">' +
                    '<button class="btn btn-link btn-block" onclick="getPages($(\'#context\'), \'' +
                    page.url +
                    '\');"><span data-feather="home"></span>' +
                    page.name +
                    '<span class="sr-only">(current)</span>' +
                    '</button>' +
                    '</li>'
            });
            $("#sidebar").html(bar_con);
        },
        error: function (xhr) {
            alert("错误提示： " + xhr.status + " " + xhr.statusText);
        }
    });
};


function getIndex(context_father) {
    $.ajax({
        type: "get",
        async: false,
        url: "./listOfPages.html",
        datatype: "text",
        success: function (data) {
            $(context_father).html(data);
        },
        error: function (xhr) {
            alert("错误提示： " + xhr.status + " " + xhr.statusText);
        }
    });
};

function getPages(context_father, context_url) {
    $.ajax({
        type: "get",
        async: false,
        url: "./page.html",
        datatype: "text",
        success: function (data) {
            $(context_father).html(data);
            $('#pages').attr("src", context_url);
        },
        error: function (xhr) {
            alert("错误提示： " + xhr.status + " " + xhr.statusText);
        }
    });
};


function markdown(doc) {

};