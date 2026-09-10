<template>
  <section class="hero" id="top">
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-grid" />
      <div class="hero-glow" />
    </div>

    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="brand-mark reveal">市集中台</p>
        <h1 class="hero-title reveal reveal-delay-1">整个市场<br />一家店铺</h1>
        <p class="hero-desc reveal reveal-delay-2">
          以市场之名统一品牌、售价与售后。订单协同至各档口，骑手只至集中打包台。
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <a class="btn btn-primary" href="#contact">
            <Mail :size="16" />
            预约交流
          </a>
          <a class="btn btn-secondary" href="#how">了解履约</a>
        </div>
        <ul class="hero-meta reveal reveal-delay-3">
          <li>美团 / 饿了么</li>
          <li>集中打包</li>
          <li>账目清晰</li>
        </ul>
      </div>

      <div class="hero-visual reveal reveal-delay-2">
        <HeroFlowDemo />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail } from '@lucide/vue'
import HeroFlowDemo from '@/components/HeroFlowDemo.vue'
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  padding: 96px 0 120px;
  background:
    radial-gradient(ellipse 70% 50% at 78% 8%, rgba(198, 161, 91, 0.12), transparent 58%),
    linear-gradient(180deg, #fafaf9 0%, #ffffff 48%, #f6f0e4 100%);
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(23, 23, 23, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(23, 23, 23, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%);
}

.hero-glow {
  position: absolute;
  top: -10%;
  right: 5%;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(198, 161, 91, 0.18), transparent 70%);
  filter: blur(20px);
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 48px;
  align-items: center;
}

.brand-mark {
  margin: 0 0 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.22em;
  line-height: 1;
  color: var(--color-cta);
}

.hero-title {
  margin: 0 0 22px;
  font-size: clamp(36px, 5.4vw, 56px);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.12;
  color: var(--color-text);
}

.hero-desc {
  margin: 0 0 32px;
  max-width: 420px;
  font-size: 16px;
  line-height: 1.8;
  color: var(--color-text-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: var(--color-text-subtle);

  li {
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -12px;
      top: 50%;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: var(--color-border-strong);
      transform: translateY(-50%);
    }
  }
}

.hero-visual {
  position: relative;
  min-width: 0;
}

@media (max-width: 900px) {
  .hero {
    padding: 40px 0 56px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
