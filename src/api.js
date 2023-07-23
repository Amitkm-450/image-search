import axios from 'axios';

const searchImages = async(term) =>{
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers :{
           Authorization : 'Client-ID R04t9p6w2V6_l5axcZpumDlcbdAmyHydCItQtSoL4S0' ,
        },
        params:{
           query: term ,
        }

    });
 
    return response.data.results ;
};

export default searchImages ;