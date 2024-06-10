import { Context } from "hono";
import { CreateDriver, DeleteDriver, fetchOneDriver, getAllDrivers, UpdateDriver } from "./drivers.service";

//fetch all driver
export const getAllDriversData = async (c: Context) => {
    const drivers = await getAllDrivers()
    if(drivers === null){
        return c.json({message: "No drivers found"})
    }
    return c.json(drivers,200)
}

// fetch one driver
export const getOneDriverData = async (c: Context) => {
    const id = c.req.param("id")
    const driver = await fetchOneDriver(parseInt(id))
    if(driver === undefined){
        return c.json({message: "No driver found"},404)
    }
    return c.json(driver,200)
}

//create driver
export const createDriverData = async (c: Context, next: Function) => {
    
    try{
       const driver = await c.req.json()
    const response = await CreateDriver(driver)
    return c.json({message: response},201)
    } catch(err){
        return c.json({message: err},500)
    }
}

//update driver
export const updateDriverData = async (c: Context) => {
    // try {
    //     const id = parseInt(c.req.param('id'), 10);
    //     if (isNaN(id)) return c.text('Invalid id', 400);
    //     const driver = await c.req.json();
    //     const Driver = await UpdateDriver(id,driver);

    //     if (!UpdateDriver) return c.text('Driver not updated', 400);
    //     return c.json({ msg: UpdateDriver }, 200);
    // } catch (error: any) {
    //     return c.json({ error: error?.message }, 400);
    // }
}
//delete driver
export const deleteDriverData = async (c: Context) => {
    const id = c.req.param("id")   
    const response = await DeleteDriver(parseInt(id))
    return c.json({message: response},200)

}