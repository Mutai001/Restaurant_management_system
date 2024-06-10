import dotenv from 'dotenv';
import { Context } from 'hono';
import {bcrypt} from 'bcrypt';
import { cretaeAuthUserService} from './auth.service';


export const registerUser = async (c: Context) => {
    try{
        const user =await c.req.json();
        const pass = user.password;
        const hashedPass =await bcrypt.hash(pass,10);
        user.password = hashedPass;
        const createdUser = await cretaeAuthUserService(user);
        if (!createdUser) return c.text('User not created', 404);
        return c.json ({ msg: createdUser}, 201)
    }catch (error: any){
        return c.text(error?.message, 404)
    }
}