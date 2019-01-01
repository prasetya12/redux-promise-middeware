import axios from 'axios'

//without promise middleware , must parsing data in parameter
//export function GET_TITLE(data)
export function GET_TITTLE(data){
    return {

        //witout promise middleware
        type:"GET_TITTLE",
        payload: data


        //with promise middleware
        // type:"GET_TITTLE",
        // payload: axios.get('https://jsonplaceholder.typicode.com/posts/1')
    }
}

