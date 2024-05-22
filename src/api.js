import axios from "axios"


async function searchImages(term){

const response=  await  axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID hIuZgeH2RcDf0aaEwky1j5zKifsweYngiWoZmx3kEpg',
        },
        params:{
            query:term,
        },
    })

    // console.log(response.data.results);
    return response.data.results
}

export default searchImages