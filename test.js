const min = 1, max = 50;
let attems = 0
let randomenum = Math.floor(Math.random() * max) + min
// alert(`Enter Number ${min} to ${max}`)
function gess() {
    let val = Number(document.getElementById("val").value);
    if (isNaN(val)) {
        alert("Enter a valid Number");
    }
    else if (val < min || val > max) {
        alert("Value Not Should be In Range so Enter a valid Number");
    }
    else {
        attems++;
        if (val < randomenum) {
            alert("Value Is To Low ! TRY AGAIN")
        }
        else if (val > randomenum) {
            alert("Value Is To High ! TRY AGAIN")
        }
        else {
             
            document.getElementById("demo").innerHTML = `You Won 🎉🎉✨🎊 The Number is   ${val} <br> <p style = "color: white">You Attend ${attems} Times</p>`
            attems++;
        }
    }
}

function reset() {
    location.reload(true);
}
