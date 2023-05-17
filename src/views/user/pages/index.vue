<template>
    <div class="user">
        <div>
            个人中心
        </div>
        <div>
            <selected>
                <button>12346</button>
                <!-- <LoginPage /> -->
            </selected>
            <router-link to="/user/login">登录</router-link>
            <router-link to="/user/register">注册</router-link>
            <router-view></router-view>
        </div>

    </div>
</template>
<script setup>
import selected from '../../../components/abstract/selected.vue';
import LoginPage from './login.page.vue';
// console.log(LoginPage);
</script>
<style  scoped>
.user {
    width: 1376px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>