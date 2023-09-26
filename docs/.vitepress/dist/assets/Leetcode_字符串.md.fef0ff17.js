import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fd95ed2e.js";const p="/images/kmp1.png",o="/images/kmp2.png",e="/images/kmp3.png",g=JSON.parse('{"title":"字符串","description":"","frontmatter":{},"headers":[],"relativePath":"Leetcode/字符串.md","filePath":"Leetcode/字符串.md"}'),t={name:"Leetcode/字符串.md"},c=l('<h1 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h1><h2 id="kmp" tabindex="-1">KMP <a class="header-anchor" href="#kmp" aria-label="Permalink to &quot;KMP&quot;">​</a></h2><h3 id="kmp工作流程" tabindex="-1">KMP工作流程 <a class="header-anchor" href="#kmp工作流程" aria-label="Permalink to &quot;KMP工作流程&quot;">​</a></h3><p><img src="'+p+'" alt=""></p><p>当<code>c</code>匹配失败，说明前一个<code>ab</code>是匹配成功的，即原串中此时有<code>ab</code>组合；</p><p>既然这个<code>ab</code>不行，就尝试其他的<code>ab</code>；</p><p><img src="'+o+`" alt=""></p><p>于是找到更前一个<code>ab</code>的后一个字母，尝试继续匹配；</p><p>这样，省去了从索引0重新找，而是从索引2开始继续匹配；</p><p><strong>KMP就是当匹配失败时，通过一个数组，找之前有没有相同的模式，跳回去可以继续尝试；</strong></p><p>假设数组已经有了，那么KMP就可以找子串的最小起始位置：(Leetcode-28)</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">strStr</span><span style="color:#E1E4E8;">(String haystack, String needle) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getNext</span><span style="color:#E1E4E8;">(needle);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> haystack.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">()) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> haystack.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(j)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 相同继续匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 不相同尝试回溯，通过数组找到最近的相同子串，继续while匹配</span></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> next[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">strStr</span><span style="color:#24292E;">(String haystack, String needle) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getNext</span><span style="color:#24292E;">(needle);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> haystack.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">()) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> haystack.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(i) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(j)) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 相同继续匹配</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 不相同尝试回溯，通过数组找到最近的相同子串，继续while匹配</span></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> next[j];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="求解回溯数组" tabindex="-1">求解回溯数组 <a class="header-anchor" href="#求解回溯数组" aria-label="Permalink to &quot;求解回溯数组&quot;">​</a></h3><p><strong>那么问题就是：当<code>ab</code>匹配失败，如何知道前面还有一个<code>ab</code>；怎么知道跳回哪里？</strong></p><p><img src="`+e+`" alt=""></p><ul><li>a、b、a不匹配，都应该从头开始，跳回0；</li><li>b：因为前一个a匹配了，尝试从第一个a的后面一位开始匹配；</li><li>C：前一个b匹配了，从上一个b的后一个匹配；</li></ul><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">getNext</span><span style="color:#E1E4E8;">(String needle) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] next </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[needle.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">()];</span></span>
<span class="line"><span style="color:#E1E4E8;">    next[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">// j指向i该跳回的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (j </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(i) </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> needle.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(j)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            next[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> j;</span></span>
<span class="line"><span style="color:#E1E4E8;">        } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> next[j];</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> next;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">getNext</span><span style="color:#24292E;">(String needle) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] next </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[needle.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">()];</span></span>
<span class="line"><span style="color:#24292E;">    next[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">// j指向i该跳回的位置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (j </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(i) </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> needle.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(j)) {</span></span>
<span class="line"><span style="color:#24292E;">            i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            next[i] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> j;</span></span>
<span class="line"><span style="color:#24292E;">        } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> next[j];</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> next;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,17),r=[c];function E(y,i,F,d,h,A){return n(),a("div",null,r)}const C=s(t,[["render",E]]);export{g as __pageData,C as default};
