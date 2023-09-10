<template>
  <div>
    <TCNnavbar></TCNnavbar>
    <div class="tcnHeading">
      <div class="tcnBackground"></div>
      <div class="titleBox">
        <h4><strong>Get In Contact</strong></h4>
        <h1><strong>MEET THE OFFCIERS</strong></h1>
      </div>

    </div>

    <div class="content">
      <div class="content-inner">
        <h1 style="font-size:35px"><strong>Want to get in Contact with Us? <br>
          Use the below submission form!</strong></h1>
        
        <div class="row">
          <div class="col">
          <div>
      
        <form method="post" action="https://forms.un-static.com/forms/10146f17ad4811e2b6189db350acad6968ce8c22">
  <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputName" placeholder="Please enter your name">
    </div>
  </div>
  <div class="form-group row">
     <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputMessage" class="col-sm-2 col-form-label">Message</label>
    <div class="col-sm-10">
      <textarea name="inputMessage" cols="40" rows="8" class="form-control"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-2"></div>
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary submit-btn">Send</button>
    </div>
  </div>

  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-inner">
        <h1 style="font-size:35px"><strong>Meet the Officers! <br>
          </strong></h1>
        
        <div class="row">
          <div class="col">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="card">
  <img src="../assets/mitchell-photo.jpg" alt="John" style="width:100%">
  <h2>Mitchell Harrison</h2>
  <p class="card-title">President</p>
  <p> <a href = "mdharri2@millersville.edu">mdharri2@millersville.edu</a></p>
  <p><a href="https://www.linkedin.com/in/mitchell-harrison-9570b5253/"><i class="fa fa-linkedin"></i></a></p>
</div>
          </div>
          <div class="col">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="card">
  <img src="../assets/justin-photo.jpg" alt="John" style="width:100%">
  <h2>Justin Stevens</h2>
  <p class="card-title">Vice President</p>
  <p> <a href = "jmsteve1@millersville.edu">jmsteve1@millersville.edu</a></p>
  <p><a href="https://www.linkedin.com/in/justin-stevens-77546021b/"><i class="fa fa-linkedin"></i></a></p>
</div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="card">
  <img src="../assets/Jon-photo.jpg" alt="John" style="width:100%">
  <h2>Jonathan Rivera</h2>
  <p class="card-title">Treasurer</p>
  <p> <a href = "jjriver1@millersville.edu">jjriver1@millersville.edu</a></p>
  <p><a href="https://www.linkedin.com/in/jonathan-rivera-2a0625212/"><i class="fa fa-linkedin"></i></a></p>
</div>
          </div>
          <div class="col">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="card">
  <img src="../assets/tess-photo.png" alt="John" style="width:100%">
  <h2>Tessa Hughes</h2>
  <p class="card-title">Secretary</p>
  <p> <a href = "tmhughe1@millersville.edu">tmhughe1@millersville.edu</a></p>
  <p><a href="#"><i class="fa fa-linkedin"></i></a></p>
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
  background-image: url('../assets/circut-background.gif');
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