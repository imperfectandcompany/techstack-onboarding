
  export interface userFollowers {
    id: number
    followedOn: number
    commment: string
    timePosted: string
    likes: number
    hidden: boolean
  }

  export interface userObject {
    readonly id: number
	username: string
    followers: number
    following: number
    likes: number
    private: boolean
	joinDate: string
  }
  
	export const Users:userObject[] = [
		{
			id: 1,
			username: 'Billy',
            followers: 1,
			following: 137,
			likes: 137,
			private: false,
			joinDate: '2 hours, 17 mins ago',
		},
	]
export default Users;