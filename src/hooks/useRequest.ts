import { ref } from 'vue';

export default (requestApi) => {
  const isLoading = ref(false);

  const request = async (args = {}, otherArgs = {}) => {
    try {
      isLoading.value = true;
      const res = await requestApi(args, otherArgs);
      return res;
    }
    catch (e) {
      console.log('e...', e);
    }
    finally {
      isLoading.value = false;
    }
    return null;
  };

  return {
    request,
    isLoading,
  };
};
