

function getNews() {
    var apiKey = "DAzeGwzTUMG1zDIAHFktDLww58pnTsFM";
    var queryKeyword = $("#keyWord").val().trim();
    var beginDate = $("#beginDate").val().trim();
    var endDate = $("#endDate").val().trim();
    var beginDateFormated = moment(beginDate).format("YYYYMMDD");
    var endDateFormated = moment(endDate).format("YYYYMMDD");
    var queryURL =
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" +
        beginDateFormated +
        "&end_date=" +
        endDateFormated +
        "&" +
        queryKeyword +
        "&page=10&api-key=" +
        apiKey;
    if (!queryKeyword || !beginDate || !endDate){
        alert('fill inputs')
    } else {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
           
            var articlesArray = data.response.docs;
             console.log(articlesArray);
             for (var i = 0; i<articlesArray.length; i++) {
                 console.log(articlesArray[i]);
                
             }

        });
    }
  
}

$('#searchApi').on('submit', function (e) {
    e.preventDefault();
    getNews();
    $('#searchApi').hide()
})

