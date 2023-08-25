const apiKey = 'Xtvdkn18FuFZ1dDa34dEKIIsQbMpv8Jd';

const httpFetch = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpFetch
    .then(resp => resp.json())
    .then( ({ data }) =>  {
        const {url} = data.images.original
                        const img = document.createElement('img');
                        img.src = url;

                        document.body.append(img);
                        })
    .catch(console.warn);