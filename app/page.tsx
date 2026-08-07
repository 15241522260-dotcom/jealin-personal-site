const productSignals = ["RAG", "MULTI-AGENT", "TOOL CALLING", "SQL GENERATION", "GUARDRAILS", "EVALUATION"];

const projects = [
  {
    id: "01",
    eyebrow: "FINTECH / AI SERVICE · 2025.08—2026.06",
    title: "贷款业务\n智能客服",
    statement: "在 MyAccount 接入 AI 文本客服，分流重复来电，并用账户只读与人工兜底守住金融安全边界。",
    context: "WFS 客服承接还款、账单、账户状态、提前结清及保险产权等重复咨询；电话渠道压力大，用户又需要可核对的账户答案。",
    contribution: "划分一般咨询、账户只读查询与敏感高风险事项；设计文档治理、混合检索＋Rerank、账户只读 API、话术回答及人工审核/转人工链路。",
    tags: ["0→1", "RAG", "Read-only API", "Guardrails"],
    accent: "violet",
    href: "/projects/westlake-ai-service",
    metrics: [
      ["≥90%", "知识回答正确率门槛"],
      ["≥98%", "高风险识别召回率"],
      ["100%", "账户关键字段一致率"],
    ],
  },
  {
    id: "02",
    eyebrow: "SHOPLINE / AI COPILOT · 2024.08—12",
    title: "ShopLine Sidekick\n商家后台 AI\nCopilot",
    statement: "让 AI 先提供可采纳的回复建议，客服保留最终判断。",
    context: "面向电商客服的 AI 坐席助手，以建议回复采纳率为核心指标，并围绕首次反应时长、平均处理时长、知识检索命中率和事实正确率评估人效与回答质量。",
    contribution: "设计文档清洗、语义切片、Metadata 标注、版本管理及失效知识处理机制；明确 AI 只提供答案建议，不替代客服做最终判断。",
    tags: ["RAG", "AI Copilot", "Metadata", "Human-in-the-loop"],
    accent: "blue",
  },
  {
    id: "03",
    eyebrow: "INSURANCE / AI TESTING · 2025.04—07",
    title: "数据中台\nAI 测试助手",
    statement: "先生成可追溯测试分析，再生成 SQL，将测试分析与用例编写工时从 40h 降至 7.6h。",
    context: "面向保险数据中台测试团队，解决百条规模用例依赖人工梳理、重复编写及结果难追溯的问题。",
    contribution: "聚合语雀需求与模型文档、元数据、历史用例和规则；先生成可追溯测试分析，再生成 SQL，经人工审核后批量执行。",
    tags: ["MVP / PoC", "RAG", "SQL Generation", "Human-in-the-loop"],
    accent: "pink",
    wide: true,
    metrics: [
      ["93.3%", "关键规则覆盖率"],
      ["82.4%", "AI 候选用例直接采纳率"],
      ["88%", "SQL 首次执行成功率"],
    ],
  },
];

const experience = [
  {
    period: "2025.04 — 2026.06",
    company: "大连水滴科技服务有限公司",
    role: "AI 产品经理",
    summary: "主导 Westlake Financial 智能客服平台从 0 到 1 设计，完成意图体系、RAG / 账户只读查询、合规与 Bad Case 复盘机制；同时协助调研保险数据中台测试流程并推进 AI 测试助手 PoC。",
  },
  {
    period: "2024.08 — 2024.12",
    company: "商线科技有限公司",
    role: "AI 产品经理实习生",
    summary: "参与 ShopLine Sidekick 商家后台 AI Copilot，帮助搭建包含维度、主指标、诊断指标与证据的指标树，并分析 Bad Case 严重度与归因。",
  },
];

const principles = [
  ["01", "先定义问题", "先找到真正的业务矛盾，再决定需要模型、规则还是人工。"],
  ["02", "让评测驱动迭代", "用覆盖率、采纳率、执行成功率和 Bad Case 归因定位问题，而不是只凭主观感受。"],
  ["03", "把风险设计进流程", "低置信度、冲突和高风险场景必须有确定的阻断、澄清或转人工路径。"],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Jealin 个人网站首页">
          <span className="brand-mark">J</span><span>JEALIN 赵佳琳 / AI PM</span>
        </a>
        <nav aria-label="主导航"><a href="#work">项目</a><a href="#experience">经历</a><a href="#about">关于</a><a href="https://github.com/15241522260-dotcom?tab=repositories" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
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
            <p className="hero-lede">AI 产品经理，具备从业务场景拆解、需求定义、方案设计到 MVP 验收的完整实践；覆盖金融客服、电商客服 Copilot 与数据测试，并以评测、人工门禁和审计机制保障可追溯交付。</p>
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
        <div className="section-heading"><h2 id="work-title">用项目证明，<br />AI 如何进入业务。</h2><p>三个项目，覆盖金融客户服务、电商客服 Copilot 与测试生产力，展示 AI 从交互到执行的不同产品形态。</p></div>
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
              {project.metrics && <div className="project-metrics" aria-label="项目关键指标">{project.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>}
              <div className="project-card-foot">
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href && <span className="view-case">查看完整案例 <b aria-hidden="true">↗</b></span>}
              </div>
            </article>
          ))}
        </div>
        <a className="github-showcase" href="https://github.com/15241522260-dotcom?tab=repositories" target="_blank" rel="noreferrer" aria-label="在新标签页查看 Jealin 的 GitHub 代码作品">
          <span className="github-showcase-mark" aria-hidden="true">GH</span>
          <span className="github-showcase-copy"><small>MORE BUILT BY JEALIN</small><strong>查看我的 GitHub 代码作品</strong><em>这里记录了我把产品想法 coding 成真实作品的过程。</em></span>
          <b aria-hidden="true">↗</b>
        </a>
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
