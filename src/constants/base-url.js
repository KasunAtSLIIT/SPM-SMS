import axios from 'axios';

/**
 * export base url for all components
 */
export default axios.create({
    baseURL: `http://localhost:8000/`
});