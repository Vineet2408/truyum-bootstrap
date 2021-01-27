var arr=[];
function a(name,price,cat,fd)
{
  
location.href="menu-item-list-customer-add-to-cart.html?id="+name+"&id2="+price+"&id3="+fd+"&id4="+cat;

}
var cnti=4;
function valueAssign()
{
  var qs = getQueryStrings();
    arr.push(qs);
    var name = qs["id"];
    var price=qs["id2"];
    var fd=qs["id3"];
    var cat=qs["id4"];
    cat=cat.replace("%20"," ");
    var nameField=document.getElementById("Name");
    var priceField=document.getElementById("Price");
    var catField=document.getElementById("Category");
    var deliveryField=document.getElementById("delivery");
    nameField.innerHTML=name;
    priceField.innerHTML=price;
    catField.innerHTML=cat;
    if(fd=="Yes"||fd=="YES"||fd=="yes")
    {
      deliveryField.style.display="block";
    }
    else 
    {
      deliveryField.style.display="none";
    }
}
function b()
{
    var qs = getQueryStrings();
    arr.push(qs);
    var name = qs["id"];
    var price=qs["id2"];
    var fd=qs["id3"];
    var cat=qs["id4"]
    var table=document.getElementById("customer-notify-table");
    var row=table.insertRow(cnti++);

    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5=row.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = price;
    cell3.innerHTML =  cat;
    cell4.innerHTML = fd;
    cell5.innerHTML = "Add to Cart";

    cell1.style.paddingRight="60px";
    cell2.style.paddingLeft="60px";
    cell3.style.paddingLeft="30px";
    cell4.style.paddingLeft="30px";
    cell5.style.paddingLeft="30px";

    cell1.style.textAlign ="left";
    cell2.style.textAlign ="right";
    cell3.style.textAlign ="center";
    cell4.style.textAlign ="center";
    cell5.style.textAlign ="center";

   
}

function getQueryStrings() 
{ 
    
    var assoc  = {};
    var queryString = location.search.substring(1); 
    
    var keyValues = queryString.split('&'); 
  
    for(var i in keyValues) 
    { 
      var key = keyValues[i].split('=');
      if (key.length > 1) 
      {
        assoc[key[0]] = key[1];
      }
    } 
  
    return assoc; 
}
var cart_row=1;
function addToCart()
{
  var table=document.getElementById("cart-table");
  alert(arr.length);
  for(var i=0;i<arr.length;i++)
  {
    var qs=arr[i];
    var name = qs["id"];
    var price=qs["id2"];
    var fd=qs["id3"];

    var row=table.insertRow(cart_row++);

    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3=row.insertCell(2);
    cell1.style.textAlign ="left";
    cell2.style.textAlign ="right";
    cell3.style.textAlign ="center";
    cell1.style.paddingRight="60px";
    cell2.style.paddingLeft="60px";
    cell3.style.paddingLeft="30px";
    cell1.innerHTML = name;
    cell2.innerHTML = price;
    cell3.innerHTML = fd;
  }

}

function validate(){
  let date=document.getElementById("date").value;
  let currentDate=new Date().toISOString().slice(0,10);
  
  if(date<currentDate)
      {
          alert("Entered date is not valid!");
      }
  else{
      window.open("edit-menu-item-status.html");
  }
}