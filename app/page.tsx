const nowItems = [
  {
    index: "01",
    title: "把想法变成可用的东西",
    text: "从一个模糊念头出发，整理结构、建立系统，最后交付一个真正能被使用的版本。",
  },
  {
    index: "02",
    title: "把方法写成可复用流程",
    text: "不满足于做完一次。把判断、步骤和质量标准沉淀下来，让下一次更快、更稳。",
  },
  {
    index: "03",
    title: "持续学习，也持续发布",
    text: "用小而完整的作品检验新知识，让公开输出成为学习过程的一部分。",
  },
];

const projects = [
  {
    number: "001",
    tag: "DESIGN · BUILD · 2026",
    title: "个人工作档案",
    description:
      "你正在浏览的这个网站：从十个开源个站中提炼方法，再把定位、叙事、证据和辨识度组合成一个完整页面。",
    status: "LIVE / THIS SITE",
    className: "project-card project-card--featured",
  },
  {
    number: "002",
    tag: "NEXT PROJECT",
    title: "下一件作品",
    description:
      "这里为你的真实项目预留。补充背景、你的贡献、最终结果和链接，就能成为一张完整的案例卡片。",
    status: "READY TO EDIT",
    className: "project-card",
  },
  {
    number: "003",
    tag: "NOTES · IDEAS",
    title: "公开笔记",
    description:
      "这里可以连接文章、研究记录或阶段性思考。没有真实内容之前，不用虚构，也不必为了完整而填满。",
    status: "CONTENT SLOT",
    className: "project-card project-card--dark",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="返回首页">
          JZ<span>·</span>
        </a>
        <nav aria-label="主导航">
          <a href="#now">现在</a>
          <a href="#work">作品</a>
          <a href="#about">关于</a>
        </nav>
        <a className="header-contact" href="#contact">
          联系我 <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span>PERSONAL FIELD NOTES</span>
          <span>ARCHIVE / 001</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">你好，我是</p>
            <h1 id="hero-title">
              Jealin
              <br />
              <span>Zhao</span>
            </h1>
            <p className="hero-statement">
              把零散的想法，
              <br />
              做成<span>可以被使用</span>的东西。
            </p>
          </div>

          <aside className="hero-aside" aria-label="当前状态">
            <div className="orbit" aria-hidden="true">
              <span>MAKE · LEARN · PUBLISH · </span>
              <b>↗</b>
            </div>
            <p>
              这是一个持续更新的个人档案，记录我正在探索的方向、已经完成的作品，以及下一步想做的事。
            </p>
            <dl className="status-list">
              <div>
                <dt>NOW</dt>
                <dd>BUILDING IN PUBLIC</dd>
              </div>
              <div>
                <dt>MODE</dt>
                <dd>CURIOUS / PRACTICAL</dd>
              </div>
              <div>
                <dt>UPDATED</dt>
                <dd>2026.08</dd>
              </div>
            </dl>
          </aside>
        </div>

        <a className="scroll-note" href="#now">
          向下查看档案 <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="section section-now" id="now" aria-labelledby="now-title">
        <div className="section-heading">
          <p>01 / NOW</p>
          <h2 id="now-title">我现在关心的事</h2>
        </div>
        <div className="now-list">
          {nowItems.map((item) => (
            <article className="now-item" key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-work" id="work" aria-labelledby="work-title">
        <div className="section-heading section-heading--split">
          <div>
            <p>02 / SELECTED WORK</p>
            <h2 id="work-title">作品不是陈列，<br />而是证据。</h2>
          </div>
          <p className="section-intro">
            每个项目都应该说明：为什么做、我做了什么、最后改变了什么。真实资料到位后，这里可以直接替换。
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={project.className} key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.tag}</span>
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-status">
                <span>{project.status}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-about" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p>03 / OPERATING PRINCIPLES</p>
          <h2 id="about-title">我的工作方式</h2>
        </div>
        <div className="principles">
          <article>
            <span>清晰</span>
            <h3>先把问题说清楚</h3>
            <p>好的执行始于正确的问题。先找到真正要解决的矛盾，再选择工具和形式。</p>
          </article>
          <article>
            <span>证据</span>
            <h3>让结果替表达作证</h3>
            <p>少一点模糊形容词，多一点可以查看、使用、验证和继续迭代的具体成果。</p>
          </article>
          <article>
            <span>演化</span>
            <h3>先完成，再持续变好</h3>
            <p>把第一版做小、做完整，在真实反馈中生长，而不是永远停留在准备阶段。</p>
          </article>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p>04 / CONTACT</p>
        <div className="contact-grid">
          <h2 id="contact-title">
            有一件值得
            <br />
            一起做的事？
          </h2>
          <div className="contact-copy">
            <p>把目标、背景和你希望推进的下一步发给我。联系方式可在这里替换成你的真实邮箱或社交账号。</p>
            <span className="contact-placeholder">EMAIL / GITHUB / WECHAT — TO BE ADDED</span>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 JEALIN ZHAO</p>
        <p>DESIGNED AS A LIVING ARCHIVE</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
