ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([106.795402, -7.362157, 108.349398, -5.903136]);
var wms_layers = [];


        var lyr_roadmap_0 = new ol.layer.Tile({
            'title': 'roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_DaerahIrigasi_1 = new ol.format.GeoJSON();
var features_DaerahIrigasi_1 = format_DaerahIrigasi_1.readFeatures(json_DaerahIrigasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DaerahIrigasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahIrigasi_1.addFeatures(features_DaerahIrigasi_1);
var lyr_DaerahIrigasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DaerahIrigasi_1, 
                style: style_DaerahIrigasi_1,
                interactive: true,
    title: 'Daerah Irigasi<br />\
    <img src="styles/legend/DaerahIrigasi_1_0.png" /> Provinsi<br />\
    <img src="styles/legend/DaerahIrigasi_1_1.png" /> Pusat<br />'
        });
var format_WilayahSungaiCitarum_2 = new ol.format.GeoJSON();
var features_WilayahSungaiCitarum_2 = format_WilayahSungaiCitarum_2.readFeatures(json_WilayahSungaiCitarum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WilayahSungaiCitarum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahSungaiCitarum_2.addFeatures(features_WilayahSungaiCitarum_2);
var lyr_WilayahSungaiCitarum_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahSungaiCitarum_2, 
                style: style_WilayahSungaiCitarum_2,
                interactive: false,
                title: '<img src="styles/legend/WilayahSungaiCitarum_2.png" /> Wilayah Sungai Citarum'
            });
var format_TitikLokasiPekerjaanSIMURP_3 = new ol.format.GeoJSON();
var features_TitikLokasiPekerjaanSIMURP_3 = format_TitikLokasiPekerjaanSIMURP_3.readFeatures(json_TitikLokasiPekerjaanSIMURP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TitikLokasiPekerjaanSIMURP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikLokasiPekerjaanSIMURP_3.addFeatures(features_TitikLokasiPekerjaanSIMURP_3);
var lyr_TitikLokasiPekerjaanSIMURP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikLokasiPekerjaanSIMURP_3, 
                style: style_TitikLokasiPekerjaanSIMURP_3,
                interactive: true,
                title: '<img src="styles/legend/TitikLokasiPekerjaanSIMURP_3.png" /> Titik Lokasi Pekerjaan SIMURP'
            });

lyr_roadmap_0.setVisible(true);lyr_DaerahIrigasi_1.setVisible(true);lyr_WilayahSungaiCitarum_2.setVisible(true);lyr_TitikLokasiPekerjaanSIMURP_3.setVisible(true);
var layersList = [lyr_roadmap_0,lyr_DaerahIrigasi_1,lyr_WilayahSungaiCitarum_2,lyr_TitikLokasiPekerjaanSIMURP_3];
lyr_DaerahIrigasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama_DI': 'Nama_DI', 'x': 'x', 'y': 'y', 'Kewenangan': 'Kewenangan', 'Luas_ha': 'Luas_ha', });
lyr_WilayahSungaiCitarum_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WS': 'WS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TitikLokasiPekerjaanSIMURP_3.set('fieldAliases', {'ID': 'ID', 'Nama Paket': 'Nama Paket', 'latitude': 'latitude', 'longitude': 'longitude', 'Target Out': 'Target Out', 'Kategori K': 'Kategori K', 'Pagu DIPA': 'Pagu DIPA', 'Sumber Dan': 'Sumber Dan', 'Foto': 'Foto', });
lyr_DaerahIrigasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama_DI': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Kewenangan': 'TextEdit', 'Luas_ha': 'TextEdit', });
lyr_WilayahSungaiCitarum_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TitikLokasiPekerjaanSIMURP_3.set('fieldImages', {'ID': 'TextEdit', 'Nama Paket': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Target Out': 'TextEdit', 'Kategori K': 'TextEdit', 'Pagu DIPA': 'TextEdit', 'Sumber Dan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_DaerahIrigasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nama_DI': 'inline label', 'x': 'inline label', 'y': 'inline label', 'Kewenangan': 'inline label', 'Luas_ha': 'inline label', });
lyr_WilayahSungaiCitarum_2.set('fieldLabels', {'OBJECTID': 'no label', 'WS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TitikLokasiPekerjaanSIMURP_3.set('fieldLabels', {'ID': 'no label', 'Nama Paket': 'header label', 'latitude': 'inline label', 'longitude': 'inline label', 'Target Out': 'inline label', 'Kategori K': 'inline label', 'Pagu DIPA': 'inline label', 'Sumber Dan': 'inline label', 'Foto': 'header label', });
lyr_TitikLokasiPekerjaanSIMURP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});