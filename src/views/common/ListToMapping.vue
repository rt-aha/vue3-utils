<template>
  <div class="v-list-to-mapping">
    list-to-mapping
  </div>
</template>

<script setup lang="ts">
import { listToMapping, optionsToMapping } from '@/utils/global';
import { fruitOptions } from '@/testData/global';

console.log('listToMapping...', listToMapping(fruitOptions, 'value'));
console.log('optionsToMapping...', optionsToMapping(fruitOptions));

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
