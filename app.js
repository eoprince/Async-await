// Async / Await
function getRandomNumber() {
    return new Promise((resolve, reject) =>
     setTimeout(() => {
         resolve(Math.random());
     }, 500)
  );
}
   
    async function awaitGetRandomNumber() {
        let num = await getRandomNumber();
        console.log(num);
    }
     
    async function cityData(cityName) {
        let res = await fetch('https://geocode.xyz/33.5732438,-112.2458515?json=1')
        if (res.ok) {
            let cityData = await res.json();
            console.log(`latitude: ${cityData.latt}`);
            console.log(`longitude: ${cityData.longt}`);
        } else {
            let body = await res.text();
            console.log(`Error: Get status code ${res.status}`);
            console.log(`Response body: ${body}`);
        }
    }
    

awaitGetRandomNumber();
cityData("Peoria");
