import{_ as n,c as a,o as s,a as t}from"./app.cd47341c.js";const v='{"title":"CustomOverlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC608\uC2DC","slug":"\uC608\uC2DC"},{"level":2,"title":"\uC124\uC815","slug":"\uC124\uC815"},{"level":2,"title":"UI \uC774\uBCA4\uD2B8","slug":"ui-\uC774\uBCA4\uD2B8"}],"relativePath":"guide/CustomOverlay.md","lastUpdated":1644393166327}',p={},o=t(`<h1 id="customoverlay" tabindex="-1">CustomOverlay <a class="header-anchor" href="#customoverlay" aria-hidden="true">#</a></h1><p><code>NaverCustomOverlay</code>\uB294 \uC0AC\uC6A9\uC790 \uC815\uC758 \uC624\uBC84\uB808\uC774\uB97C \uC0DD\uC131\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8 \uC785\uB2C8\uB2E4. <code>NaverMaps</code> \uC0DD\uC131 \uC774\uD6C4\uC5D0 \uC0AC\uC6A9 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><h2 id="\uC608\uC2DC" tabindex="-1">\uC608\uC2DC <a class="header-anchor" href="#\uC608\uC2DC" aria-hidden="true">#</a></h2><p>\\</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-maps</span>
    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400px<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:mapOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:initLayers</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>initLayers<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadMap($event)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>naver-custom-overlay</span>
      <span class="token attr-name">:latitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>37.56663888630603<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:longitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>126.97838310403904<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@onLoad</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onLoadCustomOverlay($event)<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
          width: 200px;
          height: 100px;
          background-color: white;
          border: 1px solid gray;
        <span class="token punctuation">&quot;</span></span></span>
      <span class="token punctuation">&gt;</span></span>
        hello, CustomOverlay\u{1F60E}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>naver-custom-overlay</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>naver-maps</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverCustomOverlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-naver-maps&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> NaverMaps<span class="token punctuation">,</span> NaverCustomOverlay <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> customOverlay <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
    <span class="token keyword">const</span> <span class="token function-variable function">onLoadCustomOverlay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">customOverlayObject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      customOverlay<span class="token punctuation">.</span>value <span class="token operator">=</span> customOverlayObject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      map<span class="token punctuation">,</span>
      mapOptions<span class="token punctuation">,</span>
      initLayers<span class="token punctuation">,</span>
      onLoadMap<span class="token punctuation">,</span>
      customOverlay<span class="token punctuation">,</span>
      onLoadCustomOverlay<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\uC790\uC138\uD55C Props, Emit \uC635\uC158\uC740 <a href="./../api/#navercustomoverlay">NaverCustomOverlay</a>\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><h2 id="\uC124\uC815" tabindex="-1">\uC124\uC815 <a class="header-anchor" href="#\uC124\uC815" aria-hidden="true">#</a></h2><p><code>latitude</code> <code>longitude</code>\uB294 \uD544\uC218\uC801\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4. \uC0DD\uC131\uB420 \uC704\uCE58\uB97C \uC815\uC758\uD569\uB2C8\uB2E4.</p><p><a href="https://navermaps.github.io/maps.js.ncp/docs/tutorial-6-CustomOverlay.html" target="_blank" rel="noopener noreferrer">\uC0AC\uC6A9\uC790\uC815\uC758 \uC624\uBC84\uB808\uC774 \uAD6C\uC870</a>\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC6D0\uB9AC\uB294 \uD574\uB2F9 \uB9C1\uD06C\uC5D0\uC11C \uD655\uC778 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><h2 id="ui-\uC774\uBCA4\uD2B8" tabindex="-1">UI \uC774\uBCA4\uD2B8 <a class="header-anchor" href="#ui-\uC774\uBCA4\uD2B8" aria-hidden="true">#</a></h2><p>\uC0AC\uC6A9\uC790 \uC815\uC758 \uC774\uBCA4\uD2B8 \uC784\uC73C\uB85C, \uC9C0\uC815\uB41C UI \uC774\uBCA4\uD2B8\uB294 \uC5C6\uC2B5\uB2C8\uB2E4. \uD544\uC694\uD55C \uACBD\uC6B0 \uC774\uBCA4\uD2B8 \uB9AC\uC2A4\uB108 \uC0DD\uC131\uC744 \uD1B5\uD574 \uBCC4\uB3C4\uB85C \uC0AC\uC6A9\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4.</p>`,11),e=[o];function c(u,l,r,k,i,d){return s(),a("div",null,e)}var g=n(p,[["render",c]]);export{v as __pageData,g as default};
