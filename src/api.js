import axios from 'axios';

const searchImages = async(term) =>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID I-gxGoVIzh83IdmwzsRCLYbF5lW0qXtgpF-ZRBB0M_A',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};
export default searchImages;