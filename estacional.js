function Logar(){
  
    let  Login= formlog.User.value;
    let  Senha= formlog.Senha.value;
   
    if(Login=="Adm" && Senha=="admin123"){
            document.getElementById("Tarifa").value  = prompt("Informe o valor da tarifa: ");

    }
    if(Login=="funcio" && Senha=="funcionario123"){
        alert("sucesso, logado como funcio");
        ocument.getElementById("Tarifa").value =14;
    }

}

function enviar(){

    let  Placacarro= Info.PlacaCarro.value;
    let  Dataentrada= Info.Data.value;
    let  Horaentrada= parseFloat(Info.Hora.value);
    let  DataSai= Info.DataS.value;
    let  HoraSAi=parseFloat(Info.HoraS.value);
    let tarifa=parseFloat(document.getElementById("Tarifa").value);
    let  ValorPago = tarifa+((HoraSAi-Horaentrada)*(tarifa/2));
        

        var table= document.getElementById("Tabelinha");  
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML =  Placacarro;
        cell2.innerHTML = Dataentrada;
        cell3.innerHTML = Horaentrada;
        cell4.innerHTML = DataSai;
        cell5.innerHTML = HoraSAi;
        cell6.innerHTML = ValorPago;

}