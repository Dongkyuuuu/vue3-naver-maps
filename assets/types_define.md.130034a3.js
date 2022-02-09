import{_ as n,c as s,o as a,a as t}from"./app.e659a4ba.js";const m='{"title":"\uD0C0\uC785\uC815\uC758","description":"","frontmatter":{},"headers":[{"level":2,"title":"initLayer","slug":"initlayer"},{"level":2,"title":"mapOptions","slug":"mapoptions"},{"level":2,"title":"htmlIcon","slug":"htmlicon"}],"relativePath":"types/define.md","lastUpdated":1644382533695}',o={},p=t(`<h1 id="\uD0C0\uC785\uC815\uC758" tabindex="-1">\uD0C0\uC785\uC815\uC758 <a class="header-anchor" href="#\uD0C0\uC785\uC815\uC758" aria-hidden="true">#</a></h1><p><code>vue3-naver-maps</code>\uC5D0\uC11C \uC790\uCCB4\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uB294 <code>naverV3</code> \uD0C0\uC785 \uC815\uC758 \uC785\uB2C8\uB2E4.</p><h2 id="initlayer" tabindex="-1">initLayer <a class="header-anchor" href="#initlayer" aria-hidden="true">#</a></h2><p>\uC9C0\uB3C4 \uB808\uC774\uC5B4 \uC0DD\uC131\uC5D0 \uC0AC\uC6A9 \uB429\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">initLayer</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;BACKGROUND&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;BACKGROUND_DETAIL&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;BICYCLE&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;CADASTRAL&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;CTT&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;HIKING_TRAIL&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;PANORAMA&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;POI_KOREAN&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;TRANSIT&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;KOREAN&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;ENGLISH&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;CHINESE&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;JAPANESE&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="mapoptions" tabindex="-1">mapOptions <a class="header-anchor" href="#mapoptions" aria-hidden="true">#</a></h2><p><code>naver.maps.MapOptions</code>\uB97C \uC0C1\uC18D \uBC1B\uC544 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC9C0\uB3C4 \uC635\uC158 \uC0DD\uC131\uC5D0 \uC0AC\uC6A9 \uB429\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">mapOptions</span> <span class="token keyword">extends</span> <span class="token class-name">naver</span><span class="token punctuation">.</span>maps<span class="token punctuation">.</span>MapOptions <span class="token punctuation">{</span>
  latitude<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  longitude<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="htmlicon" tabindex="-1">htmlIcon <a class="header-anchor" href="#htmlicon" aria-hidden="true">#</a></h2><p>htmlIcon\uC744 \uC0AC\uC6A9\uD558\uB294 <code>marker</code>\uC758 \uCD08\uAE30 <code>size</code>\uC640 <code>anchor</code>\uB97C \uC124\uC815\uD569\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">htmlIcon</span> <span class="token punctuation">{</span>
  size<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  anchor<span class="token operator">:</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),e=[p];function c(r,l,i,u,k,d){return a(),s("div",null,e)}var _=n(o,[["render",c]]);export{m as __pageData,_ as default};
