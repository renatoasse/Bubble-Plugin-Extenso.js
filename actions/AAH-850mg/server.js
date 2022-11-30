function(properties, context) {


	var extenso = require('extenso');
    var numBr = properties.num_input.toString().replace('.',',');
	var extenso_number = extenso(numBr, { mode: 'currency' });
	return {
        extenso_number: extenso_number
    };

}