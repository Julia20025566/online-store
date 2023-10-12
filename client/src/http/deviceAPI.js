import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const updateType = async (type, id) => {
    const {data} = await $authHost.put(`api/type/${id}`, {name: type}, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const updateBrand = async (brand, id) => {
    const {data} = await $authHost.put(`api/brand/${id}`, {name: brand}, { headers: { 'Content-Type': 'multipart/form-data' } })
    return data
}


export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 15) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const addToBasket = async (deviceId) => {
    const {response} = await $authHost.post('api/basket', deviceId)
    return response
}

export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}

export const delFromBasket = async (deviceId) => {
    const {response} = await $authHost.delete(`api/basket/${deviceId}`);
    return response
}