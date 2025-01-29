<template>
    <main>
        <form action="">
            <h1>Authorization</h1>
            <div class="form-group">
                <label for="username">Login</label>
                <input type="text" name="username" v-model="username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password">
            </div>
            <button @click="sendUserData()">Submit</button>
            <p v-if="error" class="error-message">{{ error }}</p>
        </form>
    </main>
</template>

<script>
import axios from 'axios';

    export default {
        data(){
            return{
                username: "",
                password: "",
                error: null
            }
        },
        created(){
            localStorage.removeItem("token");
        },
        methods: {
            async sendUserData(){
                if(this.username == "" || this.password == "") return null;

                try {
                    const responce = await axios.post("https://dummyjson.com/auth/login", {
                        username: this.username,
                        password: this.password
                    });
                    localStorage.setItem("token", responce.data.accessToken);
                    this.$router.push({ path: "/profile" });
                } catch (error) {
                    console.log("Ошибка при отправки данных", error);
                    this.error = "Неверный логин или пароль";
                }
                
            }
        }
    }
</script>

<style scoped>
    main{
        display: flex;
        justify-content: center;
    }
    form{
        width: 350px;
        height: 350px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
    input{
        border: none;
        padding: 10px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .form-group{
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    button{
        width: 200px;
        height: 40px;
        background: rgb(207, 207, 207);
        border: none;
        border-radius: 6px;
        cursor: pointer;
    }
    .error-message{
        color: red;
    }
</style>