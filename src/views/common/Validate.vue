<template>
  <div class="">
    Validate
  </div>
</template>

<script setup lang="ts">
import { validate } from '@/utils/validate/validator';

console.log();

const testValidator = async () => {
  const result = await validate('', {
    label: '姓名',
    ruleList: [
      {
        name: 'vldRequired',
        cusError: 'vldRequiredWithLabel',
      },
    ],
  });

  console.log(result);
};

testValidator();
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
