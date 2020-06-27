function getNumber(num) {
    console.log(num)
    var results = document.getElementById("result")
    results.value += num;
}

function clearNumber(num) {
    console.log(num)
    var results = document.getElementById("result");
    results.value = ""
}

function getResult() {
    var results = document.getElementById("result");
    results.value = eval(results.value)
}

function sqrt(num) {
    var results = document.getElementById("result");
    results.value = Math.sqrt(results.value)
}

function per() {
    var results = document.getElementById("result");
    results.value = (results.value) / 100
}