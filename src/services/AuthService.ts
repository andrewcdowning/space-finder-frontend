import { User, UserAttribute } from "../models/Model";


export class AuthService {

   public async login(username:string, password: string): Promise<User| undefined>{
        if ( username === 'user' && password === '1234') {
            return {
                userName: username,
                email: 'some@email.com'
            } 
        } else {
            return undefined
        }
   }

   public async getUserAttribute(user: User):Promise<UserAttribute[]> {
        const result: UserAttribute[] = []
        result.push({
            Name: 'Description',
            Value: 'Best  description Ever!'
        })

        result.push({
            Name: 'Job',
            Value: 'Engineer'
        })
        return result
   }
}