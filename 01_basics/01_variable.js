const accountId = 8102007
let accountEmail = "khannatinkle191@gmail.com"
let accountPassword = "654321"
let accountcity = "Beawer"
let accountState;

//prefer not to use var because of the issue of block scope and functional scope //

accountEmail = "moni08@gmail.com"
accountPassword = "123456"
accountCity = "Jaipur"

console.log("accountEmail")

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])