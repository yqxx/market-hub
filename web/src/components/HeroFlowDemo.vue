<template>
  <div
    ref="rootEl"
    class="hero-flow"
    :class="{ paused: paused || reducedMotion }"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    aria-hidden="true"
  >
    <p class="caption">{{ current.caption }}</p>

    <div class="desktop">
      <div class="desktop-bar">
        <span>叫号 #0024</span>
        <em>{{ current.platform }}</em>
      </div>

      <div class="ticket">
        <div class="ticket-row">
          <strong>西红柿</strong>
          <span class="qty">下单 2 斤</span>
        </div>
        <div class="ticket-row muted">
          <span>{{ current.stall }}</span>
          <span>{{ current.actual }}</span>
        </div>
        <div class="status" :class="current.tone">{{ current.status }}</div>
      </div>

      <ol class="track">
        <li v-for="(step, index) in steps" :key="step" :class="{ active: stage >= index }">
          {{ step }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { useInView } from '@/composables/useInView'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const steps = ['接单', '分派', '备货', '过秤', '交付'] as const

const scenes = [
  { caption: '订单进入市场店铺', platform: '美团', stall: '待分派', actual: '西红柿 2 斤', status: '待分派', tone: 'wait' },
  { caption: '自动分派至档口', platform: '美团', stall: '张记蔬菜', actual: '西红柿 2 斤', status: '已分派', tone: 'info' },
  { caption: '档口备货，送达打包台', platform: '美团', stall: '张记蔬菜', actual: '已送达', status: '打包中', tone: 'warn' },
  { caption: '过秤打包，交给骑手', platform: '美团', stall: '打包台', actual: '过秤 1.8 斤', status: '待取货', tone: 'ok' },
] as const

const rootEl = ref<HTMLElement | null>(null)
const stage = ref(0)
const paused = ref(false)
const inView = useInView(rootEl, 0.25)
const reducedMotion = usePrefersReducedMotion()
const current = computed(() => scenes[stage.value] ?? scenes[0])

let tl: gsap.core.Timeline | null = null

function buildTimeline() {
  tl?.kill()
  tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: 'power2.out' },
    onUpdate() {
      const t = tl?.time() ?? 0
      if (t < 1.8) stage.value = 0
      else if (t < 3.4) stage.value = 1
      else if (t < 5) stage.value = 2
      else stage.value = 3
    },
  })
  tl.to({}, { duration: 6.8 })
}

function syncPlayback() {
  if (reducedMotion.value) {
    tl?.kill()
    tl = null
    stage.value = 3
    return
  }
  if (!inView.value) {
    tl?.pause()
    return
  }
  if (!tl) buildTimeline()
  if (!tl) return
  if (paused.value) tl.pause()
  else tl.play()
}

watch([inView, paused, reducedMotion], syncPlayback)

onMounted(syncPlayback)

onUnmounted(() => {
  tl?.kill()
  tl = null
})
</script>

<style scoped lang="scss">
.hero-flow {
  position: relative;
}

.caption {
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-subtle);
}

.desktop {
  position: relative;
  min-height: 320px;
  padding: 18px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background:
    radial-gradient(ellipse 60% 50% at 50% 20%, rgba(198, 161, 91, 0.1), transparent 60%),
    #f5f5f4;
  box-shadow: var(--shadow-lg);
}

.desktop-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 700;

  em {
    font-style: normal;
    font-weight: 500;
    color: var(--color-text-subtle);
  }
}

.ticket {
  padding: 18px;
  border-radius: var(--radius-md);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
}

.ticket-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 15px;

  strong {
    font-size: 18px;
    letter-spacing: -0.02em;
  }

  &.muted {
    margin-top: 8px;
    font-size: 13px;
    color: var(--color-text-muted);
  }
}

.qty {
  font-weight: 600;
}

.status {
  display: inline-flex;
  margin-top: 14px;
  height: 28px;
  padding: 0 10px;
  align-items: center;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 700;

  &.wait {
    background: #f4f4f5;
    color: #525252;
  }

  &.info {
    background: #eff6ff;
    color: #1d4ed8;
  }

  &.warn {
    background: #fff7ed;
    color: #c2410c;
  }

  &.ok {
    background: #ecfdf3;
    color: #15803d;
  }
}

.track {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;

  li {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-border-strong);
    padding-top: 10px;
    border-top: 2px solid var(--color-border);

    &.active {
      color: var(--color-cta-hover);
      border-top-color: var(--color-cta);
    }
  }
}

.paused {
  outline: 1px dashed rgba(198, 161, 91, 0.4);
  outline-offset: 4px;
  border-radius: var(--radius-lg);
}

@media (max-width: 560px) {
  .desktop {
    min-height: 280px;
  }
}
</style>
