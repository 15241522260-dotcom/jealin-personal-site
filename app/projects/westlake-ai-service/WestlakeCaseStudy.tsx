const iaBranches = [
  { index: "01", title: "账户与还款", items: ["脱敏账户", "到期日", "当前应付", "自动扣款"] },
  { index: "02", title: "付款记录", items: ["最近付款", "交易详情", "状态含义", "数据时间"] },
  { index: "03", title: "操作与人工帮助", items: ["安全付款", "页面入口", "官方电话", "问题说明"] },
];

export default function WestlakeCaseStudy() {
  return (
    <section className="section case-study" id="case-study" aria-labelledby="case-title">
      <div className="case-stars" aria-hidden="true" />
      <div className="section-label"><span>01</span> PRODUCT FORM / INFORMATION ARCHITECTURE</div>
      <div className="section-heading case-heading">
        <h2 id="case-title">先找到摩擦，<br />再决定产品形态。</h2>
        <p>Westlake Financial 智能客服不是独立的聊天页面，而是覆盖 MyAccount 业务流程的上下文服务层。</p>
      </div>
      <div className="case-framing">
        <article><span className="case-kicker">TARGET USER</span><strong>已登录 MyAccount 的汽车贷款客户</strong><p>需要查询还款、账户状态或处理付款异常，但人工客服不可用或电话排队较长。</p></article>
        <article><span className="case-kicker">CORE FRICTION</span><strong>问题必须先被翻译成菜单路径</strong><p>用户还要自行理解金额、日期和付款状态；判断失败后，联系人工又要重新说明背景。</p></article>
        <article><span className="case-kicker">PRIMARY CONTEXT</span><strong>桌面 Web · 账户信息并行核对</strong><p>用户需要一边查看账户概览或付款记录，一边与 AI 对话，不能被迫离开当前任务。</p></article>
      </div>

      <div className="case-metrics" aria-label="Westlake 项目上线门槛与目标">
        <div><small>上线门槛</small><strong>≥90%</strong><span>知识回答正确率</span></div>
        <div><small>上线门槛</small><strong>≥98%</strong><span>高风险识别召回率</span></div>
        <div><small>上线门槛</small><strong>100%</strong><span>账户关键字段一致率</span></div>
        <div><small>产品目标</small><strong>50%</strong><span>自助解决率</span></div>
        <div><small>效果预估</small><strong>60%</strong><span>减少可避免人工来电</span></div>
      </div>
      <div className="case-guardrail"><span>SAFETY BOUNDARY</span><p>AI 只提供基本业务查询和标准说明，不执行写操作，也不承诺费用减免或延期还款；付款争议、逾期协商、征信、欺诈等高风险场景，以及低置信度问题统一转人工处理。</p></div>

      <div className="shape-layout">
        <div className="shape-copy">
          <p className="case-kicker">PRODUCT FORM</p><h3>跨页面悬浮窗口，<br />配合情境提示。</h3>
          <p>主形态采用右下角可展开、可调整大小的 AI 悬浮窗口；辅助形态在账户页和付款页提供非阻断提示，点击后携带当前账户或交易上下文进入对话。</p>
          <div className="shape-logic">
            <div><span>01</span><strong>持续可达</strong><small>跨页面保留入口和当前会话</small></div>
            <div><span>02</span><strong>并行核对</strong><small>原始账户数据与 AI 解释同时可见</small></div>
            <div><span>03</span><strong>用户控制</strong><small>异常只提示，不强制展开对话</small></div>
          </div>
          <div className="not-form"><span>WHY NOT</span><p>独立页面会丢失业务上下文；居中弹窗会遮挡数据；固定帮助区难以跨页面承载连续对话。</p></div>
        </div>

        <div className="desktop-concept" aria-label="MyAccount 桌面端 AI 悬浮窗口产品形态示意">
          <div className="desktop-topbar"><div><i /><i /><i /></div><span>MYACCOUNT / ACCOUNT OVERVIEW</span><b>SECURE SESSION</b></div>
          <div className="account-page">
            <div className="account-nav"><span className="account-logo">W</span><i className="nav-line nav-line--active" /><i className="nav-line" /><i className="nav-line" /><i className="nav-line" /></div>
            <div className="account-content">
              <div className="account-title"><span>ACCOUNT OVERVIEW</span><i /></div>
              <div className="account-metrics"><div><small>NEXT DUE</small><strong>AUG 18</strong></div><div><small>AMOUNT DUE</small><strong>$428.00</strong></div><div><small>AUTOPAY</small><strong>ON</strong></div></div>
              <div className="payment-row"><div><small>RECENT PAYMENT</small><strong>$428.00 · AUG 02</strong></div><span>PENDING</span></div>
              <div className="context-prompt"><i aria-hidden="true">✦</i><p><strong>这笔付款仍在处理中</strong><span>需要帮助理解此状态？</span></p><b aria-hidden="true">→</b></div>
            </div>
            <div className="assistant-window">
              <div className="assistant-head"><p><i aria-hidden="true">✦</i><span>Westlake AI</span></p><div><span>—</span><span>□</span><span>×</span></div></div>
              <div className="assistant-tabs"><span className="is-active">账户与还款</span><span>付款记录</span><span>人工帮助</span></div>
              <div className="assistant-chat">
                <div className="chat-user">为什么付款还没更新？</div>
                <div className="chat-ai"><span className="ai-spark" aria-hidden="true">✦</span><div><small>PAYMENT STATUS</small><strong>Pending · 处理中</strong><p>付款已提交，尚未正式入账。预计在 1–2 个工作日内更新。</p></div></div>
                <div className="chat-actions"><span>查看付款记录</span><span>什么时候再查询？</span></div>
              </div>
              <div className="assistant-input"><span>继续提问…</span><b aria-hidden="true">↑</b></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ia-section">
        <div className="ia-intro"><p className="case-kicker">INFORMATION ARCHITECTURE</p><h3>导航保持稳定，<br />答案随任务变化。</h3><p>账户、付款与人工帮助作为一级入口；用户问题和异常建议属于动态内容，不占据固定导航。</p></div>
        <div className="ia-tree">
          <div className="tree-root"><i aria-hidden="true">✦</i><span>AI 客服悬浮窗口</span><small>CONTEXT SERVICE LAYER</small></div><div className="tree-line" aria-hidden="true" />
          <div className="tree-branches">{iaBranches.map((branch) => <article key={branch.index}><span>{branch.index}</span><h4>{branch.title}</h4><ul>{branch.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
          <div className="dynamic-layer"><span>DYNAMIC</span><p><strong>用户问题与上下文</strong>自然语言、付款线索、补充与纠正</p><i aria-hidden="true">→</i><p><strong>异常判断与建议</strong>等待、重试、风险提示或人工升级</p></div>
          <div className="secondary-layer"><span>SECONDARY</span><p>当前会话 · 历史对话 · AI 服务说明 · 隐私与数据使用</p></div>
        </div>
      </div>
    </section>
  );
}
