const productSignals = ["RAG", "MULTI-AGENT", "TOOL CALLING", "SQL GENERATION", "GUARDRAILS", "EVALUATION"];

const projects = [
  {
    id: "01",
    eyebrow: "FINTECH / AI SERVICE",
    title: "贷款业务\n智能客服",
    statement: "把账户查询、状态解释和人工兜底，嵌入用户正在完成的还款任务。",
    context: "客户必须把自然语言问题转换成菜单路径，再自行理解多个金额、日期和付款状态；判断失败后还要向人工重复说明背景。",
    contribution: "定义桌面 Web 悬浮窗＋页面情境提示的产品形态，完成任务型 IA，并设计“意图识别 → 风险判断 → RAG / 只读查询 → 确定性展示 → 人工保底”链路。",
    tags: ["0→1", "Product Form", "Information Architecture", "RAG"],
    accent: "violet",
    href: "/projects/westlake-ai-service",
  },
  {
    id: "02",
    eyebrow: "COMMERCE / DECISION AGENT",
    title: "P-buyer\n智能导购",
    statement: "让 AI 从“介绍商品”走向“帮用户完成购买决策”。",
    context: "面向宠物、3C、母婴与家装等高决策成本品类，解决参数难懂、选择过载和规格不兼容。",
    contribution: "设计 Coordinator、导购、RAG 问答、多意图编排与转人工 5 类 Agent，定义受控 A2A、实时价库 Tool、硬约束、证据状态和 L0–L3 推荐分级。",
    tags: ["PRD", "Multi-Agent", "A2A", "Explainable AI"],
    accent: "blue",
  },
  {
    id: "03",
    eyebrow: "INSURANCE / AI TESTING",
    title: "数据中台\nAI 测试助手",
    statement: "先生成可追溯测试分析，再生成 SQL，把百条规模用例从人工梳理变成人机协同。",
    context: "面向保险数据中台测试团队，解决百条规模用例依赖人工梳理、重复编写及结果难追溯的问题。",
    contribution: "聚合语雀需求与模型文档、元数据、历史用例和规则；先生成可追溯测试分析，再生成 SQL，经人工审核后批量执行。",
    tags: ["MVP / PoC", "RAG", "SQL Generation", "Human-in-the-loop"],
    accent: "pink",
    wide: true,
    metrics: [
      ["93.3%", "关键规则覆盖率"],
      ["82.4%", "AI 候选用例直接采纳率"],
      ["88.7%", "SQL 首次执行成功率"],
    ],
  },
];

const experience = [
  {
    period: "2025.04 — 2026.07",
    company: "大连水滴科技服务有限公司",
    role: "AI 产品经理",
    summary: "负责贷款业务智能客服从 0 到 1 产品方案，并推进保险数据中台 AI 测试助手 PoC：设计可追溯测试分析、SQL 生成与人工审核链路，通过 100 条合成金标用例完成方案验证。",
  },
  {
    period: "2024.08 — 2024.12",
    company: "天津中科创达科技有限公司",
    role: "AI 产品经理实习生",
    summary: "完成 P-buyer 智能导购的用户/企业需求、角色流程、产品架构、Prompt 契约、指标体系与风险护栏设计。",
  },
];

const principles = [
  ["01", "先定义问题", "先找到真正的业务矛盾，再决定需要模型、规则还是人工。"],
  ["02", "让证据进入系统", "关键结论要有来源、版本、状态和适用边界，而不是仅靠模型语气可信。"],
  ["03", "把风险设计进流程", "低置信度、冲突和高风险场景必须有确定的阻断、澄清或转人工路径。"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Jealin 个人网站首页">
          <span className="brand-mark">J</span><span>JEALIN 赵佳琳 / AI PM</span>
        </a>
        <nav aria-label="主导航"><a href="#work">项目</a><a href="#experience">经历</a><a href="#about">关于</a></nav>
        <a className="availability" href="mailto:15241522260@163.com"><i aria-hidden="true" /> OPEN TO TALK</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="star-field star-field--near" aria-hidden="true" />
        <div className="star-field star-field--far" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-topline"><span>PORTFOLIO / 2026</span><span>DALIAN, CHINA</span></div>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">让 AI 不只会回答，<span>还会完成任务。</span></h1>
            <p className="hero-name" aria-label="Jealin 赵佳琳"><span>Jealin</span><strong>赵佳琳</strong></p>
            <p className="hero-lede">AI 产品经理，专注 RAG、Multi-Agent 与 Tool Calling。我把复杂业务拆成可解释、可验证、可安全交付的产品系统。</p>
            <div className="hero-actions">
              <a className="glow-button" href="#work"><span>查看核心项目</span><b aria-hidden="true">↘</b></a>
              <a className="text-link" href="mailto:15241522260@163.com">联系我 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="system-panel" aria-label="AI 产品能力星图">
            <div className="panel-scan" aria-hidden="true" />
            <div className="panel-head"><span>PRODUCT UNIVERSE</span><span>IN ORBIT</span></div>
            <div className="cosmos-map" aria-hidden="true">
              <span className="cosmos-ring cosmos-ring--one" /><span className="cosmos-ring cosmos-ring--two" /><span className="cosmos-ring cosmos-ring--three" />
              <span className="cosmos-axis cosmos-axis--x" /><span className="cosmos-axis cosmos-axis--y" />
              <span className="orbit-dot orbit-dot--one" /><span className="orbit-dot orbit-dot--two" /><span className="orbit-dot orbit-dot--three" />
              <div className="core-planet"><span>✦</span></div>
              <span className="satellite satellite--star">✦</span><span className="satellite satellite--chart">▥</span><span className="satellite satellite--person">●</span>
              <span className="satellite satellite--check">✓</span><span className="satellite satellite--pie">◔</span><span className="satellite satellite--flow">⌘</span><span className="satellite satellite--chat">•••</span>
              <span className="mini-planet mini-planet--one" /><span className="mini-planet mini-planet--two" />
            </div>
            <div className="panel-foot"><span>DISCOVER → DECIDE → DELIVER</span><span>TRACEABLE BY DESIGN</span></div>
          </aside>
        </div>
        <div className="signal-ticker" aria-label="核心能力"><div>{[...productSignals, ...productSignals].map((signal, index) => <span key={`${signal}-${index}`}>{signal}<i aria-hidden="true" /></span>)}</div></div>
      </section>

      <section className="proof-strip" aria-label="快速事实">
        <div><strong>03</strong><span>CORE AI PROJECTS</span></div><div><strong>0→1</strong><span>PRODUCT PRACTICE</span></div><div><strong>RAG · AGENT · SQL</strong><span>PRODUCT STACK</span></div>
      </section>

      <section className="section work" id="work" aria-labelledby="work-title">
        <div className="section-label"><span>01</span> SELECTED WORK</div>
        <div className="section-heading"><h2 id="work-title">用项目证明，<br />AI 如何进入业务。</h2><p>三个项目，覆盖客户服务、购买决策与测试生产力，展示 AI 从交互到执行的不同产品形态。</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card project-card--${project.accent}${project.href ? " project-card--clickable" : ""}${project.wide ? " project-card--wide" : ""}`} key={project.id}>
              {project.href && <a className="project-click-target" href={project.href} aria-label="查看贷款业务智能客服完整案例" />}
              <div className="card-glow" aria-hidden="true" />
              <div className="project-index"><span>{project.id}</span><span>{project.eyebrow}</span></div>
              <div className="project-main"><h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3><p className="project-statement">{project.statement}</p></div>
              <div className="project-detail">
                <div><span className="detail-label">CONTEXT</span><p>{project.context}</p></div>
                <div><span className="detail-label">MY CONTRIBUTION</span><p>{project.contribution}</p></div>
              </div>
              {project.metrics && <div className="project-metrics" aria-label="方案验证指标">{project.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>}
              <div className="project-card-foot">
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href && <span className="view-case">查看完整案例 <b aria-hidden="true">↗</b></span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience" aria-labelledby="experience-title">
        <div className="section-label"><span>02</span> EXPERIENCE</div>
        <div className="experience-layout">
          <div><h2 id="experience-title">在业务和技术之间，<br />让系统落地。</h2><p className="experience-note">SOFTWARE ENGINEERING → AI PRODUCT MANAGEMENT</p></div>
          <div className="timeline">{experience.map((item) => <article key={item.period}><div className="timeline-dot" aria-hidden="true" /><time>{item.period}</time><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.summary}</p></article>)}</div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>03</span> HOW I WORK</div>
        <div className="section-heading"><h2 id="about-title">我不追求“更像 AI”，<br />我追求“更可用”。</h2><p>技术能力是起点，业务结果、可追溯性和风险边界才是产品完成的标志。</p></div>
        <div className="principles">{principles.map(([index, title, description]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="about-meta"><div><span>EDUCATION</span><strong>大连东软信息学院 · 软件工程本科</strong></div><div><span>RECOGNITION</span><strong>国家励志奖学金 · “互联网+”创新创业大赛</strong></div></div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-noise" aria-hidden="true" /><div className="contact-orbit" aria-hidden="true" />
        <p className="section-label"><span>04</span> CONTACT</p><h2 id="contact-title">有一个复杂的 AI 产品问题？<br /><em>我们可以一起把它拆清楚。</em></h2>
        <a className="contact-cta" href="mailto:15241522260@163.com"><span>15241522260@163.com</span><b aria-hidden="true">↗</b></a>
      </section>
      <footer><span>© 2026 JEALIN 赵佳琳</span><span>AI PRODUCT MANAGER / DALIAN</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
