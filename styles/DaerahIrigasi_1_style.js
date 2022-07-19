var size = 0;
var placement = 'point';
function categories_DaerahIrigasi_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Provinsi':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,128,54,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(77,175,74,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pusat':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(197,197,197,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_DaerahIrigasi_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Kewenangan");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Helvetica\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Nama_DI") !== null) {
        labelText = String(feature.get("Nama_DI"));
    }
    
var style = categories_DaerahIrigasi_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
