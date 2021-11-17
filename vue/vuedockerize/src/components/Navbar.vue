<template>
    <nav>
        <div class="wrapper">
            <div class="logo">KUDO APP</div>
            <div class="open-menu only-mobile" @click="openMobile = !openMobile">
                <font-awesome-icon icon="bars" />
            </div>
            <div class="router only-desktop">
                <div class="routes">
                    <div class="route">
                        <router-link :to="{ name: 'kudoboard-list'}">Kudoboards</router-link>
                    </div>
                    <div class="route">
                        <router-link :to="{ name: 'project-list'}">Projects</router-link>
                    </div>
                    <div class="route">
                        <router-link :to="{ name: 'team-list'}">Teams</router-link>
                    </div>
                </div>
                <div class="buttons">
                    <div class="route">
                        <router-link :to="{ name: 'profile'}">
                            <span class="username">Hello {{ username }}</span>
                            <font-awesome-icon icon="user-alt" />
                        </router-link>
                    </div>
                    <div @click="logout" class="route route--icon">
                        <font-awesome-icon icon="sign-out-alt" />
                    </div>
                </div>
            </div>
            <div class="router only-mobile" v-if="openMobile">
                <div class="router-wrapper" @click="openMobile = false">
                    <div class="route">
                        <router-link :to="{ name: 'kudoboard-list'}">Kudoboards</router-link>
                    </div>
                    <div class="route">
                        <router-link :to="{ name: 'project-list'}">Projects</router-link>
                    </div>
                    <div class="route">
                        <router-link :to="{ name: 'team-list'}">Teams</router-link>
                    </div>
                    <div class="route">
                        <router-link :to="{ name: 'profile'}">Edit profile</router-link>
                    </div>
                    <div @click="logout" class="route">Logout</div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import useAuth from '../modules/auth/composables/useAuth';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  setup() {
    const { username, logout } = useAuth()
    const router = useRouter()
    return {
      username,
      logout: () => {
          logout()
          router.push({ name: 'login' })
      },
      openMobile: ref(false)
    }
  }
}
</script>
<style lang="scss" scoped>
nav{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display:flex;
    align-items: center;
    border-bottom: 8px solid var(--orange) !important;
    z-index: 5;
    background-color: var(--purple);

    .wrapper
    {
        max-width: 90%;
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo
        {
            color: var(--white);
            font-weight: bold;
            font-size: 1.5rem;
        }

        .open-menu
        {
            color: var(--white);
            font-size: 2rem;
            cursor: pointer;
        }

        .router
        {
            display:flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;

            .routes
            {
                display: flex;
            }

            .route
            {
                color: var(--white);
                font-size: 20px;
                cursor: pointer;
                margin-left: 1rem;
                a
                {
                    color: var(--white);
                    text-decoration: none;
                    &.router-link-active
                    {
                        color: var(--orange)
                    }
                }
                .username
                {
                    margin-right: 0.5rem;
                }
            }

            .buttons
            {
                display: flex;
                justify-content: flex-end;
            }


            @media (max-width: 767px)
            {
                position: fixed;
                top: 108px;
                background-color: var(--purple);
                width: 100vw;
                left: 0;
                height: calc(100vh - 108px);
                flex-wrap: wrap;
                align-items: flex-start;

                &-wrapper
                {
                    height: auto;
                    width: 100%;
                    margin-top: 1rem;

                    .route{
                        width: 100%;
                        text-align: center;
                        margin-left: 0;

                        &:not(:last-child)
                        {
                            margin-bottom: 2rem;
                        }
                    }
                }
            }
        }
    }
}
</style>