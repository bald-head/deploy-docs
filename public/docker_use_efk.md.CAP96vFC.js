import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.D6RIsNC-.js";const y=JSON.parse('{"title":"安装 EFK","description":"","frontmatter":{},"headers":[],"relativePath":"docker/use/efk.md","filePath":"docker/use/efk.md"}'),p={name:"docker/use/efk.md"},l=n(`<h1 id="安装-efk" tabindex="-1">安装 EFK <a class="header-anchor" href="#安装-efk" aria-label="Permalink to &quot;安装 EFK&quot;">​</a></h1><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 网桥 -&gt; 方便相互通讯</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  efk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bridge</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  elasticsearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">elasticsearch:7.14.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">efk_elasticsearch</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 容器名为&#39;efk_elasticsearch&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 数据卷挂载路径设置,将本机目录映射到容器目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/application/dockerData/app/elasticsearch/data:/usr/share/elasticsearch/data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/application/dockerData/app/elasticsearch/logs:/usr/share/elasticsearch/logs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/application/dockerData/app/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#     - /application/dockerData/app/elasticsearch/config/jvm.options:/usr/share/elasticsearch/config/jvm.options</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      TZ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      LANG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      TAKE_FILE_OWNERSHIP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 权限</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      discovery.type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">single-node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      ES_JAVA_OPTS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-Xmx512m -Xms512m&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      ELASTIC_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123456&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # elastic账号密码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9200:9200&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9300:9300&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">efk</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  kibana</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kibana:7.14.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">efk_kibana</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/application/dockerData/app/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5601:5601&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    links</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">efk</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  filebeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filebeat:7.14.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 原镜像\`elastic/filebeat:7.14.1\`</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">efk_filebeat</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filebeat</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:                                  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 数据卷挂载路径设置,将本机目录映射到容器目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/application/dockerData/app/filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/application/dockerData/app/filebeat/logs:/usr/share/filebeat/logs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/application/dockerData/app/filebeat/my-log:/usr/share/filebeat/my-log</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置环境变量,相当于docker run命令中的-e</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      TZ</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      LANG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">efk</span></span></code></pre></div><h2 id="elasticsearch-yml" tabindex="-1">elasticsearch.yml <a class="header-anchor" href="#elasticsearch-yml" aria-label="Permalink to &quot;elasticsearch.yml&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cluster.name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docker-cluster&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">network.host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">http.port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9200</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启es跨域</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">http.cors.enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">http.cors.allow-origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">http.cors.allow-headers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Authorization</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启安全控制</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xpack.security.enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xpack.security.transport.ssl.enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><h2 id="jvm-options" tabindex="-1">jvm.options <a class="header-anchor" href="#jvm-options" aria-label="Permalink to &quot;jvm.options&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## JVM configuration</span></span>
<span class="line"><span></span></span>
<span class="line"><span>################################################################</span></span>
<span class="line"><span>## IMPORTANT: JVM heap size</span></span>
<span class="line"><span>################################################################</span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>## You should always set the min and max JVM heap</span></span>
<span class="line"><span>## size to the same value. For example, to set</span></span>
<span class="line"><span>## the heap to 4 GB, set:</span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>## -Xms4g</span></span>
<span class="line"><span>## -Xmx4g</span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>## See https://www.elastic.co/guide/en/elasticsearch/reference/current/heap-size.html</span></span>
<span class="line"><span>## for more information</span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Xms represents the initial size of total heap space</span></span>
<span class="line"><span># Xmx represents the maximum size of total heap space</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-Xms1g</span></span>
<span class="line"><span>-Xmx1g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>################################################################</span></span>
<span class="line"><span>## Expert settings</span></span>
<span class="line"><span>################################################################</span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>## All settings below this section are considered</span></span>
<span class="line"><span>## expert settings. Don&#39;t tamper with them unless</span></span>
<span class="line"><span>## you understand what you are doing</span></span>
<span class="line"><span>##</span></span>
<span class="line"><span>################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## GC configuration</span></span>
<span class="line"><span>8-13:-XX:+UseConcMarkSweepGC</span></span>
<span class="line"><span>8-13:-XX:CMSInitiatingOccupancyFraction=75</span></span>
<span class="line"><span>8-13:-XX:+UseCMSInitiatingOccupancyOnly</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## G1GC Configuration</span></span>
<span class="line"><span># NOTE: G1 GC is only supported on JDK version 10 or later</span></span>
<span class="line"><span># to use G1GC, uncomment the next two lines and update the version on the</span></span>
<span class="line"><span># following three lines to your version of the JDK</span></span>
<span class="line"><span># 10-13:-XX:-UseConcMarkSweepGC</span></span>
<span class="line"><span># 10-13:-XX:-UseCMSInitiatingOccupancyOnly</span></span>
<span class="line"><span>14-:-XX:+UseG1GC</span></span>
<span class="line"><span>14-:-XX:G1ReservePercent=25</span></span>
<span class="line"><span>14-:-XX:InitiatingHeapOccupancyPercent=30</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## JVM temporary directory</span></span>
<span class="line"><span>-Djava.io.tmpdir=\${ES_TMPDIR}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## heap dumps</span></span>
<span class="line"><span></span></span>
<span class="line"><span># generate a heap dump when an allocation from the Java heap fails</span></span>
<span class="line"><span># heap dumps are created in the working directory of the JVM</span></span>
<span class="line"><span>-XX:+HeapDumpOnOutOfMemoryError</span></span>
<span class="line"><span></span></span>
<span class="line"><span># specify an alternative path for heap dumps; ensure the directory exists and</span></span>
<span class="line"><span># has sufficient space</span></span>
<span class="line"><span>-XX:HeapDumpPath=data</span></span>
<span class="line"><span></span></span>
<span class="line"><span># specify an alternative path for JVM fatal error logs</span></span>
<span class="line"><span>-XX:ErrorFile=logs/hs_err_pid%p.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## JDK 8 GC logging</span></span>
<span class="line"><span>8:-XX:+PrintGCDetails</span></span>
<span class="line"><span>8:-XX:+PrintGCDateStamps</span></span>
<span class="line"><span>8:-XX:+PrintTenuringDistribution</span></span>
<span class="line"><span>8:-XX:+PrintGCApplicationStoppedTime</span></span>
<span class="line"><span>8:-Xloggc:logs/gc.log</span></span>
<span class="line"><span>8:-XX:+UseGCLogFileRotation</span></span>
<span class="line"><span>8:-XX:NumberOfGCLogFiles=32</span></span>
<span class="line"><span>8:-XX:GCLogFileSize=64m</span></span>
<span class="line"><span></span></span>
<span class="line"><span># JDK 9+ GC logging</span></span>
<span class="line"><span>9-:-Xlog:gc*,gc+age=trace,safepoint:file=logs/gc.log:utctime,pid,tags:filecount=32,filesize=64m</span></span></code></pre></div><h2 id="filebeat-yml" tabindex="-1">filebeat.yml <a class="header-anchor" href="#filebeat-yml" aria-label="Permalink to &quot;filebeat.yml&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可参考 https://www.elastic.co/guide/en/beats/filebeat/7.14/filebeat-reference-yml.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 收集系统日志</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filebeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  inputs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">log</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/usr/share/filebeat/my-log/demo*.log</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;demo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # java多行日志合并</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      multiline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;^\\d{4}\\-\\d{2}\\-\\d{2}\\s\\d{2}:\\d{2}:\\d{2}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 匹配的正则 不是以 2021-10-01 12:00:00 格式开头的将合并到上一行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        negate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                       # 是否反向匹配</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">after</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                       # 取值为 after 则放到上一行之后，取值为 before 则放到下一行之前</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3s</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出到elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">output.elasticsearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;elasticsearch:9200&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ES地址，可以有多个，用逗号&quot;,&quot;隔开</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;elastic&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # ES用户名</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123456&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # ES密码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  indices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;demo-%{+yyyy.MM.dd}&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 以日期为后缀，每天新建一个索引</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      when.contains</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;demo&quot;</span></span></code></pre></div><h2 id="kibana-yml" tabindex="-1">kibana.yml <a class="header-anchor" href="#kibana-yml" aria-label="Permalink to &quot;kibana.yml&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ** THIS IS AN AUTO-GENERATED FILE **</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Default Kibana configuration for docker target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">server.name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">kibana</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">server.host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">server.publicBaseUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://kibana:5601&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 这里地址改为你访问kibana的地址，不能以 / 结尾</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">elasticsearch.hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://elasticsearch:9200&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># http://www.zhengqingya.com:9200 TODO 修改为自己的ip</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xpack.monitoring.ui.container.elasticsearch.enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">elasticsearch.username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;elastic&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # es账号</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">elasticsearch.password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123456&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # es密码</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i18n.locale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">zh-CN</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 中文</span></span></code></pre></div>`,10),e=[l];function h(t,k,E,r,c,d){return i(),a("div",null,e)}const o=s(p,[["render",h]]);export{y as __pageData,o as default};
