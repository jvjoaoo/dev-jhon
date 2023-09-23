const header = document.querySelector("header");

window.addEventListener("scroll", diminuiHeader);

function diminuiHeader(){
    if(window.pageYOffset > 0 && header.classList.contains("scrollmax")){
        header.classList.remove("scrollmax");
        header.classList.add("scrollmin");
    } else if(window.pageYOffset == 0 && header.classList.contains("scrollmin")){
        header.classList.remove("scrollmin");
        header.classList.add("scrollmax");
    }
}


//Opções para mascarar a URL
// Opção 01

//document.getElementById("sobre").addEventListener("click", function(event) {
//    event.preventDefault(); // Impede o comportamento padrão do link

    // Mascarar a URL (substitua a URL abaixo pela URL desejada)
//    var newURL = "https://www.exemplo.com";

    // Redirecionar para a URL mascarada
//    window.location.href = newURL;
//});



