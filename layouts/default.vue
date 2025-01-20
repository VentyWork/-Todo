<template>
    <div ref="layoutRef" class="default-layout">
        <slot />

        sosal
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

onMounted(() => {});

onBeforeUnmount(() => {});
</script>

<style lang="scss" scoped>
.default-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-width: 100vw;
    min-height: 100dvh;

    &:deep(main) {
        flex: 1 1 auto;
    }
}
</style>
