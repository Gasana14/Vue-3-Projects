<script setup>
    import {defineProps} from "vue"

    const {image, name,startDate,status,network} = defineProps([
        'image',
        'name',
        'startDate',
        'status',
        'network'
    ])
</script>

<template>
    <NCard>
    <template #cover>
      <img :src="image" alt="">
    </template>
    <h3>{{ name }}</h3>
    <p> {{ network }} </p>
    <span class="dates"><p>{{ startDate }} </p> <p> {{ status }} </p></span>
    
  </NCard>
</template>

<style scoped>
.dates {
    display: flex;
    align-items: center;
}

.dates p {
    margin: 0;
}

.dates p:not(:last-child)::after {
    content: '-';
    margin: 0 5px;
}
.n-card {
    width: 200px;
    margin:10px 20px;

}
.n-card img {
    height: 250px
}

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
}
</style>