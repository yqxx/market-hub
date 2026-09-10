<template>
  <section class="section how" id="how">
    <div class="container">
      <div class="how-head">
        <span class="section-label">履约</span>
        <h2 class="section-title">从接到单到交给骑手</h2>
        <p class="section-desc">市场统筹，档口备货，打包在一处完成。</p>
      </div>

      <ol class="steps">
        <li v-for="(step, index) in steps" :key="step.title">
          <span class="step-num">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: '平台接单',
    desc: '美团、饿了么订单进入市场统一店铺。',
  },
  {
    title: '分派档口',
    desc: '按当日可供货档口自动分派，缺货则改派。',
  },
  {
    title: '集中打包',
    desc: '档口备货送达打包台，整场进度一目了然。',
  },
  {
    title: '交给骑手',
    desc: '过秤确认后交给骑手。顾客收到的是市场品牌的货。',
  },
]
</script>

<style scoped lang="scss">
.how {
  background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-accent-muted) 100%);
  border-block: 1px solid var(--color-border);
}

.how-head {
  margin-bottom: 48px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 15px;
    color: var(--color-text-muted);
    line-height: 1.65;
  }
}

.step-num {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--color-cta);
  line-height: 1;
}

@media (max-width: 900px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
