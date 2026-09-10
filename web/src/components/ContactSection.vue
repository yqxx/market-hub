<template>
  <section class="section contact" id="contact">
    <div class="container">
      <div class="contact-card">
        <span class="section-label">交流</span>
        <h2 class="section-title">欢迎来访，当面走完一单</h2>
        <p class="section-desc">
          面向希望统一外卖品牌的菜市场。告知市场名称与档口规模，即可安排交流。
        </p>
        <div class="contact-actions">
          <a class="btn btn-primary" :href="`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('市集中台交流预约')}`">
            <Mail :size="16" />
            {{ CONTACT_EMAIL }}
          </a>
          <a class="btn btn-secondary" href="#how">了解履约</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail } from '@lucide/vue'
import { CONTACT_EMAIL } from '@/config/site'
</script>

<style scoped lang="scss">
.contact {
  background: linear-gradient(180deg, #ffffff 0%, var(--color-surface) 100%);
  border-top: 1px solid var(--color-border);
  padding-bottom: 112px;
}

.contact-card {
  padding: 48px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background:
    radial-gradient(ellipse 60% 80% at 92% 8%, rgba(198, 161, 91, 0.12), transparent 55%),
    var(--color-bg);
  box-shadow: var(--shadow-md);

  .section-desc {
    max-width: 560px;
    margin-bottom: 28px;
  }
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 560px) {
  .contact-card {
    padding: 28px 20px;
  }

  .contact-actions .btn {
    width: 100%;
  }
}
</style>
