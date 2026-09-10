<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <img :src="iconUrl" alt="" width="24" height="24" />
          <div>
            <strong>市集中台</strong>
            <span>整个市场，一家店铺</span>
          </div>
        </div>

        <nav class="footer-links" aria-label="页脚导航">
          <a href="#features">价值</a>
          <a href="#how">履约</a>
          <a href="#roles">现场</a>
          <a href="#weigh">结算</a>
          <a href="#faq">咨询</a>
          <a href="#contact">预约交流</a>
        </nav>

        <div class="footer-contact">
          <span class="contact-label">联系合作</span>
          <a class="contact-email" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
          <p class="contact-hint">请告知市场名称与档口规模</p>
        </div>
      </div>

      <p class="footer-copy">© {{ year }} 市集中台 · Market Hub</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CONTACT_EMAIL, publicUrl } from '@/config/site'

const iconUrl = publicUrl('icon.svg')
const year = new Date().getFullYear()
</script>

<style scoped lang="scss">
.site-footer {
  padding: 48px 0 40px;
  background: var(--color-primary);
  color: #fafafa;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1.4fr;
  gap: 32px 40px;
  align-items: start;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;

  strong {
    display: block;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  span {
    display: block;
    font-size: 13px;
    color: #a3a3a3;
  }
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;

  a {
    font-size: 14px;
    color: #a3a3a3;
    transition: color var(--transition);

    &:hover {
      color: var(--color-cta);
    }
  }
}

.footer-contact {
  padding: 16px 18px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #262626;
}

.contact-label {
  display: block;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #737373;
}

.contact-email {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-cta);
  transition: color var(--transition);

  &:hover {
    color: #e8c547;
  }
}

.contact-hint {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.55;
  color: #737373;
}

.footer-copy {
  margin: 0;
  padding-top: 20px;
  border-top: 1px solid #262626;
  font-size: 13px;
  color: #737373;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
