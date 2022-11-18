function(instance, properties, context) {
    
   let numBr = properties.numero_converter.toString().split('.')[0] + ',' + properties.numero_converter.toString().split('.')[1]
   var extensoMonetario = extenso(numBr, { mode: 'currency'});
   instance.publishState('valormonetario', extensoMonetario)

}