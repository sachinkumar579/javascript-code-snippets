// Switch case can replace multiple if checks

let a = 1 

switch(a) {
  case 1 : console.log(1);  // 1 will be printed 
           break ;
  case 2 : console.log(2);
           break;
  default : console.log('default');
}

a = 3

switch(a) {
  case 1 : console.log(1);   
           break ;
  case 2 : console.log(2);
           break;
  default : console.log('default'); // default will be printed 
}

a = "1"

switch(a) {
  case 1 : console.log(1);   
           break ;
  case 2 : console.log(2);
           break;
  default : console.log('default'); // default will be printed 
}

// The equality check is always strict ( === )  . Since a value is a string 1 default block is executed 

// Source https://javascript.info/switch
