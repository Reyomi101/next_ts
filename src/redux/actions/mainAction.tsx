import * as t from '../types';
import { WebClient } from '../../api/webclient'


export const Create_post = (params) => ({
    // WebClient.post('/posts', params)
    type: t._Make_Post,
    payload: params
})