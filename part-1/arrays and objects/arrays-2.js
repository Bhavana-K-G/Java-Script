let employees=[{"id":1,"name":"Aluin","email":"atreacy0@wikispaces.com","gender":"Male"},
{"id":2,"name":"Berry","email":"bdowe1@comcast.net","gender":"Female"},
{"id":3,"name":"Shandeigh","email":"scockman2@cargocollective.com","gender":"Genderqueer"},
{"id":4,"name":"Flor","email":"faime3@privacy.gov.au","gender":"Female"},
{"id":5,"name":"Berenice","email":"bomonahan4@paypal.com","gender":"Female"},
{"id":6,"name":"Noell","email":"ncomerford5@cdc.gov","gender":"Female"},
{"id":7,"name":"Tadio","email":"tbagnold6@adobe.com","gender":"Male"},
{"id":8,"name":"Gal","email":"gbustard7@miibeian.gov.cn","gender":"Male"},
{"id":9,"name":"Margery","email":"mhutcheson8@thetimes.co.uk","gender":"Female"},
{"id":10,"name":"Tab","email":"thenmarsh9@amazon.co.jp","gender":"Male"}]

//using for of loop
for (employee of employees){
    console.log(employee.name)
}

//using for loop
for (var i= 0; i<=2; i++){
    console.log(employees[i].name)
}

//another for loop format
for(var i=0; i<=employees.length-1; i++){
    console.log(employees[i].name)
}

//using while loop
var i=0
while(i<=2){
    console.log(employees[i].id)
    i++
}
