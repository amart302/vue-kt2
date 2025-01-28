<template>
    <header>
        <nav>
            <router-link to="/home">Home</router-link>
            <router-link to="/users">Users</router-link>
            <router-link to="/profile">Profile</router-link>
        </nav>
    </header>
</template>

<script>
    export default {

    }
</script>

<style>
    header{
        max-width: 1200px;
        margin-inline: auto;
        display: flex;
        justify-content: end;
        padding-block: 20px;
        padding-inline: 10px;
    }
    nav{
        display: flex;
        gap: 20px;
    }
</style>