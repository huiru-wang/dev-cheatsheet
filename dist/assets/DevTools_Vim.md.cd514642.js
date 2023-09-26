import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fd95ed2e.js";const C=JSON.parse('{"title":"Vim","description":"","frontmatter":{},"headers":[],"relativePath":"DevTools/Vim.md","filePath":"DevTools/Vim.md"}'),p={name:"DevTools/Vim.md"},o=l(`<h1 id="vim" tabindex="-1">Vim <a class="header-anchor" href="#vim" aria-label="Permalink to &quot;Vim&quot;">​</a></h1><p>相关Vim命令，建议 Vs Code 插件：Vim Cheatsheet</p><h2 id="vimrc配置" tabindex="-1">vimrc配置 <a class="header-anchor" href="#vimrc配置" aria-label="Permalink to &quot;vimrc配置&quot;">​</a></h2><div class="language-vim vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====    basic     =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">relativenumber</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">updatetime</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">100</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">autoindent</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;自动缩进&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">smartindent</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mouse</span><span style="color:#E1E4E8;">-</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">a</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabstop</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">expandtab</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">shiftwidth</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#F97583;">syntax on</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cursorline</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wrap</span><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;超出折叠 不会换行&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">autowrite</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">wildmenu</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;tab提示命令&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encoding</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">utf-</span><span style="color:#79B8FF;">8</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hlsearch</span><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;搜索高亮&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">incsearch</span><span style="color:#E1E4E8;">       </span><span style="color:#9ECBFF;">&quot;搜索高亮同步&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ignorecase</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;搜索高亮忽略大小写&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">smartcase</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;显示末尾的空格&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">listchars</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">tab:→</span><span style="color:#F97583;">\\</span><span style="color:#E1E4E8;"> ,trail:☜,extends:…</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scrolloff</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">&quot;保持光标距底部8行&quot;</span></span>
<span class="line"><span style="color:#6A737D;">&quot; set termguicolors “颜色加深</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">splitright</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">splitbelow</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foldenable</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;开启代码折叠&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foldmethod</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">expr</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foldcolumn</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;显示被折叠的函数&quot;</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foldlevel</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">99</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foldlevelstart</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">99</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nobackup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====   mapping    =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot; :verbose check keymap</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> mapleader </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;;&quot;</span></span>
<span class="line"><span style="color:#F97583;">inoremap</span><span style="color:#E1E4E8;"> jk &lt;</span><span style="color:#79B8FF;">Esc</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">inoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-H</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">Left</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">inoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-j</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">Down</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">inoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-k</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">Up</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">inoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-l</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">Right</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;fc &lt;</span><span style="color:#79B8FF;">Esc</span><span style="color:#E1E4E8;">&gt;:bd&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-q</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">Esc</span><span style="color:#E1E4E8;">&gt;:q&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-s</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">Esc</span><span style="color:#E1E4E8;">&gt;:w&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">S-h</span><span style="color:#E1E4E8;">&gt; ^</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">S-l</span><span style="color:#E1E4E8;">&gt; $</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;fc &lt;</span><span style="color:#79B8FF;">Esc</span><span style="color:#E1E4E8;">&gt;:bd&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; 窗口移动,缩放</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-h</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;h</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-j</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;j</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-k</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;k</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-l</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;l</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#79B8FF;">wh</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;&gt;</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;wj &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;</span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;wk &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;-</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;wl &lt;</span><span style="color:#79B8FF;">C-w</span><span style="color:#E1E4E8;">&gt;&lt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot; 块</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-v</span><span style="color:#E1E4E8;">&gt; &lt;</span><span style="color:#79B8FF;">C-q</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot; 折叠</span></span>
<span class="line"><span style="color:#6A737D;">&quot; za/zo  zM/zR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">vnoremap</span><span style="color:#E1E4E8;"> jk &lt;</span><span style="color:#79B8FF;">Esc</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">tnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">Esc</span><span style="color:#E1E4E8;">&gt; &lt;C-\\&gt;&lt;</span><span style="color:#79B8FF;">C-n</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====  easymotion  =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====   surround   =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;c/d/y s &lt;existing&gt; &lt;desired&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&#39;a&#39; -&gt; &quot;a&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====     sneak    =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;s&lt;char&gt;&lt;char&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====    basic     =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">relativenumber</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">updatetime</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">100</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">autoindent</span><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;自动缩进&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">smartindent</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mouse</span><span style="color:#24292E;">-</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">a</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabstop</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">expandtab</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">shiftwidth</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#D73A49;">syntax on</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cursorline</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wrap</span><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;超出折叠 不会换行&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">autowrite</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">wildmenu</span><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;tab提示命令&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">encoding</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">utf-</span><span style="color:#005CC5;">8</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">hlsearch</span><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;搜索高亮&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">incsearch</span><span style="color:#24292E;">       </span><span style="color:#032F62;">&quot;搜索高亮同步&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ignorecase</span><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;搜索高亮忽略大小写&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">smartcase</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;显示末尾的空格&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">listchars</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">tab:→</span><span style="color:#D73A49;">\\</span><span style="color:#24292E;"> ,trail:☜,extends:…</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scrolloff</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">     </span><span style="color:#032F62;">&quot;保持光标距底部8行&quot;</span></span>
<span class="line"><span style="color:#6A737D;">&quot; set termguicolors “颜色加深</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">splitright</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">splitbelow</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foldenable</span><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;开启代码折叠&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foldmethod</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">expr</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foldcolumn</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;显示被折叠的函数&quot;</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foldlevel</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">99</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foldlevelstart</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">99</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nobackup</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====   mapping    =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot; :verbose check keymap</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> mapleader </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;;&quot;</span></span>
<span class="line"><span style="color:#D73A49;">inoremap</span><span style="color:#24292E;"> jk &lt;</span><span style="color:#005CC5;">Esc</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">inoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-H</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">Left</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">inoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-j</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">Down</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">inoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-k</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">Up</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">inoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-l</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">Right</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;fc &lt;</span><span style="color:#005CC5;">Esc</span><span style="color:#24292E;">&gt;:bd&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-q</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">Esc</span><span style="color:#24292E;">&gt;:q&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-s</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">Esc</span><span style="color:#24292E;">&gt;:w&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">S-h</span><span style="color:#24292E;">&gt; ^</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">S-l</span><span style="color:#24292E;">&gt; $</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;fc &lt;</span><span style="color:#005CC5;">Esc</span><span style="color:#24292E;">&gt;:bd&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; 窗口移动,缩放</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-h</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;h</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-j</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;j</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-k</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;k</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-l</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;l</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;</span><span style="color:#005CC5;">wh</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;&gt;</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;wj &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;</span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;wk &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;-</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;wl &lt;</span><span style="color:#005CC5;">C-w</span><span style="color:#24292E;">&gt;&lt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot; 块</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-v</span><span style="color:#24292E;">&gt; &lt;</span><span style="color:#005CC5;">C-q</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot; 折叠</span></span>
<span class="line"><span style="color:#6A737D;">&quot; za/zo  zM/zR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">vnoremap</span><span style="color:#24292E;"> jk &lt;</span><span style="color:#005CC5;">Esc</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">tnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">Esc</span><span style="color:#24292E;">&gt; &lt;C-\\&gt;&lt;</span><span style="color:#005CC5;">C-n</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====  easymotion  =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====   surround   =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;c/d/y s &lt;existing&gt; &lt;desired&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&#39;a&#39; -&gt; &quot;a&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;=====     sneak    =====</span></span>
<span class="line"><span style="color:#6A737D;">&quot;========================</span></span>
<span class="line"><span style="color:#6A737D;">&quot;s&lt;char&gt;&lt;char&gt;</span></span></code></pre></div><h2 id="ideavimrc配置" tabindex="-1">ideavimrc配置 <a class="header-anchor" href="#ideavimrc配置" aria-label="Permalink to &quot;ideavimrc配置&quot;">​</a></h2><p>在vimrc基础上的Idea支持</p><div class="language-vim vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&quot; Source your .vimrc</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">/.vimrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; -- Suggested options --</span></span>
<span class="line"><span style="color:#6A737D;">&quot; Show a few lines of context around the cursor. Note that this makes the</span></span>
<span class="line"><span style="color:#6A737D;">&quot; text scroll if you mouse-click near the start or end of the window.</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scrolloff</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; Do incremental searching.</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">incsearch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; Don&#39;t use Ex mode, use Q for formatting.</span></span>
<span class="line"><span style="color:#F97583;">map</span><span style="color:#E1E4E8;"> Q gq</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; -- Map IDE actions to IdeaVim -- https://jb.gg/abva4t</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; Map \\r to the Reformat Code action</span></span>
<span class="line"><span style="color:#6A737D;">&quot;map \\r &lt;Action&gt;(ReformatCode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; Map &lt;leader&gt;d to start debug</span></span>
<span class="line"><span style="color:#6A737D;">&quot;map &lt;leader&gt;d &lt;Action&gt;(Debug)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; Map \\b to toggle the breakpoint on the current line</span></span>
<span class="line"><span style="color:#6A737D;">&quot;map \\b &lt;Action&gt;(ToggleLineBreakpoint)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; Find more examples here: https://jb.gg/share-ideavimrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;">/.vimrc</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; GoTo Mappings----------------------------</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-o</span><span style="color:#E1E4E8;">&gt; :&lt;</span><span style="color:#79B8FF;">C-u</span><span style="color:#E1E4E8;">&gt;action Back&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">C-i</span><span style="color:#E1E4E8;">&gt; :&lt;</span><span style="color:#79B8FF;">C-u</span><span style="color:#E1E4E8;">&gt;action Forward&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> gs :&lt;</span><span style="color:#79B8FF;">C-u</span><span style="color:#E1E4E8;">&gt;action GotoSuperMethod&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> gi :&lt;</span><span style="color:#79B8FF;">C-u</span><span style="color:#E1E4E8;">&gt;action GotoImplementation&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">nnoremap</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;sf :&lt;</span><span style="color:#79B8FF;">C-u</span><span style="color:#E1E4E8;">&gt;action FindInPath&lt;</span><span style="color:#79B8FF;">CR</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gf :&lt;C-u&gt;action GotoFile&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap ga :&lt;C-u&gt;action GotoAction&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gb :&lt;C-u&gt;action JumpToLastChange&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gd :&lt;C-u&gt;action GotoDeclaration&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gm :&lt;C-u&gt;action GotoSymbol&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gu :&lt;C-u&gt;action ShowUsages&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gt :&lt;C-u&gt;action GotoTest&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gr :&lt;C-u&gt;action RecentFiles&lt;CR&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Tree Action------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Plugins  --------------------------------</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Plug</span><span style="color:#E1E4E8;">&gt;(sneak-s)</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> surround</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> multiple-cursors</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> commentary</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> argtextobj</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> easymotion</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> textobj-entire</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> ReplaceWithRegister</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; 中英插件</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> keep-english-</span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;">-</span><span style="color:#F97583;">normal</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> keep-english-</span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;">-</span><span style="color:#F97583;">normal</span><span style="color:#E1E4E8;">-and-restore-</span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;">-insert</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> sneak</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Plugin settings -------------------------</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> g:argtextobj_pairs</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;[:],(:),&lt;:&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Common settings -------------------------</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scrolloff</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">showmode</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">so</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">incsearch</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nu</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Idea specific settings ------------------</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> ideajoin</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> ideastatusicon</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">gray</span></span>
<span class="line"><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> idearefactormode</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">keep</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Mappings --------------------------------</span></span>
<span class="line"><span style="color:#F97583;">map</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;f &lt;</span><span style="color:#79B8FF;">Plug</span><span style="color:#E1E4E8;">&gt;(easymotion-s)</span></span>
<span class="line"><span style="color:#F97583;">map</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#79B8FF;">leader</span><span style="color:#E1E4E8;">&gt;e &lt;</span><span style="color:#79B8FF;">Plug</span><span style="color:#E1E4E8;">&gt;(easymotion-f)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;d &lt;Action&gt;(Debug)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;r &lt;Action&gt;(RenameElement)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;c &lt;Action&gt;(Stop)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;z &lt;Action&gt;(ToggleDistractionFreeMode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;s &lt;Action&gt;(SelectInProjectView)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;a &lt;Action&gt;(Annotate)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;h &lt;Action&gt;(Vcs.ShowTabbedFileHistory)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;S-Space&gt; &lt;Action&gt;(GotoNextError)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;b &lt;Action&gt;(ToggleLineBreakpoint)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;o &lt;Action&gt;(FileStructurePopup)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&quot; Source your .vimrc</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;">/.vimrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; -- Suggested options --</span></span>
<span class="line"><span style="color:#6A737D;">&quot; Show a few lines of context around the cursor. Note that this makes the</span></span>
<span class="line"><span style="color:#6A737D;">&quot; text scroll if you mouse-click near the start or end of the window.</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scrolloff</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; Do incremental searching.</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">incsearch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; Don&#39;t use Ex mode, use Q for formatting.</span></span>
<span class="line"><span style="color:#D73A49;">map</span><span style="color:#24292E;"> Q gq</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; -- Map IDE actions to IdeaVim -- https://jb.gg/abva4t</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; Map \\r to the Reformat Code action</span></span>
<span class="line"><span style="color:#6A737D;">&quot;map \\r &lt;Action&gt;(ReformatCode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; Map &lt;leader&gt;d to start debug</span></span>
<span class="line"><span style="color:#6A737D;">&quot;map &lt;leader&gt;d &lt;Action&gt;(Debug)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot; Map \\b to toggle the breakpoint on the current line</span></span>
<span class="line"><span style="color:#6A737D;">&quot;map \\b &lt;Action&gt;(ToggleLineBreakpoint)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot; Find more examples here: https://jb.gg/share-ideavimrc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;">/.vimrc</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; GoTo Mappings----------------------------</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-o</span><span style="color:#24292E;">&gt; :&lt;</span><span style="color:#005CC5;">C-u</span><span style="color:#24292E;">&gt;action Back&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">C-i</span><span style="color:#24292E;">&gt; :&lt;</span><span style="color:#005CC5;">C-u</span><span style="color:#24292E;">&gt;action Forward&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> gs :&lt;</span><span style="color:#005CC5;">C-u</span><span style="color:#24292E;">&gt;action GotoSuperMethod&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> gi :&lt;</span><span style="color:#005CC5;">C-u</span><span style="color:#24292E;">&gt;action GotoImplementation&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">nnoremap</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;sf :&lt;</span><span style="color:#005CC5;">C-u</span><span style="color:#24292E;">&gt;action FindInPath&lt;</span><span style="color:#005CC5;">CR</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gf :&lt;C-u&gt;action GotoFile&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap ga :&lt;C-u&gt;action GotoAction&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gb :&lt;C-u&gt;action JumpToLastChange&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gd :&lt;C-u&gt;action GotoDeclaration&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gm :&lt;C-u&gt;action GotoSymbol&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gu :&lt;C-u&gt;action ShowUsages&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gt :&lt;C-u&gt;action GotoTest&lt;CR&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; nnoremap gr :&lt;C-u&gt;action RecentFiles&lt;CR&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Tree Action------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Plugins  --------------------------------</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Plug</span><span style="color:#24292E;">&gt;(sneak-s)</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> surround</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> multiple-cursors</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> commentary</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> argtextobj</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> easymotion</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> textobj-entire</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> ReplaceWithRegister</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; 中英插件</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> keep-english-</span><span style="color:#D73A49;">in</span><span style="color:#24292E;">-</span><span style="color:#D73A49;">normal</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> keep-english-</span><span style="color:#D73A49;">in</span><span style="color:#24292E;">-</span><span style="color:#D73A49;">normal</span><span style="color:#24292E;">-and-restore-</span><span style="color:#D73A49;">in</span><span style="color:#24292E;">-insert</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> sneak</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Plugin settings -------------------------</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> g:argtextobj_pairs</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;[:],(:),&lt;:&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Common settings -------------------------</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scrolloff</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">showmode</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">so</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">incsearch</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nu</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Idea specific settings ------------------</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> ideajoin</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> ideastatusicon</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">gray</span></span>
<span class="line"><span style="color:#D73A49;">set</span><span style="color:#24292E;"> idearefactormode</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">keep</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; Mappings --------------------------------</span></span>
<span class="line"><span style="color:#D73A49;">map</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;f &lt;</span><span style="color:#005CC5;">Plug</span><span style="color:#24292E;">&gt;(easymotion-s)</span></span>
<span class="line"><span style="color:#D73A49;">map</span><span style="color:#24292E;"> &lt;</span><span style="color:#005CC5;">leader</span><span style="color:#24292E;">&gt;e &lt;</span><span style="color:#005CC5;">Plug</span><span style="color:#24292E;">&gt;(easymotion-f)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;d &lt;Action&gt;(Debug)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;r &lt;Action&gt;(RenameElement)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;c &lt;Action&gt;(Stop)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;z &lt;Action&gt;(ToggleDistractionFreeMode)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;s &lt;Action&gt;(SelectInProjectView)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;a &lt;Action&gt;(Annotate)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;h &lt;Action&gt;(Vcs.ShowTabbedFileHistory)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;S-Space&gt; &lt;Action&gt;(GotoNextError)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;b &lt;Action&gt;(ToggleLineBreakpoint)</span></span>
<span class="line"><span style="color:#6A737D;">&quot;&quot;&quot; map &lt;leader&gt;o &lt;Action&gt;(FileStructurePopup)</span></span></code></pre></div>`,7),t=[o];function e(c,r,y,E,i,u){return n(),a("div",null,t)}const g=s(p,[["render",e]]);export{C as __pageData,g as default};
