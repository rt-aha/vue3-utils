<template>
  <div class="base-layout">
    <!-- <div class="base-layout__header">
      <LoHeader />
    </div> -->
    <div class="base-layout__body">
      <div class="base-layout__body__side">
        <p class="title h1-b">
          JS/TS Utilities
        </p>
        <div class="menu">
          <ul class="route-list">
            <li v-for="mainMenu of menuList" :key="mainMenu.name" class="route-list__item">
              <p class="route-list__item__title body3-r">
                {{ mainMenu.meta.title }}
              </p>

              <div v-if="mainMenu.children && mainMenu.children.length > 0" class="route-list__item__sub-route-wrap">
                <ul class="sub-route-list">
                  <li v-for="subMenu of mainMenu.children" :key="subMenu.name" class="sub-route-list__item">
                    <router-link
                      class="sub-route-list__item__title body3-r"
                      :class="{ 'body3-b': route.name === subMenu.name }"
                      :to="{ name: subMenu.name }"
                    >
                      {{ subMenu.meta!.title }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="base-layout__body__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router';
// interface Props {}
// const props = withDefaults(defineProps<Props>(), {});
// const emit = defineEmits([]);
// hooks
const route = useRoute();

// ref, reactive

// computed
const menuList = computed(() => {
  return routes.filter((route) => {
    return route.meta.showInMenu;
  }).map((route) => {
    route.children = route.children?.filter((subRoute) => {
      return subRoute.meta!.showInMenu;
    });

    return route;
  });
});

// functions

// watch

// lifecycle

defineExpose({});
</script>

<style lang="scss" scoped>
.base-layout {
  height: 100%;
  // &__header {
  //   height: 60px;
  // }

  &__body {
    @include flex(flex-start, flex-start);
    height: 100%;

    &__side {
      flex: none;
      width: 280px;
      height: 100%;
      background-color: color(g50);
      // @include padding(20px 20px 20px 0px);
      @include flex(flex-start, flex-start);

    }

    &__content {
      flex: 1;

        @include padding(20px);
    }
  }
}

.title {
  writing-mode: vertical-lr;
  background-color: color(g200);
  height: 100%;
  @include padding(20px 0px);
}

.menu {
  @include padding(20px 10px);
}

.route-list {

  &__item {

    &__title {
      height: 32px;
    }
  }
}
.sub-route-list {
  margin-left: 20px;

  &__item {

    &__title {
      height: 32px;
      color: color(black);
    }
  }
}
</style>
