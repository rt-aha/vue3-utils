<template>
  <div class="">
    numberEllipsis
  </div>
</template>

<script setup lang="ts">
import numberEllipsis from '@/utils/numberEllipsis';

console.log('numberEllipsis...1 --> ', numberEllipsis(1));
console.log('numberEllipsis...12 --> ', numberEllipsis(12));
console.log('numberEllipsis...123 --> ', numberEllipsis(123));
console.log('numberEllipsis...1234 --> ', numberEllipsis(1234));
console.log('numberEllipsis...12345 --> ', numberEllipsis(12345));
console.log('numberEllipsis...123456 --> ', numberEllipsis(123456));
console.log('numberEllipsis...123456 --> ', numberEllipsis(123456, 1000));
console.log('numberEllipsis...123456 --> ', numberEllipsis(123456, 1000, false));

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
