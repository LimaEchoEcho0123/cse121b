// Problem one

// const PI = 3.14;
// const radius = 3;
// let area = 0;
// area = radius * radius * pi;
// radius = 4;
// area = radius * radius * pi;

// solution is down here

// const pi = 3.14;
// const radius = 3;
// let area = 0;
// area = radius * radius * pi;
// console.log("Area1:" = area);
// radius = 4;
// area = radius * radius * pi;
// console.log("Area2:" = area);

//  Problem two 

// const PI = 3.14
// let area = 0
// function circleArea(radius){
//     const area = radius * radius * PI;
// }
// area = circleArea(3);
// console.log(area)

// solution

const PI = 3.14
let area = 0
function circleArea(radius){
    const area = radius * radius * PI;
    return area
}
area = circleArea(3);
console.log("Area1:", area)
area = circleArea(4)
console.log("Area2:", area)
