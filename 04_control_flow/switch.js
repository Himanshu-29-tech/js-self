// +++++++++++++ Switch case ++++++++++++

//++++syntax+++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// suppose you have to check months,so if you write able  then write 1-12 months usng if and else 😃 otherwise let's learn switch case with me "Ham to lazy hai ji" 

// JavaScript looks at day 
// ⬇️
// It compares with each case
// ⬇️
// When it matches, that code runs
// ⬇️
// break stops the switch
// ⬇️
// If nothing matches → default runs
// ⬇️

const month =  3

switch (month) {
    case 1:
        console.log("january");
        break; // break stop the code execution further
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;


    default:
        console.log("default case match");
        break;
}


