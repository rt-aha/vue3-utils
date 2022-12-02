<template>
  <div class="">
    camel
  </div>
</template>

<script setup lang="ts">
import { firstLetterUpperCase, kebabCaseToCamelCase } from '@/utils/variableNameConvert';

const test1 = 'test';
const test2 = 'TEST';
const test3 = 're-multi-select';

console.log('firstLetterUpperCase...test1', firstLetterUpperCase(test1));
console.log('firstLetterUpperCase...test2', firstLetterUpperCase(test2));
console.log('kebabCaseToCamelCase...test3', kebabCaseToCamelCase(test3));

// console.log('fistLetterLowerCase...', fistLetterLowerCase(fruitOptions));

// interface Props {}
// const props = withDefaults(defineProps<Props>(), {});
// const emit = defineEmits([]);
// hooks

// ref, reactive

// computed

// functions

// watch

// lifecycle

defineExpose({});
</script>

<style lang="scss" scoped>

</style>
