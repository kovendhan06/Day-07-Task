//Uber Price Details
class uberservices
{
  constructor(cartype,km,bill)  
  {
this.cartype=cartype;
this.km=km;
this.bill=bill;
  }
  
  calculate()
  {
    if(this.km <=5)
    {
        if(this.cartype == "Ac")
        {
            this.bill=150;
        }
        else
        {
            this.bill=120;
        }
       
    }
    else{
        if(this.cartype =="Ac" )
        {
this.bill=150+10 *(this.km-5);
        }
        else{
           this.bill=120+8* (this.km-5) 
        }
    }
    return `Your Bill : ${this.bill}`;
  }
}

var car_type=prompt('Enter then car type');
var kms=prompt('Enter the kilometer');
let services = new uberservices(car_type,kms,'');
//services.getdetails();
//services.price_value();
//services.calculate();

//console.log(services.getdetails());
//console.log(services.price_value());
alert(services.calculate());