const productSignals = [
  "RAG",
  "MULTI-AGENT",
  "TOOL CALLING",
  "GUARDRAILS",
  "EVALUATION",
];

const projects = [
  {
    id: "01",
    eyebrow: "FINTECH / AI SERVICE",
    title: "贷款业务\n智能客服",
    statement:
      "把账户查询、状态解释和人工兜底，嵌入用户正在完成的还款任务。",
    context:
      "客户必须把自然语言问题转换成菜单路径，再自行理解多个金额、日期和付款状态；判断失败后还要向人工重复说明背景。",
    contribution:
      "定义桌面 Web 悬浮窗＋页面情境提示的产品形态，完成任务型 IA，并设计“意图识别 → 风险判断 → RAG / 只读查询 → 确定性展示 → 人工保底”链路。",
    tags: ["0→1", "Product Form", "Information Architecture", "RAG"],
    accent: "violet",
  },
  {
    id: "02",
    eyebrow: "COMMERCE / DECISION AGENT",
    title: "P-buyer\n智能导购",
    statement:
      "让 AI 从“介绍商品”走向“帮用户完成购买决策”。",
    context:
      "面向宠物、3C、母婴与家装等高决策成本品类，解决参数难懂、选择过载和规格不兼容。",
    contribution:
      "设计 Coordinator、导购、RAG 问答、多意图编排与转人工 5 类 Agent，定义受控 A2A、实时价库 Tool、硬约束、证据状态和 L0–L3 推荐分级。",
    tags: ["PRD", "Multi-Agent", "A2A", "Explainable AI"],
    accent: "blue",
  },
];

const experience = [
  {
    period: "2025.04 — 2026.07",
    company: "大连水滴科技服务有限公司",
    role: "AI 产品经理",
    summary:
      "负责贷款业务智能客服从 0 到 1 产品方案，协同研发完成只读账户接口、权限校验与确定性输出方案。",
  },
  {
    period: "2024.08 — 2024.12",
    company: "天津中科创达科技有限公司",
    role: "AI 产品经理实习生",
    summary:
      "完成 P-buyer 智能导购的用户/企业需求、角色流程、产品架构、Prompt 契约、指标体系与风险护栏设计。",
  },
];

const principles = [
  ["01", "先定义问题", "先找到真正的业务矛盾，再决定需要模型、规则还是人工。"],
  ["02", "让证据进入系统", "关键结论要有来源、版本、状态和适用边界，而不是仅靠模型语气可信。"],
  ["03", "把风险设计进流程", "低置信度、冲突和高风险场景必须有确定的阻断、澄清或转人工路径。"],
];

const iaBranches = [
  {
    index: "01",
    title: "账户与还款",
    items: ["脱敏账户", "到期日", "当前应付", "自动扣款"],
  },
  {
    index: "02",
    title: "付款记录",
    items: ["最近付款", "交易详情", "状态含义", "数据时间"],
  },
  {
    index: "03",
    title: "操作与人工帮助",
    items: ["安全付款", "页面入口", "官方电话", "问题说明"],
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Jealin 个人网站首页">
          <span className="brand-mark">J</span>
          <span>JEALIN / AI PM</span>
        </a>
        <nav aria-label="主导航">
          <a href="#work">项目</a>
          <a href="#case-study">案例</a>
          <a href="#experience">经历</a>
          <a href="#about">关于</a>
        </nav>
        <a className="availability" href="mailto:15241522260@163.com">
          <i aria-hidden="true" /> OPEN TO TALK
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="star-field star-field--near" aria-hidden="true" />
        <div className="star-field star-field--far" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-topline">
          <span>PORTFOLIO / 2026</span>
          <span>DALIAN, CHINA</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I&apos;M JEALIN ZHAO.</p>
            <h1 id="hero-title">
              让 AI 不只会回答，
              <span>还会完成任务。</span>
            </h1>
            <p className="hero-lede">
              AI 产品经理，专注 RAG、Multi-Agent 与 Tool Calling。
              我把复杂业务拆成可解释、可验证、可安全交付的产品系统。
            </p>
            <div className="hero-actions">
              <a className="glow-button" href="#work">
                <span>查看核心项目</span>
                <b aria-hidden="true">↘</b>
              </a>
              <a className="text-link" href="mailto:15241522260@163.com">
                联系我 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="system-panel" aria-label="AI 产品能力星图">
            <div className="panel-scan" aria-hidden="true" />
            <div className="panel-head">
              <span>PRODUCT UNIVERSE</span>
              <span>IN ORBIT</span>
            </div>
            <div className="cosmos-map" aria-hidden="true">
              <span className="cosmos-ring cosmos-ring--one" />
              <span className="cosmos-ring cosmos-ring--two" />
              <span className="cosmos-ring cosmos-ring--three" />
              <span className="cosmos-axis cosmos-axis--x" />
              <span className="cosmos-axis cosmos-axis--y" />
              <span className="orbit-dot orbit-dot--one" />
              <span className="orbit-dot orbit-dot--two" />
              <span className="orbit-dot orbit-dot--three" />
              <div className="core-planet"><span>✦</span></div>
              <span className="satellite satellite--star">✦</span>
              <span className="satellite satellite--chart">▥</span>
              <span className="satellite satellite--person">●</span>
              <span className="satellite satellite--check">✓</span>
              <span className="satellite satellite--pie">◔</span>
              <span className="satellite satellite--flow">⌘</span>
              <span className="satellite satellite--chat">•••</span>
              <span className="mini-planet mini-planet--one" />
              <span className="mini-planet mini-planet--two" />
            </div>
            <div className="panel-foot">
              <span>DISCOVER → DECIDE → DELIVER</span>
              <span>TRACEABLE BY DESIGN</span>
            </div>
          </aside>
        </div>

        <div className="signal-ticker" aria-label="核心能力">
          <div>
            {[...productSignals, ...productSignals].map((signal, index) => (
              <span key={`${signal}-${index}`}>{signal}<i aria-hidden="true" /></span>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="快速事实">
        <div><strong>02</strong><span>CORE AI PROJECTS</span></div>
        <div><strong>0→1</strong><span>PRODUCT PRACTICE</span></div>
        <div><strong>RAG · AGENT · TOOL</strong><span>PRODUCT STACK</span></div>
      </section>

      <section className="section work" id="work" aria-labelledby="work-title">
        <div className="section-label"><span>01</span> SELECTED WORK</div>
        <div className="section-heading">
          <h2 id="work-title">用项目证明，<br />AI 如何进入业务。</h2>
          <p>两个项目，两种任务类型：一个让服务更高效，一个帮用户做更好的决策。</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card project-card--${project.accent}`} key={project.id}>
              <div className="card-glow" aria-hidden="true" />
              <div className="project-index">
                <span>{project.id}</span>
                <span>{project.eyebrow}</span>
              </div>
              <div className="project-main">
                <h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p className="project-statement">{project.statement}</p>
              </div>
              <div className="project-detail">
                <div>
                  <span className="detail-label">CONTEXT</span>
                  <p>{project.context}</p>
                </div>
                <div>
                  <span className="detail-label">MY CONTRIBUTION</span>
                  <p>{project.contribution}</p>
                </div>
              </div>
              <div className="tag-row">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-study" id="case-study" aria-labelledby="case-title">
        <div className="case-stars" aria-hidden="true" />
        <div className="section-label"><span>02</span> PRODUCT FORM / INFORMATION ARCHITECTURE</div>
        <div className="section-heading case-heading">
          <h2 id="case-title">先找到摩擦，<br />再决定产品形态。</h2>
          <p>Westlake Financial 智能客服不是独立的聊天页面，而是覆盖 MyAccount 业务流程的上下文服务层。</p>
        </div>

        <div className="case-framing">
          <article>
            <span className="case-kicker">TARGET USER</span>
            <strong>已登录 MyAccount 的汽车贷款客户</strong>
            <p>需要查询还款、账户状态或处理付款异常，但人工客服不可用或电话排队较长。</p>
          </article>
          <article>
            <span className="case-kicker">CORE FRICTION</span>
            <strong>问题必须先被翻译成菜单路径</strong>
            <p>用户还要自行理解金额、日期和付款状态；判断失败后，联系人工又要重新说明背景。</p>
          </article>
          <article>
            <span className="case-kicker">PRIMARY CONTEXT</span>
            <strong>桌面 Web · 账户信息并行核对</strong>
            <p>用户需要一边查看账户概览或付款记录，一边与 AI 对话，不能被迫离开当前任务。</p>
          </article>
        </div>

        <div className="shape-layout">
          <div className="shape-copy">
            <p className="case-kicker">PRODUCT FORM</p>
            <h3>跨页面悬浮窗口，<br />配合情境提示。</h3>
            <p>主形态采用右下角可展开、可调整大小的 AI 悬浮窗口；辅助形态在账户页和付款页提供非阻断提示，点击后携带当前账户或交易上下文进入对话。</p>
            <div className="shape-logic">
              <div><span>01</span><strong>持续可达</strong><small>跨页面保留入口和当前会话</small></div>
              <div><span>02</span><strong>并行核对</strong><small>原始账户数据与 AI 解释同时可见</small></div>
              <div><span>03</span><strong>用户控制</strong><small>异常只提示，不强制展开对话</small></div>
            </div>
            <div className="not-form">
              <span>WHY NOT</span>
              <p>独立页面会丢失业务上下文；居中弹窗会遮挡数据；固定帮助区难以跨页面承载连续对话。</p>
            </div>
          </div>

          <div className="desktop-concept" aria-label="MyAccount 桌面端 AI 悬浮窗口产品形态示意">
            <div className="desktop-topbar">
              <div><i /><i /><i /></div>
              <span>MYACCOUNT / ACCOUNT OVERVIEW</span>
              <b>SECURE SESSION</b>
            </div>
            <div className="account-page">
              <div className="account-nav">
                <span className="account-logo">W</span>
                <i className="nav-line nav-line--active" />
                <i className="nav-line" />
                <i className="nav-line" />
                <i className="nav-line" />
              </div>
              <div className="account-content">
                <div className="account-title"><span>ACCOUNT OVERVIEW</span><i /></div>
                <div className="account-metrics">
                  <div><small>NEXT DUE</small><strong>AUG 18</strong></div>
                  <div><small>AMOUNT DUE</small><strong>$428.00</strong></div>
                  <div><small>AUTOPAY</small><strong>ON</strong></div>
                </div>
                <div className="payment-row">
                  <div><small>RECENT PAYMENT</small><strong>$428.00 · AUG 02</strong></div>
                  <span>PENDING</span>
                </div>
                <div className="context-prompt">
                  <i aria-hidden="true">✦</i>
                  <p><strong>这笔付款仍在处理中</strong><span>需要帮助理解此状态？</span></p>
                  <b aria-hidden="true">→</b>
                </div>
              </div>
              <div className="assistant-window">
                <div className="assistant-head">
                  <p><i aria-hidden="true">✦</i><span>Westlake AI</span></p>
                  <div><span>—</span><span>□</span><span>×</span></div>
                </div>
                <div className="assistant-tabs">
                  <span className="is-active">账户与还款</span><span>付款记录</span><span>人工帮助</span>
                </div>
                <div className="assistant-chat">
                  <div className="chat-user">为什么付款还没更新？</div>
                  <div className="chat-ai">
                    <span className="ai-spark" aria-hidden="true">✦</span>
                    <div><small>PAYMENT STATUS</small><strong>Pending · 处理中</strong><p>付款已提交，尚未正式入账。预计在 1–2 个工作日内更新。</p></div>
                  </div>
                  <div className="chat-actions"><span>查看付款记录</span><span>什么时候再查询？</span></div>
                </div>
                <div className="assistant-input"><span>继续提问…</span><b aria-hidden="true">↑</b></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ia-section">
          <div className="ia-intro">
            <p className="case-kicker">INFORMATION ARCHITECTURE</p>
            <h3>导航保持稳定，<br />答案随任务变化。</h3>
            <p>账户、付款与人工帮助作为一级入口；用户问题和异常建议属于动态内容，不占据固定导航。</p>
          </div>
          <div className="ia-tree">
            <div className="tree-root"><i aria-hidden="true">✦</i><span>AI 客服悬浮窗口</span><small>CONTEXT SERVICE LAYER</small></div>
            <div className="tree-line" aria-hidden="true" />
            <div className="tree-branches">
              {iaBranches.map((branch) => (
                <article key={branch.index}>
                  <span>{branch.index}</span>
                  <h4>{branch.title}</h4>
                  <ul>{branch.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="dynamic-layer">
              <span>DYNAMIC</span>
              <p><strong>用户问题与上下文</strong>自然语言、付款线索、补充与纠正</p>
              <i aria-hidden="true">→</i>
              <p><strong>异常判断与建议</strong>等待、重试、风险提示或人工升级</p>
            </div>
            <div className="secondary-layer"><span>SECONDARY</span><p>当前会话 · 历史对话 · AI 服务说明 · 隐私与数据使用</p></div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience" aria-labelledby="experience-title">
        <div className="section-label"><span>03</span> EXPERIENCE</div>
        <div className="experience-layout">
          <div>
            <h2 id="experience-title">在业务和技术之间，<br />让系统落地。</h2>
            <p className="experience-note">SOFTWARE ENGINEERING → AI PRODUCT MANAGEMENT</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.period}>
                <div className="timeline-dot" aria-hidden="true" />
                <time>{item.period}</time>
                <h3>{item.company}</h3>
                <strong>{item.role}</strong>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>04</span> HOW I WORK</div>
        <div className="section-heading">
          <h2 id="about-title">我不追求“更像 AI”，<br />我追求“更可用”。</h2>
          <p>技术能力是起点，业务结果、可追溯性和风险边界才是产品完成的标志。</p>
        </div>
        <div className="principles">
          {principles.map(([index, title, description]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="about-meta">
          <div><span>EDUCATION</span><strong>大连东软信息学院 · 软件工程本科</strong></div>
          <div><span>RECOGNITION</span><strong>国家励志奖学金 · “互联网+”创新创业大赛</strong></div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-noise" aria-hidden="true" />
        <div className="contact-orbit" aria-hidden="true" />
        <p className="section-label"><span>05</span> CONTACT</p>
        <h2 id="contact-title">有一个复杂的 AI 产品问题？<br /><em>我们可以一起把它拆清楚。</em></h2>
        <a className="contact-cta" href="mailto:15241522260@163.com">
          <span>15241522260@163.com</span>
          <b aria-hidden="true">↗</b>
        </a>
      </section>

      <footer>
        <span>© 2026 JEALIN ZHAO</span>
        <span>AI PRODUCT MANAGER / DALIAN</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
