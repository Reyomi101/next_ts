import {_ACTION} from './ActionType'
import { WebClient } from '../../api/webclient'
// import {store} from '../index'


export const Create_post = (params) => (dispatch) => {
    return( WebClient.post('/posts', params).then(res => {  
        dispatch({
            type: _ACTION._CREATE,
            payload: res.data
        })
        return Promise.resolve(res);
    })
        
    )

}