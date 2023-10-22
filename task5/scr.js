function raschitat() {
        tovar  = document.getElementById('tovar').value;
        switch (tovar) {
           case "1":
              cena = 23;
              break
           case "2":
              cena = 12;
              break   
            case "3":
              cena = 15;
              break   
           default:
              cena = 12;
              break
        }
        kolvo  = document.getElementById('kolvo').value;
        if(kolvo == ""||kolvo<0){
        alert("Неверно введено количество");
        } else {
        stoimost = kolvo*cena;
        document.getElementById('stoimost').innerHTML = "Стоимость заказа равна: "+ stoimost +" р.";
        }
        }
        function onClick() {
            alert("click");
           }
           window.addEventListener('DOMContentLoaded', function (event) {
            console.log("DOM fully loaded and parsed");
            let b = document.getElementById("my-button");
            b.addEventListener("click",raschitat);
           });
           