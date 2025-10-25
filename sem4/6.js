async function getObjectFromUrl(url) {
    const response = await fetch(url);
    return response.json();
}

async function getCountryBounds(country) {
    const data = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`);
    return {
        minLatitude: data[0].boundingbox[0],
        maxLatitude: data[0].boundingbox[1],
        minLongitude: data[0].boundingbox[2],
        maxLongitude: data[0].boundingbox[3]
    };
}

async function getPlanesAbove(country) {
    const bounds = await getCountryBounds(country);
    const url = `https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lamax=${bounds.maxLatitude}&lomin=${bounds.minLongitude}&lomax=${bounds.maxLongitude}`;
    const data = await getObjectFromUrl(url);
    return data.states || [];
}

(async () => {
    try {
        const planes = await getPlanesAbove('Romania');
        console.log(`Avioane deasupra României: ${planes.length}`);
        console.log(planes.slice(0, 5));
    } catch (err) {
        console.log('Eroare:', err.message);
    }
})();
