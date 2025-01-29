<template>
    <footer>
        <div class="footer-container">
            <div class="social-networks">
                <img src="../assets/images/facebookIcon.svg" alt="">
                <img src="../assets/images/instagramIcon.svg" alt="">
                <img src="../assets/images/twitterIcon.svg" alt="">
                <img src="../assets/images/inIcon.svg" alt="">
            </div>
            <p>Copyright ©2020 All rights reserved </p>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style>
    footer{
        max-width: 1200px;
        margin-inline: auto;
        padding-block: 20px;
        padding-inline: 10px;
        display: flex;
        justify-content: center;
        margin-top: 60px;
    }
    .footer-container{
        width: 260px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .social-networks{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>