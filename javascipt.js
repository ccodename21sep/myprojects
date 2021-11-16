 
let Time = new Date().toDateString();
    let Dayte = new Date().toLocaleTimeString();
    let bl = ' '

    let Ctime = Time.concat(bl, Dayte);

    const realtime = Ctime;


var arr = new Array();



function addData(){



    
    getData();

    
    arr.push({


       

        pid:document.getElementById("pid").value,
        pdesc:document.getElementById("pdesc").value,
        pquantity:document.getElementById("pquantity").value,
        Ctime:Ctime.value
        


   
        
        

    });

    

    localStorage.setItem("localData",JSON.stringify(arr));
    showData();

    
}




function getData(){

    var str = localStorage.getItem("localData");
    if (str != null)
    arr = JSON.parse(str);
}



function deleteData(){
    localStorage.clear()
}




function showData(){
     getData();

     
    

    var tbl = document.getElementById("myTable");

    var x = tbl.rows.length;

    while(--x) {
        table.deleteRow(x);
    }
    
     for(i=0; i<arr.length;i++){

      var r=tbl.insertRow();
    var cell1 = r.insertCell();
    var cell2 = r.insertCell();
    var cell3 = r.insertCell();
    var cell4 = r.insertCell();  
    var cell5 = r.insertCell();  
  
    

    cell1.innerHTML = arr[i].pid; 
    cell2.innerHTML = arr[i].pdesc;
    cell3.innerHTML = arr[i].pquantity;
    cell4.innerHTML = `
    <button onClick="deleteRow(this)" style="background: none;border:none"><i class="fas fa-trash"></i></button>`;
    cell5.innerHTML = Ctime;
  
     }
}

function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
    }
