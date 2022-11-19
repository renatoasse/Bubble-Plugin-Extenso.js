function(properties, context) {

	var extenso = require('extenso');
    
    //let numBr = properties.num_input.toString().split('.')[0].concat(',', properties.num_input.toString().split('.')[1]) ==> Esse aqui não funcionava em Backend Workflows
    var numBr = properties.num_input.toString().replace('.',',');
    
    
    var extenso_number = extenso(numBr, { mode: 'currency' });

	return { extenso_number: extenso_number }


}