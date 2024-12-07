code = '50aa04343fcc'
button = document.getElementById("redirect")
check = document.getElementById("status")

if (code !== 1){
    button.onclick = function(){
        window.open('https://' + code + '.ngrok.app')
    };
}

if (code == 1){
    check.innerHTML = 'Not Available'
    check.style.color = 'darkRed';
}