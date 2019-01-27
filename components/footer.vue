<template>
    <footer id="footer">
     <div class="topnav-centered">
        <a href="#home" class="active">Home</a>
     </div>
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </footer>
</template>
<style>
#footer {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#footer a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
#footer a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
