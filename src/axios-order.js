import axios from 'axios';
import {FIREBASE} from './config'

const instance = axios.create({
  baseURL: FIREBASE
});

export default instance;
