<template>
     <div class="card text-center w-50 align-self-center">
        <div class="card-header bg-dark text-white">
            {{ message }}
        </div>
        <div class="card-body py-5">
                <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message'],
}
</script>

<style></style>