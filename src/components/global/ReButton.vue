<template>
  <button class="re-button body2-r" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
// interface Props {}
// const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits(['click']);

// hooks

// ref, reactive

// computed

// function
const onClick = (e: Event) => {
  emit('click', e);
};

// watch

// lifecycle

// defineExpose({});
</script>

<style lang="scss" scoped>
.re-button {
 @include plain-btn;
 background-color: color(p300);
 color: color(white);
 width: 120px;
 height: 36px;
}
</style>
