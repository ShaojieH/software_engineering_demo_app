//getUserInfo(url)
import axios from 'axios';
import { GET_RANDOM_ACCOUNT, GET_JOBS } from './UrlConstants'
import { JOBS_STUB, JOBDETAIL_STUB } from '../Stub/Jobs'
const get = (path) => (resolve, reject=(data)=>{}) => {
    axios.get(path)
    .then(response => resolve(response))
    .catch(error => {
        console.log(error);
        reject(response);
    })
};

export const getRandomAccount = get(GET_RANDOM_ACCOUNT);


//stubs:
export const getJobs = (resolve, reject=(data)=>{}) => {
    resolve(JOBS_STUB);
}

export const getJobDetail = (resolve, reject=(data)=>{}) => {
    resolve(JOBDETAIL_STUB);
}