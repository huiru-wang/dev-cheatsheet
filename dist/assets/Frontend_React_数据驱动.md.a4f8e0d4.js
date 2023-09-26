import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.fd95ed2e.js";const u=JSON.parse('{"title":"数据驱动","description":"","frontmatter":{},"headers":[],"relativePath":"Frontend/React/数据驱动.md","filePath":"Frontend/React/数据驱动.md"}'),l={name:"Frontend/React/数据驱动.md"},o=n(`<h1 id="数据驱动" tabindex="-1">数据驱动 <a class="header-anchor" href="#数据驱动" aria-label="Permalink to &quot;数据驱动&quot;">​</a></h1><h2 id="mvc和mvvm" tabindex="-1">MVC和MVVM <a class="header-anchor" href="#mvc和mvvm" aria-label="Permalink to &quot;MVC和MVVM&quot;">​</a></h2><p>两种实现：</p><ul><li><strong>MVC(React)</strong>：只有数据驱动View，动态渲染，是单向的数据驱动； <ul><li>如果视图变更，想要感知到并修改Model，需要开发者通过Dom上绑定的函数实现；</li></ul></li><li><strong>MVVM(Vue)</strong>：数据驱动视图渲染，视图变更由监听修改数据Model，是双向的数据驱动； <ul><li>Dom Listener监听的Dom中的数据发生变化，自动修改Model；</li><li>Model发生变化，自动渲染Dom，更新视图；</li></ul></li></ul><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">MVVM:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        | -------View Model------ |</span></span>
<span class="line"><span style="color:#e1e4e8;">        |                         |</span></span>
<span class="line"><span style="color:#e1e4e8;">        | ---&gt; Dom Listener  ---&gt; | </span></span>
<span class="line"><span style="color:#e1e4e8;">View    | &lt;--- Data Bindings &lt;--- |     Model</span></span>
<span class="line"><span style="color:#e1e4e8;">        | -                     - |</span></span>
<span class="line"><span style="color:#e1e4e8;">        | ----------------------- |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">MVVM:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        | -------View Model------ |</span></span>
<span class="line"><span style="color:#24292e;">        |                         |</span></span>
<span class="line"><span style="color:#24292e;">        | ---&gt; Dom Listener  ---&gt; | </span></span>
<span class="line"><span style="color:#24292e;">View    | &lt;--- Data Bindings &lt;--- |     Model</span></span>
<span class="line"><span style="color:#24292e;">        | -                     - |</span></span>
<span class="line"><span style="color:#24292e;">        | ----------------------- |</span></span></code></pre></div><h2 id="jsx执行过程" tabindex="-1">JSX执行过程 <a class="header-anchor" href="#jsx执行过程" aria-label="Permalink to &quot;JSX执行过程&quot;">​</a></h2><p>1、JSX被编译为VirtualDOM；</p><p>2、VirtualDOM渲染为真实DOM；</p>`,8),t=[o];function p(c,i,r,d,_,h){return a(),e("div",null,t)}const M=s(l,[["render",p]]);export{u as __pageData,M as default};
