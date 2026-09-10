<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <a class="brand" href="#top" aria-label="市集中台首页">
        <img :src="iconUrl" alt="" width="28" height="28" />
        <span>市集中台</span>
      </a>

      <nav class="nav" aria-label="主导航">
        <a href="#features">价值</a>
        <a href="#how">履约</a>
        <a href="#roles">现场</a>
        <a href="#weigh">结算</a>
        <a href="#faq">咨询</a>
      </nav>

      <a class="btn btn-primary header-cta" href="#contact">预约交流</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { publicUrl } from '@/config/site'

const iconUrl = publicUrl('icon.svg')
const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.82);
  border-bottom: 1px solid transparent;
  transition:
    border-color var(--transition),
    box-shadow var(--transition);

  &.scrolled {
    border-bottom-color: var(--color-border);
    box-shadow: var(--shadow-sm);
  }
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-text);
  flex-shrink: 0;

  img {
    width: 28px;
    height: 28px;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  a {
    display: inline-flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: var(--radius-sm);
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-muted);
    transition:
      color var(--transition),
      background-color var(--transition);

    &:hover {
      color: var(--color-text);
      background: var(--color-surface);
    }
  }
}

.header-cta {
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  box-shadow: none;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .nav a {
    display: none;
  }
}
</style>
