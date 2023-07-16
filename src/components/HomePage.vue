<template>
  <div>
    <TCNnavbar></TCNnavbar>
    <div class="tcnHeading">
      <div class="tcnBackground"></div>
      <div class="titleBox">
        <h4><strong>Millersville University's</strong></h4>
        <h1><strong>TECHNOLOGY CAREER NETWORK</strong></h1>
        <a href="https://getinvolved.millersville.edu/organization/tcn" class="link-arrow"> Join the club! <p class="arrow">&#10132;</p></a>
      </div>

    </div>


    <div class="content">
      <p>Welcome to the offical TCN Millersville Univeristy Website. Here at TCN we are a club
        for professional development,
        networking, and sharing resources with other technology majors.
        <br>
        Our goal here is simple: To help everyone in the CS department! Whether your a new incoming freshman or a senior
        ready to
        graduate it can be difficult to know where to start in the industry and preparing for such.
        Interviews, resumes, job market, interships, cover letters, linkedInm it all can be a lot to handle.
        Thats where we come in! We want to help guide that processes so everyone can be more prepared for the real world!
        <br>
        <br>
        <br>
        We host events geared to support career development for everyone in the CS & STEM majors at Millersville so all
        are
        welcome.
        We will be having guest speakers, networking, and workshops such as resume-building and mock interviews throughout
        the fall 2023
        and spring 2023 semester. The TCN is here for your opportunity to jumpstart your Technology Career!
        <br>
        <br>
        <br>
        Interested in joining the TCN?
        You can officially join the club
        by visiting Millersville's
        <a href="https://getinvolved.millersville.edu/organization/tcn" style="color: #ecb431">Get Involved
          Organizations</a>
        As well, we have an actively growing <a href="https://discord.com/invite/sSRvdraWx9"
          style="color: #473dd4">Discord
          Server</a> where all
        events and info is posted!
      </p>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <slideDeck></slideDeck>
          </div>
          <div class="col-md-7">
            <slideDeckRight></slideDeckRight>
          </div>
        </div>
      </div>
    </div>



    <TCNBottmNavbar></TCNBottmNavbar>
  </div>
</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
import slideDeck from '@/components/slideDeck.vue';
import slideDeckRight from '@/components/slideDeckRight.vue';
import TCNBottmNavbar from '@/components/TCNBottmNavbar.vue';
export default {
  name: 'HomePage',
  components: {
    TCNnavbar,
    slideDeck,
    slideDeckRight,
    TCNBottmNavbar,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a.link-arrow {
  text-decoration: none;
  color: white;
  font-size: large;
}
.arrow {
  color:#EEB111;
  font-size: larger;
}

.link-arrow p {
  display: inline-block;
  transition: 0.1s ease-in;
}

.link-arrow:hover p {
  transform: translateX(50%);
}

a.link-arrow:hover {
  color: #EEB111;
}

p {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}

.tcnHeading {
  display: flex;
  color: white;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  /* Fallback color if the background image fails to load */
  align-items: center;
  flex-direction: column;
  padding-top: 270px;
  padding-bottom: 35px;
}

.tcnBackground {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/PXL_20230401_181640062.jpg');
  background-size: cover;
  background-position: 50% 60%;
  background-repeat: no-repeat;
  z-index: -1;
}

.titleBox {
  color: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(0, 0, 0, .7);
  border: 4px solid #EEB111;
}


.content {
  background-color: white;
  background-image: linear-gradient(135deg, #ffffff 41.67%, #dfdfdf 41.67%, #dfdfdf 50%, #ffffff 50%, #ffffff 91.67%, #dfdfdf 91.67%, #dfdfdf 100%);
  background-size: 8.49px 8.49px;
  color: black;
  padding: 40px;
  text-align: center;
}

.discord_button {
  display: flex;
  width: 320px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #7289da;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.24);
  transition: background-color 200ms cubic-bezier(.47, 0, .745, .715);
  text-decoration: none;
}

.discord_button:hover {
  background-color: #5865f2;
}

.container_discord {
  display: flex;
  padding: 20px 100px 10px;
  flex-direction: column;
  align-items: center;
}
</style>
