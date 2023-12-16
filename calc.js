var buttons = document.getElementsByTagName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operator = null;

var op_count = 0;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == "/" || value == "*" || value == "-" || value == "+") {
            op_count++;
            if (op_count == 2) {
                var r = eval(operand1.toString() + " " + operator + " " + display.innerText);
                operand1 = r;
                op_count = 1;
            }
            else {
                operand1 = display.innerText;
            }
            operator = value;
            display.innerText = "";
        }
        else if (value == "=") {
            var res = eval(operand1 + " " + operator + " " + display.innerText);
            operand1 = res;
            op_count = 0;
            display.innerText = res;
        }
        else if (value == "ac") {
            operand1 = 0;
            operand2 = 0;
            operator = null;
            op_count = 0;
            display.innerText = "";
        }
        else if (value == "sgn_ch") {
            display.innerText = eval("-1 * " + display.innerText);
        }
        else if (value == "%") {
            display.innerText = eval(display.innerText + " / 100");
        }
        else {
            display.innerText += value;
        }
    });
}