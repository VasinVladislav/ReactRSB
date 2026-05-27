export async function handleSelectAddress(addressName, mapRef) {
        if (mapRef.current) {
            try {
                const geocoderApiKey = '339bd702-77f5-4039-85b6-87e420116799';
                const domain = "https:/" + "/geocode-maps.yandex.ru/1.x/";
                const params = "?apikey=" + geocoderApiKey + "&geocode=" + encodeURIComponent(addressName) + "&format=json";
                const url = domain + params;

                const response = await fetch(url);
                const data = await response.json();
                const pos = data.response?.GeoObjectCollection?.featureMember?.[0]?.GeoObject?.Point?.pos;

                if (pos) {
                    const [lng, lat] = pos.split(' ').map(Number);
                    const coords = [lat, lng];

                    mapRef.current.setCenter(coords, 10, {
                        duration: 800,
                        timingFunction: 'ease-in-out'
                    });
                }
            } catch (error) {
                console.error("Ошибка HTTP-геокодирования:", error);
            }
        }
    };