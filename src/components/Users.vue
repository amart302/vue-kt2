<template>
    <main>
        <h2 v-if="!users.length">Пользователи ещё не добавлены</h2>
        <div class="users-conteiner">
            <div v-if="users.length" class="user-card" v-for="user in users">
                <p>{{ user.firstName }} {{ user.maidenName }} {{ user.lastName }}</p>
                <p>{{ user.email }}</p>
            </div>
        </div>
        <button @click="getUsers()">Получить данные</button>
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                users: []
            }
        },
        methods: {
            async getUsers(){
                try {
                    const responce = await axios.get("https://dummyjson.com/users");
                    this.users = responce.data.users;
                } catch (error) {
                    console.error("Ошибка при попытке получить данные пользователей", error);
                }
            }
        }
    }
    
</script>

<style scoped>
    .users-conteiner{
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .user-card{
        display: flex;
        padding: 10px;
        border: solid 1px;
        border-radius: 6px;
    }
</style>