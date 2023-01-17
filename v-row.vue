<template>
  <v-container class="bg-surface-variant">
    <v-row class="bg-green" v-for="j in 6" :key="j" no-gutters >
      <v-col
        v-for="n in 3"
        :key="`${j}${n}`"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          {{j}}.{{n}} of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>