<template>
    <div>
        <TCNnavbar></TCNnavbar>
        <h1 class="tcnHeading" style="text-align: center;">
            <br>
            <span style="font-size: 70%">
                <br> TECHNOLOGY CAREER NETWORK</span> <br>
            <span style="font-size: 200%">JOB FAIR FALL 2023</span>
            <br>
        </h1>

        <p style="text-align: center;">
            TCN's Computer Science Job Fair, is back this year in the fall semester!
            This is where club members can be exposed to some of the best local
            companies in the tech industry in Lancaster to see what each one is all about!
            <br>
            Attendees will be able to network with industry professionals and discover exciting career opportunities.
            With a wide variety of job opportunities available for those that attend, the Job Fair is sure to provide
            an engaging and enriching experience to all attendees, making it an ideal platform for those looking to grow
            and develop their career in tech.
        </p>

        <h3 style="text-align: center;">Details</h3>
        <p style="text-align: center;">The current set date for the fall 2023 job fair is October 18th or 19th. The
            companies
            attedning will be announced at a later date. Where in the smc multi-purpose room
        </p>

        <div class="container my-4">
            <div class="row">
                <div class="col-md-4" v-for="(image, index) in images" :key="index">
                    <img :src="image.src" class="img-fluid mb-3" alt="Image">
                </div>
            </div>
        </div>
        <h3 style="text-align: center;">Companies Interested?</h3>
        <p style="text-align: center;">
            We we welcome any technology companies who are looking for potential employees and interns! Last year we had
            over 5 companies come out and we
            will always want more! Please reach out to us on our Contact page, and a TCN Representative will be sure to get
            back to you.


        </p>
    </div>
</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
export default {
    name: 'JobFairPage',
    components: {
        TCNnavbar,
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

/* Add custom CSS to space out the images and add a new line between rows */
.row {
    margin-bottom: 20px;
}
</style>