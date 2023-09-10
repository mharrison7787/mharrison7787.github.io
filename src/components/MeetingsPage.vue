<template>
  <div>
    <TCNnavbar></TCNnavbar>
    <div class="tcnHeading">
      <div class="tcnBackground"></div>
      <div class="titleBox">
        <h4><strong>Meetings Archives</strong></h4>
        <h1><strong>COME TO OUR METTINGS</strong></h1>
      </div>

    </div>

    <div class="content">
      <div class="content-inner">
        <h1 style="font-size:35px"><strong>The TCN hosts monthly meetings with guest speakers,
            Q&A sessions, refreshments and more for networking
            and socializing with other members.
            <br>
            </strong>
        </h1>
        
        <div class="row">
          <div class="col">
        <h1 style="font-size:35px"><strong>Meetings Archive</strong></h1>
        <p style="text-align: center; padding-left: 100px; padding-right: 100px;">
            If you were not able to attend a previous
            TCN meeting or if you are curious to see what TCN meetings are like
        </p>
        <p style="text-align: center; padding-left: 100px; padding-right: 100px;">Here you can find our archive recorded meetings:</p>
          <div>
            <h1 style="text-align: center; style= font-size: 200%"><strong>[10/27/2022] Julie Gardner - WebFX</strong></h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 300px; padding-right: 300px;">
            Julie Gardner is a Talent Acquisition Specialist from WebFX, a digital marketing agency and web/software
            development company with many locations, including Harrisburg, PA. She shared an overview of the company,
            and answered questions about the recruitment process.
        </p>
        <br>
        <h1 style="text-align: center; style= font-size: 200%"><strong>[3/25/2022] Chris Carney - Crafting a Great Resume</strong></h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl2" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 300px; padding-right: 300px;">
            Chris Carney is a Software Development Engineer at Amazon and a professional resume critic. During this Zoom
            meeting, Chris shared with us a wealth of tips / insider knowledge on making a resume perfect for industry, such
            as formatting, do's & don'ts, what hiring managers are looking for, and more.
        </p>
        <br>
        <h1 style="text-align: center; style= font-size: 200%"><strong>[03/04/2022] Richard Abel and Hallie Lupinski - Deloitte</strong></h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl3" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 300px; padding-right: 300px;">
            Deloitte is an international service provider of financial advisory, consulting, auditing, and more. In this
            Zoom meeting, recruiters Richard Abel and Hallie Lupinski gave us an overview of what to look forward to in an
            interview, industry trends, and held a Q&A for students.
        </p>
        <br>
        <h1 style="text-align: center; style= font-size: 200%"><strong>[2/18/2022] Guest Speaker: Lea Eller</strong></h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl4" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 300px; padding-right: 300px;">
            Lea Eller is a Cyber Defense Infrastructure Engineer from Penn State Health & College of Medicine, and a
            Millersville alumni. In her presentation, she spoke about her journey through her career in the rapidly growing
            field of Cyber Security and gave career advice for prospecting students. Fun fact: Lea was also the founder and
            first president of the Cyber Defense Organization (CDO) at Millersville University!
        </p>
        
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
import TCNBottmNavbar from '@/components/TCNBottmNavbar.vue';
export default {
  name: 'HomePage',
  components: {
    TCNnavbar,
    TCNBottmNavbar,
  },
  data() {
        return {
            videoId: '2sUZs50PbK8',
            videoId2: 'AQXmNPADHZ4',
            videoId3: 'APC5P8Iw3GM',
            videoId4: 'mhK9TEG7TlE',
        };
    },
    computed: {
        embedUrl() {
            return `https://www.youtube.com/embed/${this.videoId}`;

        },
        embedUrl2() {
            return `https://www.youtube.com/embed/${this.videoId2}`;
        },
        embedUrl3() {
            return `https://www.youtube.com/embed/${this.videoId3}`;
        },
        embedUrl4() {
            return `https://www.youtube.com/embed/${this.videoId4}`;
        }
    },
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
  background-image: url('../assets/killian.jpg');
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

.submit-btn {
  width: 150px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.card-title {
  color: grey;
  font-size: 18px;
}

.card-button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card-a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

.card-button:hover, a:hover {
  opacity: 0.7;
}
</style>