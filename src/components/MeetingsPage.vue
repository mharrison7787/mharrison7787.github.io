<template>
    <div>
        <TCNnavbar></TCNnavbar>
        <h1 class="tcnHeading" style="text-align: center;">
            <br>
            <span style="font-size: 70%">
                <br> TECHNOLOGY CAREER NETWORK</span> <br>
            <span style="font-size: 200%">TCN EVENTS AND MEETINGS</span>
            <br>
        </h1>

        <p style="text-align: center;">
            The TCN hosts monthly meetings with guest speakers,
            Q&A sessions, refreshments and more for networking
            and socializing with other members.
            <br>
            Meetings with guest speakers are typically hosted on the last Friday of the month during Fall and Spring
            semesters
            (depending on guest availability).
            During the meetings, we usually provide pizza,
            snacks, and drinks as refreshments for our club members.
            In between the larger get-togethers, we host small events such as resume building workshops.
        </p>

        <h1 style="text-align: center; style= font-size: 200%">Meetings Archive</h1>
        <p style="text-align: center;">If you were not able to attend a previous
            TCN meeting or if you are curious to see what TCN meetings are like,
            below is an archive of our recorded meetings.
        </p>
        <h1 style="text-align: center; style= font-size: 200%">[10/27/2022] Julie Gardner - WebFX</h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 400px; padding-right: 400px;">
            Julie Gardner is a Talent Acquisition Specialist from WebFX, a digital marketing agency and web/software
            development company with many locations, including Harrisburg, PA. She shared an overview of the company,
            and answered questions about the recruitment process.
        </p>
        <br>
        <h1 style="text-align: center; style= font-size: 200%">[3/25/2022] Chris Carney - Crafting a Great Resume</h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl2" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 400px; padding-right: 400px;">
            Chris Carney is a Software Development Engineer at Amazon and a professional resume critic. During this Zoom
            meeting, Chris shared with us a wealth of tips / insider knowledge on making a resume perfect for industry, such
            as formatting, do's & don'ts, what hiring managers are looking for, and more.
        </p>
        <br>
        <h1 style="text-align: center; style= font-size: 200%">[03/04/2022] Richard Abel and Hallie Lupinski - Deloitte</h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl3" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 400px; padding-right: 400px;">
            Deloitte is an international service provider of financial advisory, consulting, auditing, and more. In this
            Zoom meeting, recruiters Richard Abel and Hallie Lupinski gave us an overview of what to look forward to in an
            interview, industry trends, and held a Q&A for students.
        </p>
        <br>
        <h1 style="text-align: center; style= font-size: 200%">[2/18/2022] Guest Speaker: Lea Eller</h1>
        <div class="video-container">
            <iframe width="600" height="400" :src="embedUrl4" frameborder="0" allowfullscreen></iframe>
        </div>
        <p style="text-align: center; padding-left: 400px; padding-right: 400px;">
            Lea Eller is a Cyber Defense Infrastructure Engineer from Penn State Health & College of Medicine, and a
            Millersville alumni. In her presentation, she spoke about her journey through her career in the rapidly growing
            field of Cyber Security and gave career advice for prospecting students. Fun fact: Lea was also the founder and
            first president of the Cyber Defense Organization (CDO) at Millersville University!
        </p>
        <TCNBottmNavbar></TCNBottmNavbar>
    </div>
</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
import TCNBottmNavbar from '@/components/TCNBottmNavbar.vue';
export default {
    name: 'MeetingsPage',
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

<style>
.video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Adjust the height as needed */
}

.video-iframe {
    width: 600px;
    height: 400px;
}
</style>