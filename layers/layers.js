var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limite_del_sector_1 = new ol.format.GeoJSON();
var features_Limite_del_sector_1 = format_Limite_del_sector_1.readFeatures(json_Limite_del_sector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_del_sector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_del_sector_1.addFeatures(features_Limite_del_sector_1);
var lyr_Limite_del_sector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_del_sector_1, 
                style: style_Limite_del_sector_1,
                popuplayertitle: 'Limite_del_sector',
                interactive: true,
                title: '<img src="styles/legend/Limite_del_sector_1.png" /> Limite_del_sector'
            });
var format_red_vial_2 = new ol.format.GeoJSON();
var features_red_vial_2 = format_red_vial_2.readFeatures(json_red_vial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_2.addFeatures(features_red_vial_2);
var lyr_red_vial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_2, 
                style: style_red_vial_2,
                popuplayertitle: 'red_vial',
                interactive: true,
                title: '<img src="styles/legend/red_vial_2.png" /> red_vial'
            });
var format_lotes_urbanos_3 = new ol.format.GeoJSON();
var features_lotes_urbanos_3 = format_lotes_urbanos_3.readFeatures(json_lotes_urbanos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_urbanos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_urbanos_3.addFeatures(features_lotes_urbanos_3);
var lyr_lotes_urbanos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_urbanos_3, 
                style: style_lotes_urbanos_3,
                popuplayertitle: 'lotes_urbanos',
                interactive: true,
                title: '<img src="styles/legend/lotes_urbanos_3.png" /> lotes_urbanos'
            });
var format_areas_verdes_4 = new ol.format.GeoJSON();
var features_areas_verdes_4 = format_areas_verdes_4.readFeatures(json_areas_verdes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_verdes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_4.addFeatures(features_areas_verdes_4);
var lyr_areas_verdes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_4, 
                style: style_areas_verdes_4,
                popuplayertitle: 'areas_verdes',
                interactive: true,
                title: '<img src="styles/legend/areas_verdes_4.png" /> areas_verdes'
            });
var format_parcelas_5 = new ol.format.GeoJSON();
var features_parcelas_5 = format_parcelas_5.readFeatures(json_parcelas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelas_5.addFeatures(features_parcelas_5);
var lyr_parcelas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelas_5, 
                style: style_parcelas_5,
                popuplayertitle: 'parcelas',
                interactive: true,
    title: 'parcelas<br />\
    <img src="styles/legend/parcelas_5_0.png" /> Áreas Verdes<br />\
    <img src="styles/legend/parcelas_5_1.png" /> Comercial/Servicios<br />\
    <img src="styles/legend/parcelas_5_2.png" /> Equipamientos (educ./salud)<br />\
    <img src="styles/legend/parcelas_5_3.png" /> Residencial<br />\
    <img src="styles/legend/parcelas_5_4.png" /> Suelo Vacante<br />' });
var format_equipamientos_6 = new ol.format.GeoJSON();
var features_equipamientos_6 = format_equipamientos_6.readFeatures(json_equipamientos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamientos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_6.addFeatures(features_equipamientos_6);
var lyr_equipamientos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_6, 
                style: style_equipamientos_6,
                popuplayertitle: 'equipamientos',
                interactive: true,
    title: 'equipamientos<br />\
    <img src="styles/legend/equipamientos_6_0.png" /> Educación<br />\
    <img src="styles/legend/equipamientos_6_1.png" /> Salud<br />' });
var format_Accesibilidad_Educativa_7 = new ol.format.GeoJSON();
var features_Accesibilidad_Educativa_7 = format_Accesibilidad_Educativa_7.readFeatures(json_Accesibilidad_Educativa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidad_Educativa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidad_Educativa_7.addFeatures(features_Accesibilidad_Educativa_7);
var lyr_Accesibilidad_Educativa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidad_Educativa_7, 
                style: style_Accesibilidad_Educativa_7,
                popuplayertitle: 'Accesibilidad_Educativa',
                interactive: false,
                title: '<img src="styles/legend/Accesibilidad_Educativa_7.png" /> Accesibilidad_Educativa'
            });
var format_Accesibilidad_de_Salud_8 = new ol.format.GeoJSON();
var features_Accesibilidad_de_Salud_8 = format_Accesibilidad_de_Salud_8.readFeatures(json_Accesibilidad_de_Salud_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accesibilidad_de_Salud_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accesibilidad_de_Salud_8.addFeatures(features_Accesibilidad_de_Salud_8);
var lyr_Accesibilidad_de_Salud_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accesibilidad_de_Salud_8, 
                style: style_Accesibilidad_de_Salud_8,
                popuplayertitle: 'Accesibilidad_de_Salud',
                interactive: false,
                title: '<img src="styles/legend/Accesibilidad_de_Salud_8.png" /> Accesibilidad_de_Salud'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limite_del_sector_1.setVisible(true);lyr_red_vial_2.setVisible(true);lyr_lotes_urbanos_3.setVisible(true);lyr_areas_verdes_4.setVisible(true);lyr_parcelas_5.setVisible(true);lyr_equipamientos_6.setVisible(true);lyr_Accesibilidad_Educativa_7.setVisible(true);lyr_Accesibilidad_de_Salud_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limite_del_sector_1,lyr_red_vial_2,lyr_lotes_urbanos_3,lyr_areas_verdes_4,lyr_parcelas_5,lyr_equipamientos_6,lyr_Accesibilidad_Educativa_7,lyr_Accesibilidad_de_Salud_8];
lyr_Limite_del_sector_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Area_Ha': 'Area_Ha', });
lyr_red_vial_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via': 'tipo_via', 'ancho_m': 'ancho_m', 'Sentido': 'Sentido', });
lyr_lotes_urbanos_3.set('fieldAliases', {'fid': 'fid', 'id_lote': 'id_lote', 'manzana': 'manzana', 'uso': 'uso', 'n_habitantes': 'n_habitantes', 'area_m2': 'area_m2', });
lyr_areas_verdes_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'area_m2': 'area_m2', });
lyr_parcelas_5.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', });
lyr_equipamientos_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'capacidad': 'capacidad', });
lyr_Accesibilidad_Educativa_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'capacidad': 'capacidad', });
lyr_Accesibilidad_de_Salud_8.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'capacidad': 'capacidad', });
lyr_Limite_del_sector_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Area_Ha': 'TextEdit', });
lyr_red_vial_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via': 'TextEdit', 'ancho_m': 'TextEdit', 'Sentido': 'TextEdit', });
lyr_lotes_urbanos_3.set('fieldImages', {'fid': 'TextEdit', 'id_lote': 'TextEdit', 'manzana': 'TextEdit', 'uso': 'TextEdit', 'n_habitantes': 'Range', 'area_m2': 'TextEdit', });
lyr_areas_verdes_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_parcelas_5.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', });
lyr_equipamientos_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'capacidad': 'Range', });
lyr_Accesibilidad_Educativa_7.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'capacidad': 'Range', });
lyr_Accesibilidad_de_Salud_8.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'capacidad': 'Range', });
lyr_Limite_del_sector_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Area_Ha': 'inline label - visible with data', });
lyr_red_vial_2.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label - visible with data', 'tipo_via': 'inline label - visible with data', 'ancho_m': 'inline label - visible with data', 'Sentido': 'inline label - visible with data', });
lyr_lotes_urbanos_3.set('fieldLabels', {'fid': 'no label', 'id_lote': 'inline label - visible with data', 'manzana': 'inline label - visible with data', 'uso': 'inline label - visible with data', 'n_habitantes': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_areas_verdes_4.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_parcelas_5.set('fieldLabels', {'fid': 'no label', 'cod_predio': 'inline label - visible with data', 'uso_suelo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'valor_m2': 'inline label - visible with data', 'cota_msnm': 'inline label - visible with data', });
lyr_equipamientos_6.set('fieldLabels', {'fid': 'no label', 'nombre': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'capacidad': 'inline label - visible with data', });
lyr_Accesibilidad_Educativa_7.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'capacidad': 'no label', });
lyr_Accesibilidad_de_Salud_8.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'capacidad': 'no label', });
lyr_Accesibilidad_de_Salud_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});