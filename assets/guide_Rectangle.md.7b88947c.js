import{_ as t,c as p,b as n,d as o,e as a,a as e,r as c,o as l}from"./app.e659a4ba.js";const R='{"title":"Rectangle","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC608\uC2DC","slug":"\uC608\uC2DC"},{"level":2,"title":"\uC124\uC815","slug":"\uC124\uC815"},{"level":2,"title":"UI \uC774\uBCA4\uD2B8","slug":"ui-\uC774\uBCA4\uD2B8"}],"relativePath":"guide/Rectangle.md","lastUpdated":1644382533694}',u={},r=n("h1",{id:"rectangle",tabindex:"-1"},[a("Rectangle "),n("a",{class:"header-anchor",href:"#rectangle","aria-hidden":"true"},"#")],-1),i=n("p",null,[n("code",null,"NaverRectangle"),a("\uB294 \uC0AC\uAC01\uD615\uC744 \uC0DD\uC131\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC785\uB2C8\uB2E4. "),n("code",null,"NaverMaps"),a(" \uC0DD\uC131 \uC774\uD6C4\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.")],-1),k=n("h2",{id:"\uC608\uC2DC",tabindex:"-1"},[a("\uC608\uC2DC "),n("a",{class:"header-anchor",href:"#\uC608\uC2DC","aria-hidden":"true"},"#")],-1),d=n("br",null,null,-1),g=e(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-maps</span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:mapOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:initLayers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>initLayers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadMap($event)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-rectangle</span>
      <span class="token attr-name">:bounds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rectangleBound<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadRectangle($event)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>naver-maps</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverRectangle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-naver-maps&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverRectangle <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rectangleBound <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">south</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
      <span class="token literal-property property">north</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
      <span class="token literal-property property">west</span><span class="token operator">:</span> <span class="token number">126</span><span class="token punctuation">,</span>
      <span class="token literal-property property">east</span><span class="token operator">:</span> <span class="token number">128</span><span class="token punctuation">,</span>
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
    <span class="token keyword">const</span> <span class="token function-variable function">onLoadRectangle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rectangleObject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      rectangle<span class="token punctuation">.</span>value <span class="token operator">=</span> rectangleObject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">,</span>
      mapOptions<span class="token punctuation">,</span>
      initLayers<span class="token punctuation">,</span>
      onLoadMap<span class="token punctuation">,</span>
      rectangleBound<span class="token punctuation">,</span>
      onLoadRectangle<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\uC790\uC138\uD55C Props, Emit \uC635\uC158\uC740 <a href="./../api/#naverrectangle">NaverRectangle</a>\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><h2 id="\uC124\uC815" tabindex="-1">\uC124\uC815 <a class="header-anchor" href="#\uC124\uC815" aria-hidden="true">#</a></h2><p><code>bounds</code>\uB294 \uD544\uC218\uC801\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4.</p><p><code>options</code>\uB85C \uC635\uC158\uC744 \uB118\uACA8 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="ui-\uC774\uBCA4\uD2B8" tabindex="-1">UI \uC774\uBCA4\uD2B8 <a class="header-anchor" href="#ui-\uC774\uBCA4\uD2B8" aria-hidden="true">#</a></h2><p>\uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC124\uBA85\uC740 <a href="https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Rectangle.html#toc25__anchor" target="_blank" rel="noopener noreferrer">\uC774\uBCA4\uD2B8 \uC0C1\uC138\uC124\uBA85</a>\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><ul><li>bounds_changed</li><li>click</li><li>clickable_changed</li><li>dblclick</li><li>mousedown</li><li>mouseout</li><li>mouseover</li><li>mouseup</li><li>visible_changed</li><li>zIndex_changed</li></ul>`,8);function m(_,h,v,y,q,f){const s=c("naver-rectangle");return l(),p("div",null,[r,i,k,n("p",null,[d,o(s)]),g])}var w=t(u,[["render",m]]);export{R as __pageData,w as default};
