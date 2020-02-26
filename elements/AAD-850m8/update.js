function(instance, properties, context) {
    
   var extensoMonetario = extenso(properties.numero_converter, { mode: 'currency'});
   instance.publishState('valormonetario', extensoMonetario)

}