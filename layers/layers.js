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
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            }),
			className: 'ol_bwstan'	

        });
var format_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2 = new ol.format.GeoJSON();
var features_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2 = format_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2.readFeatures(json_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2.addFeatures(features_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2);
var lyr_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2, 
                style: style_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2,
                popuplayertitle: 'Polígono da Pequena África<br>Projeto VIVA Pequena África',
                interactive: false,
                title: '<img src="styles/legend/PolgonodaPequenafricabrProjetoVIVAPequenafrica_2.png" /> Polígono da Pequena África<br>Projeto VIVA Pequena África'
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
var format_ZonadeamortecimentodoCaisdoValongo_4 = new ol.format.GeoJSON();
var features_ZonadeamortecimentodoCaisdoValongo_4 = format_ZonadeamortecimentodoCaisdoValongo_4.readFeatures(json_ZonadeamortecimentodoCaisdoValongo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonadeamortecimentodoCaisdoValongo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeamortecimentodoCaisdoValongo_4.addFeatures(features_ZonadeamortecimentodoCaisdoValongo_4);
var lyr_ZonadeamortecimentodoCaisdoValongo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeamortecimentodoCaisdoValongo_4, 
                style: style_ZonadeamortecimentodoCaisdoValongo_4,
                popuplayertitle: 'Zona de amortecimento do Cais do Valongo',
                interactive: false,
                title: '<img src="styles/legend/ZonadeamortecimentodoCaisdoValongo_4.png" /> Zona de amortecimento do Cais do Valongo'
            });
var format_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5 = new ol.format.GeoJSON();
var features_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5 = format_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5.readFeatures(json_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5.addFeatures(features_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5);
var lyr_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5, 
                style: style_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5,
                popuplayertitle: 'Circuito Histórico e Arqueológico da Pequena África<br>Lei nº 8.105, de 20 de Set. de 2018',
                interactive: false,
                title: '<img src="styles/legend/CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5.png" /> Circuito Histórico e Arqueológico da Pequena África<br>Lei nº 8.105, de 20 de Set. de 2018'
            });
var format_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6 = new ol.format.GeoJSON();
var features_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6 = format_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6.readFeatures(json_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6.addFeatures(features_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6);
var lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6, 
                style: style_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6,
                popuplayertitle: 'Circuito Histórico e Arqueológico da Peq. África<br>Lei nº 8.105, de 20 de Set. de 2018',
                interactive: true,
                title: '<img src="styles/legend/CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6.png" /> Circuito Histórico e Arqueológico da Peq. África<br>Lei nº 8.105, de 20 de Set. de 2018'
            });
var format_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7 = new ol.format.GeoJSON();
var features_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7 = format_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7.readFeatures(json_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7.addFeatures(features_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7);
var lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7, 
                style: style_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7,
                popuplayertitle: 'Circuito de Herança e Memória Africana <br>Decreto nº 34.803 de 29 de Nov. de 2011',
                interactive: false,
                title: '<img src="styles/legend/CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7.png" /> Circuito de Herança e Memória Africana <br>Decreto nº 34.803 de 29 de Nov. de 2011'
            });
var format_bSitiosarqueolgicosb_8 = new ol.format.GeoJSON();
var features_bSitiosarqueolgicosb_8 = format_bSitiosarqueolgicosb_8.readFeatures(json_bSitiosarqueolgicosb_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bSitiosarqueolgicosb_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bSitiosarqueolgicosb_8.addFeatures(features_bSitiosarqueolgicosb_8);
cluster_bSitiosarqueolgicosb_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_bSitiosarqueolgicosb_8
});
var lyr_bSitiosarqueolgicosb_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_bSitiosarqueolgicosb_8, 
                style: style_bSitiosarqueolgicosb_8,
                popuplayertitle: '<b>Sitios arqueológicos</b>',
                interactive: true,
                title: '<img src="styles/legend/bSitiosarqueolgicosb_8.png" /> <b>Sitios arqueológicos</b>'
            });
var format_OrganizaesCarnavalescas_9 = new ol.format.GeoJSON();
var features_OrganizaesCarnavalescas_9 = format_OrganizaesCarnavalescas_9.readFeatures(json_OrganizaesCarnavalescas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrganizaesCarnavalescas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrganizaesCarnavalescas_9.addFeatures(features_OrganizaesCarnavalescas_9);
cluster_OrganizaesCarnavalescas_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_OrganizaesCarnavalescas_9
});
var lyr_OrganizaesCarnavalescas_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_OrganizaesCarnavalescas_9, 
                style: style_OrganizaesCarnavalescas_9,
                popuplayertitle: 'Organizações Carnavalescas',
                interactive: true,
                title: '<img src="styles/legend/OrganizaesCarnavalescas_9.png" /> Organizações Carnavalescas'
            });
var format_Organizaes_10 = new ol.format.GeoJSON();
var features_Organizaes_10 = format_Organizaes_10.readFeatures(json_Organizaes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Organizaes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Organizaes_10.addFeatures(features_Organizaes_10);
cluster_Organizaes_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Organizaes_10
});
var lyr_Organizaes_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Organizaes_10, 
                style: style_Organizaes_10,
                popuplayertitle: 'Organizações',
                interactive: true,
                title: '<img src="styles/legend/Organizaes_10.png" /> Organizações'
            });
var format_Monumentos_11 = new ol.format.GeoJSON();
var features_Monumentos_11 = format_Monumentos_11.readFeatures(json_Monumentos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monumentos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monumentos_11.addFeatures(features_Monumentos_11);
cluster_Monumentos_11 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Monumentos_11
});
var lyr_Monumentos_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Monumentos_11, 
                style: style_Monumentos_11,
                popuplayertitle: 'Monumentos',
                interactive: true,
                title: '<img src="styles/legend/Monumentos_11.png" /> Monumentos'
            });
var format_Locais_12 = new ol.format.GeoJSON();
var features_Locais_12 = format_Locais_12.readFeatures(json_Locais_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locais_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locais_12.addFeatures(features_Locais_12);
cluster_Locais_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Locais_12
});
var lyr_Locais_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Locais_12, 
                style: style_Locais_12,
                popuplayertitle: 'Locais',
                interactive: true,
                title: '<img src="styles/legend/Locais_12.png" /> Locais'
            });
var format_Espaosdesociabilidadeecultura_13 = new ol.format.GeoJSON();
var features_Espaosdesociabilidadeecultura_13 = format_Espaosdesociabilidadeecultura_13.readFeatures(json_Espaosdesociabilidadeecultura_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaosdesociabilidadeecultura_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaosdesociabilidadeecultura_13.addFeatures(features_Espaosdesociabilidadeecultura_13);
cluster_Espaosdesociabilidadeecultura_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Espaosdesociabilidadeecultura_13
});
var lyr_Espaosdesociabilidadeecultura_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Espaosdesociabilidadeecultura_13, 
                style: style_Espaosdesociabilidadeecultura_13,
                popuplayertitle: 'Espaços de sociabilidade e cultura',
                interactive: true,
                title: '<img src="styles/legend/Espaosdesociabilidadeecultura_13.png" /> Espaços de sociabilidade e cultura'
            });
var format_Outrospatrimniosimateriais_14 = new ol.format.GeoJSON();
var features_Outrospatrimniosimateriais_14 = format_Outrospatrimniosimateriais_14.readFeatures(json_Outrospatrimniosimateriais_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Outrospatrimniosimateriais_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outrospatrimniosimateriais_14.addFeatures(features_Outrospatrimniosimateriais_14);
cluster_Outrospatrimniosimateriais_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Outrospatrimniosimateriais_14
});
var lyr_Outrospatrimniosimateriais_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Outrospatrimniosimateriais_14, 
                style: style_Outrospatrimniosimateriais_14,
                popuplayertitle: 'Outros patrimônios imateriais',
                interactive: true,
                title: '<img src="styles/legend/Outrospatrimniosimateriais_14.png" /> Outros patrimônios imateriais'
            });
var format_RodasculturaisdeHipHopbreasbatalhasderima_15 = new ol.format.GeoJSON();
var features_RodasculturaisdeHipHopbreasbatalhasderima_15 = format_RodasculturaisdeHipHopbreasbatalhasderima_15.readFeatures(json_RodasculturaisdeHipHopbreasbatalhasderima_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodasculturaisdeHipHopbreasbatalhasderima_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodasculturaisdeHipHopbreasbatalhasderima_15.addFeatures(features_RodasculturaisdeHipHopbreasbatalhasderima_15);
cluster_RodasculturaisdeHipHopbreasbatalhasderima_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RodasculturaisdeHipHopbreasbatalhasderima_15
});
var lyr_RodasculturaisdeHipHopbreasbatalhasderima_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RodasculturaisdeHipHopbreasbatalhasderima_15, 
                style: style_RodasculturaisdeHipHopbreasbatalhasderima_15,
                popuplayertitle: 'Rodas culturais de Hip-Hop<br>e as batalhas de rima',
                interactive: true,
                title: '<img src="styles/legend/RodasculturaisdeHipHopbreasbatalhasderima_15.png" /> Rodas culturais de Hip-Hop<br>e as batalhas de rima'
            });
var format_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16 = new ol.format.GeoJSON();
var features_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16 = format_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16.readFeatures(json_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16.addFeatures(features_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16);
cluster_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16
});
var lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16, 
                style: style_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16,
                popuplayertitle: 'Rodas de Capoeira e ofício<br>dos mestres de Capoeira',
                interactive: true,
                title: '<img src="styles/legend/RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16.png" /> Rodas de Capoeira e ofício<br>dos mestres de Capoeira'
            });
var format_ReligioesdematrizeinflunciaAfricana_17 = new ol.format.GeoJSON();
var features_ReligioesdematrizeinflunciaAfricana_17 = format_ReligioesdematrizeinflunciaAfricana_17.readFeatures(json_ReligioesdematrizeinflunciaAfricana_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReligioesdematrizeinflunciaAfricana_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReligioesdematrizeinflunciaAfricana_17.addFeatures(features_ReligioesdematrizeinflunciaAfricana_17);
cluster_ReligioesdematrizeinflunciaAfricana_17 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ReligioesdematrizeinflunciaAfricana_17
});
var lyr_ReligioesdematrizeinflunciaAfricana_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ReligioesdematrizeinflunciaAfricana_17, 
                style: style_ReligioesdematrizeinflunciaAfricana_17,
                popuplayertitle: 'Religioes de matriz e influência Africana',
                interactive: true,
                title: '<img src="styles/legend/ReligioesdematrizeinflunciaAfricana_17.png" /> Religioes de matriz e influência Africana'
            });
var format_MatrizesdoSambadoRiodeJaneiro_18 = new ol.format.GeoJSON();
var features_MatrizesdoSambadoRiodeJaneiro_18 = format_MatrizesdoSambadoRiodeJaneiro_18.readFeatures(json_MatrizesdoSambadoRiodeJaneiro_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MatrizesdoSambadoRiodeJaneiro_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MatrizesdoSambadoRiodeJaneiro_18.addFeatures(features_MatrizesdoSambadoRiodeJaneiro_18);
cluster_MatrizesdoSambadoRiodeJaneiro_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_MatrizesdoSambadoRiodeJaneiro_18
});
var lyr_MatrizesdoSambadoRiodeJaneiro_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_MatrizesdoSambadoRiodeJaneiro_18, 
                style: style_MatrizesdoSambadoRiodeJaneiro_18,
                popuplayertitle: 'Matrizes do Samba do Rio de Janeiro',
                interactive: true,
                title: '<img src="styles/legend/MatrizesdoSambadoRiodeJaneiro_18.png" /> Matrizes do Samba do Rio de Janeiro'
            });
var format_bPatrimniosMateriaisb_19 = new ol.format.GeoJSON();
var features_bPatrimniosMateriaisb_19 = format_bPatrimniosMateriaisb_19.readFeatures(json_bPatrimniosMateriaisb_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bPatrimniosMateriaisb_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bPatrimniosMateriaisb_19.addFeatures(features_bPatrimniosMateriaisb_19);
cluster_bPatrimniosMateriaisb_19 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_bPatrimniosMateriaisb_19
});
var lyr_bPatrimniosMateriaisb_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_bPatrimniosMateriaisb_19, 
                style: style_bPatrimniosMateriaisb_19,
                popuplayertitle: '<b>Patrimônios Materiais</b>',
                interactive: true,
                title: '<img src="styles/legend/bPatrimniosMateriaisb_19.png" /> <b>Patrimônios Materiais</b>'
            });
var group_Patrimniosimateriais = new ol.layer.Group({
                                layers: [lyr_Outrospatrimniosimateriais_14,lyr_RodasculturaisdeHipHopbreasbatalhasderima_15,lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16,lyr_ReligioesdematrizeinflunciaAfricana_17,lyr_MatrizesdoSambadoRiodeJaneiro_18,],
                                fold: 'open',
                                title: 'Patrimônios imateriais'});
var group_Organizaeselugaresdememria = new ol.layer.Group({
                                layers: [lyr_OrganizaesCarnavalescas_9,lyr_Organizaes_10,lyr_Monumentos_11,lyr_Locais_12,lyr_Espaosdesociabilidadeecultura_13,],
                                fold: 'open',
                                title: 'Organizações e lugares de memória'});
var group_Leisdecretosereasdeproteo = new ol.layer.Group({
                                layers: [lyr_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2,lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3,lyr_ZonadeamortecimentodoCaisdoValongo_4,lyr_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5,lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6,lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7,],
                                fold: 'open',
                                title: 'Leis, decretos e áreas de proteção'});

lyr_ESRISatellite_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2.setVisible(true);lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.setVisible(false);lyr_ZonadeamortecimentodoCaisdoValongo_4.setVisible(true);lyr_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5.setVisible(false);lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6.setVisible(false);lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7.setVisible(false);lyr_bSitiosarqueolgicosb_8.setVisible(true);lyr_OrganizaesCarnavalescas_9.setVisible(true);lyr_Organizaes_10.setVisible(true);lyr_Monumentos_11.setVisible(true);lyr_Locais_12.setVisible(true);lyr_Espaosdesociabilidadeecultura_13.setVisible(true);lyr_Outrospatrimniosimateriais_14.setVisible(true);lyr_RodasculturaisdeHipHopbreasbatalhasderima_15.setVisible(true);lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16.setVisible(true);lyr_ReligioesdematrizeinflunciaAfricana_17.setVisible(true);lyr_MatrizesdoSambadoRiodeJaneiro_18.setVisible(true);lyr_bPatrimniosMateriaisb_19.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_ESRIStandard_1,group_Leisdecretosereasdeproteo,lyr_bSitiosarqueolgicosb_8,group_Organizaeselugaresdememria,group_Patrimniosimateriais,lyr_bPatrimniosMateriaisb_19];
lyr_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'icon': 'icon', });
lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'OBJECTID': 'OBJECTID', 'NOME': 'NOME', 'DECRETO': 'DECRETO', 'DATA': 'DATA', 'FLG_GESTAO': 'FLG_GESTAO', 'SUBAREA': 'SUBAREA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'fonte': 'fonte', });
lyr_ZonadeamortecimentodoCaisdoValongo_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____o': 'descri____o', });
lyr_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5.set('fieldAliases', {'id': 'id', 'Name': 'Nome', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'NOME': 'Nome', 'NATUREZA': 'Natureza', 'TIPO': 'Tipo', 'BAIRRO': 'Bairro', 'ENDERE__O': 'Endereço', 'DESCRICAO': 'Descrição', 'LOGRADOURO': 'Logradouro', 'CLNP': 'CLNP', 'ANO_DO_TOM': 'Ano do tombamento', 'ESFERA_DE_ (Esfera de legislação)': 'Esfera de legislação', 'LEG_ESTADU': 'Estadual', 'LEG_FEDERA': 'Federal', 'LEG_MUNICI': 'Municipal', });
lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_bSitiosarqueolgicosb_8.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Natureza do Bem': 'Natureza do Bem', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Cadastro Nacional de Sítios Arqueológicos': 'Ano do Cadastro Nacional de Sítios Arqueológicos', 'Descrição': 'Descrição', 'Nº De Registro Do Bem': 'Nº De Registro Do Bem', 'Fonte': 'Fonte', 'Link': 'Link', 'imagens': 'imagens', });
lyr_OrganizaesCarnavalescas_9.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Organizaes_10.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Monumentos_11.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Locais_12.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Espaosdesociabilidadeecultura_13.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Descrição': 'Descrição', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_Outrospatrimniosimateriais_14.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_RodasculturaisdeHipHopbreasbatalhasderima_15.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_ReligioesdematrizeinflunciaAfricana_17.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_MatrizesdoSambadoRiodeJaneiro_18.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Patrimônio': 'Patrimônio', 'Manifestação': 'Manifestação', 'Endereço': 'Endereço', 'Descrição': 'Descrição', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano': 'Ano', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Links': 'Links', });
lyr_bPatrimniosMateriaisb_19.set('fieldAliases', {'Código': 'Código', 'Imagem': 'Imagem', 'Nome': 'Nome', 'Categoria': 'Categoria', 'Temporalidade': 'Temporalidade', 'Ano/Período': 'Ano/Período', 'Endereço': 'Endereço', 'Y': 'Y', 'X': 'X', 'Tipo de Patrimônio': 'Tipo de Patrimônio', 'Instância do Tombamento': 'Instância do Tombamento', 'Ano do Tombamento': 'Ano do Tombamento', 'Descrição': 'Descrição', 'Nº do Processo': 'Nº do Processo', 'Fonte': 'Fonte', 'Link': 'Link', });
lyr_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'icon': 'TextEdit', });
lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.set('fieldImages', {'id': 'Hidden', 'Name': 'Hidden', 'descriptio': 'Hidden', 'OBJECTID': 'Hidden', 'NOME': 'TextEdit', 'DECRETO': 'TextEdit', 'DATA': 'Hidden', 'FLG_GESTAO': 'Hidden', 'SUBAREA': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', 'fonte': 'TextEdit', });
lyr_ZonadeamortecimentodoCaisdoValongo_4.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'descri____o': 'Hidden', });
lyr_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'NOME': 'Hidden', 'NATUREZA': 'TextEdit', 'TIPO': 'TextEdit', 'BAIRRO': 'Hidden', 'ENDERE__O': 'TextEdit', 'DESCRICAO': 'TextEdit', 'LOGRADOURO': 'Hidden', 'CLNP': 'TextEdit', 'ANO_DO_TOM': 'TextEdit', 'ESFERA_DE_ (Esfera de legislação)': 'TextEdit', 'LEG_ESTADU': 'TextEdit', 'LEG_FEDERA': 'TextEdit', 'LEG_MUNICI': 'TextEdit', });
lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_bSitiosarqueolgicosb_8.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Temporalidade': 'TextEdit', 'Ano': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Natureza do Bem': 'TextEdit', 'Instância do Tombamento': 'TextEdit', 'Ano do Cadastro Nacional de Sítios Arqueológicos': 'TextEdit', 'Descrição': 'TextEdit', 'Nº De Registro Do Bem': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', 'imagens': 'Hidden', });
lyr_OrganizaesCarnavalescas_9.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'Range', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Organizaes_10.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'Range', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Monumentos_11.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'Range', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Locais_12.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'Range', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Espaosdesociabilidadeecultura_13.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'TextEdit', 'Ano': 'Range', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Descrição': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'TextEdit', });
lyr_Outrospatrimniosimateriais_14.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'TextEdit', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_RodasculturaisdeHipHopbreasbatalhasderima_15.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'TextEdit', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'TextEdit', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_ReligioesdematrizeinflunciaAfricana_17.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'TextEdit', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_MatrizesdoSambadoRiodeJaneiro_18.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Patrimônio': 'Hidden', 'Manifestação': 'TextEdit', 'Endereço': 'TextEdit', 'Descrição': 'TextEdit', 'Categoria': 'Hidden', 'Temporalidade': 'Hidden', 'Ano': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'TextEdit', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Links': 'TextEdit', });
lyr_bPatrimniosMateriaisb_19.set('fieldImages', {'Código': 'Hidden', 'Imagem': 'TextEdit', 'Nome': 'TextEdit', 'Categoria': 'TextEdit', 'Temporalidade': 'Hidden', 'Ano/Período': 'TextEdit', 'Endereço': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Tipo de Patrimônio': 'Hidden', 'Instância do Tombamento': 'TextEdit', 'Ano do Tombamento': 'TextEdit', 'Descrição': 'TextEdit', 'Nº do Processo': 'TextEdit', 'Fonte': 'TextEdit', 'Link': 'Hidden', });
lyr_PolgonodaPequenafricabrProjetoVIVAPequenafrica_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'icon': 'no label', });
lyr_APACSAGASLein9711987ebrDecretoMunicipaln73511988_3.set('fieldLabels', {'NOME': 'no label', 'DECRETO': 'no label', 'fonte': 'no label', });
lyr_ZonadeamortecimentodoCaisdoValongo_4.set('fieldLabels', {'Name': 'no label', });
lyr_CircuitoHistricoeArqueolgicodaPequenafricabrLein8105de20deSetde2018_5.set('fieldLabels', {'Name': 'no label', });
lyr_CircuitoHistricoeArqueolgicodaPeqfricabrLein8105de20deSetde2018_6.set('fieldLabels', {'Name': 'no label', 'NATUREZA': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'ENDERE__O': 'inline label - visible with data', 'DESCRICAO': 'header label - visible with data', 'CLNP': 'inline label - visible with data', 'ANO_DO_TOM': 'inline label - visible with data', 'ESFERA_DE_ (Esfera de legislação)': 'inline label - visible with data', 'LEG_ESTADU': 'inline label - visible with data', 'LEG_FEDERA': 'inline label - visible with data', 'LEG_MUNICI': 'inline label - visible with data', });
lyr_CircuitodeHeranaeMemriaAfricanabrDecreton34803de29deNovde2011_7.set('fieldLabels', {'Name': 'no label', 'description': 'hidden field', });
lyr_bSitiosarqueolgicosb_8.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Categoria': 'inline label - visible with data', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Natureza do Bem': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Cadastro Nacional de Sítios Arqueológicos': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Nº De Registro Do Bem': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_OrganizaesCarnavalescas_9.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Organizaes_10.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Monumentos_11.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Locais_12.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Espaosdesociabilidadeecultura_13.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Temporalidade': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Fonte': 'header label - visible with data', 'Link': 'no label', });
lyr_Outrospatrimniosimateriais_14.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Tipo de Patrimônio': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_RodasculturaisdeHipHopbreasbatalhasderima_15.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Tipo de Patrimônio': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_RodasdeCapoeiraeofciobrdosmestresdeCapoeira_16.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Tipo de Patrimônio': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_ReligioesdematrizeinflunciaAfricana_17.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Tipo de Patrimônio': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - always visible', 'Links': 'no label', });
lyr_MatrizesdoSambadoRiodeJaneiro_18.set('fieldLabels', {'Imagem': 'no label', 'Manifestação': 'no label', 'Endereço': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Ano': 'inline label - visible with data', 'Tipo de Patrimônio': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - visible with data', 'Links': 'no label', });
lyr_bPatrimniosMateriaisb_19.set('fieldLabels', {'Imagem': 'no label', 'Nome': 'no label', 'Categoria': 'inline label - visible with data', 'Ano/Período': 'inline label - visible with data', 'Endereço': 'inline label - visible with data', 'Instância do Tombamento': 'inline label - visible with data', 'Ano do Tombamento': 'inline label - visible with data', 'Descrição': 'header label - visible with data', 'Nº do Processo': 'inline label - visible with data', 'Fonte': 'header label - always visible', });
lyr_bPatrimniosMateriaisb_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});