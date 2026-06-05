const form=document.querySelector("form");
let input=document.getElementById("second");
const result=document.querySelector("h2");
let total_result=0;
form.addEventListener("submit",(e)=>
{
     e.preventDefault();
    let amount=parseInt(input.value);
    if(amount<1200000)
    {
        total_result=0;
    }
    else if(amount<1600000)
    {
        total_result=(amount-1600000)*0.15;
    }
      else (amount<2000000)
    {
        total_result=(amount-2000000)*0.20+60000+80000;
    }
    result.textContent=`Result: ${total_result}`;
    form.reset();
})
