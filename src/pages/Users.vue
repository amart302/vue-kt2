<template>
    <main>
        <div v-if="users.length" class="users-conteiner">
            <div v-if="users.length" class="user-card" v-for="user in users">
                <p>{{ user.firstName }} {{ user.maidenName }} {{ user.lastName }}</p>
                <p class="email">{{ user.email }}</p>
            </div>
        </div>
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
        created() {
            this.getUsers();
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
    main{
        display: flex;
        justify-content: center;
    }
    .users-conteiner{
        width: 500px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .user-card{
        display: flex;
        padding: 20px;
        justify-content: space-between;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .email{
        color: gray;
    }
</style>