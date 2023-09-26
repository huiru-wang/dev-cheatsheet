import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.fd95ed2e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Frontend/JavaScript/String.md","filePath":"Frontend/JavaScript/String.md"}'),p={name:"Frontend/JavaScript/String.md"},o=l(`<h2 id="模板字符串" tabindex="-1">模板字符串 <a class="header-anchor" href="#模板字符串" aria-label="Permalink to &quot;模板字符串&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`The sum of \${</span><span style="color:#E1E4E8;">a</span><span style="color:#9ECBFF;">} and \${</span><span style="color:#E1E4E8;">b</span><span style="color:#9ECBFF;">} is \${</span><span style="color:#E1E4E8;">a</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">b</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`The sum of \${</span><span style="color:#24292E;">a</span><span style="color:#032F62;">} and \${</span><span style="color:#24292E;">b</span><span style="color:#032F62;">} is \${</span><span style="color:#24292E;">a</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">+</span><span style="color:#032F62;"> </span><span style="color:#24292E;">b</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="字符串索引" tabindex="-1">字符串索引 <a class="header-anchor" href="#字符串索引" aria-label="Permalink to &quot;字符串索引&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;JavaScript&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> firstLetter </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> string[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// J</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;JavaScript&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> firstLetter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> string[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// J</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Java Script&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">string.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Java&#39;</span><span style="color:#E1E4E8;">)      </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#E1E4E8;">string.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">)         </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#E1E4E8;">string.</span><span style="color:#B392F0;">lastIndexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">)     </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">string.</span><span style="color:#B392F0;">charAt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)            </span><span style="color:#6A737D;">// J</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Java Script&#39;</span></span>
<span class="line"><span style="color:#24292E;">string.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Java&#39;</span><span style="color:#24292E;">)      </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#24292E;">string.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">)         </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">string.</span><span style="color:#6F42C1;">lastIndexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">)     </span><span style="color:#6A737D;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">string.</span><span style="color:#6F42C1;">charAt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)            </span><span style="color:#6A737D;">// J</span></span></code></pre></div><h2 id="切分字符串" tabindex="-1">切分字符串 <a class="header-anchor" href="#切分字符串" aria-label="Permalink to &quot;切分字符串&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;JavaScript&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> java </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> string.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// Java</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> script </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> string.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// Script</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;JavaScript&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> java </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> string.</span><span style="color:#6F42C1;">substring</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// Java</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> script </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> string.</span><span style="color:#6F42C1;">substring</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// Script</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> countries </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Finland,Sweden,Norway,Denmark,and Iceland&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">countries.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;,&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// [&quot;Finland&quot;, &quot;Sweden&quot;, &quot;Norway&quot;, &quot;Denmark&quot;, &quot;and Iceland&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">countries.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// [&quot;Finland,Sweden,Norway,Denmark,and Iceland&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> countries </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Finland,Sweden,Norway,Denmark,and Iceland&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">countries.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;,&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// [&quot;Finland&quot;, &quot;Sweden&quot;, &quot;Norway&quot;, &quot;Denmark&quot;, &quot;and Iceland&quot;]</span></span>
<span class="line"><span style="color:#24292E;">countries.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// [&quot;Finland,Sweden,Norway,Denmark,and Iceland&quot;]</span></span></code></pre></div><h2 id="是否存在子串" tabindex="-1">是否存在子串 <a class="header-anchor" href="#是否存在子串" aria-label="Permalink to &quot;是否存在子串&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Love is the best to in this world&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">string.</span><span style="color:#B392F0;">startsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Love&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">string.</span><span style="color:#B392F0;">endsWith</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;world&#39;</span><span style="color:#E1E4E8;">)    </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#E1E4E8;">string.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;best&#39;</span><span style="color:#E1E4E8;">)     </span><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> string </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;I love JavaScript. If you do not love JavaScript what else can you love.&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(string.</span><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;love&#39;</span><span style="color:#E1E4E8;">))          </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(string.</span><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">javascript</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">gi</span><span style="color:#E1E4E8;">))  </span><span style="color:#6A737D;">// 7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Love is the best to in this world&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">string.</span><span style="color:#6F42C1;">startsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Love&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">string.</span><span style="color:#6F42C1;">endsWith</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;world&#39;</span><span style="color:#24292E;">)    </span><span style="color:#6A737D;">// true</span></span>
<span class="line"><span style="color:#24292E;">string.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;best&#39;</span><span style="color:#24292E;">)     </span><span style="color:#6A737D;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;I love JavaScript. If you do not love JavaScript what else can you love.&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(string.</span><span style="color:#6F42C1;">search</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;love&#39;</span><span style="color:#24292E;">))          </span><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(string.</span><span style="color:#6F42C1;">search</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/javascript/</span><span style="color:#D73A49;">gi</span><span style="color:#24292E;">))  </span><span style="color:#6A737D;">// 7</span></span></code></pre></div><h2 id="string转数字" tabindex="-1">String转数字 <a class="header-anchor" href="#string转数字" aria-label="Permalink to &quot;String转数字&quot;">​</a></h2><p>通用方法</p><ul><li><p>Number()</p></li><li><p>Plus sign(+)</p></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;10&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> numInt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(num)    </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> numInt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">num           </span><span style="color:#6A737D;">// 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;10&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> numInt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(num)    </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> numInt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;">num           </span><span style="color:#6A737D;">// 10</span></span></code></pre></div><p>特定精度</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;10&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> numInt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(num)  </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;9.81&#39;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> numFloat </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">(num)  </span><span style="color:#6A737D;">// 9.81</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;10&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> numInt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(num)  </span><span style="color:#6A737D;">// 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;9.81&#39;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> numFloat </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">(num)  </span><span style="color:#6A737D;">// 9.81</span></span></code></pre></div><h2 id="正则" tabindex="-1">正则 <a class="header-anchor" href="#正则" aria-label="Permalink to &quot;正则&quot;">​</a></h2>`,17),e=[o];function t(c,r,y,E,i,F){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};