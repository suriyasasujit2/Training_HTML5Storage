
var db = openDatabase('Library', '3.0', 'My library', 5 * 1024 * 1024);
var lastName = 'D%';
function displayResults(transaction, results) {
    console.log(results);
}
db.transaction(function (t) {
    t.executeSql("SELECT a.firstName, a.lastName, COUNT(b.id) AS numOfBooks " +
        "FROM authors a " +
        "INNER JOIN books b ON a.id = b.id " +
        "GROUP BY a.id"
        , []
        , displayResults)
});