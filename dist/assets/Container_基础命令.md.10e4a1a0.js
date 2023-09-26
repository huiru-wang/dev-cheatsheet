import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.fd95ed2e.js";const k=JSON.parse('{"title":"Docker Command","description":"","frontmatter":{},"headers":[],"relativePath":"Container/基础命令.md","filePath":"Container/基础命令.md"}'),p={name:"Container/基础命令.md"},o=l(`<h1 id="docker-command" tabindex="-1">Docker Command <a class="header-anchor" href="#docker-command" aria-label="Permalink to &quot;Docker Command&quot;">​</a></h1><h2 id="镜像命令" tabindex="-1">镜像命令 <a class="header-anchor" href="#镜像命令" aria-label="Permalink to &quot;镜像命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查询hub镜像，TAG需要官网查询：https://hub.docker.com/</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">search</span><span style="color:#E1E4E8;"> [REPOSITORY]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取指定镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> [repository]:[tag]  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">images</span><span style="color:#E1E4E8;">                </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rmi</span><span style="color:#E1E4E8;"> [image_id]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查询hub镜像，TAG需要官网查询：https://hub.docker.com/</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">search</span><span style="color:#24292E;"> [REPOSITORY]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取指定镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> [repository]:[tag]  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">images</span><span style="color:#24292E;">                </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rmi</span><span style="color:#24292E;"> [image_id]</span></span></code></pre></div><h2 id="容器命令" tabindex="-1">容器命令 <a class="header-anchor" href="#容器命令" aria-label="Permalink to &quot;容器命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> [OPTIONS] [IMAGE_NAME:VERSION]/[IMAGE_ID]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建并启动</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> [OPTIONS] [IMAGE_NAME:VERSION]/[IMAGE_ID]    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动已存在容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> [container_id]       </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看容器资源状态</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stats</span><span style="color:#E1E4E8;"> [container_id]  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> [container_id]       </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优雅停止</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> [container_id/name] </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强制停止    </span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">kill</span><span style="color:#E1E4E8;"> [container_id/name]     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除容器，需要先停止容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> [container_id/name]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> [OPTIONS] [IMAGE_NAME:VERSION]/[IMAGE_ID]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建并启动</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> [OPTIONS] [IMAGE_NAME:VERSION]/[IMAGE_ID]    </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动已存在容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> [container_id]       </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看容器资源状态</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stats</span><span style="color:#24292E;"> [container_id]  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> [container_id]       </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 优雅停止</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> [container_id/name] </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强制停止    </span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">kill</span><span style="color:#24292E;"> [container_id/name]     </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除容器，需要先停止容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> [container_id/name]</span></span></code></pre></div><ul><li><code>-d</code>：后台模式启动</li><li><code>-it</code>：交互模式启动，启动后进入容器；</li><li><code>--restart on-failure:n</code>：启动失败，则重试n次；</li><li><code>--restart always</code>：Docker服务启动时，自动启动此容器；</li><li><code>--rm</code>：当容器停止自动删除容器(慎用，数据如果没有挂载会丢失)</li><li><code>--name</code>：指定容器名</li><li><code>-e key=value</code>：配置环境变量</li><li><code>-env-file=</code>：从宿主机文件读取环境变量</li><li><code>-P</code>：随机端口映射</li><li><code>-p 5601:5601</code>：端口映射宿主机[宿主端口]:[容器端口]</li><li><code>--expose=[]</code>：开放一个或多个端口；</li><li><code>-v /elk/kibana.yml:/usr/share/kibana/config/kibana.yml</code>：挂载文件[宿主文件]:[容器文件]</li><li><code>--net netword_name</code>：指定网络</li><li><code>--ip 172.18.0.2</code>：在指定的网络中指定IP</li><li><code>-dns 8.8.8.8</code>：指定本地域名服务器，默认使用宿主机的；</li><li><code>-m 512m</code>：限制容器内存使用512MB；单位：g、m、b；(<code>--memory</code>)</li><li><code>-c 4</code>：限制容器CPU使用个数4；(<code>--cpus</code>)</li></ul><h2 id="容器交互" tabindex="-1">容器交互 <a class="header-anchor" href="#容器交互" aria-label="Permalink to &quot;容器交互&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 让容器在终端执行命令</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> [container_id] [command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 让容器开一个终端</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> [container_id] /bin/bash </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 让容器打印所有的环境变量</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> [container_id] env</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 让容器在终端执行命令</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> [container_id] [command]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 让容器开一个终端</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> [container_id] /bin/bash </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 让容器打印所有的环境变量</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> [container_id] env</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> [container_id] -f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> [container_id] -f</span></span></code></pre></div><ul><li><code>-f</code>：tail</li><li><code>-n 10</code>：最近10行</li></ul><h2 id="network" tabindex="-1">network <a class="header-anchor" href="#network" aria-label="Permalink to &quot;network&quot;">​</a></h2><p>配置网络，分配容器IP</p><ul><li>bridge：可以自定义网段，固定容器ip；不指定则重启后重新分配ip给容器；可创建网桥，为容器指定ip；</li><li>none</li><li>host：使用主机端口，占用主机端口</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看所有network</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"><span style="color:#B392F0;">----------------------------------------</span></span>
<span class="line"><span style="color:#B392F0;">NETWORK</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ID</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">NAME</span><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">DRIVER</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">SCOPE</span></span>
<span class="line"><span style="color:#B392F0;">5c48fb70b629</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">elk-net</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建桥接网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;">  [网络名称]</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">com.whr</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看所有network</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"><span style="color:#6F42C1;">----------------------------------------</span></span>
<span class="line"><span style="color:#6F42C1;">NETWORK</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ID</span><span style="color:#24292E;">     </span><span style="color:#032F62;">NAME</span><span style="color:#24292E;">      </span><span style="color:#032F62;">DRIVER</span><span style="color:#24292E;">    </span><span style="color:#032F62;">SCOPE</span></span>
<span class="line"><span style="color:#6F42C1;">5c48fb70b629</span><span style="color:#24292E;">   </span><span style="color:#032F62;">elk-net</span><span style="color:#24292E;">   </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;">    </span><span style="color:#032F62;">local</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建桥接网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;">  </span><span style="color:#032F62;">network</span><span style="color:#24292E;">  </span><span style="color:#032F62;">create</span><span style="color:#24292E;">  [网络名称]</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">com.whr</span></span></code></pre></div>`,14),e=[o];function c(r,t,i,y,E,d){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{k as __pageData,h as default};
