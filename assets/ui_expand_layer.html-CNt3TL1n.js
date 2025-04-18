import{_ as a,c as s,o as e,e as t}from"./app-Ne0PdyYx.js";const p="/assets/image-20240415021735585-BaBtuKWx.png",i={};function o(l,n){return e(),s("div",null,n[0]||(n[0]=[t('<h2 id="预览overview" tabindex="-1"><a class="header-anchor" href="#预览overview" aria-hidden="true">#</a> 预览OVERVIEW</h2><p><img src="'+p+`" alt="image-20240415021735585"></p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><h3 id="通过databinding创建" tabindex="-1"><a class="header-anchor" href="#通过databinding创建" aria-hidden="true">#</a> 通过DataBinding创建</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">/**
 * DataBinding E.G
 */</span>
<span class="token function">GlassExpandPopup</span><span class="token punctuation">(</span>mContext<span class="token punctuation">,</span> instructManager<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
    contentWidth <span class="token operator">=</span> <span class="token number">640</span>
    direction <span class="token operator">=</span> GlassExpandPopup<span class="token punctuation">.</span>Companion<span class="token punctuation">.</span>Direction<span class="token punctuation">.</span>RIGHT
    <span class="token keyword">val</span> expandPopupBinding <span class="token operator">=</span> DataBindingUtil<span class="token punctuation">.</span>inflate<span class="token operator">&lt;</span>LayoutExpandPopupBinding<span class="token operator">&gt;</span><span class="token punctuation">(</span>
        LayoutInflater<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>mContext<span class="token punctuation">)</span><span class="token punctuation">,</span>
        R<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>layout_expand_popup<span class="token punctuation">,</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
        btnTest<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;测试按钮&quot;</span></span>
    <span class="token punctuation">}</span>
    tipsText <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;您可以通过“语音”或者“物理按键”进行选择&quot;</span></span>
    show<span class="token operator">&lt;</span>LayoutExpandPopupBinding<span class="token operator">&gt;</span><span class="token punctuation">(</span>R<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>layout_expand_popup<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">let</span> <span class="token punctuation">{</span>
        it<span class="token punctuation">.</span>btnTest<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置宽度" tabindex="-1"><a class="header-anchor" href="#设置宽度" aria-hidden="true">#</a> 设置宽度</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>GlassExpandPopup DSL <span class="token punctuation">{</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
  contentWidth <span class="token operator">=</span> <span class="token number">640</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置高度" tabindex="-1"><a class="header-anchor" href="#设置高度" aria-hidden="true">#</a> 设置高度</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>GlassExpandPopup DSL <span class="token punctuation">{</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
  contentHeight <span class="token operator">=</span> <span class="token number">640</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置弹出方向" tabindex="-1"><a class="header-anchor" href="#设置弹出方向" aria-hidden="true">#</a> 设置弹出方向</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>GlassExpandPopup DSL <span class="token punctuation">{</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
  direction <span class="token operator">=</span> GlassExpandPopup<span class="token punctuation">.</span>Companion<span class="token punctuation">.</span>Direction<span class="token punctuation">.</span>CENTER
  <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">enum</span> <span class="token keyword">class</span> Direction <span class="token punctuation">{</span>
    LEFT<span class="token punctuation">,</span>
    RIGHT<span class="token punctuation">,</span>
    CENTER<span class="token punctuation">,</span>
    TOP<span class="token punctuation">,</span>
    BOTTOM
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置提示文本" tabindex="-1"><a class="header-anchor" href="#设置提示文本" aria-hidden="true">#</a> 设置提示文本</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>GlassExpandPopup DSL <span class="token punctuation">{</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
  tipsText <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;您可以通过“语音”或者“物理按键”进行选择&quot;</span></span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理弹层view" tabindex="-1"><a class="header-anchor" href="#处理弹层view" aria-hidden="true">#</a> 处理弹层View</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>GlassExpandPopup DSL <span class="token punctuation">{</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
     <span class="token keyword">val</span> expandPopupBinding <span class="token operator">=</span> DataBindingUtil<span class="token punctuation">.</span>inflate<span class="token operator">&lt;</span>LayoutExpandPopupBinding<span class="token operator">&gt;</span><span class="token punctuation">(</span>
                    LayoutInflater<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>mContext<span class="token punctuation">)</span><span class="token punctuation">,</span>
                    R<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>layout_expand_popup<span class="token punctuation">,</span>
                    <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
                <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
                    btnTest<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;测试按钮&quot;</span></span>
                <span class="token punctuation">}</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="弹出弹层并设置操作焦点" tabindex="-1"><a class="header-anchor" href="#弹出弹层并设置操作焦点" aria-hidden="true">#</a> 弹出弹层并设置操作焦点</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>GlassExpandPopup DSL <span class="token punctuation">{</span>
  <span class="token operator">..</span><span class="token punctuation">.</span>
                show<span class="token operator">&lt;</span>LayoutExpandPopupBinding<span class="token operator">&gt;</span><span class="token punctuation">(</span>R<span class="token punctuation">.</span>layout<span class="token punctuation">.</span>layout_expand_popup<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">let</span> <span class="token punctuation">{</span>
                    it<span class="token punctuation">.</span>btnTest<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18)]))}const u=a(i,[["render",o],["__file","ui_expand_layer.html.vue"]]);export{u as default};
