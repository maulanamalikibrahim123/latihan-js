function getPilihan(comp, aku){
    if(comp == aku ) return "Seri"
    if(comp == "gunting") return (aku == "batu")? "Menang" : "Kalah"
    if(comp == "batu") return (aku == "gunting")? "Kalah" : "menang"
    if(comp == "kertas") return (aku == "gunting")? "Menang" : "Kalah"
}

function getComputer(){
    const hitungan = Math.floor(Math.random() * 3) +1;

    if(hitungan == 1) return "gunting";
    if(hitungan == 2) return "batu";
    return "kertas"
}

function putar(){
    const gambar = ["gunting", "batu", "kertas"];
    const imgComputer = document.querySelector(".img-computer")
    number = 0;
    const play = new Date().getTime();

    setInterval(function(){
        if(new Date().getTime() - play > 1000) return clearInterval;
        imgComputer.setAttribute("src", "img/" + gambar[number++] + ".jpg")
        if(number == gambar.length-1) return number = 0;
    }, 100)
}


const hasil = document.querySelectorAll("li img")
hasil.forEach(function(mul){
mul.addEventListener("click", function(){
    const pilihanComputer = getComputer();
    const info = document.querySelector(".info")
    const pilihanKu = mul.className;
    const imgComputer = document.querySelector(".img-computer")
    const pilihanKami = getPilihan(pilihanComputer, pilihanKu);
    const putaran = putar();
    putaran; 



  setTimeout(function(){
    imgComputer.setAttribute("src", "img/" + pilihanComputer + ".jpg")

    info.innerHTML = pilihanKami;
  }, 1000)
})
})