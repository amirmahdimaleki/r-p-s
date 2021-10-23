let images = document.querySelectorAll(".user-img");

let cpuImages = document.querySelectorAll(".image-cpu-choosed");


for(let i = 0 ; i <= images.length-1; i++ ){
    images[i].addEventListener('click',()=>{
         hiddenSelect(i);
       randomCpu = Math.floor((Math.random()*10)/4)
       // randomCpu yek adade random entekhab mikonad beine 1 va 4
       cpuImages[randomCpu].classList.remove("hidden");
       gameLogic(i,randomCpu);
    })
    
}


function hiddenSelect(i){
    for( let j = 0 ; j <= images.length-1; j++){
        if( j!==i ){
            images[j].classList.add("hidden");
        }
    }
}   


 const refreshFunction =()=>{  for( let i = 0 ; i <= images.length-1; i++){
        
    images[i].classList.remove("hidden");
    cpuImages[i].classList.add("hidden");
    
}}
 
 
 document.querySelector("button").addEventListener("click",refreshFunction)
   





const userPoint = document.querySelector("#user-points");
const cpuPoint  = document.querySelector("#cpu-points");


function gameLogic(user,cpu){
        if(user!==cpu){
            if( user==0 ){
                if( cpu==1){
                 userPoint.innerHTML = Number(userPoint.innerHTML) + 1
                }else {
                  cpuPoint.innerHTML =  Number(cpuPoint.innerHTML) + 1
                }
            }
            if(user==1){
                if(cpu==2){
                    userPoint.innerHTML = Number(userPoint.innerHTML) + 1
                }else{
                    cpuPoint.innerHTML =  Number(cpuPoint.innerHTML) + 1
                }
            }
            if(user==2){
                if(cpu==0){
                    userPoint.innerHTML = Number(userPoint.innerHTML) + 1
                }else{
                    cpuPoint.innerHTML =  Number(cpuPoint.innerHTML) + 1
        }
        
            }
        }
}

document.addEventListener("keydown",(e)=>{
      if(e.key == "r"){
refreshFunction();
}
})



      let shirYaKhatImg = documet.querySelectorAll(".hidden");
                          for( let p=0 ; p <=shirYaKhatImg.length ; p++ ){
                            shirYaKhatImg[p].addEventListener("click", ()=>{
                            hiddenSelect(p);
                            
                        })
                    } 
                            




function hiddenSelect(p){
    for( let j = 0 ; j <= images.length-1; j++){
        if( j!==p ){
            images[j].classList.remove("hidden");
        }
    }
}   