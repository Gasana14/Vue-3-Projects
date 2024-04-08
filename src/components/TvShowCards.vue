<script setup>
import axios from 'axios';
import { ref,watch } from 'vue';
import Card from './Card.vue';

const tv_shows = ref(null);
const page = ref(1);

const response = await axios.get(`https://www.episodate.com/api/most-popular?page=${page.value}`);
const startIndex = (page.value - 1) * 8;
const endIndex = startIndex + 8;
tv_shows.value = response.data.tv_shows.slice(startIndex, endIndex);
console.log('page value:', page.value);

watch(page, async () => {
    if (page.value < 1) {
        page.value = 1;
        return;
    }
    
    const response = await axios.get(`https://www.episodate.com/api/most-popular?page=${page.value}`);
    const startIndex = (page.value - 1) * 8;
    const endIndex = startIndex + 8;
    const newTvShows = response.data.tv_shows.slice(startIndex, endIndex);
    if (newTvShows.length > 0) {
        tv_shows.value = newTvShows;
    } else {
        if (page.value > 1) {
            page.value--;
        }
    }
    console.log('page value:', page.value);
});


</script>

<template>
    <div class="container">
        <div class="cards">
            <Card 
            v-for="show in tv_shows" 
            :key="show.id" 
            :image="show.image_thumbnail_path" 
            :name="show.name" 
            :startDate="show.start_date"
            :status="show.status"
            :network="show.network" 
            />
        </div>
        <div class="button-container">
            <button @click="page--">&lt</button>
            <button @click="page++">></button>
        </div>    
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(27, 26, 26);
    padding: 30px;
    /* i want this container height to occupy all the space to hold cards dynamically */

}
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    height: 700px
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
}
.jobs {
    display: flex;
    flex-wrap: wrap;
}
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>