<template>
    <div class="center">
        <div class="form">
            <h1>Click on a team to see its members</h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.center
{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;

    h1{
        @media (max-width:767px)
        {
            font-size: 1rem;
            text-align: center;
        }
    }
}
</style>