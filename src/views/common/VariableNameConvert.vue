<template>
  <div class="">
    camel
  </div>
</template>

<script setup lang="ts">
import {
  SnakeCaseToCamelCase,
  SnakeCaseToKebabCase,
  SnakeCaseToPascalCase,
  camelCaseToKebabCase,
  camelCaseToPascalCase,
  camelCaseToSnakeCase,
  firstLetterToUpperCase,
  kebabCaseToCamelCase,
  kebabCaseToPascalCase,
  kebabCaseToSnakeCase,
  pascalCaseToCamelCase,
  pascalCaseToKebabCase,
  pascalCaseToSnakeCase,
} from '@/utils/variableNameConvert';

const test1 = 'test';
const test2 = 'TEST';
const test3 = 're-multi-select';
const test4 = 're_multi_select';
const test5 = 'reMultiSelect';
const test6 = 'ReMultiSelect';

console.log(`firstLetterToUpperCase|${test1} --> `, firstLetterToUpperCase(test1));
console.log(`firstLetterToUpperCase|${test2} --> `, firstLetterToUpperCase(test2));
console.log('---');
console.log(`kebabCaseToCamelCase|${test3} --> `, kebabCaseToCamelCase(test3));
console.log(`kebabCaseToPascalCase|${test3} --> `, kebabCaseToPascalCase(test3));
console.log(`kebabCaseToSnakeCase|${test3} --> `, kebabCaseToSnakeCase(test3));
console.log('---');
console.log(`SnakeCaseToCamelCase|${test4} --> `, SnakeCaseToCamelCase(test4));
console.log(`SnakeCaseToPascalCase|${test4} --> `, SnakeCaseToPascalCase(test4));
console.log(`SnakeCaseToKebabCase|${test4} --> `, SnakeCaseToKebabCase(test4));
console.log('---');
console.log(`camelCaseToKebabCase|${test5} --> `, camelCaseToKebabCase(test5));
console.log(`camelCaseToSnakeCase|${test5} --> `, camelCaseToSnakeCase(test5));
console.log(`camelCaseToPascalCase|${test5} --> `, camelCaseToPascalCase(test5));
console.log('---');
console.log(`pascalCaseToKebabCase|${test6} --> `, pascalCaseToKebabCase(test6));
console.log(`pascalCaseToSnakeCase|${test6} --> `, pascalCaseToSnakeCase(test6));
console.log(`pascalCaseToCamelCase|${test6} --> `, pascalCaseToCamelCase(test6));

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
