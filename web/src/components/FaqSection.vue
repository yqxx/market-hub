<template>
  <section class="section faq" id="faq">
    <div class="container">
      <div class="faq-head">
        <span class="section-label">咨询</span>
        <h2 class="section-title">常见疑问</h2>
        <p class="section-desc">面向市场管理方的零售中台，而不是档口各自开店，也不是给顾客用的应用。</p>
      </div>

      <div class="faq-list">
        <details v-for="item in faqs" :key="item.q" class="faq-item">
          <summary>{{ item.q }}</summary>
          <div class="faq-a">
            <p>{{ item.a }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: '档口是否仍需自开店铺？',
    a: '不必。市场对外只开一家店，档口负责供货。品牌与售后均归于市场。',
  },
  {
    q: '如何对接美团、饿了么？',
    a: '订单进入市场统一店铺，再分派至档口。对接细节可在交流时说明。',
  },
  {
    q: '超称是否由市场补贴？',
    a: '否。少称退予顾客；超称不向顾客加收，差额由档口承担。',
  },
  {
    q: '何种市场更为适合？',
    a: '希望统一外卖品牌、档口较多、不愿逐户对接平台的菜市场。先完成一家店的闭环，再论铺开。',
  },
]
</script>

<style scoped lang="scss">
.faq {
  background: var(--color-bg);
}

.faq-head {
  margin-bottom: 36px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  max-width: 720px;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);

  &:first-child {
    border-top: 1px solid var(--color-border);
  }

  summary {
    list-style: none;
    cursor: pointer;
    padding: 18px 28px 18px 0;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.45;
    position: relative;
    color: var(--color-text);

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: '+';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
      font-weight: 500;
      color: var(--color-cta);
      line-height: 1;
    }
  }

  &[open] summary::after {
    content: '−';
  }

  summary:hover {
    color: var(--color-secondary);
  }
}

.faq-a {
  padding: 0 0 20px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-text-muted);

  p {
    margin: 0;
  }
}
</style>
