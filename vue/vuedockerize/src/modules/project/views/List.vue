<template>
    <div class="center">
        <div class="form">
            <h1>Click on a project to see its members</h1>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.center
{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: calc(100% - 1rem);
    height: 100%;
    padding: 0.5rem;
    h1{
        text-align: center;
        @media (max-width: 767px)
        {
            font-size: 1rem;
            text-align: center;
        }
    }
}
</style>