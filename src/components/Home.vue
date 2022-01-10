<template>
    <v-container fluid fill-height class="home" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black black--text text-xs-center">
                SPA projekt
            </div>
            <div class="display-1 font-weight-bold black--text text-xs-center">
                Razvoj programske potrpore za web
            </div>
            <v-btn fab class="mt-5 blue darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Home'
};
</script>

<style scoped>
.home {
    background: white;
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
