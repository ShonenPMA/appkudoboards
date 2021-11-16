<template>
    <button>
        <div>
            <span>Send Team Kudo</span>
            <font-awesome-icon icon="users" />
        </div>
        
    </button>
</template>
<style lang="scss" scoped>
button
        {
            padding: 1rem 2rem;
            border: 8px solid var(--orange);
            border-top: none;
            border-right: none;
            display: flex;
            cursor: pointer;

            &:last-child
            {
                border-right: 8px solid var(--orange);
            }

            span
            {
                display: block;
                text-align: center;
                margin-bottom: 10px;
            }
        }
</style>