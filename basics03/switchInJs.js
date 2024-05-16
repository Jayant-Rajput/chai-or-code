// switch (key) {                               Syntax for switch
//     case value:
        
//         break;

//     default:
//         break;
// } 



/*****************************************/
// If we dont' use break :  when the correct case is hitted all the code below it will be executed except Default.
const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("not a week day.");
        break;
}
