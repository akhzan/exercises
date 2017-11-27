<template>
  <div>
    <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
        </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
      return {
        selected: '',
        options: [
            { text: 'Jakarta', value: 'Jakarta' },
            { text: 'Tokyo', value: 'Tokyo' },
            { text: 'London', value: 'London' }
        ]
      }
  }
};
</script>

<style>

</style>
