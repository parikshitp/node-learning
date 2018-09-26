var rect = require("./rectangle");


function solveRect(l,b) {

    console.log("Solving for rectangle with length l = " + l + " and width w = " + w );

    if ( l <=0 || w <= 0) {
        console.log("The dimensions should be greater that 0 ");
    }

    else {
        console.log("The area of rectangle is " + rect.area(l,b));
        console.log("The peremeter of rectangle is " + rect.peremeter(l,b));
    }
}

