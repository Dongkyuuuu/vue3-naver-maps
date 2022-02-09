import{_ as t,c as p,b as n,d as o,e as a,a as e,r as c,o as u}from"./app.e659a4ba.js";const b='{"title":"GroundOverlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC608\uC2DC","slug":"\uC608\uC2DC"},{"level":2,"title":"\uC124\uC815","slug":"\uC124\uC815"},{"level":2,"title":"UI \uC774\uBCA4\uD2B8","slug":"ui-\uC774\uBCA4\uD2B8"}],"relativePath":"guide/GroundOverlay.md","lastUpdated":1644382533694}',l={},r=n("h1",{id:"groundoverlay",tabindex:"-1"},[a("GroundOverlay "),n("a",{class:"header-anchor",href:"#groundoverlay","aria-hidden":"true"},"#")],-1),k=n("p",null,[n("code",null,"NaverGroundOverlay"),a("\uB294 \uC9C0\uC0C1 \uC624\uBC84\uB808\uC774\uB97C \uC0DD\uC131\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC785\uB2C8\uB2E4. "),n("code",null,"NaverMaps"),a(" \uC0DD\uC131 \uC774\uD6C4\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")],-1),i=n("h2",{id:"\uC608\uC2DC",tabindex:"-1"},[a("\uC608\uC2DC "),n("a",{class:"header-anchor",href:"#\uC608\uC2DC","aria-hidden":"true"},"#")],-1),d=n("br",null,null,-1),v=e(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-maps</span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:mapOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:initLayers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>initLayers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadMap($event)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-ground-overlay</span>
      <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyGZVXaUWqWHg_xYsNoMjKP2JbjXAIPoE-Q&amp;usqp=CAU<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:bound</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>groundOverlayBound<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadGroundOverlay($event)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>naver-maps</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverGroundOverlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-naver-maps&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverGroundOverlay <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> groundOverlay <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> groundOverlayBound <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">south</span><span class="token operator">:</span> <span class="token number">37.566616443521745</span><span class="token punctuation">,</span>
      <span class="token literal-property property">north</span><span class="token operator">:</span> <span class="token number">38.566616443521745</span><span class="token punctuation">,</span>
      <span class="token literal-property property">west</span><span class="token operator">:</span> <span class="token number">126.97837068565364</span><span class="token punctuation">,</span>
      <span class="token literal-property property">east</span><span class="token operator">:</span> <span class="token number">127.97837068565364</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mapOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">37.56663888630603</span><span class="token punctuation">,</span> <span class="token comment">// \uC9C0\uB3C4 \uC911\uC559 \uC704\uB3C4</span>
      <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">126.97838310403904</span><span class="token punctuation">,</span> <span class="token comment">// \uC9C0\uB3C4 \uC911\uC559 \uACBD\uB3C4</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoomControl</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoomControlOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;TOP_RIGHT&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> initLayers <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;BACKGROUND&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BACKGROUND_DETAIL&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;POI_KOREAN&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;TRANSIT&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ENGLISH&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onLoadMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">mapObject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">.</span>value <span class="token operator">=</span> mapObject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">onLoadGroundOverlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">groundOverlayObject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      groundOverlay<span class="token punctuation">.</span>value <span class="token operator">=</span> groundOverlayObject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">,</span>
      mapOptions<span class="token punctuation">,</span>
      initLayers<span class="token punctuation">,</span>
      onLoadMap<span class="token punctuation">,</span>
      groundOverlay<span class="token punctuation">,</span>
      groundOverlayBound<span class="token punctuation">,</span>
      onLoadGroundOverlay<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\uC790\uC138\uD55C Props, Emit \uC635\uC158\uC740 <a href="./../api/#navergroundoverlay">NaverGroundOverlay</a>\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><h2 id="\uC124\uC815" tabindex="-1">\uC124\uC815 <a class="header-anchor" href="#\uC124\uC815" aria-hidden="true">#</a></h2><p><code>url</code> <code>bound</code>\uB294 \uD544\uC218\uC801\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uD560 \uC774\uBBF8\uC9C0\uC640 \uC0DD\uC131\uB420 \uC704\uCE58\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.</p><h2 id="ui-\uC774\uBCA4\uD2B8" tabindex="-1">UI \uC774\uBCA4\uD2B8 <a class="header-anchor" href="#ui-\uC774\uBCA4\uD2B8" aria-hidden="true">#</a></h2><p>\uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC124\uBA85\uC740 <a href="https://navermaps.github.io/maps.js.ncp/docs/naver.maps.GroundOverlay.html#toc13__anchor" target="_blank" rel="noopener noreferrer">\uC774\uBCA4\uD2B8 \uC0C1\uC138\uC124\uBA85</a>\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><ul><li>click</li><li>dblclick</li></ul>`,7);function y(g,m,_,q,h,O){const s=c("naver-ground-overlay");return u(),p("div",null,[r,k,i,n("p",null,[d,o(s)]),v])}var N=t(l,[["render",y]]);export{b as __pageData,N as default};
