// fetch news -- success -> failure 

export const FETCH_NEWS_REQUEST= 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS= 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE= 'FETCH_NEWS_FAILURE';

//action creator

export const fetchNewsRequest=()=>{
    return { //it will create object who's type is
        type:FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess=(news)=>{
    return {
        type:FETCH_NEWS_SUCCESS,
        payload:news
    }
}

export const fetchNewsFailure=(error)=>{
    return {
        type:FETCH_NEWS_FAILURE,
        payload:error
    }
}

// it is a standard function which return new function all together with many action creators
export const fetchNews=()=>{
    return (dispatch)=>{
        dispatch(fetchNewsRequest())
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-05-26&sortBy=publishedAt&apiKey=14da93a3641c4fe9871697d43222f82b')
        .then((response)=>response.json())
        .then((data)=>{
            const news=data.articles.map((article)=>{
                return{
                    title:article.title,
                    url:article.url,
                    description:article.description
                }
            });
            // console.log('news',news);
            dispatch(fetchNewsSuccess(news))
        })
        .catch((error)=>{
            dispatch(fetchNewsFailure(error.message))
        })
    }
}