<template>
  <div class="app">
    <header-section />
    <main-section />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import MainSection from "@/components/MainSection.vue";

export default {
    components: {
      HeaderSection,  
      MainSection
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Описание поста'},
                {id: 2, title: 'JavaScript 2', body: 'Описание поста2'},
                {id: 3, title: 'JavaScript 3', body: 'Описание поста3'},
            ]
        }
    },
    methods: {
        
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    background-color: #363232;
    min-height: 100vh;
    height: 100%;
}

.post {
    margin: 15px;
    border: 1px solid teal;
}
</style>
