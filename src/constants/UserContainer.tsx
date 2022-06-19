import { Id, status } from './StatusContainer'
//  in the future turn this into a userStore using Redux! Just setup currently as a template through TypeScript :)
// CURRENTLY UNUSED

export interface IUser {
  userId: number
  name: string
  status: Id
  updateStatus: (userId: number) => number
}

class User implements IUser {
  userId: number
  name: string
  status: Id

  constructor(code: number, name: string, status: Id) {
    this.userId = code
    this.name = name
    this.status = status
  }

  //  function used to update the User's status :D
  updateStatus(statuss: Id): Id {
    console.log('before:', this.status)
    this.status = statuss
    console.log('after:', this.status)
    return this.status
  }
}

export const user = new User(1, 'User', status.online.id)
