<template>
  <div>
    <TCNnavbar></TCNnavbar>
    <div class="tcnHeading">
      <div class="tcnBackground"></div>
      <div class="titleBox">
        <h4><strong>Millersville University's</strong></h4>
        <h1><strong>TECHNOLOGY CAREER NETWORK</strong></h1>
        <a href="https://getinvolved.millersville.edu/organization/tcn" class="link-arrow"> Join the club! <p
            class="arrow">&#10132;</p></a>
      </div>

    </div>




    <div class="content">
      <div class="content-inner">
        <h1 style="font-size:35px"><strong>Join a club focused on the professional development of Computer Science
            students at
            Millersville</strong></h1>
        <hr>
        <div class="row">
          <div class="col">
            <div class="text-box">
              <h2><strong>Meet Industry Professionals</strong></h2>
              <hr>
              <p>
                The TCN hosts meetings featuring guest speakers from the industry. We typically invite Millersville alumni
                to share their experiences transitioning from a student into a paid computer scientist. During these
                meetings,
                students have the oppourtunity to meet someone successful & well-versed in the industry.
              </p>
            </div>
          </div>

          <div class="img-wrapper col">
            <img src="../assets/WebFx.jpg">
          </div>
        </div>

        <div class="row">
          <div class="img-wrapper col">

            <img src="../assets/job-fair-seisan.jpg">
          </div>
          <div class="col">
            <div class="text-box">
              <h2><strong>Computer Science Job Fair</strong></h2>
              <hr>
              <p>
                We proudly organize the TCN Computer Science Job Fair, a specialized event exclusively tailored for CS
                students,
                connecting them with local companies that have open positions.
              </p>
              <p>The Fall 2023 Job Fair is coming! </p>
              <router-link style="text-decoration: none;" to="/JobFairPage">
                <a class="link-arrow2"><strong> Learn more </strong>
                  <p class="arrow">&#10132;</p>
                </a>
              </router-link>


            </div>
          </div>


        </div>

        <div class="row">
          <div class="col">
            <div class="text-box">
              <h2><strong>Learn About a Local Company</strong></h2>
              <hr>
              <p>
                We also collaborate with local companies that are actively hiring summer interns or full time developers.
                During
                these meetings,
                students can expect to learn about the workflow and culture of a specific company as well as ask questions
                about
                their hiring process,
                open positions, and more. Speaking directly with a representative of a company is an invaluable experience
                to
                students deciding
                where their next steps will be in their career.
                <br>
                <br>
              </p>
            </div>
          </div>

          <div class="img-wrapper col">
            <img src="../assets/WebFx.jpg">
          </div>
        </div>

      </div>
    </div>

    <div class="icon-banner">
      <div class="row">

        <div class="col">
          <img class="icon" src="../assets/resume.png">
          <h2>RESUMES</h2>
          <p>Learn what hiring managers and recruiters look for in a resume. Get yours reviewed by your peers and industry
            professionals at our resume workshops</p>

        </div>

        <div class="col">
          <img class="icon" src="../assets/network.png">
          <h2>NETWORKING</h2>
          <p>Understand how to use tools like LinkedIn and attend conferences where you can meet with local
            companies or expand your knowledge </p>
        </div>

        <div class="col">
          <img class="icon" src="../assets/hand-shake.png">
          <h2>JOB INTERVIEWS</h2>
          <p>Break down the interview process and know what to expect. From coding practice problems to how to present
            yourself</p>
        </div>

      </div>
    </div>

    <div class="content">
      <div class="content-inner">
        <h2><strong>Get Involved With the TCN Today!</strong></h2>
        <br>
        <p>
          Whether you are an incoming student, a freshman or a senior nearing graduation, it is never too late or too
          early
          to begin strengthening your professional presence.
          We welcome everyone in the CS & STEM majors at Millersville to participate in our events aimed at supporting
          career development. Guest speakers, networking opportunities, and workshops, such as resume-building and mock
          interviews, will be scheduled throughout the Fall 2023 and Spring 2023 semesters. The TCN is here to help you
          jumpstart your career in technology!
          <br>
          <br>
          <br>
          Interested in joining the TCN?
          You can officially join the club
          by visiting Millersville's
          <a href="https://getinvolved.millersville.edu/organization/tcn" style="color: #ecb431">Get Involved
            Organizations</a>
          As well, we have an actively growing discord server where all events and info is posted!
        </p>

        <div class="buttons">
          <button type="button" class="btn discord-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-discord"
              viewBox="0 0 16 16">
              <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg> &nbsp; &nbsp; <strong>Join our Discord</strong>
          </button>


        </div>



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

.img-wrapper img {
  width: 60%;
}

a.link-arrow {
  text-decoration: none;
  color: white;
  font-size: large;
}

a.link-arrow2 {
  text-decoration: none;
  color: black;
  font-size: large;
}

.arrow {
  color: #EEB111;
  font-size: larger;
}

.link-arrow p,
.link-arrow2 p {
  display: inline-block;
  transition: 0.1s ease-in;
}

.link-arrow:hover p,
.link-arrow2:hover p {
  transform: translateX(50%);
}

a.link-arrow:hover .link-arrow2:hover {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgb(0, 0, 0, .7);
  border: 4px solid #EEB111;
}

.icon-banner {
  display: flex;
  justify-content: space-around;
  background-color: #EEB111;
  color: black;
  width: 100%;
  padding: 50px 0px;
  margin: auto;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;

}

.icon-banner>.row {
  width: 80%;
  align-items: center;
}

.content-inner>.row {
  margin: 50px 0px;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  justify-content: space-evenly;
}

.text-box {
  height: 100%;
  width: 100%;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-box h2 {
  border-bottom: 2px solid #EEB111;
}

.col h2 {
  padding-top: 30px;
  font-weight: 535;
}

.icon-banner p {
  text-align: center;
  padding-bottom: 0;
  padding-right: 20px;
  padding-left: 20px;
}

.icon {
  width: 100px;
}

/* block with stripes */
.content {
  display: flex;
  background-color: white;
  background-image: linear-gradient(135deg, #ffffff 41.67%, #dfdfdf 41.67%, #dfdfdf 50%, #ffffff 50%, #ffffff 91.67%, #dfdfdf 91.67%, #dfdfdf 100%);
  background-size: 8.49px 8.49px;
  color: black;
  padding: 50px 30px;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
}

/* The actual content div */
.content-inner {
  background-color: white;
  padding-top: 30px;
  width: 85%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.discord-button {
  color: white;
  display: flex;
  width: 320px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #7289da;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.24);
  transition: background-color 200ms cubic-bezier(.47, 0, .745, .715);
  text-decoration: none;
}

.discord-button:hover {
  color: white;
  background-color: #5865f2;
}

.container_discord {
  display: flex;
  padding: 20px 100px 10px;
  flex-direction: column;
  align-items: center;
}
</style>
