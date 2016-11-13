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
    var debug = $("#debug");
    $("#calculator").click(function() {
        debug.text(newnumber);
    });
    var newnumber = "";
    var vsign = "";
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
    $("#numbers a").not("#clear,#clearentry").click(function() {
        number += $(this).text();
        totaldiv.text(vsign + number);
        testNumLength(number);
    });
    $("#operators a,#mod").not("#equals").click(function() {
        if (number === "") {
            if ($(this).attr("id") === "mod") {
                operator = "%";
            } else {
                operator = $(this).text();
            }
        } else {
            newnumber += operator + vsign + number;
            totaldiv.text(eval(newnumber));
            number = "";
            if ($(this).attr("id") === "mod") {
                operator = "%";
            } else {
                operator = $(this).text();
            }
            vsign = "";
        }
    });
    $("#clear,#clearentry").click(function() {
        number = "";
        vsign = "";
        operator = "";
        totaldiv.text(eval(newnumber));
        if ($(this).attr("id") === "clear") {
            newnumber = "";
            totaldiv.text("0");
            hexdiv.text("0");
            decdiv.text("0");
            octdiv.text("0");
            bindiv.text("0");
        }
    });
    $("#equals").click(function() {
        if (number !== "") {
            number = eval(newnumber + operator + vsign + number);
            totaldiv.text(number);
            hexdiv.text(parseInt(number, 10).toString(16));
            decdiv.text(number);
            octdiv.text(parseInt(number, 10).toString(8));
            bindiv.text(parseInt(number, 10).toString(2));
            testNumLength(number);
            newnumber = number;
            number = "";
            operator = "";
            vsign = "";
        }
    });
    $("#sign").click(function() {
        if (vsign === "") {
            vsign = "-";
        } else {
            vsign = "";
        }
        totaldiv.text(vsign + number);
    });
    $("#larr").click(function() {
        if (number !== "") {
            number = number.substring(0, number.length - 1);
            totaldiv.text(vsign + number)
        }
    });
    $("#alphabet a").click(function() {
        if (number.startsWith("0x")) {
            number += $(this).text();
        } else {
            number = "0x" + number + $(this).text();
        }
        totaldiv.text(vsign + number);
    });
    $("#0b").click(function(){
    	number = "0b" + number;
        totaldiv.text(number);
    })
});
