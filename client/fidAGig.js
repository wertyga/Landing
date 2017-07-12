import axios from 'axios';

export default function findAGig() {
    return dispatch => {
        return axios({
            method: 'get',
            url:'/get-api',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => {
            let result = res.data.result.data;
            return result;
        })
    }

};

export function closeClick() {
    return dispatch => {
        return dispatch({ type: 'CLOSE' })
    }
}