import { Hono } from 'hono';
import { register } from 'module';
import { registerUser } from './auth.controller';
import { registerUserSchema } from '../validators';
import { zValidator } from '@hono/zod-validator'



export const authRouter = new Hono();
 authRouter.post('/register', zValidator('json', registerUserSchema, (result, c)=>{
if (!result.success){
    return c.json (result, 400)
}
 }), registerUser)



 //  authRouter.post('/log in', zValidator('json', loginUserSchema, (result, c)=>{
//     if (!result.success){
//         return c.json (result, 400)
//     }
//      }), loginUser)