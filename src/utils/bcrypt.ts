import * as bcrypt from 'bcrypt';


export  function encodePassword(rawPassword:string):string{
 const SALT= bcrypt.genSaltSync()
  return bcrypt.hashSync(rawPassword,SALT)
}

export function comparePassword(rawPassword:string,hash:string){
 console.log(rawPassword,hash);
 return bcrypt.compareSync(rawPassword,hash)
}