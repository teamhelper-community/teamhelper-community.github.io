import{_ as s,c as a,o as t,e as p}from"./app-Ne0PdyYx.js";const e={};function i(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><p>我们提供了和标准的安卓应用Application生命周期监听几乎一致的插件应用的生命周期监听方法，可以监听<code>Application</code>和<code>Activity</code>的全生命周期状态。以下是代码示例：</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>BlackBoxCore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addAppLifecycleCallback</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token operator">:</span> <span class="token function">AppLifecycleCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">afterApplicationOnCreate</span><span class="token punctuation">(</span>
        packageName<span class="token operator">:</span> String<span class="token operator">?</span><span class="token punctuation">,</span>
        processName<span class="token operator">:</span> String<span class="token operator">?</span><span class="token punctuation">,</span>
        application<span class="token operator">:</span> Application<span class="token punctuation">,</span>
        userId<span class="token operator">:</span> Int
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;beforeApplicationOnCreate: pkg </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">packageName</span></span><span class="token string">, processName </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">processName</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterApplicationOnCreate</span><span class="token punctuation">(</span>packageName<span class="token punctuation">,</span> processName<span class="token punctuation">,</span> application<span class="token punctuation">,</span> userId<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onActivityResumed</span><span class="token punctuation">(</span>activity<span class="token operator">:</span> Activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onActivityResumed</span><span class="token punctuation">(</span>activity<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onActivityDestroyed</span><span class="token punctuation">(</span>activity<span class="token operator">:</span> Activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onActivityDestroyed</span><span class="token punctuation">(</span>activity<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token operator">..</span><span class="token punctuation">.</span>更多的监听回调
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整的生命周期监听api" tabindex="-1"><a class="header-anchor" href="#完整的生命周期监听api" aria-hidden="true">#</a> 完整的生命周期监听API</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppLifecycleCallback</span> <span class="token keyword">implements</span> <span class="token class-name">Application<span class="token punctuation">.</span>ActivityLifecycleCallbacks</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforeCreateApplication</span><span class="token punctuation">(</span><span class="token class-name">String</span> packageName<span class="token punctuation">,</span> <span class="token class-name">String</span> processName<span class="token punctuation">,</span> <span class="token class-name">Context</span> context<span class="token punctuation">,</span> <span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforeApplicationOnCreate</span><span class="token punctuation">(</span><span class="token class-name">String</span> packageName<span class="token punctuation">,</span> <span class="token class-name">String</span> processName<span class="token punctuation">,</span> <span class="token class-name">Application</span> application<span class="token punctuation">,</span> <span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterApplicationOnCreate</span><span class="token punctuation">(</span><span class="token class-name">String</span> packageName<span class="token punctuation">,</span> <span class="token class-name">String</span> processName<span class="token punctuation">,</span> <span class="token class-name">Application</span> application<span class="token punctuation">,</span> <span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityCreated</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">,</span> <span class="token class-name">Bundle</span> savedInstanceState<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityStarted</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityResumed</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityPaused</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityStopped</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivitySaveInstanceState</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">,</span> <span class="token class-name">Bundle</span> outState<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onActivityDestroyed</span><span class="token punctuation">(</span><span class="token class-name">Activity</span> activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const l=s(e,[["render",i],["__file","plugin_application_lifecycle.html.vue"]]);export{l as default};
