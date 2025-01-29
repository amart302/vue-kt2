<template>
    <main v-if="userData">
        <div class="main-container1">
            <h1>Мой профиль</h1>
            <div class="main-container-child">
                <p>Username: {{ userData.username }}</p>
                <p>Name: {{ userData.firstName }}</p>
                <p>Lastname: {{ userData.lastName }}</p>
                <p>Gender: {{ userData.gender }}</p>
                <p>Email: {{ userData.email }}</p>
            </div>
        </div>
        <div class="main-container2">
            <img :src="userData.image" alt="">
        </div>
    </main>    
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return{
                userData: null,
                token: localStorage.getItem("token") || null
            }
        },
        created(){
            this.redirectToLogin();
        },
        methods: {
            redirectToLogin(){
                if(!this.token){
                    this.$router.push({ path: "/login" });
                }else{
                    this.getUserData();
                }
            },
            async getUserData(){
                try {
                    const responce = await axios.get("https://dummyjson.com/auth/me", {
                        headers: {
                            Authorization: `Bearer ${this.token}`
                        }
                    });
                    console.log(responce.data);
                    this.userData = responce.data;
                } catch (error) {
                    console.error("Ошибка при получении данных пользователя:", error);
                }
            }
        }
    }
</script>

<style scoped>
    main{
        max-width: 600px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

    }
    .main-container1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;
    }
    .main-container2{
        display: flex;
        align-items: center;
    }
    .main-container-child{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    p{
        width: fit-content;
        padding: 16px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    img{
        width: 250px;
        height: 250px;
    }
</style>