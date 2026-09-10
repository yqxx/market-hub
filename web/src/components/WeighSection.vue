<template>
  <section class="section weigh" id="weigh">
    <div class="container weigh-inner">
      <div class="weigh-copy">
        <span class="section-label">结算</span>
        <h2 class="section-title">计量公允，账目清晰</h2>
        <p class="section-desc">少称退予顾客；超称不向顾客加收，差额由档口承担。</p>
      </div>

      <div class="cases">
        <article class="case">
          <span class="case-label">秤轻</span>
          <h3>下单 2 斤 · 过秤 1.8 斤</h3>
          <p>按实称结算，差额退还顾客。</p>
        </article>
        <article class="case accent">
          <span class="case-label">超称</span>
          <h3>下单 2 斤 · 过秤 2.1 斤</h3>
          <p>仍按下单量结算。市场无需补贴超额部分。</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.weigh {
  background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-accent-muted) 100%);
  border-block: 1px solid var(--color-border);
}

.weigh-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.cases {
  display: grid;
  gap: 16px;
}

.case {
  padding: 22px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-bg);

  h3 {
    margin: 0 0 8px;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 15px;
    color: var(--color-text-muted);
    line-height: 1.65;
  }

  &.accent {
    border-color: rgba(198, 161, 91, 0.4);
    background: var(--color-accent-muted);
  }
}

.case-label {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-cta);
}

@media (max-width: 900px) {
  .weigh-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>
