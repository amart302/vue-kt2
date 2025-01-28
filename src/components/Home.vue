<template>
    <main>
        <div>
            <h1>Home page</h1>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br>
                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br>
                consequat sunt nostrud amet.
            </p>
            <button>Authorization</button>
        </div>
        <img src="../assets/images/tools.png" alt="">
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    main{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    main div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 40px;
    }
    main img{
        width: 500px;
        height: 500px;
    }
    h1{
        font-size: 50px;
        font-weight: 700;
    }
    p{
        font-size: 22px;
        font-weight: 400;
    }
    main button{
        background-color: #FF6464;
        width: 210px;
        height: 44px;
        font-size: 22px;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>