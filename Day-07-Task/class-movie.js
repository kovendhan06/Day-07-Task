//Class-Movie
class movie{

    constructor(title,studio,rating) 
    {
       this.title=title;
       this.studio=studio;
       if(rating !=undefined && rating !="")
       {
         this.rating=rating;
       }
       else
       {
         this.rating="PG";
       }
       console.log("TITLE : ",this.title);
       console.log("STUDIO : ",this.studio);
       console.log("RATING : ",this.rating);
    }
   
       getpg()
       {
          return(`The movie rating details is: ${this.title},${this.studio},${this.rating}`);
       }
      
   }
   
   let obj=new movie('AA','BB','');
   
   let obj1=new movie('Casino Royale','Eon Productions','PG­13');
       
   