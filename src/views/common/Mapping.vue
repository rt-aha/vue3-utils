<template>
  <div class="">
    mapping
    <p class="body2-r">
      - [x] 取物件值
    </p>
    <p class="body2-r">
      - [x] 取enum值
    </p>
    <p class="body2-r">
      - [x] 對特定物件設值
    </p>
  </div>
</template>

<script setup lang="ts">
import { mapping, mappingConst, responseStatus, setPersonValue, statusCode } from '@/utils/mapping';

// 取物件值
console.log('mapping...test1', mapping('401', statusCode));
console.log('mapping...test2', mapping('111', statusCode));
console.log('mapping...test2', mapping('111', statusCode, 'error!'));

// 取 enum 值
console.log('mappingConst...test2', mappingConst('success'));
// console.log('mappingConst...test3', mappingConst2('success', statusCode));
// console.log('mappingConst...test4', mappingConst2('suc3cess', responseStatus));

// 對特定物件設值
console.log('setPersonValue...', setPersonValue('name', 'Jack'));

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
