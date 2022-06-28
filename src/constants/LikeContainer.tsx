export const likes = [
  {
    user: 'lance53',
    timeSince: '2 min ago',
    avatar: 'https://codingforum.site/img/default/avatar9.jpg',
  },
  {
    user: 'airis',
    timeSince: '7 min ago',
    avatar: 'https://codingforum.site/img/default/avatar9.jpg',
  },
  {
    user: 'hanz39',
    timeSince: '12 min ago',
    avatar: 'https://codingforum.site/img/default/avatar9.jpg',
  },
]
  // Dummy data to fill in the rest of likes
  .concat(
    Array.from({ length: 36 }, (_, i) => {
      return {
        user: `exampleUser${i}`,
        timeSince: `${13 + i} min ago`,
        avatar: 'https://codingforum.site/img/default/avatar9.jpg',
      }
    }),
  )
