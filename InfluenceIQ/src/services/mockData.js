export const publicFigures = [
  {
    id: 1,
    name: 'Elon Musk',
    image: 'https://example.com/elon.jpg',
    role: 'Entrepreneur, CEO',
    scores: {
      overall: 92,
      credibility: 88,
      longevity: 95,
      engagement: 94
    },
    bio: 'Entrepreneur and business magnate. CEO of SpaceX, Tesla, and Twitter.',
    reviews: [
      { id: 1, user: 'TechFan', text: 'Innovative but controversial', rating: 4, sentiment: 'positive' },
      { id: 2, user: 'SpaceX_Lover', text: 'Revolutionizing space travel!', rating: 5, sentiment: 'positive' },
    ]
  },
  {
    id: 2,
    name: 'Oprah Winfrey',
    image: 'https://example.com/oprah.jpg',
    role: 'Media Executive, Philanthropist',
    scores: {
      overall: 95,
      credibility: 96,
      longevity: 98,
      engagement: 91
    },
    bio: 'Media executive, actress, talk show host, television producer, and philanthropist.',
    reviews: [
      { id: 1, user: 'BookClubFan', text: 'Her book recommendations changed my life', rating: 5, sentiment: 'positive' },
      { id: 2, user: 'MediaPro', text: 'A true pioneer in media', rating: 5, sentiment: 'positive' },
    ]
  },
  {
    id: 3,
    name: 'LeBron James',
    image: 'https://example.com/lebron.jpg',
    role: 'Professional Basketball Player',
    scores: {
      overall: 90,
      credibility: 89,
      longevity: 92,
      engagement: 90
    },
    bio: 'American professional basketball player for the Los Angeles Lakers.',
    reviews: [
      { id: 1, user: 'BasketballFan', text: 'One of the greatest of all time', rating: 5, sentiment: 'positive' },
      { id: 2, user: 'SportsAnalyst', text: 'Impressive career longevity', rating: 4, sentiment: 'positive' },
    ]
  },
  // Add more public figures as needed
];

export const getPublicFigures = () => {
  return Promise.resolve(publicFigures);
};

export const getPublicFigureById = (id) => {
  const figure = publicFigures.find(figure => figure.id === parseInt(id));
  return Promise.resolve(figure);
};

export const addReview = (figureId, review) => {
  const figure = publicFigures.find(figure => figure.id === parseInt(figureId));
  if (figure) {
    const newReview = {
      id: figure.reviews.length + 1,
      ...review,
      sentiment: 'pending' // Will be updated by sentiment analysis
    };
    figure.reviews.push(newReview);
  }
  return Promise.resolve(figure);
};
