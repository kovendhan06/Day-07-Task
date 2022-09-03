//Solving problems using array functions on the rest countries' data.
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
    //console.log(data);
    

//Get all the countries from the Asia continent /region using the Filter function
     const asia=data.filter((element)=>
     {
        if(element.region === 'Asia')
     {
    return element.name;
    }
    })
     

     console.log(asia);



//Get all the countries with a population of less than 2 lakhs using Filter function
    const twolakhspeople=data.filter((ele)=>{
        return ele.population<200000;
    })
console.log(twolakhspeople);

//Print the following details name, capital, flag using forEach function
 const details=  data.forEach((element)=>{
   console.log("COUNTRY:"+element.name+" CAPITAL:"+element.capital+" FLAG:"+element.flag) ;
 })


 //Print the total population of countries using reduce function
 const populations=data.reduce((acc,element)=>
 {
return acc + element.population;
 },0)
console.log(populations);



//Print the country which uses US Dollars as currency.
var curr=[];
for(i=0;i<data.length;i++)
{ 
if(data[i].currencies[0].code ==="USD")
{ 
    console.log("COUNTRY: "+data[i].name+" ==> "+data[i].currencies[0].code);

}
}

   }

