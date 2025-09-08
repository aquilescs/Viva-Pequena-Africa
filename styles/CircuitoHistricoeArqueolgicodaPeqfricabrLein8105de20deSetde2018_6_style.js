var size = 0;
var placement = 'point';

var style_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
	  image: new ol.style.RegularShape({
		fill: new ol.style.Fill({color: 'rgba(148,209,220,1.0)'}),
		points: 3, // O valor '3' cria um triângulo
		radius: 7.0 + size,
		angle: 0
	  }),
	  text: createTextStyle(feature, resolution, labelText, labelFont,
		labelFill, placement, bufferColor,
		bufferWidth)
})];

    return style;
};
