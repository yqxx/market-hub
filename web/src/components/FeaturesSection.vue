<template>
  <section class="section features" id="features">
    <div class="container">
      <div class="features-head">
        <span class="section-label">价值</span>
        <h2 class="section-title">把菜市场做成零售品牌</h2>
        <p class="section-desc">消费者遇见的是市场，而不是各自为政的档口。</p>
      </div>

      <div class="feature-grid">
        <article v-for="item in features" :key="item.title" class="feature-item">
          <div class="feature-icon">
            <component :is="item.icon" :size="22" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Store, GitBranch, Smartphone, Scale, Receipt, Wallet } from '@lucide/vue'

const features = [
  {
    icon: Store,
    title: '统一门面',
    desc: '品牌、售价与售后归于市场。同品同价，对外只呈现一家店铺。',
  },
  {
    icon: GitBranch,
    title: '智能分派',
    desc: '有货即派，缺货改派。无需逐户沟通，订单自行落到档口。',
  },
  {
    icon: Smartphone,
    title: '档口协同',
    desc: '接单、报货、送达打包台，均在手机完成。',
  },
  {
    icon: Scale,
    title: '集中打包',
    desc: '货品汇于打包台，骑手只至一站。现场秩序随之清晰。',
  },
  {
    icon: Receipt,
    title: '公允计量',
    desc: '少称退予顾客；超称不向顾客加收，差额由档口承担。',
  },
  {
    icon: Wallet,
    title: '日清对账',
    desc: '各档口供货与应结，当日可核。',
  },
]
</script>

<style scoped lang="scss">
.features {
  background: var(--color-bg);
}

.features-head {
  margin-bottom: 48px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px 32px;
}

.feature-item {
  padding: 8px 0;

  h3 {
    margin: 0 0 8px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 15px;
    color: var(--color-text-muted);
    line-height: 1.65;
  }
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 18px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(198, 161, 91, 0.35);
  background: transparent;
  color: var(--color-cta);
}

@media (max-width: 900px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
