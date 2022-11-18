function(properties, context) {

	var extenso = require('extenso')
    
    let numBr = properties.num_input.toString().split('.')[0] + ',' + properties.num_input.toString().split('.')[1]
    
    let extenso_number = extenso(numBr, { mode: 'currency' })

	return { extenso_number: extenso_number }


}