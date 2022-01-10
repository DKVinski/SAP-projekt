<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Stranica1</v-flex
            >
        </v-layout>
        <v-layout row wrap class="sadrzaj-stranice1">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-card-actions v-if="['stranica1'].includes($route.name)">
                        <v-btn v-on:click="counter += 1"
                            outline
                            block
                            color="green"
                            @click="showRecipes('keto')"
                            data-cy="plansKetoBtn"
                        >
                            Add 1</v-btn
                        >
                        <p>The button above has been clicked {{ counter }} times.</p>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/6S27S6pZ6o0"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >PALEO</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Paleo</h3>
                            <div>
                                The Paleo diet requires the predominant
                                consumption of foods presumed to have been the
                                only foods available to or consumed by humans
                                during the Paleolithic era.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['stranica1'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('paleo')"
                            data-cy="plansPaleoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/1SPu0KT-Ejg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >VEGAN</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Vegan</h3>
                            <div>
                                The vegan diet abstains from the use of animal
                                products. The vegan diet does not consume meat,
                                diary products, eggs or any all other
                                animal-derived ingredients.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['stranica1'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('vegan')"
                            data-cy="plansVeganBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Stranica1',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getRecipes', plan);
        }
    }
};
</script>

<style scoped></style>
