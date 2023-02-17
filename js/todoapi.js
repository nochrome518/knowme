function ajax(){
    var xhttp = new XMLHttpRequest();
   
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
          var res = JSON.parse(this.responseText);
            
      
                for(i=0;i<res.length;i++){
                    if(!res[i].completed){
          document.getElementById("demo").innerHTML +=`<div><li> <input type="checkbox" class="circle-input"/>   ${res[i].title} 
         </li></div> `;
          
                    }
                else{
                        document.getElementById("demo").innerHTML +=`<li><input type="checkbox" class="circle-input" checked/>   ${res[i].title}
                         </li> `;
                       
                    }
                   
                }
                              
  return  new Promise(function(resolve,reject){

        $(document).ready(function(){
            $('.circle-input').click(function(){
              var checkboxes = $('input:checkbox:checked').length;
              if(checkboxes == 95){
                        resolve(alert("CONGRATULATIONS  :  5 Tasks have been Successfully Completed Today."));
                                    }
                else{
                        reject()
                    }
                                                })
                                          });
        
                                        })
                                 
                                                    }
                                            }                           
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
