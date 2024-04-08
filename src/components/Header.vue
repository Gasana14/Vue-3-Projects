<script setup>

</script>

<template>
    <div class="hero">
        <h1>MOST POPULAR TV SHOWS</h1>
    </div>
</template>

<style scoped>
/* Hero Styles */
.hero {
    height : 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column
}
.hero img {
    position: absolute;
    height: 700px;
    opacity: 0.1;
}
.hero h1 {
    font-size: 100px;
    font-weight: bold;
}
.hero p {
    cursor: pointer;
}
</style>