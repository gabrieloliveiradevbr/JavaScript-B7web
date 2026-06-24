document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    let key = 'da17b003ea7b4ef9840185925262406';

    if (input !== '') {
        showWarning('Carregando...');

        let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${encodeURIComponent(input)}&lang=pt`;

        let results = await fetch(url);
        let json = await results.json();

        console.log(json)

        if (results.status === 200) {
            showInfo({
                name: json.location.name,
                country: json.location.country,
                temp: json.current.temp_c,
                condition: json.current.condition.text,
                condition_img: json.current.condition.icon,
                wind_speed: json.current.wind_kph,
                wind_direction: json.current.wind_degree,
                timezone: json.location.timezone
            });
            showWarning('');
        } else {
            clearInfo();
            showWarning('Não encontramos esta localização');
        }
    }
});

function showInfo(json) {
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;

    document.querySelector('.ventoInfo').innerHTML = `${json.wind_speed} <span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.wind_direction}deg)`;

    document.querySelector('.temp img').setAttribute('src', json.condition_img);

}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}