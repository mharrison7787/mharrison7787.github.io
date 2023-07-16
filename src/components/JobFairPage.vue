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
    </div>
</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
export default {
    name: 'JobFairPage',
    components: {
        TCNnavbar,
    }
}
</script>

<style scoped></style>