$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var radix = "10";
    var newradix = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#radix a").click(function(){
        newradix = $(this).attr("id");
        totaldiv.text(parseInt(totaldiv.text(), parseInt(radix, 10)).toString(newradix));
        radix = newradix;
        newradix = "";
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $("#equals").click(function(){
    	if (operator === "+"){
    		number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(parseInt(radix,10));
    	} else if (operator === "-"){
    		number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(parseInt(radix,10));
    	} else if (operator === "/"){
    		number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(parseInt(radix,10));
    	} else if (operator === "*"){
    		number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(parseInt(radix,10));
    	}
    	totaldiv.text(number);
    	testNumLength(number);
    	number = "";
    	newnumber = "";
    });
});
