import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders Jealin's portfolio content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Jealin 赵佳琳/);
  assert.match(html, /让 AI 不只会回答/);
  assert.match(html, /贷款业务/);
  assert.match(html, /ShopLine Sidekick/);
  assert.match(html, /商家后台 AI/);
  assert.match(html, /建议回复采纳率/);
  assert.doesNotMatch(html, /P-buyer/);
  assert.match(html, /数据中台/);
  assert.match(html, /AI 测试助手/);
  assert.match(html, /93\.3%/);
  assert.match(html, /82\.4%/);
  assert.match(html, /88%/);
  assert.match(html, /40h/);
  assert.match(html, /7\.6h/);
  assert.match(html, /商线科技有限公司/);
  assert.match(html, /AI 产品经理实习生/);
  assert.doesNotMatch(html, /天津中科创达科技有限公司/);
  assert.match(html, /MULTI-AGENT/i);
  assert.match(html, /\/projects\/westlake-ai-service/);
  assert.match(html, /查看完整案例/);
  assert.match(html, /github\.com\/15241522260-dotcom\?tab=repositories/);
  assert.match(html, /查看我的 GitHub 代码作品/);
  assert.doesNotMatch(html, /PRODUCT FORM \/ INFORMATION ARCHITECTURE/);
  assert.doesNotMatch(html, /Your site is taking shape|READY TO EDIT|TO BE ADDED/);
});

test("renders the Westlake project detail page", async () => {
  const response = await render("/projects/westlake-ai-service");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /贷款业务/);
  assert.match(html, /PRODUCT FORM/);
  assert.match(html, /INFORMATION ARCHITECTURE/);
  assert.match(html, /账户与还款/);
  assert.match(html, /付款记录/);
  assert.match(html, /操作与人工帮助/);
  assert.match(html, /知识回答正确率/);
  assert.match(html, /高风险识别召回率/);
  assert.match(html, /账户关键字段一致率/);
  assert.match(html, /SAFETY BOUNDARY/);
  assert.match(html, /返回作品集/);
});
