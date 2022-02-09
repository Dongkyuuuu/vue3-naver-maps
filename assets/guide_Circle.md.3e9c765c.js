import{_ as t,c as p,b as n,d as o,e as a,a as e,r as c,o as l}from"./app.e659a4ba.js";const C='{"title":"Circle","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC608\uC2DC","slug":"\uC608\uC2DC"},{"level":2,"title":"\uC124\uC815","slug":"\uC124\uC815"},{"level":2,"title":"UI \uC774\uBCA4\uD2B8","slug":"ui-\uC774\uBCA4\uD2B8"}],"relativePath":"guide/Circle.md","lastUpdated":1644382533693}',u={},i=n("h1",{id:"circle",tabindex:"-1"},[a("Circle "),n("a",{class:"header-anchor",href:"#circle","aria-hidden":"true"},"#")],-1),r=n("p",null,[n("code",null,"NaverCircle"),a("\uB294 \uC6D0\uC744 \uC0DD\uC131\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC785\uB2C8\uB2E4. "),n("code",null,"NaverMaps"),a(" \uC0DD\uC131 \uC774\uD6C4\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")],-1),k=n("h2",{id:"\uC608\uC2DC",tabindex:"-1"},[a("\uC608\uC2DC "),n("a",{class:"header-anchor",href:"#\uC608\uC2DC","aria-hidden":"true"},"#")],-1),d=n("br",null,null,-1),m=e(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-maps</span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:mapOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:initLayers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>initLayers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadMap($event)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-circle</span>
      <span class="token attr-name">:latitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>37.56663888630603<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:longitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>126.97838310403904<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>350<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadCircle($event)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>naver-maps</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverCircle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-naver-maps&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverCircle <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mapOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">37.56663888630603</span><span class="token punctuation">,</span> <span class="token comment">// \uC9C0\uB3C4 \uC911\uC559 \uC704\uB3C4</span>
      <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">126.97838310403904</span><span class="token punctuation">,</span> <span class="token comment">// \uC9C0\uB3C4 \uC911\uC559 \uACBD\uB3C4</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
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
    <span class="token keyword">const</span> <span class="token function-variable function">onLoadCircle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">circleObject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      circle<span class="token punctuation">.</span>value <span class="token operator">=</span> circleObject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">,</span>
      mapOptions<span class="token punctuation">,</span>
      initLayers<span class="token punctuation">,</span>
      onLoadMap<span class="token punctuation">,</span>
      onLoadCircle<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\uC790\uC138\uD55C Props, Emit \uC635\uC158\uC740 <a href="./../api/#navercircle">NaverCircle</a>\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><h2 id="\uC124\uC815" tabindex="-1">\uC124\uC815 <a class="header-anchor" href="#\uC124\uC815" aria-hidden="true">#</a></h2><p><code>latitude</code>, <code>longitude</code>\uB294 \uD544\uC218\uC801\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4.</p><p><code>radius</code>\uB294 \uC6D0\uC758 \uBC18\uACBD\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uB2E8\uC704\uB294 <strong>\uBBF8\uD130</strong>\uC785\uB2C8\uB2E4.</p><h2 id="ui-\uC774\uBCA4\uD2B8" tabindex="-1">UI \uC774\uBCA4\uD2B8 <a class="header-anchor" href="#ui-\uC774\uBCA4\uD2B8" aria-hidden="true">#</a></h2><p>\uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC124\uBA85\uC740 <a href="https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Circle.html#toc28__anchor" target="_blank" rel="noopener noreferrer">\uC774\uBCA4\uD2B8 \uC0C1\uC138\uC124\uBA85</a>\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><ul><li>center_changed</li><li>click</li><li>clickable_changed</li><li>dblclick</li><li>mousedown</li><li>mouseout</li><li>mouseover</li><li>mouseup</li><li>radius_changed</li><li>visible_changed</li><li>zIndex_changed</li></ul>`,8);function g(v,_,h,q,y,f){const s=c("naver-circle");return l(),p("div",null,[i,r,k,n("p",null,[d,o(s)]),m])}var N=t(u,[["render",g]]);export{C as __pageData,N as default};
