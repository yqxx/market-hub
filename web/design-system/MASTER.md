# 设计系统：市集中台官网

视觉对齐 `chirrup-web`：浅色、黑金 CTA、奶油点缀、分区大标题。内容面向菜市场运营方，不是 C 端货架。

## 品牌

- 中文名：市集中台
- 代号：Market Hub
- Slogan：一店多档口 · 外卖订单智能分发

## 颜色

| Role | Hex |
|------|-----|
| Primary | `#171717` |
| Secondary | `#404040` |
| CTA / Accent | `#D4AF37` |
| CTA Hover | `#C4A030` |
| Background | `#FFFFFF` |
| Surface | `#FAFAFA` |
| Accent muted | `#F8F4E8` |
| Text muted | `#525252` |
| Border | `#E5E5E5` |

## 字体

Plus Jakarta Sans 400–800，中文回落到苹方 / 微软雅黑。

## 页面结构

1. Sticky header
2. Hero：整个市场，一家店铺
3. 为什么：对外一家店、自动分单、集中打包、对得上账
4. 怎么运转：接到单到交给骑手
5. 谁来用：市场 / 档口 / 打包台
6. 结算：少称退顾客，多称档口承担
7. FAQ
8. 预约演示
9. Footer

文案面向市场管理方，不写 Mock、H5、部署等实现细节。

## 动效

- Hero 文案 fade-up
- 订单流转 mock 循环
- 尊重 `prefers-reduced-motion`
- 图标用 Lucide SVG，不用 emoji
