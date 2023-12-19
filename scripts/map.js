initMap();

async function initMap() {
    const location_map = {center: [131.911284, 43.133149], zoom: 15}
    const POINT_YA = {coordinates: [131.911284, 43.133149], title: 'Мы здесь!', draggable: false};
    
    await ymaps3.ready;
    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;
    
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    
    map = new YMap(
        document.getElementById('map'), 
        {
        location: location_map,
        behaviors: []
        },
    );;
        
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    
    const marker = new YMapDefaultMarker(POINT_YA);
    map.addChild(marker);
}