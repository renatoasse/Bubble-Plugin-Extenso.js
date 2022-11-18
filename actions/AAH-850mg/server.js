function(properties, context) {

	var extenso = require('extenso')
    
    var extenso_number = extenso(`${properties.num_input}`, { mode: 'currency', locale: 'br', currency: { type: 'BRL' } })

	return { extenso_number }


}