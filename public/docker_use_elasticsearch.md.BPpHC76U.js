import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.B_66xkI7.js";const y=JSON.parse('{"title":"安装elasticSearch","description":"","frontmatter":{},"headers":[],"relativePath":"docker/use/elasticsearch.md","filePath":"docker/use/elasticsearch.md"}'),p={name:"docker/use/elasticsearch.md"},l=n(`<h1 id="安装elasticsearch" tabindex="-1">安装elasticSearch <a class="header-anchor" href="#安装elasticsearch" aria-label="Permalink to &quot;安装elasticSearch&quot;">​</a></h1><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">3.8</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 网桥es -&gt; 方便相互通讯</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  es</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    driver</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ridge</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">services</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  elasticsearch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch:7.14.1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">             # 容器名为&#39;elasticsearch&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                  # 数据卷挂载路径设置,将本机目录映射到容器目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /application/dockerData/elasticsearch/data:/usr/share/elasticsearch/data</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /application/dockerData/elasticsearch/logs:/usr/share/elasticsearch/logs</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /application/dockerData/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#      - /application/dockerData/elasticsearch/config/jvm.options:/usr/share/elasticsearch/config/jvm.options</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /application/dockerData/elasticsearch/plugins/ik:/usr/share/elasticsearch/plugins/ik</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # IK中文分词插件</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                              # 设置环境变量,相当于docker run命令中的-e</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      TZ</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      TAKE_FILE_OWNERSHIP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 权限</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      discovery.type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> single-node</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      ES_JAVA_OPTS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -Xmx512m -Xms512m</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      ELASTIC_PASSWORD</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 123456</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # elastic账号密码</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">9200:9200</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">9300:9300</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> es</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  kibana</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kibana:7.14.1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kibana</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /application/dockerData/elasticsearch/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">5601:5601</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    depends_on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    links</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> es</span></span></code></pre></div><h2 id="elasticsarch-yml" tabindex="-1">elasticsarch.yml <a class="header-anchor" href="#elasticsarch-yml" aria-label="Permalink to &quot;elasticsarch.yml&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cluster.name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">docker-cluster</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">network.host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 9200</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 开启es跨域</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.cors.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.cors.allow-origin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">*</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.cors.allow-headers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Authorization</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 开启安全控制</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.security.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.security.transport.ssl.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span></code></pre></div><h2 id="jvm-options" tabindex="-1">jvm.options <a class="header-anchor" href="#jvm-options" aria-label="Permalink to &quot;jvm.options&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span>## JVM configuration</span></span>
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
<span class="line"><span>9-:-Xlog:gc*,gc+age=trace,safepoint:file=logs/gc.log:utctime,pid,tags:filecount=32,filesize=64m</span></span></code></pre></div><h2 id="kibana-yml" tabindex="-1">kibana.yml <a class="header-anchor" href="#kibana-yml" aria-label="Permalink to &quot;kibana.yml&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ** THIS IS AN AUTO-GENERATED FILE **</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Default Kibana configuration for docker target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">server.name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kibana</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">server.host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0.0.0.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">server.publicBaseUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://kibana:5601</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 这里地址改为你访问kibana的地址，不能以 / 结尾</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">elasticsearch.hosts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://elasticsearch:9200</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # http://www.zhengqingya.com:9200 TODO 修改为自己的ip</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.monitoring.ui.container.elasticsearch.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">elasticsearch.username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">elastic</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # es账号</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">elasticsearch.password</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">123456</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # es密码</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">i18n.locale</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zh-CN</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 中文</span></span></code></pre></div><h2 id="ik分词器" tabindex="-1">ik分词器 <a class="header-anchor" href="#ik分词器" aria-label="Permalink to &quot;ik分词器&quot;">​</a></h2><p><a href="../../static/elasticsearch/plugin/ik.zip">ik分词器</a></p>`,10),e=[l];function t(h,k,r,c,d,g){return i(),a("div",null,e)}const A=s(p,[["render",t]]);export{y as __pageData,A as default};
