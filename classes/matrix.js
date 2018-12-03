class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
    
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}


function multiply_func(x, y){
    return x*y;
}

function plot_each(m){
    for(let i = 0; i <  length; i++){
        for(let j = 0; j < width; j++){
            console.log("matrix(" + i + ", " + j + "): " + m.get(i,j));
        }
    }
}

function plot_pretty(m){
    
    let header = '  ';
    for(let j=0; j < width; header += " " + j, j++){}
    console.log(header);

    for(let i = 0; i <  length; i++){
        let string = '';
        for(let j = 0; j < width; j++){
            string += m.get(i,j) + " ";
        }
        console.log(i + ': ' + string);
    }    
}

let length = 4;
let width = 4;
let m = new Matrix(length, width, multiply_func);

// plot_each(m)
plot_pretty(m)