import{_ as o,M as a,p as l,q as c,Q as i,R as n,t as s,N as t,V as u,a1 as r}from"./framework-064a6737.js";const k={},d=n("h1",{id:"customoverlay",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#customoverlay","aria-hidden":"true"},"#"),s(" CustomOverlay")],-1),v=n("p",null,[n("code",null,"NaverCustomOverlay"),s("는 사용자 정의 오버레이를 생성하는 컴포넌트 입니다. "),n("code",null,"NaverMaps"),s(" 생성 이후에 사용 가능합니다.")],-1),m=n("h2",{id:"예시",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#예시","aria-hidden":"true"},"#"),s(" 예시")],-1),b=n("p",null,"\\",-1),g=r(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
        hello, CustomOverlay😎
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
      <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">37.56663888630603</span><span class="token punctuation">,</span> <span class="token comment">// 지도 중앙 위도</span>
      <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">126.97838310403904</span><span class="token punctuation">,</span> <span class="token comment">// 지도 중앙 경도</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=n("h2",{id:"설정",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#설정","aria-hidden":"true"},"#"),s(" 설정")],-1),h=n("p",null,[n("code",null,"latitude"),s(),n("code",null,"longitude"),s("는 필수적으로 입력해 주셔야 합니다. 생성될 위치를 정의합니다.")],-1),q={href:"https://navermaps.github.io/maps.js.ncp/docs/tutorial-6-CustomOverlay.html",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"ui-이벤트",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ui-이벤트","aria-hidden":"true"},"#"),s(" UI 이벤트")],-1),O=n("p",null,"사용자 정의 이벤트 임으로, 지정된 UI 이벤트는 없습니다. 필요한 경우 이벤트 리스너 생성을 통해 별도로 사용해주셔야 합니다.",-1);function f(C,L){const p=a("RouterLink"),e=a("ExternalLinkIcon");return l(),c("div",null,[d,v,m,b,i(" <naver-custom-overlay /> "),g,n("p",null,[s("자세한 Props, Emit 옵션은 "),t(p,{to:"/api/#navercustomoverlay"},{default:u(()=>[s("NaverCustomOverlay")]),_:1}),s("에서 확인 가능합니다.")]),y,h,n("p",null,[n("a",q,[s("사용자정의 오버레이 구조"),t(e)]),s("에 대한 자세한 원리는 해당 링크에서 확인 가능합니다.")]),_,O])}const w=o(k,[["render",f],["__file","CustomOverlay.html.vue"]]);export{w as default};
