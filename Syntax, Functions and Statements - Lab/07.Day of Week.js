function solve(day){
 let daynumber ;
  
 switch (day){
     case'Monday':
     daynumber = 1;
     break; 
     case'Tuesday':
     daynumber = 2;
     break;
     case'Wednesday':
     daynumber = 3;
     break;
     case'Thursday':
     daynumber = 4;
     break;
     case'Friday':
     daynumber = 5;
     break;
     case'Saturday':
     daynumber = 6;
     break;
     case'Sunday':
     daynumber = 7;
     break;
     default:
         daynumber = 'error';
         
 }

console.log( daynumber);

}
solve('Monday');
solve('Friday');
solve('Blablabla');

