new Vue({
    el: '#app',
    data: {
      selectedAuthor: null,
      authors: [
        {
          name: 'Brianna',
          level: 'Novice',
          bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
          image: 'placeholder.jpg'
        },
        {
          name: 'Linh',
          level: 'Newcomer',
          bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
          image: 'placeholder.jpg'
        },
        {
          name: 'Catherine Leonardo',
          level: 'Mentor',
          bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
          image: 'placeholder.jpg'
        },
        {
          name: 'Kali',
          level: 'Novice',
          bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I\'m a food whore! Invite me over for dinner and I\'ll be there!',
          image: 'placeholder.jpg'
        }
      ]
    },
    methods: {
      showProfile(author) {
        this.selectedAuthor = author;
      },
      hideProfile() {
        this.selectedAuthor = null;
      }
    }
  });
  