function(instance, properties, context) {
   
   var numBr = properties.numero_converter.toString().replace('.',',');
   var extensoMonetario = extenso(numBr, { mode: 'currency'});
   instance.publishState('valormonetario', extensoMonetario);

}