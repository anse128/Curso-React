// const getImagenPromesa = () =>{
//     new Promise((resolve, reject) =>{
//         resolve('http')
//     })
//     return promesa;
// }

// getImagenPromesa().then(console.log)

const getImage = async () => {

    try {
        const apiKey = '2HrxAdHzWE7J02U3kdM9jagy5jh3gXm4';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json()

        const { url } = data.images.original
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
        
    }

}

getImage()

