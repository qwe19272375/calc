$(document).ready(function() {
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length - 9, 9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    var hexdiv = $("#HEX");
    var decdiv = $("#DEC");
    var octdiv = $("#OCT");
    var bindiv = $("#BIN");
    totaldiv.text("0");
    hexdiv.text("0");
    decdiv.text("0");
    octdiv.text("0");
    bindiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function() {
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#operators a").not("#equals").click(function() {
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });
    $("#clear,#clearall").click(function() {
        number = "";
        totaldiv.text("0");
        hexdiv.text("0");
        decdiv.text("0");
        octdiv.text("0");
        bindiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });
    $("#equals").click(function() {
        if (operator === "+") {
            number = (parseInt(number, 10) + parseInt(newnumber, 10)).toString(10);
        } else if (operator === "-") {
            number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);
        } else if (operator === "/") {
            number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString(10);
        } else if (operator === "*") {
            number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString(10);
        }
        totaldiv.text(number);
        hexdiv.text(parseInt(number, 10).toString(16));
        decdiv.text(number);
        octdiv.text(parseInt(number, 10).toString(8));
        bindiv.text(parseInt(number, 10).toString(2));
        testNumLength(number);
        number = "";
        newnumber = "";
    });
});
