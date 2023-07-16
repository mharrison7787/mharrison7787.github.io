<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-list">
        <router-link style="text-decoration: none; color: inherit;" to="/">
          <li class="navbar-item clickable">HOME</li>
        </router-link>
        <router-link style="text-decoration: none; color: inherit;" to="/MeetingsPage">
          <li class="navbar-item clickable">MEETINGS</li>
        </router-link>
        <li class="navbar-item"></li>
        <li class="navbar-item">
          <router-link to="/"><img src="../assets/MU_TCN-logo-min-p-500.png" width="250%"></router-link>
        </li>
        <li class="navbar-item"></li>
        <router-link style="text-decoration: none; color: inherit;" to="/JobFairPage">
          <li class="navbar-item clickable">JOB FAIR</li>
        </router-link>
        <router-link style="text-decoration: none; color: inherit;" to="/ContactPage">
          <li class="navbar-item clickable">CONTACT</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'TCNnavbar',
  // Rest of the component options
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 !important;

}

.navbar-list {
  display: flex;
  list-style: none;
  margin: auto;
  justify-content: right;
  align-items: center;
}

.navbar-item {
  text-decoration: none;
  padding: 30px 35px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 1.7px;
  position: relative;
  /* Added */

}

.navbar-item.clickable:hover {
  color: black;
  background-color: #EEB111;

}


.navbar-item img {
  position: absolute;
  /* Added */
  top: 120%;
  /* Added */
  left: 50%;
  /* Added */
  transform: translate(-50%, -50%);
  /* Added */
  z-index: 1;
  /* Added z-index property */

}

.navbar::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color: #EEB111;

}
</style>