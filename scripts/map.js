initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [131.914390, 43.131199],

                // Уровень масштабирования
                zoom: 15
            }
        }
    );
    
    // Добавьте слой с дорогами и зданиями
    map.addChild(new YMapDefaultSchemeLayer());

    // Добавьте слой для маркеров
    map.addChild(new YMapDefaultFeaturesLayer());

    // Создайте DOM-элемент для содержимого маркера.
    // Важно это сделать до инициализации маркера!
    // Элемент можно создавать пустым. Добавить HTML-разметку внутрь можно после инициализации маркера.
    const content = document.createElement('section');

    // Инициализируйте маркер
    const marker = new YMapMarker(
    {
        coordinates: [131.914390, 43.131199],
        draggable: false
    },
    content
    );

    // Добавьте маркер на карту
    map.addChild(marker);
}

/*async function initmap() {
    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

    // Инициализируйте карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [131.914390, 43.131199],

                // Уровень масштабирования
                zoom: 15
            }
        }
    );

    // Добавьте слой с дорогами и зданиями
    map.addChild(new YMapDefaultSchemeLayer());

    // Добавьте слой для маркеров
    map.addChild(new YMapDefaultFeaturesLayer());

    // Создайте DOM-элемент для содержимого маркера.
    // Важно это сделать до инициализации маркера!
    // Элемент можно создавать пустым. Добавить HTML-разметку внутрь можно после инициализации маркера.
    const content = document.createElement('section');

    // Инициализируйте маркер
    const marker = new YMapMarker(
    {
        coordinates: [131.914390, 43.131199],
        draggable: false
    },
    content
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());

    // Добавьте маркер на карту
    map.addChild(marker);

    // Добавьте произвольную HTML-разметку внутрь содержимого маркера
    content.innerHTML = '<h1>Этот заголовок можно перетаскивать</h1>';

}*/