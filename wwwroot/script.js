var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "ca8574f1ed5042f3bff548dbd5cdc275");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });

}

function apiCall() {
    apiSearch();
    document.getElementById("query").value = " ";
}

function imageChange() {
    document.body.style.backgroundImage = "url(sonarPic.jpg)"
    
}

function timeView() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let ending = "am";

    if (hrs == 0) {
        hrs == 12
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        ending = "pm"
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;

    let time = hrs + ":" + mins + "" + ending;
    $("#time").css("visibility", "visible");
    $('#time').html(time);
    $('#time').dialog();
}

function imFeelingLucky() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "ca8574f1ed5042f3bff548dbd5cdc275");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            results = ''
            for (i = 0; i < len; i++) {
               window.location.href = data.webPages.value[i].url
            }

        })
        .fail(function () {
            alert("error");
        });
}