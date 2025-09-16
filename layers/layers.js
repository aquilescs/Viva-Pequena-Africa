var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            }),
			className: 'ol_bw'		

        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            }),
			className: 'ol_bwstan'	
        });
var format_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2 = new ol.format.GeoJSON();
var features_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2 = format_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2.readFeatures(json_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2.addFeatures(features_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2);
var lyr_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2, 
                style: style_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2,
                popuplayertitle: 'Delimitação da Pequena África -<br>Projeto VIVA Pequena África',
                interactive: false,
                title: '<img src="styles/legend/DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2.png" /> Delimitação da Pequena África -<br>Projeto VIVA Pequena África'
            });
var format_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3 = new ol.format.GeoJSON();
var features_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3 = format_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.readFeatures(json_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.addFeatures(features_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3);
var lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3, 
                style: style_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3,
                popuplayertitle: 'APAC SAGAS - Lei nº 971/1987 e<br>Decreto Municipal nº 7.351/1988',
                interactive: false,
                title: '<img src="styles/legend/APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.png" /> APAC SAGAS - Lei nº 971/1987 e<br>Decreto Municipal nº 7.351/1988'
            });
var format_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4 = new ol.format.GeoJSON();
var features_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4 = format_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4.readFeatures(json_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4.addFeatures(features_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4);
var lyr_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4, 
                style: style_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4,
                popuplayertitle: 'Mapeamento do Ministério Público Federal<br>Relatório de 8 de março de 2022',
                interactive: false,
                title: '<img src="styles/legend/MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4.png" /> Mapeamento do Ministério Público Federal<br>Relatório de 8 de março de 2022'
            });
var format_LeiMunicipaln66132019_5 = new ol.format.GeoJSON();
var features_LeiMunicipaln66132019_5 = format_LeiMunicipaln66132019_5.readFeatures(json_LeiMunicipaln66132019_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeiMunicipaln66132019_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeiMunicipaln66132019_5.addFeatures(features_LeiMunicipaln66132019_5);
var lyr_LeiMunicipaln66132019_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeiMunicipaln66132019_5, 
                style: style_LeiMunicipaln66132019_5,
                popuplayertitle: 'Lei Municipal nº6.613/2019',
                interactive: false,
                title: '<img src="styles/legend/LeiMunicipaln66132019_5.png" /> Lei Municipal nº6.613/2019'
            });
var format_ZonadeamortecimentodoCaisdoValongo_6 = new ol.format.GeoJSON();
var features_ZonadeamortecimentodoCaisdoValongo_6 = format_ZonadeamortecimentodoCaisdoValongo_6.readFeatures(json_ZonadeamortecimentodoCaisdoValongo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonadeamortecimentodoCaisdoValongo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeamortecimentodoCaisdoValongo_6.addFeatures(features_ZonadeamortecimentodoCaisdoValongo_6);
var lyr_ZonadeamortecimentodoCaisdoValongo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeamortecimentodoCaisdoValongo_6, 
                style: style_ZonadeamortecimentodoCaisdoValongo_6,
                popuplayertitle: 'Zona de amortecimento do Cais do Valongo',
                interactive: false,
                title: '<img src="styles/legend/ZonadeamortecimentodoCaisdoValongo_6.png" /> Zona de amortecimento do Cais do Valongo'
            });
var format_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7 = new ol.format.GeoJSON();
var features_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7 = format_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7.readFeatures(json_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7.addFeatures(features_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7);
var lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7, 
                style: style_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7,
                popuplayertitle: 'Circuito Histórico e Arqueológico da Peq. África<br>Lei nº 8.105, de 20 de Set. de 2018',
                interactive: false,
                title: '<img src="styles/legend/CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7.png" /> Circuito Histórico e Arqueológico da Peq. África<br>Lei nº 8.105, de 20 de Set. de 2018'
            });
var format_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8 = new ol.format.GeoJSON();
var features_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8 = format_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8.readFeatures(json_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8.addFeatures(features_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8);
var lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8, 
                style: style_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8,
                popuplayertitle: 'Circuito Histórico e Arqueológico da Peq. África<br>Lei nº 8.105, de 20 de Set. de 2018',
                interactive: true,
                title: '<img src="styles/legend/CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8.png" /> Circuito Histórico e Arqueológico da Peq. África<br>Lei nº 8.105, de 20 de Set. de 2018'
            });
var format_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9 = new ol.format.GeoJSON();
var features_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9 = format_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9.readFeatures(json_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9.addFeatures(features_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9);
var lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9, 
                style: style_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9,
                popuplayertitle: 'Circuito de Herança e Memória Africana <br>Decreto nº 34.803 de 29 de Nov. de 2011',
                interactive: false,
                title: '<img src="styles/legend/CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9.png" /> Circuito de Herança e Memória Africana <br>Decreto nº 34.803 de 29 de Nov. de 2011'
            });
var format_bSitiosarqueolgicosb_10 = new ol.format.GeoJSON();
var features_bSitiosarqueolgicosb_10 = format_bSitiosarqueolgicosb_10.readFeatures(json_bSitiosarqueolgicosb_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bSitiosarqueolgicosb_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bSitiosarqueolgicosb_10.addFeatures(features_bSitiosarqueolgicosb_10);
cluster_bSitiosarqueolgicosb_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_bSitiosarqueolgicosb_10
});
var lyr_bSitiosarqueolgicosb_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_bSitiosarqueolgicosb_10, 
                style: style_bSitiosarqueolgicosb_10,
                popuplayertitle: '<b>Sitios arqueológicos</b>',
                interactive: true,
                title: '<img src="styles/legend/bSitiosarqueolgicosb_10.png" /> <b>Sitios arqueológicos</b>'
            });
var format_OrganizaesCarnavalescas_11 = new ol.format.GeoJSON();
var features_OrganizaesCarnavalescas_11 = format_OrganizaesCarnavalescas_11.readFeatures(json_OrganizaesCarnavalescas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrganizaesCarnavalescas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrganizaesCarnavalescas_11.addFeatures(features_OrganizaesCarnavalescas_11);
cluster_OrganizaesCarnavalescas_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OrganizaesCarnavalescas_11
});
var lyr_OrganizaesCarnavalescas_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OrganizaesCarnavalescas_11, 
                style: style_OrganizaesCarnavalescas_11,
                popuplayertitle: 'Organizações Carnavalescas',
                interactive: true,
                title: '<img src="styles/legend/OrganizaesCarnavalescas_11.png" /> Organizações Carnavalescas'
            });
var format_Organizaes_12 = new ol.format.GeoJSON();
var features_Organizaes_12 = format_Organizaes_12.readFeatures(json_Organizaes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Organizaes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Organizaes_12.addFeatures(features_Organizaes_12);
cluster_Organizaes_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Organizaes_12
});
var lyr_Organizaes_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Organizaes_12, 
                style: style_Organizaes_12,
                popuplayertitle: 'Organizações',
                interactive: true,
                title: '<img src="styles/legend/Organizaes_12.png" /> Organizações'
            });
var format_Monumentos_13 = new ol.format.GeoJSON();
var features_Monumentos_13 = format_Monumentos_13.readFeatures(json_Monumentos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monumentos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monumentos_13.addFeatures(features_Monumentos_13);
cluster_Monumentos_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Monumentos_13
});
var lyr_Monumentos_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Monumentos_13, 
                style: style_Monumentos_13,
                popuplayertitle: 'Monumentos',
                interactive: true,
                title: '<img src="styles/legend/Monumentos_13.png" /> Monumentos'
            });
var format_Locais_14 = new ol.format.GeoJSON();
var features_Locais_14 = format_Locais_14.readFeatures(json_Locais_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locais_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locais_14.addFeatures(features_Locais_14);
cluster_Locais_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Locais_14
});
var lyr_Locais_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Locais_14, 
                style: style_Locais_14,
                popuplayertitle: 'Locais',
                interactive: true,
                title: '<img src="styles/legend/Locais_14.png" /> Locais'
            });
var format_Espaosdesociabilidadeecultura_15 = new ol.format.GeoJSON();
var features_Espaosdesociabilidadeecultura_15 = format_Espaosdesociabilidadeecultura_15.readFeatures(json_Espaosdesociabilidadeecultura_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaosdesociabilidadeecultura_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaosdesociabilidadeecultura_15.addFeatures(features_Espaosdesociabilidadeecultura_15);
cluster_Espaosdesociabilidadeecultura_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Espaosdesociabilidadeecultura_15
});
var lyr_Espaosdesociabilidadeecultura_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Espaosdesociabilidadeecultura_15, 
                style: style_Espaosdesociabilidadeecultura_15,
                popuplayertitle: 'Espaços de sociabilidade e cultura',
                interactive: true,
                title: '<img src="styles/legend/Espaosdesociabilidadeecultura_15.png" /> Espaços de sociabilidade e cultura'
            });
var format_Outrospatrimniosimateriais_16 = new ol.format.GeoJSON();
var features_Outrospatrimniosimateriais_16 = format_Outrospatrimniosimateriais_16.readFeatures(json_Outrospatrimniosimateriais_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outrospatrimniosimateriais_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outrospatrimniosimateriais_16.addFeatures(features_Outrospatrimniosimateriais_16);
cluster_Outrospatrimniosimateriais_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Outrospatrimniosimateriais_16
});
var lyr_Outrospatrimniosimateriais_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Outrospatrimniosimateriais_16, 
                style: style_Outrospatrimniosimateriais_16,
                popuplayertitle: 'Outros patrimônios imateriais',
                interactive: true,
                title: '<img src="styles/legend/Outrospatrimniosimateriais_16.png" /> Outros patrimônios imateriais'
            });
var format_RodasculturaisdeHipHopbreasbatalhasderima_17 = new ol.format.GeoJSON();
var features_RodasculturaisdeHipHopbreasbatalhasderima_17 = format_RodasculturaisdeHipHopbreasbatalhasderima_17.readFeatures(json_RodasculturaisdeHipHopbreasbatalhasderima_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodasculturaisdeHipHopbreasbatalhasderima_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodasculturaisdeHipHopbreasbatalhasderima_17.addFeatures(features_RodasculturaisdeHipHopbreasbatalhasderima_17);
cluster_RodasculturaisdeHipHopbreasbatalhasderima_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RodasculturaisdeHipHopbreasbatalhasderima_17
});
var lyr_RodasculturaisdeHipHopbreasbatalhasderima_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RodasculturaisdeHipHopbreasbatalhasderima_17, 
                style: style_RodasculturaisdeHipHopbreasbatalhasderima_17,
                popuplayertitle: 'Rodas culturais de Hip-Hop<br>e as batalhas de rima',
                interactive: true,
                title: '<img src="styles/legend/RodasculturaisdeHipHopbreasbatalhasderima_17.png" /> Rodas culturais de Hip-Hop<br>e as batalhas de rima'
            });
var format_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18 = new ol.format.GeoJSON();
var features_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18 = format_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18.readFeatures(json_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18.addFeatures(features_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18);
cluster_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18
});
var lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18, 
                style: style_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18,
                popuplayertitle: 'Rodas de Capoeira e ofício<br>dos mestres de Capoeira',
                interactive: true,
                title: '<img src="styles/legend/RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18.png" /> Rodas de Capoeira e ofício<br>dos mestres de Capoeira'
            });
var format_ReligioesdematrizeinflunciaAfricana_19 = new ol.format.GeoJSON();
var features_ReligioesdematrizeinflunciaAfricana_19 = format_ReligioesdematrizeinflunciaAfricana_19.readFeatures(json_ReligioesdematrizeinflunciaAfricana_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReligioesdematrizeinflunciaAfricana_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReligioesdematrizeinflunciaAfricana_19.addFeatures(features_ReligioesdematrizeinflunciaAfricana_19);
cluster_ReligioesdematrizeinflunciaAfricana_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ReligioesdematrizeinflunciaAfricana_19
});
var lyr_ReligioesdematrizeinflunciaAfricana_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ReligioesdematrizeinflunciaAfricana_19, 
                style: style_ReligioesdematrizeinflunciaAfricana_19,
                popuplayertitle: 'Religioes de matriz e influência Africana',
                interactive: true,
                title: '<img src="styles/legend/ReligioesdematrizeinflunciaAfricana_19.png" /> Religioes de matriz e influência Africana'
            });
var format_MatrizesdoSambadoRiodeJaneiro_20 = new ol.format.GeoJSON();
var features_MatrizesdoSambadoRiodeJaneiro_20 = format_MatrizesdoSambadoRiodeJaneiro_20.readFeatures(json_MatrizesdoSambadoRiodeJaneiro_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MatrizesdoSambadoRiodeJaneiro_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MatrizesdoSambadoRiodeJaneiro_20.addFeatures(features_MatrizesdoSambadoRiodeJaneiro_20);
cluster_MatrizesdoSambadoRiodeJaneiro_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MatrizesdoSambadoRiodeJaneiro_20
});
var lyr_MatrizesdoSambadoRiodeJaneiro_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MatrizesdoSambadoRiodeJaneiro_20, 
                style: style_MatrizesdoSambadoRiodeJaneiro_20,
                popuplayertitle: 'Matrizes do Samba do Rio de Janeiro',
                interactive: true,
                title: '<img src="styles/legend/MatrizesdoSambadoRiodeJaneiro_20.png" /> Matrizes do Samba do Rio de Janeiro'
            });
var format_bPatrimniosMateriaisb_21 = new ol.format.GeoJSON();
var features_bPatrimniosMateriaisb_21 = format_bPatrimniosMateriaisb_21.readFeatures(json_bPatrimniosMateriaisb_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bPatrimniosMateriaisb_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bPatrimniosMateriaisb_21.addFeatures(features_bPatrimniosMateriaisb_21);
cluster_bPatrimniosMateriaisb_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_bPatrimniosMateriaisb_21
});
var lyr_bPatrimniosMateriaisb_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_bPatrimniosMateriaisb_21, 
                style: style_bPatrimniosMateriaisb_21,
                popuplayertitle: '<b>Patrimônios Materiais</b>',
                interactive: true,
                title: '<img src="styles/legend/bPatrimniosMateriaisb_21.png" /> <b>Patrimônios Materiais</b>'
            });
var group_Patrimniosimateriais = new ol.layer.Group({
                                layers: [lyr_Outrospatrimniosimateriais_16,lyr_RodasculturaisdeHipHopbreasbatalhasderima_17,lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18,lyr_ReligioesdematrizeinflunciaAfricana_19,lyr_MatrizesdoSambadoRiodeJaneiro_20,],
                                fold: 'close',
                                title: 'Patrimônios imateriais'});
var group_Organizaeselugaresdememria = new ol.layer.Group({
                                layers: [lyr_OrganizaesCarnavalescas_11,lyr_Organizaes_12,lyr_Monumentos_13,lyr_Locais_14,lyr_Espaosdesociabilidadeecultura_15,],
                                fold: 'close',
                                title: 'Organizações e lugares de memória'});
var group_Leisdecretosereasdeproteo = new ol.layer.Group({
                                layers: [lyr_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2,lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3,lyr_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4,lyr_LeiMunicipaln66132019_5,lyr_ZonadeamortecimentodoCaisdoValongo_6,lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7,lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8,lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9,],
                                fold: 'open',
                                title: 'Leis, decretos e áreas de proteção'});

lyr_ESRISatellite_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2.setVisible(true);lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.setVisible(false);lyr_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4.setVisible(false);lyr_LeiMunicipaln66132019_5.setVisible(false);lyr_ZonadeamortecimentodoCaisdoValongo_6.setVisible(true);lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7.setVisible(false);lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8.setVisible(false);lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9.setVisible(false);lyr_bSitiosarqueolgicosb_10.setVisible(true);lyr_OrganizaesCarnavalescas_11.setVisible(true);lyr_Organizaes_12.setVisible(true);lyr_Monumentos_13.setVisible(true);lyr_Locais_14.setVisible(true);lyr_Espaosdesociabilidadeecultura_15.setVisible(true);lyr_Outrospatrimniosimateriais_16.setVisible(true);lyr_RodasculturaisdeHipHopbreasbatalhasderima_17.setVisible(true);lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18.setVisible(true);lyr_ReligioesdematrizeinflunciaAfricana_19.setVisible(true);lyr_MatrizesdoSambadoRiodeJaneiro_20.setVisible(true);lyr_bPatrimniosMateriaisb_21.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_ESRIStandard_1,group_Leisdecretosereasdeproteo,lyr_bSitiosarqueolgicosb_10,group_Organizaeselugaresdememria,group_Patrimniosimateriais,lyr_bPatrimniosMateriaisb_21];
lyr_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'icon': 'icon', });
lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'OBJECTID': 'OBJECTID', 'NOME': 'NOME', 'DECRETO': 'DECRETO', 'DATA': 'DATA', 'FLG_GESTAO': 'FLG_GESTAO', 'SUBAREA': 'SUBAREA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'fonte': 'fonte', });
lyr_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____o': 'descri____o', 'OBJECTID': 'OBJECTID', 'NOME': 'NOME', 'DECRETO': 'DECRETO', 'DATA': 'DATA', 'FLG_GESTAO': 'FLG_GESTAO', 'SUBAREA': 'SUBAREA', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_LeiMunicipaln66132019_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____o': 'descri____o', 'OBJECTID': 'OBJECTID', 'NOME': 'NOME', 'DECRETO': 'DECRETO', 'DATA': 'DATA', 'FLG_GESTAO': 'FLG_GESTAO', 'SUBAREA': 'SUBAREA', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_ZonadeamortecimentodoCaisdoValongo_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____o': 'descri____o', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'NOME': 'Nome', 'NATUREZA': 'Natureza', 'TIPO': 'Tipo', 'BAIRRO': 'Bairro', 'ENDERE__O': 'Endereço', 'DESCRICAO': 'Descrição', 'LOGRADOURO': 'Logradouro', 'CLNP': 'CLNP', 'ANO_DO_TOM': 'Ano do tombamento', 'ESFERA_DE_ (Esfera de legislação)': 'Esfera de legislação', 'LEG_ESTADU': 'Estadual', 'LEG_FEDERA': 'Federal', 'LEG_MUNICI': 'Municipal', });
lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_bSitiosarqueolgicosb_10.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Natureza do Bem': 'Natureza do Bem', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Cadastro Nacional de Sítios Arqueológicos': 'Ano do Cadastro Nacional de Sítios Arqueológicos', 'Descrição': 'Descrição', 'Nº De Registro Do Bem': 'Nº De Registro Do Bem', 'Fonte': 'Fonte', 'Link': 'Link', 'imagens': 'imagens', });
lyr_OrganizaesCarnavalescas_11.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Organizaes_12.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Monumentos_13.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Locais_14.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Espaosdesociabilidadeecultura_15.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Outrospatrimniosimateriais_16.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_RodasculturaisdeHipHopbreasbatalhasderima_17.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_ReligioesdematrizeinflunciaAfricana_19.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_MatrizesdoSambadoRiodeJaneiro_20.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_bPatrimniosMateriaisb_21.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano/Período': 'Ano/Período', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Descrição': 'Descrição', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'icon': 'TextEdit', });
lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.set('fieldImages', {'id': 'Hidden', 'Name': 'Hidden', 'descriptio': 'Hidden', 'OBJECTID': 'Hidden', 'NOME': 'TextEdit', 'DECRETO': 'TextEdit', 'DATA': 'Hidden', 'FLG_GESTAO': 'Hidden', 'SUBAREA': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'fonte': 'TextEdit', });
lyr_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'descri____o': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOME': 'TextEdit', 'DECRETO': 'TextEdit', 'DATA': 'TextEdit', 'FLG_GESTAO': 'TextEdit', 'SUBAREA': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_LeiMunicipaln66132019_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'descri____o': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOME': 'TextEdit', 'DECRETO': 'TextEdit', 'DATA': 'TextEdit', 'FLG_GESTAO': 'TextEdit', 'SUBAREA': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_ZonadeamortecimentodoCaisdoValongo_6.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'descri____o': 'Hidden', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'NOME': 'Hidden', 'NATUREZA': 'TextEdit', 'TIPO': 'TextEdit', 'BAIRRO': 'Hidden', 'ENDERE__O': 'TextEdit', 'DESCRICAO': 'TextEdit', 'LOGRADOURO': 'Hidden', 'CLNP': 'TextEdit', 'ANO_DO_TOM': 'TextEdit', 'ESFERA_DE_ (Esfera de legislação)': 'TextEdit', 'LEG_ESTADU': 'TextEdit', 'LEG_FEDERA': 'TextEdit', 'LEG_MUNICI': 'TextEdit', });
lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_bSitiosarqueolgicosb_10.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Temporalidade': 'TextEdit', 'Ano': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Natureza do Bem': 'TextEdit', 'Instância do Tombamento': 'TextEdit', 'Ano do Cadastro Nacional de Sítios Arqueológicos': 'TextEdit', 'Descrição': 'TextEdit', 'Nº De Registro Do Bem': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', 'imagens': 'Hidden', });
lyr_OrganizaesCarnavalescas_11.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Organizaes_12.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Monumentos_13.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Locais_14.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Espaosdesociabilidadeecultura_15.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Outrospatrimniosimateriais_16.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'TextEdit', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'Hidden', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_RodasculturaisdeHipHopbreasbatalhasderima_17.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'Hidden', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'Hidden', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_ReligioesdematrizeinflunciaAfricana_19.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'Hidden', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_MatrizesdoSambadoRiodeJaneiro_20.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'Hidden', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_bPatrimniosMateriaisb_21.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Temporalidade': 'Hidden', 'Ano/Período': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'Hidden', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Descrição': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_DelimitaodaPequenafricabrProjetoVIVAPequenafrica_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'icon': 'no label', });
lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.set('fieldLabels', {'NOME': 'no label', 'DECRETO': 'no label', 'fonte': 'no label', });
lyr_MapeamentodoMinistrioPblicoFederalbrRelatriode8demarode2022_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descri____o': 'no label', 'OBJECTID': 'no label', 'NOME': 'no label', 'DECRETO': 'no label', 'DATA': 'no label', 'FLG_GESTAO': 'no label', 'SUBAREA': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_LeiMunicipaln66132019_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descri____o': 'no label', 'OBJECTID': 'no label', 'NOME': 'no label', 'DECRETO': 'no label', 'DATA': 'no label', 'FLG_GESTAO': 'no label', 'SUBAREA': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_ZonadeamortecimentodoCaisdoValongo_6.set('fieldLabels', {'Name': 'no label', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_7.set('fieldLabels', {'Name': 'no label', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_8.set('fieldLabels', {'Name': 'no label', 'NATUREZA': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'ENDERE__O': 'inline label - visible with data', 'DESCRICAO': 'header label - visible with data', 'CLNP': 'inline label - visible with data', 'ANO_DO_TOM': 'inline label - visible with data', 'ESFERA_DE_ (Esfera de legislação)': 'inline label - visible with data', 'LEG_ESTADU': 'inline label - visible with data', 'LEG_FEDERA': 'inline label - visible with data', 'LEG_MUNICI': 'inline label - visible with data', });
lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_9.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', });
lyr_bSitiosarqueolgicosb_10.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Categoria': 'inline label - visible with data', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Natureza do Bem': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Cadastro Nacional de Sítios Arqueológicos': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Nº De Registro Do Bem': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_OrganizaesCarnavalescas_11.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Organizaes_12.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Monumentos_13.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Locais_14.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Espaosdesociabilidadeecultura_15.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Outrospatrimniosimateriais_16.set('fieldLabels', {'Imagem': 'no label', 'Patrimônio': 'no label', 'Manifestação': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_RodasculturaisdeHipHopbreasbatalhasderima_17.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_18.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_ReligioesdematrizeinflunciaAfricana_19.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - always visible', 'Links': 'no label', });
lyr_MatrizesdoSambadoRiodeJaneiro_20.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_bPatrimniosMateriaisb_21.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Categoria': 'inline label - visible with data', 'Ano/Período': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - always visible', 'Link': 'no label', });
lyr_bPatrimniosMateriaisb_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});