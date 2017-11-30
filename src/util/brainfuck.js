/**
 * Brainfuck Interpreter
 * author: yfgeek
 * https://github.com/yfgeek
 */
'use strict';

class Interpreter{
    constructor(code,input) {
        this.code = code.trim().replace(/ /g, "").replace(/(\r\n|\n|\r)/gm,"").split("");
        this.input = input || [];
        this.pointer = 0;
        this.bracketp = 0 ;
        this.dataset = [];
        this.bracketStack = [];
        this.output = [];
    }

    operation(str){

        switch(str){
            case '+':  {
                this.dataset[this.pointer] = this.dataset[this.pointer] || 0;
                ++this.dataset[this.pointer];
                break;
            }

            case  '-':  {
                this.dataset[this.pointer] = this.dataset[this.pointer] || 0;
                --this.dataset[this.pointer];
                break;
            }

            case  '<':{
                this.pointer = --this.pointer<0 ? 0: this.pointer;
                break;
            }

            case '>': {
                this.pointer++;
                break;
            }

            case '.':{
                this.output.push(String.fromCharCode(this.dataset[this.pointer]));
                break;
            }

            case ',':{
                let c = this.input.shift();
                if (typeof c === "string") {
                    this.dataset[this.pointer] = c.charCodeAt(0);
                }
                break;
            }

            case '[': {
                this.leftBracket();
                break;
            }

            case ']': {
                this.rightBracket();
                break;
            }
        }

    };

    leftBracket(){
        let openBrackets = 1;
        if (this.dataset[this.pointer]) {
            this.bracketStack.push(this.bracketp);
        } else {
            while (openBrackets && this.code[++this.bracketp]) {
                if (this.code[this.bracketp] === ']') {
                    openBrackets--;
                } else if (this.code[this.bracketp] === '[') {
                    openBrackets++;
                }
            }
        }
    }

    rightBracket(){
        this.bracketp =  this.bracketStack.pop() - 1;
    }

    run(){
        let list = ['+','-','<','>','.',',','[',']'];
        do{
           let c = this.code[this.bracketp];
           this.operation(c);
        }while(++this.bracketp < this.code.length);
        return this.output;
    }

    toString(){
        return this.run().join('');
    }

}

export default Interpreter;

// let code = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.';
// let i = new Interpreter(code,[]);
// console.log(i.toString());