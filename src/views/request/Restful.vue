<template>
  <div class="v-request">
    <ReButton @click="restfulRequest">
      Restful
    </ReButton>
  </div>
</template>

<script setup lang="ts">
import { mockJsonPlaceholder } from '@/service/restfulTest';
import useRequest from '@/hooks/useRequest';

const { request: restfulReq } = useRequest(mockJsonPlaceholder);

const restfulRequest = () => {
  console.log('hi');
  restfulReq();
};
</script>

<style lang="scss" scoped></style>
