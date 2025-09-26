var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RegionXIAdminboundary_1 = new ol.format.GeoJSON();
var features_RegionXIAdminboundary_1 = format_RegionXIAdminboundary_1.readFeatures(json_RegionXIAdminboundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionXIAdminboundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionXIAdminboundary_1.addFeatures(features_RegionXIAdminboundary_1);
var lyr_RegionXIAdminboundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionXIAdminboundary_1, 
                style: style_RegionXIAdminboundary_1,
                popuplayertitle: 'Region XI Admin boundary',
                interactive: true,
                title: '<img src="styles/legend/RegionXIAdminboundary_1.png" /> Region XI Admin boundary'
            });
var format_DP_September2025_2 = new ol.format.GeoJSON();
var features_DP_September2025_2 = format_DP_September2025_2.readFeatures(json_DP_September2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DP_September2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DP_September2025_2.addFeatures(features_DP_September2025_2);
var lyr_DP_September2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DP_September2025_2, 
                style: style_DP_September2025_2,
                popuplayertitle: 'DP_September2025',
                interactive: true,
                title: '<img src="styles/legend/DP_September2025_2.png" /> DP_September2025'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RegionXIAdminboundary_1.setVisible(true);lyr_DP_September2025_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RegionXIAdminboundary_1,lyr_DP_September2025_2];
lyr_RegionXIAdminboundary_1.set('fieldAliases', {'ID': 'ID', 'ID2': 'ID2', 'Reg_PSGC20': 'Reg_PSGC20', 'Reg_Name': 'Reg_Name', 'Pro_PSGC20': 'Pro_PSGC20', 'Pro_Name': 'Pro_Name', 'Mun_PSGC20': 'Mun_PSGC20', 'Mun_Name': 'Mun_Name', });
lyr_DP_September2025_2.set('fieldAliases', {'Name of Es': 'Name of Es', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Permit No.': 'Permit No.', 'Date of Is': 'Date of Is', 'Date of Ex': 'Date of Ex', 'Wastewater': 'Wastewater', 'Primary': 'Primary', 'Chemical': 'Chemical', 'Secondary': 'Secondary', });
lyr_RegionXIAdminboundary_1.set('fieldImages', {'ID': 'TextEdit', 'ID2': 'TextEdit', 'Reg_PSGC20': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_PSGC20': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_PSGC20': 'TextEdit', 'Mun_Name': 'TextEdit', });
lyr_DP_September2025_2.set('fieldImages', {'Name of Es': '', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Permit No.': 'TextEdit', 'Date of Is': '', 'Date of Ex': '', 'Wastewater': '', 'Primary': 'TextEdit', 'Chemical': 'TextEdit', 'Secondary': 'TextEdit', });
lyr_RegionXIAdminboundary_1.set('fieldLabels', {'ID': 'no label', 'ID2': 'no label', 'Reg_PSGC20': 'no label', 'Reg_Name': 'no label', 'Pro_PSGC20': 'no label', 'Pro_Name': 'no label', 'Mun_PSGC20': 'no label', 'Mun_Name': 'no label', });
lyr_DP_September2025_2.set('fieldLabels', {'Name of Es': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Permit No.': 'no label', 'Date of Is': 'no label', 'Date of Ex': 'no label', 'Wastewater': 'no label', 'Primary': 'no label', 'Chemical': 'no label', 'Secondary': 'no label', });
lyr_DP_September2025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});