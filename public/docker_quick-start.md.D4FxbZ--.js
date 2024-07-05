import{_ as i,D as e,c as t,I as n,w as l,a3 as s,o as h,a as p}from"./chunks/framework.B_66xkI7.js";const C=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"docker/quick-start.md","filePath":"docker/quick-start.md"}'),k={name:"docker/quick-start.md"},r=s('<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><h2 id="在线安装" tabindex="-1">在线安装 <a class="header-anchor" href="#在线安装" aria-label="Permalink to &quot;在线安装&quot;">​</a></h2><h3 id="设置镜像-centos-7" tabindex="-1">设置镜像-centos-7 <a class="header-anchor" href="#设置镜像-centos-7" aria-label="Permalink to &quot;设置镜像-centos-7&quot;">​</a></h3><h4 id="备份配置文件" tabindex="-1">备份配置文件 <a class="header-anchor" href="#备份配置文件" aria-label="Permalink to &quot;备份配置文件&quot;">​</a></h4><p><code>cp -a /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak</code></p><h4 id="修改yum镜像地址" tabindex="-1">修改yum镜像地址 <a class="header-anchor" href="#修改yum镜像地址" aria-label="Permalink to &quot;修改yum镜像地址&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.huaweicloud.com/repository/conf/CentOS-7-anon.repo</span></span></code></pre></div><p>执行<code>yum clean all</code>清除原有 yum 缓存</p><p>执行<code>yum makecache</code>（刷新缓存）或者<code>yum repolist all</code>（查看所有配置可以使用的文件，会自动刷新缓存）。</p><h3 id="设置镜像-centos-8-stream" tabindex="-1">设置镜像-centos-8-stream <a class="header-anchor" href="#设置镜像-centos-8-stream" aria-label="Permalink to &quot;设置镜像-centos-8-stream&quot;">​</a></h3>',10),d=s(`<h4 id="备份配置文件-1" tabindex="-1">备份配置文件 <a class="header-anchor" href="#备份配置文件-1" aria-label="Permalink to &quot;备份配置文件&quot;">​</a></h4><p><code>cp -a /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak</code></p><h4 id="修改yum镜像地址-1" tabindex="-1">修改yum镜像地址 <a class="header-anchor" href="#修改yum镜像地址-1" aria-label="Permalink to &quot;修改yum镜像地址&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.huaweicloud.com/repository/conf/CentOS-8-anon.repo</span></span></code></pre></div><p>执行<code>yum clean all</code>清除原有 yum 缓存</p><p>执行<code>yum makecache</code>（刷新缓存）或者<code>yum repolist all</code>（查看所有配置可以使用的文件，会自动刷新缓存）。</p><h3 id="设置镜像-ubuntn" tabindex="-1">设置镜像-ubuntn <a class="header-anchor" href="#设置镜像-ubuntn" aria-label="Permalink to &quot;设置镜像-ubuntn&quot;">​</a></h3><h4 id="备份配置文件-2" tabindex="-1">备份配置文件 <a class="header-anchor" href="#备份配置文件-2" aria-label="Permalink to &quot;备份配置文件&quot;">​</a></h4><p><code>sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak</code></p><h4 id="修改sources-list文件" tabindex="-1">修改<strong>sources.list</strong>文件 <a class="header-anchor" href="#修改sources-list文件" aria-label="Permalink to &quot;修改**sources.list**文件&quot;">​</a></h4><p>将<strong><a href="http://archive.ubuntu.com" target="_blank" rel="noreferrer">http://archive.ubuntu.com</a></strong>和<strong><a href="http://security.ubuntu.com" target="_blank" rel="noreferrer">http://security.ubuntu.com</a></strong>替换成<strong><a href="http://mirrors.huaweicloud.com" target="_blank" rel="noreferrer">http://mirrors.huaweicloud.com</a></strong>，可以参考如下命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;s@http://.*archive.ubuntu.com@http://mirrors.huaweicloud.com@g&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;s@http://.*security.ubuntu.com@http://mirrors.huaweicloud.com@g&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span></span></code></pre></div><p>执行**<code>apt-get update</code>**更新索引</p><h3 id="安装docker-centos" tabindex="-1">安装docker-centos <a class="header-anchor" href="#安装docker-centos" aria-label="Permalink to &quot;安装docker-centos&quot;">​</a></h3><h4 id="设置仓库" tabindex="-1">设置仓库 <a class="header-anchor" href="#设置仓库" aria-label="Permalink to &quot;设置仓库&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yum-utils</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用华为云的惊醒</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum-config-manager</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --add-repo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    https://mirrors.huaweicloud.com/docker-ce/linux/centos/docker-ce.repo</span></span></code></pre></div><h4 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装docker以及docker-compose</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> containerd.io</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose-plugin</span></span></code></pre></div><h4 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><h4 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><h4 id="卸载" tabindex="-1">卸载 <a class="header-anchor" href="#卸载" aria-label="Permalink to &quot;卸载&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除安装包：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除镜像、容器、配置文件等内容：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/docker</span></span></code></pre></div><h3 id="安装docker-ubuntu" tabindex="-1">安装docker-ubuntu <a class="header-anchor" href="#安装docker-ubuntu" aria-label="Permalink to &quot;安装docker-ubuntu&quot;">​</a></h3><h4 id="信任docker的gpg公钥" tabindex="-1">信任docker的GPG公钥 <a class="header-anchor" href="#信任docker的gpg公钥" aria-label="Permalink to &quot;信任docker的GPG公钥&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirrors.huaweicloud.com/docker-ce/linux/ubuntu/gpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span></span></code></pre></div><h4 id="软件仓库" tabindex="-1">软件仓库 <a class="header-anchor" href="#软件仓库" aria-label="Permalink to &quot;软件仓库&quot;">​</a></h4><h5 id="amd64" tabindex="-1">amd64 <a class="header-anchor" href="#amd64" aria-label="Permalink to &quot;amd64&quot;">​</a></h5><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-apt-repository</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deb [arch=amd64] https://mirrors.huaweicloud.com/docker-ce/linux/ubuntu $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsb_release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -cs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) stable&quot;</span></span></code></pre></div><h4 id="树莓派或其它arm架构计算机" tabindex="-1">树莓派或其它Arm架构计算机 <a class="header-anchor" href="#树莓派或其它arm架构计算机" aria-label="Permalink to &quot;树莓派或其它Arm架构计算机&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deb [arch=armhf] https://mirrors.huaweicloud.com/docker-ce/linux/ubuntu $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsb_release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -cs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) stable&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.d/docker.list</span></span></code></pre></div><h4 id="更新索引文件并安装" tabindex="-1">更新索引文件并安装 <a class="header-anchor" href="#更新索引文件并安装" aria-label="Permalink to &quot;更新索引文件并安装&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span></span></code></pre></div><h4 id="卸载-1" tabindex="-1">卸载 <a class="header-anchor" href="#卸载-1" aria-label="Permalink to &quot;卸载&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除安装包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> purge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除镜像、容器、配置文件等内容 </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/lib/docker</span></span></code></pre></div><h2 id="离线安装" tabindex="-1">离线安装 <a class="header-anchor" href="#离线安装" aria-label="Permalink to &quot;离线安装&quot;">​</a></h2><h3 id="下载安装包" tabindex="-1">下载安装包 <a class="header-anchor" href="#下载安装包" aria-label="Permalink to &quot;下载安装包&quot;">​</a></h3><p><strong>根据电脑cpu架构下载对应的镜像</strong></p><p><a href="https://download.docker.com/linux/static/stable/" target="_blank" rel="noreferrer">镜像地址</a></p><h3 id="上传安装包" tabindex="-1">上传安装包 <a class="header-anchor" href="#上传安装包" aria-label="Permalink to &quot;上传安装包&quot;">​</a></h3><p>使用rz命令或ftp工具将下载下来的离线包上传到指定服务器上</p><h3 id="解压安装包" tabindex="-1">解压安装包 <a class="header-anchor" href="#解压安装包" aria-label="Permalink to &quot;解压安装包&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-27.0.3.tgz</span></span></code></pre></div><h3 id="复制解压文件到-usr-bin下" tabindex="-1">复制解压文件到<code>/usr/bin</code>下 <a class="header-anchor" href="#复制解压文件到-usr-bin下" aria-label="Permalink to &quot;复制解压文件到\`/usr/bin\`下&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/</span></span></code></pre></div><h3 id="注册docker为服务" tabindex="-1">注册docker为服务 <a class="header-anchor" href="#注册docker为服务" aria-label="Permalink to &quot;注册docker为服务&quot;">​</a></h3><blockquote><p>默认docker的存储路径为<code>/data/docker0</code> 如需修改请修改<code>docker.service</code><code>ExecStart=/usr/bin/dockerd --graph=/data/docker0</code></p></blockquote><p>在/etc/systemd/system/目录下新增docker.service文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/docker.service</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Docker</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Container</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Engine</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Documentation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://docs.docker.com</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">After</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">network-online.target</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> firewalld.service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Wants</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">network-online.target</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">notify</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the default is not to use systemd for cgroups because the delegate issues still</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># exists and systemd currently does not support the cgroup feature set required</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># for containers run by docker</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果有搭建私有镜像仓库，--insecure-registry设置为私有镜像仓库地址。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/bin/dockerd</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> --graph</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/docker0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecReload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/bin/kill</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HUP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $MAINPID</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Having non-zero Limit*s causes performance problems due to accounting overhead</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># in the kernel. We recommend using cgroups to do container-local accounting.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LimitNOFILE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">infinity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LimitNPROC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">infinity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LimitCORE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">infinity</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Uncomment TasksMax if your systemd version supports it.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Only systemd 226 and above support this version.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#TasksMax=infinity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TimeoutStartSec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># set delegate yes so that systemd does not reset the cgroups of docker containers</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Delegate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># kill only the docker process, not all processes in the cgroup</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">KillMode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">process</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># restart the docker process if it exits prematurely</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">StartLimitBurst</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">StartLimitInterval</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">60s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">multi-user.target</span></span></code></pre></div><h3 id="启动docker服务" tabindex="-1">启动docker服务 <a class="header-anchor" href="#启动docker服务" aria-label="Permalink to &quot;启动docker服务&quot;">​</a></h3><p>赋予docker.service 执行权限</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/docker.service</span></span></code></pre></div><p>重载配置文件以生效</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span></code></pre></div><p>启动</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><p>设置开机启动</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker.service</span></span></code></pre></div><p>查看服务状态</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><h3 id="安装docker-compose" tabindex="-1">安装docker-compose <a class="header-anchor" href="#安装docker-compose" aria-label="Permalink to &quot;安装docker-compose&quot;">​</a></h3><p><strong>根据电脑cpu架构下载对应的镜像</strong></p><p><a href="https://github.com/docker/compose/releases" target="_blank" rel="noreferrer">镜像地址</a></p><h3 id="上传安装包-1" tabindex="-1">上传安装包 <a class="header-anchor" href="#上传安装包-1" aria-label="Permalink to &quot;上传安装包&quot;">​</a></h3><p>使用rz命令或ftp工具将下载下来的离线包上传到指定服务器上</p><h3 id="移动文件到-usr-local-bin下" tabindex="-1">移动文件到<code>/usr/local/bin</code>下 <a class="header-anchor" href="#移动文件到-usr-local-bin下" aria-label="Permalink to &quot;移动文件到\`/usr/local/bin\`下&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /data/rjtl/docker-compose-linux-x86_64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker-compose</span></span></code></pre></div>`,69);function o(c,g,u,F,y,b){const a=e("font");return h(),t("div",null,[r,n(a,{style:{color:"red"}},{default:l(()=>[p("※ 提醒： CentOS 8.x（非 Stream 版）已提前进入 EOL 停止服务阶段")]),_:1}),d])}const E=i(k,[["render",o]]);export{C as __pageData,E as default};
