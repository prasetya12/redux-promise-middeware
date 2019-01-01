## Run this Project

First, git clone this project

Second, run npm install
```
npm install
```
Three , run in real device or emulator 
```
react-native run-android
```


## Installation
First install redux,react-redux,promise middleware
```
npm install --save redux
npm i react-redux
npm i redux-promise-middleware
```

Second,in file store.js add this code
```
import { createStore,applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'

const store = createStore(reducers,applyMiddleware(promiseMiddleware()))


export default store
```

three, make reducers like this
```
//without promise middleware 
case "GET_TITTLE":
            return{
                ...state,data:action.payload
            }
            
            
//with promise middleware
case "GET_TITTLE_PENDING":
            return {
                ...state,isLoading:true
            }
        case "GET_TITTLE_FULFILLED":
            return{
                ...state,isLoading:false,data:action.payload.data
            }
        case "GET_TITTLE_REJECTED":
            return{
                ...state,isLoading:false,isError:true
            }
```



.end
