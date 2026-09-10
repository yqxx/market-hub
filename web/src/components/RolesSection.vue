<template>
  <section class="section roles" id="roles">
    <div class="container">
      <div class="roles-head">
        <span class="section-label">现场</span>
        <h2 class="section-title">权责分明的三方协同</h2>
        <p class="section-desc">各司其职，订单可见范围清晰。</p>
      </div>

      <div class="role-grid">
        <article v-for="role in roles" :key="role.title" class="role-card">
          <div class="role-icon">
            <component :is="role.icon" :size="22" />
          </div>
          <h3>{{ role.title }}</h3>
          <p>{{ role.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { LayoutDashboard, Smartphone, PackageCheck } from '@lucide/vue'

const roles = [
  {
    icon: LayoutDashboard,
    title: '市场管理',
    desc: '定价、调度与对账。整场外卖归于市场。',
  },
  {
    icon: Smartphone,
    title: '档口',
    desc: '接单、备货，送达打包台。仅可见本档口订单。',
  },
  {
    icon: PackageCheck,
    title: '打包台',
    desc: '验收、过秤、交给骑手。取货只此一站。',
  },
]
</script>

<style scoped lang="scss">
.roles {
  background: var(--color-bg);
}

.roles-head {
  margin-bottom: 48px;
}

.role-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.role-card {
  padding: 32px 28px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);

  &:hover {
    border-color: rgba(198, 161, 91, 0.4);
    box-shadow: var(--shadow-sm);
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

.role-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(198, 161, 91, 0.35);
  background: transparent;
  color: var(--color-cta);
}

@media (max-width: 900px) {
  .role-grid {
    grid-template-columns: 1fr;
  }
}
</style>
