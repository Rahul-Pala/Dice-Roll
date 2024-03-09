function diceroll(max)
        {
           
            let result= Math.floor(Math.random() * max + 1);
            if(result > max) {throw new Error("result is more than max")}
            if(result < 1) {throw new Error("result is less than one")}
            if(max===6)document.getElementById("result6").innerText=result
            if(max===10)document.getElementById("result10").innerText=result
        }

    






     


