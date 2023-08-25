// const getImagenPromesa = () => new Promise(resolve => resolve('https:unaURLfalsa.com.pt'));
// getImagenPromesa().then(console.log);

const getImage = async() => {
    try {
    const apiKey = 'Xtvdkn18FuFZ1dDa34dEKIIsQbMpv8Jd';
    const httpFetch = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await httpFetch.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
          img.src = url;
          document.body.append(img);
    console.log(url)
    } catch (error) {
        console.error(error)
    }
}

getImage();