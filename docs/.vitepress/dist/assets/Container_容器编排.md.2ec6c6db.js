import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.fd95ed2e.js";const u=JSON.parse('{"title":"容器编排","description":"","frontmatter":{},"headers":[],"relativePath":"Container/容器编排.md","filePath":"Container/容器编排.md"}'),l={name:"Container/容器编排.md"},o=p(`<h1 id="容器编排" tabindex="-1">容器编排 <a class="header-anchor" href="#容器编排" aria-label="Permalink to &quot;容器编排&quot;">​</a></h1><h2 id="镜像仓库" tabindex="-1">镜像仓库 <a class="header-anchor" href="#镜像仓库" aria-label="Permalink to &quot;镜像仓库&quot;">​</a></h2><p>镜像仓库：统一管理镜像，快速发布；</p><p>公有镜像仓库：</p><ul><li>Docker Hub</li><li>Aliyun</li></ul><p>云厂商镜像仓库服务：</p><ul><li>Aliyun个人镜像服务</li></ul><h2 id="私有镜像服务开源实现" tabindex="-1">私有镜像服务开源实现 <a class="header-anchor" href="#私有镜像服务开源实现" aria-label="Permalink to &quot;私有镜像服务开源实现&quot;">​</a></h2><p>Nexus、Harbor</p><p>私有仓库往往需要一个代理仓库，去公有仓库下载公共的基础镜像；</p><h2 id="容器编排-1" tabindex="-1">容器编排 <a class="header-anchor" href="#容器编排-1" aria-label="Permalink to &quot;容器编排&quot;">​</a></h2><p>对容器的生命周期进行管理；</p><p>完整的服务不单是一个容器，可能涉及以下多个方面：</p><ul><li>服务间存在依赖关系</li><li>集群化的服务副本数量</li><li>集群的服务、网络、数据卷的统一自动化构建</li><li>服务的快速动态弹性伸缩能力</li></ul><p>编排目的：通过简单的描述文件，自动化地构建完整的复杂服务；</p><p>容器编排实现：</p><p>1、<strong>Docker Compose</strong>：在单主机内进行多容器编排，无法跨越多虚机，无法管理分布式服务；</p><ul><li>需要自行安装，并匹配Docker版本；<a href="https://docs.docker.com/compose/compose-file/compose-file-v3/" target="_blank" rel="noreferrer">Docker compose文档</a></li></ul><p>2、<strong>Docker Swarm</strong>：Docker官方的分布式容器编排；</p><p>3、<strong>Google kubernetes</strong>：谷歌的容器化分布式服务编排解决方案；(业界主流)</p><p>4、<strong>Apache Mesos</strong>：Apache的解决方案，比较复杂；</p><h2 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker Compose&quot;">​</a></h2><ul><li>services：提供任意服务的单个容器；</li><li>networks：service所需要的网络管理；</li><li>volumes：service所需要的数据挂载；</li></ul><h3 id="配置样例" tabindex="-1">配置样例 <a class="header-anchor" href="#配置样例" aria-label="Permalink to &quot;配置样例&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0.0.1&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">web_app_1</span><span style="color:#E1E4E8;">:                    </span><span style="color:#6A737D;"># 自定义服务名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">app_1:latest</span><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;"># 指定服务的镜像</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;my_app&quot;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 容器名称，动态扩容时名字相同会报错，不需要指定</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">replicas</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">               </span><span style="color:#6A737D;"># 服务副本数、pod数</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:                 </span><span style="color:#6A737D;"># 依赖的服务</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">redis</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">redis</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">redis</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">db</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">postgres</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">network_mode</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;host&quot;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># network_mode</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:               </span><span style="color:#6A737D;"># 指定服务网络</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">app-net</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:                  </span><span style="color:#6A737D;"># 端口映射 宿主:容器，</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">80:80</span><span style="color:#E1E4E8;">               </span><span style="color:#6A737D;"># 端口写死，动态扩容时可能端口冲突</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">                  </span><span style="color:#6A737D;"># 暴露80但是随机绑定主机的端口，动态扩容不会出错</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:                </span><span style="color:#6A737D;"># 服务数据挂载</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">conf_volumes</span><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;"># 使用已经配置好的别名</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">/usr/app/app.properties:/usr/local/etc/app.properties</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 直接声明也可以</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:            </span><span style="color:#6A737D;"># 配置环境变量</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">profile=dev</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">dns</span><span style="color:#E1E4E8;">:                    </span><span style="color:#6A737D;"># 指定dns，否则默认使用宿主机</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#79B8FF;">8.8.8.8</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#79B8FF;">114.114.114.114</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;java&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-jar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;/usr/local/etc/app.jar&quot;</span><span style="color:#E1E4E8;">]    </span><span style="color:#6A737D;"># 服务启动执行的命令</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#85E89D;">web_app_2</span><span style="color:#E1E4E8;">:          </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">app_2:latest</span><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">replicas</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">           </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">network_mode</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;host&quot;</span><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">: </span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">app-net</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:  </span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">conf_volumes</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;java&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-jar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;/usr/local/etc/app.jar&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置一个网络，也可以使用已有的网络，启动时如果没有则新建</span></span>
<span class="line"><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">app-net</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bridge</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ipam</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">default</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">config</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">subnet</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">172.16.238.0/24</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 子网</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">gateway</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">172.16.238.1</span><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;"># 网关</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 统一配置volumes</span></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">app-volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">conf_volumes</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/usr/app/app.properties:/usr/local/etc/app.properties</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0.0.1&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">web_app_1</span><span style="color:#24292E;">:                    </span><span style="color:#6A737D;"># 自定义服务名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">build</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">app_1:latest</span><span style="color:#24292E;">         </span><span style="color:#6A737D;"># 指定服务的镜像</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;my_app&quot;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 容器名称，动态扩容时名字相同会报错，不需要指定</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">replicas</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">               </span><span style="color:#6A737D;"># 服务副本数、pod数</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:                 </span><span style="color:#6A737D;"># 依赖的服务</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">redis</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">redis</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">redis</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">db</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">postgres</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">network_mode</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;host&quot;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># network_mode</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:               </span><span style="color:#6A737D;"># 指定服务网络</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">app-net</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:                  </span><span style="color:#6A737D;"># 端口映射 宿主:容器，</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">80:80</span><span style="color:#24292E;">               </span><span style="color:#6A737D;"># 端口写死，动态扩容时可能端口冲突</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">                  </span><span style="color:#6A737D;"># 暴露80但是随机绑定主机的端口，动态扩容不会出错</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:                </span><span style="color:#6A737D;"># 服务数据挂载</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">conf_volumes</span><span style="color:#24292E;">        </span><span style="color:#6A737D;"># 使用已经配置好的别名</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/usr/app/app.properties:/usr/local/etc/app.properties</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 直接声明也可以</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:            </span><span style="color:#6A737D;"># 配置环境变量</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">profile=dev</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">dns</span><span style="color:#24292E;">:                    </span><span style="color:#6A737D;"># 指定dns，否则默认使用宿主机</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#005CC5;">8.8.8.8</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#005CC5;">114.114.114.114</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;java&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-jar&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;/usr/local/etc/app.jar&quot;</span><span style="color:#24292E;">]    </span><span style="color:#6A737D;"># 服务启动执行的命令</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#22863A;">web_app_2</span><span style="color:#24292E;">:          </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">app_2:latest</span><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">replicas</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">           </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">network_mode</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;host&quot;</span><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">: </span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">app-net</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:  </span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">conf_volumes</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;java&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-jar&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;/usr/local/etc/app.jar&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 配置一个网络，也可以使用已有的网络，启动时如果没有则新建</span></span>
<span class="line"><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">app-net</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bridge</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ipam</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">default</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">config</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">subnet</span><span style="color:#24292E;">: </span><span style="color:#032F62;">172.16.238.0/24</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 子网</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">gateway</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">172.16.238.1</span><span style="color:#24292E;">     </span><span style="color:#6A737D;"># 网关</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 统一配置volumes</span></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">app-volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">conf_volumes</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/usr/app/app.properties:/usr/local/etc/app.properties</span></span></code></pre></div><h3 id="docker-compose命令" tabindex="-1">docker compose命令 <a class="header-anchor" href="#docker-compose命令" aria-label="Permalink to &quot;docker compose命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看所有服务</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从Docker compose文件创建</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 通过docker compose 更新涉及的服务</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 动态扩缩服务节点数量，指定服务名和数量</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scale</span><span style="color:#E1E4E8;"> [service_name] = 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看指定服务日志</span></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> [service_name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">down</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看所有服务</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 从Docker compose文件创建</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 通过docker compose 更新涉及的服务</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 动态扩缩服务节点数量，指定服务名和数量</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scale</span><span style="color:#24292E;"> [service_name] = 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看指定服务日志</span></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> [service_name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">down</span></span></code></pre></div>`,27),e=[o];function c(r,t,E,y,i,d){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{u as __pageData,m as default};
