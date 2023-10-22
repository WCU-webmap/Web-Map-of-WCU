var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ONLYBLG_1 = new ol.format.GeoJSON();
var features_ONLYBLG_1 = format_ONLYBLG_1.readFeatures(json_ONLYBLG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ONLYBLG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ONLYBLG_1.addFeatures(features_ONLYBLG_1);
var lyr_ONLYBLG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ONLYBLG_1, 
                style: style_ONLYBLG_1,
                interactive: true,
                title: '<img src="styles/legend/ONLYBLG_1.png" /> ONLY-BLG'
            });
var format_WCUBOUNDARY_2 = new ol.format.GeoJSON();
var features_WCUBOUNDARY_2 = format_WCUBOUNDARY_2.readFeatures(json_WCUBOUNDARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCUBOUNDARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCUBOUNDARY_2.addFeatures(features_WCUBOUNDARY_2);
var lyr_WCUBOUNDARY_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WCUBOUNDARY_2, 
                style: style_WCUBOUNDARY_2,
                interactive: true,
                title: '<img src="styles/legend/WCUBOUNDARY_2.png" /> WCU-BOUNDARY'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ONLYBLG_1.setVisible(true);lyr_WCUBOUNDARY_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ONLYBLG_1,lyr_WCUBOUNDARY_2];
lyr_ONLYBLG_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WCUBOUNDARY_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ONLYBLG_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Clamped': 'TextEdit', 'Extruded': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WCUBOUNDARY_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Clamped': 'TextEdit', 'Extruded': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ONLYBLG_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WCUBOUNDARY_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WCUBOUNDARY_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});