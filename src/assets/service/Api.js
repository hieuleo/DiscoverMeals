import axios from 'axios';

const getDataCategories = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : [];
    return data;
};

const getDataRandom = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : [];
    return data;
};

const getDataSeafood = async () => { //default value searchPages
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : [];
    return data;
};

const getDataByName = async (name) => { 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : [];
    return data;
};

const getDataFilter = async (name,filter ) => { 
    name = name.trim();
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${name}`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : [];
    return data;
};

const getDataById = async (id) => { 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await axios.get(url);
    const data = response.status === 200 ? response.data : [];
    return data;
};

export const Api = {
    getDataCategories,
    getDataRandom,
    getDataSeafood,
    getDataByName,
    getDataFilter,
    getDataById
}