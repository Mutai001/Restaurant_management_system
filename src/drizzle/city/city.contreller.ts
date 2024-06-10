import { Context } from "hono";
import { CreateCity, DeleteCity, fetchOneCity, getAllCity, UpdateCity } from "./city.service";
import { updateCategory } from "../category/category.service";
import { categoryTable } from '../schema';

//fetch all city
export const getAllCitysData = async (c: Context) => {
    const city= await getAllCity()
    if(city === null){
        return c.json({message: "No city found"})
    }
    return c.json(city,200)
}

// fetch one city
export const getOneCitysData = async (c: Context) => {
    const id = c.req.param("id")
    const city = await fetchOneCity(parseInt(id))
    if(city === undefined){
        return c.json({message: "No city found"},404)
    }
    return c.json(city,200)
}

//create city
export const createCitysData = async (c: Context, next: Function) => {
    
    try{
       const city = await c.req.json()
    const response = await CreateCity(city)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update city
export const UpdateCityData = async (c: Context) => {
    try {
        const id = parseInt(c.req.param('id'), 10);
        if (isNaN(id)) return c.text('Invalid id', 400);
        const city = await c.req.json();
        const City = await UpdateCity(id, city);

        if (!UpdateCity) return c.text('City not updated', 400);
        return c.json({ msg: UpdateCity }, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
}
//delete city
export const deleteCitysData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteCity(parseInt(id))
    return c.json({message: response},200)

}