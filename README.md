# Jealin 赵佳琳｜AI 产品经理个人网站

这是 Jealin 赵佳琳的个人作品集网站，采用浅紫色星空视觉风格，集中展示 AI 产品项目、工作经历、产品方法论与代码作品。

在线访问：<https://jealin-field-notes.ivory-teal-8104.chatgpt.site>

## 核心内容

- Westlake Financial 贷款业务智能客服
- ShopLine Sidekick 商家后台 AI Copilot
- 数据中台 AI 测试助手
- AI 产品经历与工作方法
- GitHub 代码作品入口

## 技术栈

- React / TypeScript
- vinext / Vite
- CSS 响应式布局与动效
- Cloudflare Workers 兼容构建

## 本地运行

需要 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

构建与验证：

```bash
npm run build
node --test tests/rendered-html.test.mjs
```

## 项目结构

```text
app/                              页面与样式
app/projects/westlake-ai-service  项目案例详情页
public/                           网站图片与图标
tests/                            页面渲染测试
worker/                           Cloudflare Worker 入口
```

## 联系方式

- 邮箱：15241522260@163.com
- GitHub：<https://github.com/15241522260-dotcom>
