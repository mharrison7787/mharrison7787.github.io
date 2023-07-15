<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item clickable"><router-link to="/">HOME</router-link></li>
        <li class="navbar-item clickable"><router-link to="/MeetingsPage">MEETINGS</router-link></li>
        <li class="navbar-item"></li>
        <li class="navbar-item">
          <router-link to="/"><img src="../assets/MU_TCN-logo-min-p-500.png" width="250%"> </router-link>
        </li>
        <li class="navbar-item"></li>
        <li class="navbar-item clickable"> <router-link to="/JobFairPage">JOB FAIR</router-link></li>
        <li class="navbar-item clickable"><router-link to="/ContactPage">CONTACT</router-link></li>
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
}

.navbar-item {
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
  background-color: #ecb431;

}
</style>