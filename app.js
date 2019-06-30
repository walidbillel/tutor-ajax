var apiKey = "DAzeGwzTUMG1zDIAHFktDLww58pnTsFM";

function getNews() {
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
        "&page=5&api-key=" +
        apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data)
    });
}
$('#searchApi').on('submit', function (e) {
    e.preventDefault();
    getNews()
})

