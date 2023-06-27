<template>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    // Component logic goes here
  };
  </script>
  
  <style scoped>
  nav {
    background-color: rgba(231, 229, 229, 0.5);
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin-right: 10px;
  }
  
  a {
    text-decoration: none;
    color: rgb(216, 150, 7);
    font-size: 18px;
  }
  </style>
  