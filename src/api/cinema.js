import Mock from 'mockjs'
import axios from 'axios'

const base = 'http://localhost:8080/api'
Mock.mock(base + '/cinema', 'get', {
    code: 1,
    'data|20': [
        {
            id: '@increment(200)',
            nm: '@cname',
            sellPrice: '@integer(20,100)',
            'addr|2-4': ['@cname'],
            distance: ['@cname']
        }
    ]

})
export function getCinema() {
    return axios.get(base + '/cinema').then(res => {

        return Promise.resolve(res.data)
    })
}
