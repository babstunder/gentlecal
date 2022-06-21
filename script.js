
     var num1 =Number( prompt("Enter the first number"));
     var operand = prompt("Enter an operator");
     var num2 = Number(prompt("Enter the second number"));
    
    
   let results;
   const calculate = ()=>{
   if(isNaN(num1) || isNaN(num2)){
    alert("Please enter a correct number");
   }
  
   else{
       if (operand ==="+"){
           results =num1 + num2;
       }
       else if (operand === "*"){
          results=num1 * num2;
       }
       else if (operand === "-"){
           results=num1 - num2;
       }
       else if(operand === "/"){
           results=num1 / num2;
       }
      
    alert( num1 + operand + num2 +"=" +results);

};
};
calculate();

