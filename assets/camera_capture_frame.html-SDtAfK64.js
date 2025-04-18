import{_ as a,c as s,o as e,e as t}from"./app-Ne0PdyYx.js";const i={};function p(o,n){return e(),s("div",null,n[0]||(n[0]=[t(`<h2 id="获取实时相片帧" tabindex="-1"><a class="header-anchor" href="#获取实时相片帧" aria-hidden="true">#</a> 获取实时相片帧</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * OCR SCAN RTC使用
 *
 * <span class="token keyword">@param</span> <span class="token parameter">textureView</span>
 * <span class="token keyword">@param</span> <span class="token parameter">onImageAvailableListener</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">openCamera</span><span class="token punctuation">(</span><span class="token class-name">TextureView</span> textureView<span class="token punctuation">,</span> <span class="token class-name">IOnImageAvailableListener</span> onImageAvailableListener<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin用法" tabindex="-1"><a class="header-anchor" href="#kotlin用法" aria-hidden="true">#</a> Kotlin用法</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>PermissionUtil<span class="token punctuation">.</span><span class="token function">requestCameraLocationStorage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">object</span> <span class="token operator">:</span> IPermissionListener <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onAgree</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        vm<span class="token punctuation">.</span>mCamera<span class="token punctuation">.</span><span class="token function">openCamera</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>textureView<span class="token punctuation">)</span> <span class="token punctuation">{</span> image <span class="token operator">-&gt;</span>
            
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onRefuse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">toast</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;请允许相机权限&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)]))}const l=a(i,[["render",p],["__file","camera_capture_frame.html.vue"]]);export{l as default};
