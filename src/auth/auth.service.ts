import db from "../drizzle/db";
import { AuthOneUsersTable, AuthOneUserInsert, AuthOneUserSelect } from "../drizzle/schema";
import { UserInsert ,UserSelect, } from "../drizzle/schema";

export const   cretaeAuthUserService = async (user: AuthOneUserInsert): Promise<string | null> =>{
    await db.insert(AuthOneUsersTable).values(user)
    return "User created successfully";
}






// export const userLoginService = async (user: AuthOneUserInsert) => {
//     const { username, password } = user;
//     return await db.query.AuthOneUsersTable.findFirst({
//         columns: {
//             username: true,
//             role: true,
//             password: true
//         }, where: sql` ${AuthOneUsersTable.username} = ${username}`,
//         with: {
//             user: {
//                 columns: {
//                     fullname: true,
//                     phone: true,
//                     address: true,
//                     id: true
//                 }
//             }
//         }
//     })
// }