import type { Metadata } from "next";
import WestlakeCaseStudy from "./WestlakeCaseStudy";

export const metadata: Metadata = {
  title: "贷款业务智能客服 — Jealin Zhao",
  description: "Westlake Financial 智能客服产品案例：目标用户、产品形态、桌面悬浮窗与信息架构。",
};

export default function WestlakeProjectPage() {
  return (
    <main className="case-page" id="top">
      <header className="case-nav">
        <a className="case-back" href="/#work"><span aria-hidden="true">←</span> 返回作品集</a>
        <a className="brand" href="/" aria-label="Jealin 个人网站首页"><span className="brand-mark">J</span><span>JEALIN 赵佳琳 / AI PM</span></a>
        <a className="availability" href="mailto:15241522260@163.com"><i aria-hidden="true" /> OPEN TO TALK</a>
      </header>

      <section className="project-hero" aria-labelledby="project-title">
        <div className="star-field star-field--near" aria-hidden="true" /><div className="star-field star-field--far" aria-hidden="true" /><div className="project-hero-orbit" aria-hidden="true" />
        <div className="project-hero-meta"><span>CASE STUDY / 01</span><span>FINTECH · AI SERVICE</span></div>
        <div className="project-hero-copy">
          <p className="eyebrow">WESTLAKE FINANCIAL / 0→1 / 2025.08—2026.06</p>
          <h1 id="project-title">贷款业务<br /><span>智能客服</span></h1>
          <p>在 MyAccount 接入 AI 文本客服，分流重复来电，并以账户只读、风险识别与人工兜底守住金融安全边界。</p>
        </div>
        <div className="project-hero-proof">
          <div><span>ROLE</span><strong>AI 产品经理</strong></div><div><span>PRIMARY DEVICE</span><strong>Desktop Web</strong></div><div><span>CORE</span><strong>RAG · Read-only Tool · Guardrails</strong></div>
        </div>
        <a className="case-scroll" href="#case-study">阅读产品推导 <span aria-hidden="true">↓</span></a>
      </section>

      <WestlakeCaseStudy />

      <section className="case-next">
        <p>BACK TO SELECTED WORK</p><a href="/#work"><span>继续查看作品集</span><b aria-hidden="true">↗</b></a>
      </section>
      <footer><span>© 2026 JEALIN 赵佳琳</span><span>AI PRODUCT MANAGER / DALIAN</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
