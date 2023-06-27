<template>
    <div>
      <aside id="photos">
        <img src="images/chili.jpg" alt="White Chicken Chili" width="180">
      </aside>
      <h2>Comments</h2>
      <section id="blogposts">
        <div class="post" v-for="comment in comments" :key="comment.id">
          <span class="author">{{ comment.author }}</span> —
          <span class="date">{{ comment.date }}</span>
          <span class="reply">REPLY</span>
          <p>{{ comment.content }}</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: [
        {
            id: 1,
            author: 'Brianna',
            date: ' Novice ',
            content:
              'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!'
          },
          {
            id: 2,
            author: 'John',
            date: 'Newcomer',
            content:
              'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.'
          },
          {
            id: 3,
            author: 'Jane',
            date: 'Mentor',
            content:
              'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!'
          },
          {
            id: 4,
            author: 'KAILI',
            date: 'Novice ',
            content: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!"
          }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  #photos {
    float: right;
    margin-top: 20px;
    margin-left: 10px;
  }
  
  #blogposts {
    margin-top: 20px;
  }
  
  .post {
    margin-bottom: 30px;
  }
  
  .author {
    font-weight: bold;
  }
  
  .date {
    font-size: 12px;
    color: gray;
  }
  
  .reply {
    font-size: 12px;
    color: blue;
    cursor: pointer;
  }
  </style>
  