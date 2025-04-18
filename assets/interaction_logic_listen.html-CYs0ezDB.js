import{_ as s,c as a,o as e,e as t}from"./app-Ne0PdyYx.js";const i="/assets/image-20240411172209189-CkqR2q6v.png",p={};function c(o,n){return e(),a("div",null,n[0]||(n[0]=[t(`<h2 id="设置view对手势操作的响应" tabindex="-1"><a class="header-anchor" href="#设置view对手势操作的响应" aria-hidden="true">#</a> 设置View对手势操作的响应</h2><p><code>Glass Application SDK</code> 封装的组件预留了<code>setSlideEventViewStateListener</code>接口以实现组件View实例对用户手势操作行为的响应。具体使用示例如下：</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>v<span class="token punctuation">.</span>btnConfirm<span class="token punctuation">.</span><span class="token function">setSlideEventViewStateListener</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token operator">:</span> <span class="token function">ISlideEventViewStateListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onEnter</span><span class="token punctuation">(</span>view<span class="token operator">:</span> View<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onEnter</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onBack</span><span class="token punctuation">(</span>view<span class="token operator">:</span> View<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onBack</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onChecked</span><span class="token punctuation">(</span>view<span class="token operator">:</span> View<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onChecked</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onUncheck</span><span class="token punctuation">(</span>view<span class="token operator">:</span> View<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onUncheck</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onJoinNextLevel</span><span class="token punctuation">(</span>view<span class="token operator">:</span> View<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onJoinNextLevel</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手势操作回调" tabindex="-1"><a class="header-anchor" href="#手势操作回调" aria-hidden="true">#</a> 手势操作回调</h2><p><code>Glass Application SDK</code> 提供的封装<code>View</code>和<code>Activity</code>基类均已实现了<code>ISlideEventListener</code>接口，当开发者需要在<code>Activity</code> 中监听AR设备操作或需要在<code>自定义View</code>中监听AR设备操作，可以通过重写<code>ISlideEventListener</code>中定义的方法，用以实现监听用户对AR眼镜的交互。</p><p align="center"><img src="`+i+`" alt="image-20240411172209189" width="720"></p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> MainActivity <span class="token operator">:</span> GlassBaseActivity<span class="token operator">&lt;</span>ActivityMainBinding<span class="token punctuation">,</span> EmptyViewModel<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token operator">..</span><span class="token punctuation">.</span>

    <span class="token comment">/**
     * 确定事件 如果当前的滑块模式为FORWARD_OR_BACKWARD 则触发滑块管理的确定方法
     */</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 返回事件 如果当前的滑块模式为FORWARD_OR_BACKWARD 则触发滑块管理的返回方法
     */</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 前滑事件 如果当前的滑块模式为FORWARD_OR_BACKWARD 则触发滑块管理的前滑方法
     */</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 后滑事件 如果当前的滑块模式为FORWARD_OR_BACKWARD 则触发滑块管理的后滑方法
     */</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onBackward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onBackward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 前滑移动
     */</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onForwardMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onForwardMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * 后滑移动
     */</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onBackwardMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onBackwardMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
	<span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="islideeventlistener接口定义" tabindex="-1"><a class="header-anchor" href="#islideeventlistener接口定义" aria-hidden="true">#</a> <code>ISlideEventListener</code>接口定义</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mst<span class="token punctuation">.</span>basics<span class="token punctuation">.</span>slide<span class="token punctuation">.</span>listener</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ISlideEventListener</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 单指长按
     */</span>
    <span class="token keyword">void</span> <span class="token function">onSuperKeyTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 单击
     */</span>
    <span class="token keyword">void</span> <span class="token function">onEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 后退
     */</span>
    <span class="token keyword">void</span> <span class="token function">onBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 前滑
     */</span>
    <span class="token keyword">void</span> <span class="token function">onForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 后滑
     */</span>
    <span class="token keyword">void</span> <span class="token function">onBackward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 前滑移动
     */</span>
    <span class="token keyword">void</span> <span class="token function">onForwardMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 后滑移动
     */</span>
    <span class="token keyword">void</span> <span class="token function">onBackwardMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const u=s(p,[["render",c],["__file","interaction_logic_listen.html.vue"]]);export{u as default};
