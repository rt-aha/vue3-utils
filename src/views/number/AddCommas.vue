<template>
  <div class="">
    add comma
  </div>
</template>

<script setup lang="ts">
import addCommas from '@/utils/addCommas';

console.log('addCommas...1', addCommas(1));
console.log('addCommas...100', addCommas(100));
console.log('addCommas...1000', addCommas(1000));
console.log('addCommas...10000', addCommas(10000));
console.log('addCommas...12345678', addCommas(12345678));
console.log('addCommas...0.1', addCommas(0.1));
console.log('addCommas...0.01', addCommas(0.01));
console.log('addCommas...0.001', addCommas(0.001));
console.log('addCommas...0.0001', addCommas(0.0001));
console.log('addCommas...-1', addCommas(-1));
console.log('addCommas...-100', addCommas(-100));
console.log('addCommas...-1000', addCommas(-1000));
console.log('addCommas...-10000', addCommas(-10000));
console.log('addCommas...-0.1', addCommas(-0.1));
console.log('addCommas...-0.01', addCommas(-0.01));
console.log('addCommas...-0.001', addCommas(-0.001));
console.log('addCommas...-0.0001', addCommas(-0.0001));

// interface Props {}
// const props = withDefaults(defineProps<Props>(), {});

// const emit = defineEmits([]);

// hooks

// ref, reactive

// computed

// function

// watch

// lifecycle

// defineExpose({});
</script>

<style lang="scss" scoped>
</style>
