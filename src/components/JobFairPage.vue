<template>
    <div>
        <TCNnavbar></TCNnavbar>
        <div class="tcnHeading">
            <div class="tcnBackground"></div>
            <div class="titleBox">
                <h1><strong>COMPUTER SCIENCE JOB FAIR</strong></h1>
                <h2>Fall 2023</h2>
                <h3>October 18th 2023 | 3:00-4:00PM</h3>
                <h3>SMC Multi-Purpose Room</h3>
            </div>

        </div>

        <div class="content">
            <h2>A Job Fair, Just for Computer Science</h2>

            <p>
                TCN's Computer Science Job Fair, is back this year in the fall semester!
                This is where CS students can be exposed to some of the best local
                companies in the tech industry in Lancaster to see what each one is all about!
                <br>
                Attendees will be able to network with industry professionals and discover exciting career opportunities.
                With a wide variety of job opportunities available for those that attend, the Job Fair is sure to provide
                an engaging and enriching experience to everyone, making it an ideal platform for those looking to grow
                and develop their career in tech.
            </p>



            <div class="container my-4">
                <div class="row">
                    <div class="col-md-4" v-for="(image, index) in images" :key="index">
                        <img :src="image.src" class="img-fluid mb-3" alt="Image">
                    </div>
                </div>
            </div>



            <h2>Are you a Company Looking to Attend?</h2>
            
            <p>
                We we welcome any technology companies who are looking for potential employees and interns! Last year we had
                over 5 companies come out and we always want more!
            </p>
            <p>For more information or to reserve your table for this semester's fair, please reach out to the club's 
                president, Mitchell Harrison
            </p>

            <h2>Previous Fairs</h2>
            
            <p>We are incredibly greatful to all of the companies that participated in our first job fair in Spring 2023!
            </p>
            <!-- Have company logos here -->



        </div>

        <TCNBottmNavbar></TCNBottmNavbar>
    </div>
</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
import TCNBottmNavbar from '@/components/TCNBottmNavbar.vue';
export default {
    name: 'JobFairPage',
    components: {
        TCNnavbar,
        TCNBottmNavbar
    },
    data() {
        return {
            images: [
                { src: require('../assets/jobfair-1-min-p-500.jpg') },
                { src: require('../assets/jobfair-2-min-p-500.jpg') },
                { src: require('../assets/jobfair-3-min-p-500.jpg') },
                { src: require('../assets/jobfair-4-min-p-500.jpg') },
                { src: require('../assets/jobfair-5-min-p-500.jpg') },
                { src: require('../assets/jobfair-6-min.jpg') },
                { src: require('../assets/jobfair-7-min.jpg') },
                { src: require('../assets/jobfair-8-min.jpg') },
                { src: require('../assets/jobfair-9-min.jpg') },
            ]
        };
    }
};

</script>

<style>
.container {
    margin-top: 20px;
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
    background-image: url('../assets/jobfair-9-min.jpg');
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

.content {
    display: flex;
    flex-direction: column;
    background-color: white;
    background-image: linear-gradient(135deg, #ffffff 41.67%, #dfdfdf 41.67%, #dfdfdf 50%, #ffffff 50%, #ffffff 91.67%, #dfdfdf 91.67%, #dfdfdf 100%);
    background-size: 8.49px 8.49px;
    color: black;
    padding: 50px 30px;
    text-align: center;
    justify-content: space-evenly;
}


/* Add custom CSS to space out the images and add a new line between rows */
.row {
    margin-bottom: 20px;
}
</style>