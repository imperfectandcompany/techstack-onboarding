interface profileComments {
    id: number
    commenterUid: number
    comment: string
    timePosted: string
    likes: number
    hidden: boolean
  }
  
  interface profileObject {
    id:number
    username:string
    followerCount:number
    followingCount:number   
    firstName:string
    lastName:string 
    biography:string
    followsMe:boolean
    following:boolean
  }
  
  const ProfileData:profileObject = 
    {
      id: 1,
      username: 'joemama1',
      followerCount: 137,
      followingCount: 137,      
      firstName: 'Joe',
      lastName: 'Mama',
      biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',  
      followsMe: true,
      following: true,
    }
    
  export default ProfileData; 