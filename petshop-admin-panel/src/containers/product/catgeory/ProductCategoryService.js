import request from "../../../common/request";


export const pageCategoriesByParentId = (parentId, page, size) =>{
    const categoriesRequest = {
        method: "GET",
        path: "/api/v1/category/pageByParentId",
        params: ["parentId","page","size"],
        values: [parentId, page, size]
    }
    return request(categoriesRequest);
}

export const listCategoriesByParentId = parentId =>{
    const categoriesRequest = {
        method: "GET",
        path: "/api/v1/category/listByParentId",
        params: ["parentId"],
        values: [parentId]
    }
    return request(categoriesRequest);
}

export const createProductCategory = data =>{
    const createProductRequest = {
        method: "POST",
        path: "/api/v1/category",
        data: data,
    }
    return request(createProductRequest);
}