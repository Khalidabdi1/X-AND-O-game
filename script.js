let div =document.querySelectorAll(".child")

let resolt =document.querySelector(".resolt")

let btn =document.querySelector(".btn")

btn.addEventListener("click",()=>{
    location.reload()
})
// console.log(div)

firstRow=[]
secondRow=[]
therdRow=[]


function close(){
    div[0].style.cssText="pointer-events: none;"
    div[1].style.cssText="pointer-events: none;"
    div[2].style.cssText="pointer-events: none;"
    div[3].style.cssText="pointer-events: none;"
    div[4].style.cssText="pointer-events: none;"
    div[5].style.cssText="pointer-events: none;"
    div[6].style.cssText="pointer-events: none;"
    div[7].style.cssText="pointer-events: none;"
    div[8].style.cssText="pointer-events: none;"

}

let XorO="X"
resolt.textContent=`is ${XorO} turn`

div.forEach((e,i)=>{



e.addEventListener("click",()=>{
     
    //check the row
    if(i===0 |i===1 |i===2){

        // firstRow.push(XorO)
        console.log(`first row is ${firstRow}`)
        firstRow[i]=XorO
    }else if(i===3 |i===4 |i===5){
        // secondRow.push(XorO)
        console.log(`second row is ${secondRow}`)
        if(i===3){
            secondRow[0]=XorO

        }else if(i===4){
            secondRow[1]=XorO

        }else if(i===5){
            secondRow[2]=XorO

        }

    }else if(i===6|i===7 |i===8){
        // therdRow.push(XorO)
        console.log(`thered row is ${therdRow}`)
    if(i===6){
        therdRow[0]=XorO
    }else if (i===7){
        therdRow[1]=XorO
    }else if (i===8){
        therdRow[2]=XorO
    }

    }

//change the letter
    if(XorO==="X"){
        e.textContent="X"
        XorO="Y"
        resolt.textContent=`is ${XorO} turn`
    }else if(XorO==="Y"){
        e.textContent="Y"
        XorO="X"
        resolt.textContent=`is ${XorO} turn`

    }


    //check the value of row one
 for(let i =0;i<firstRow.length;i++){
   
    if(firstRow[0]==="X" && firstRow[1]==="X" && firstRow[2]==="X"){
        console.log(`${firstRow[0]} win`)
        resolt.textContent=`${firstRow[0]} is win `
        close()
   


    }else if(firstRow[0]==="Y" && firstRow[1]==="Y" && firstRow[2]==="Y"){
        console.log(`${firstRow[0]} win`)
        resolt.textContent=`${firstRow[0]} is win `
        close()


    }else if (firstRow[0]==="X"&&secondRow[1]==="X"&&therdRow[2]==="X"){
        console.log(`${firstRow[0]} win`)
        resolt.textContent=`${firstRow[0]} is win `
        close()


    }else if (firstRow[0]==="Y"&&secondRow[1]==="Y"&&therdRow[2]==="Y"){
        console.log(`${firstRow[0]} win`)
        resolt.textContent=`${firstRow[0]} is win `
        close()


    }else if (firstRow[0]==="X"&& secondRow[0]==="X"&therdRow[0]==="X"){
            console.log(`${firstRow[0]} win`)
        resolt.textContent=`${firstRow[0]} is win `
        close()

    }else if (firstRow[0]==="Y"&& secondRow[0]==="Y"&therdRow[0]==="Y"){
        console.log(`${firstRow[0]} win`)
    resolt.textContent=`${firstRow[0]} is win `
    close()
}
    
   
 }


//check value for second row
 for(let i =0;i<secondRow.length;i++){
    if (secondRow[0]==="X" && secondRow[1]==="X" && secondRow[2]==="X"){
        console.log(`${secondRow[0]} win`)
    resolt.textContent=`${secondRow[0]} is win `
    close()

    }else if (secondRow[0]==="Y" && secondRow[1]==="Y" && secondRow[2]==="Y"){
        console.log(`${secondRow[0]} win`)
        resolt.textContent=`${secondRow[0]} is win `
        close()


    }else if (secondRow[1]==="X"&&firstRow[1]==="X"&& therdRow[1]==="X"){
        console.log(`${secondRow[1]} win`)
        resolt.textContent=`${secondRow[1]} is win `
        close()



    }else if (secondRow[1]==="Y"&&firstRow[1]==="Y"&& therdRow[1]==="Y"){
        console.log(`${secondRow[1]} win`)
        resolt.textContent=`${secondRow[1]} is win `
        close()



    }
 }



//check 3 row
 for(let i=0;i<therdRow.length;i++){
    if(therdRow[0]==="X" && therdRow[1]==='X'&& therdRow[2]==="X"){
        console.log(`${therdRow[0]} is win `)
        resolt.textContent=`${therdRow[0]} is win`
        close()
    }else if (therdRow[0]==="Y" && therdRow[1]==='Y'&& therdRow[2]==="Y"){
        console.log(`${therdRow[0]} is win `)
        resolt.textContent=`${therdRow[0]} is win`
        close()


    }else if (therdRow[2]==="X"&& secondRow[2]==="X"&& firstRow[2]==="X"){
        resolt.textContent=`${therdRow[2]} is win`
        close()


    }else if (therdRow[2]==="Y"&& secondRow[2]==="Y"&& firstRow[2]==="Y"){
        resolt.textContent=`${therdRow[2]} is win`
        close()

        
    }else if (therdRow[0]==="X"&& secondRow[1]==="X" && firstRow[2]==="X"){
        resolt.textContent=`${therdRow[0]} is win`
        close()

    }else if (therdRow[0]==="Y"&& secondRow[1]==="Y" && firstRow[2]==="Y"){
        resolt.textContent=`${therdRow[0]} is win`
        close()

    }

 }


})

})



