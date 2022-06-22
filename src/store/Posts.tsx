
  interface postComments {
    id: number
    commenterUid: number
    comment: string
    timePosted: string
    likes: number
    hidden: boolean
  }

  interface postObject {
    id: number
    posterUid: number
    post: string
    timePosted: string
    likes: number
    private: boolean
    comments: postComments[]
  }
  
	const Posts:postObject[] = [
		{
			id: 1,
            posterUid: 1,
			post: 'What is your favourite movie?',
			timePosted: '2 hours, 17 mins ago',
			likes: 137,
			private: false,
			comments: [

				{
					id: 1,
                    commenterUid: 2,
					comment: 'Avengers',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 76,
					hidden: false,
				},
				{
					id: 2,
                    commenterUid: 2,
					comment: 'Taken 2',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 61,
					hidden: false,
				}
			]
		},
		{
			id: 2,
            posterUid: 2,            
			post: 'Do you prefer night or day?',
			timePosted: '1 hours, 3 mins ago',
			likes: 22,
			private: false,
			comments: [

				{
					id: 1,
                    commenterUid: 2,
					comment: 'Night',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 11,
					hidden: false,
				},
				{
					id: 2,
                    commenterUid: 2,
					comment: 'Day',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 8,
					hidden: false,
				},
				{
					id: 3,
                    commenterUid: 2,
					comment: 'In the middle',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 3,
					hidden: false,
				}
			]
		},
		{
			id: 3,
            posterUid: 3,            
			post: 'Who is the better singer?',
			timePosted: '1 day, 2 hours, 43 mins ago',
			likes: 268,
			private: false,
			comments: [

				{
					id: 1,
                    commenterUid: 2,
					comment: 'Abba',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 104,
					hidden: false,
				},
				{
					id: 2,
                    commenterUid: 2,
					comment: 'Metallica',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 114,
					hidden: false,
				},
				{
					id: 3,
                    commenterUid: 2,
					comment: 'Queen',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 50,
					hidden: false,
				}
			]
		},
		{
			id: 4,
            posterUid: 2,
            post: 'Best type of food?',
			timePosted: '4 days, 6 hours, 19 mins',
			likes: 166,
			private: false,
			comments: [

				{
					id: 1,
                    commenterUid: 2,
					comment: 'Hamburger',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 76,
					hidden: false,
				},
				{
					id: 2,
                    commenterUid: 2,
					comment: 'Hotdog',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 61,
					hidden: false,
				},
				{
					id: 3,
                    commenterUid: 2,
					comment: 'Chips',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 10,
					hidden: false,
				},
				{
					id: 4,
                    commenterUid: 2,
					comment: 'Steak',
                    timePosted: '1 day, 2 hours, 43 mins ago',
					likes: 19,
					hidden: false,
				}
			]
		},
	]
export default Posts;