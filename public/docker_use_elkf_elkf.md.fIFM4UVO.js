import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.B_66xkI7.js";const y=JSON.parse('{"title":"ELFK","description":"","frontmatter":{},"headers":[],"relativePath":"docker/use/elkf/elkf.md","filePath":"docker/use/elkf/elkf.md"}'),l={name:"docker/use/elkf/elkf.md"},p=n(`<h1 id="elfk" tabindex="-1">ELFK <a class="header-anchor" href="#elfk" aria-label="Permalink to &quot;ELFK&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#elfk">ELFK</a><ul><li><a href="#docker-compose">docker-compose</a></li><li><a href="#使用文档">使用文档</a></li><li><a href="#配置文件">配置文件</a><ul><li><a href="#elasticsearch">elasticsearch</a></li><li><a href="#kibana">kibana</a></li><li><a href="#logstash">logstash</a></li><li><a href="#filebeat">filebeat</a></li></ul></li></ul></li></ul></nav><h2 id="docker-compose" tabindex="-1">docker-compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;docker-compose&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 网桥 -&gt; 方便相互通讯</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  elkf</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">services</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  elasticsearch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch:7.14.1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_elasticsearch</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         # 容器名为&#39;elkf_elasticsearch&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                   # 指定容器退出后的重启策略为始终重启，但是不考虑在Docker守护进程启动时就已经停止了的容器</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                  # 数据卷挂载路径设置,将本机目录映射到容器目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/elasticsearch/data:/usr/share/elasticsearch/data</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/elasticsearch/logs:/usr/share/elasticsearch/logs</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#      - &quot;/application/middleware/elkf/elasticsearch/config/jvm.options:/usr/share/elasticsearch/config/jvm.options&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                              # 设置环境变量,相当于docker run命令中的-e</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      TZ</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      TAKE_FILE_OWNERSHIP</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">true</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 权限</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      discovery.type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> single-node</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      ES_JAVA_OPTS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-Xmx512m -Xms512m</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      ELASTIC_PASSWORD</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">123456</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # elastic账号密码</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">9200:9200</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">9300:9300</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  kibana</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kibana:7.14.1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_kibana</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_kibana</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">5601:5601</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    depends_on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    links</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  logstash</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logstash:7.14.1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_logstash</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_logstash</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      LS_JAVA_OPTS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">-Xmx512m -Xms512m</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/logstash/data:/usr/share/logstash/data</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/logstash/config/logstash.yml:/usr/share/logstash/config/logstash.yml</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#      - &quot;/application/middleware/elkf/logstash/config/logstash.conf:/usr/share/logstash/config/logstash.conf&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/logstash/config/test:/usr/share/logstash/config/test</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#    command: logstash -f /usr/share/logstash/config/logstash.conf    # 指定logstash启动时使用的配置文件 - 指定单个文件</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    command</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logstash -f /usr/share/logstash/config/test</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       # 指定logstash启动时使用的配置文件 - 指定目录夹（系统会自动读取文件夹下所有配置文件，并在内存中整合）</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    ports</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">9600:9600</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#      - &quot;10001-10010:10001-10010&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">5044:5044</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    depends_on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  filebeat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> filebeat:7.14.1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_filebeat</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf_filebeat</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                   # 指定容器退出后的重启策略为始终重启，但是不考虑在Docker守护进程启动时就已经停止了的容器</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                  # 数据卷挂载路径设置,将本机目录映射到容器目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/filebeat/logs:/usr/share/filebeat/logs</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/elkf/filebeat/my-log:/usr/share/filebeat/my-log</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 设置环境变量,相当于docker run命令中的-e</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      TZ</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    depends_on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logstash</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    networks</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> elkf</span></span></code></pre></div><h2 id="使用文档" tabindex="-1"><a href="./README.html">使用文档</a> <a class="header-anchor" href="#使用文档" aria-label="Permalink to &quot;[使用文档](./README)&quot;">​</a></h2><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><h3 id="elasticsearch" tabindex="-1">elasticsearch <a class="header-anchor" href="#elasticsearch" aria-label="Permalink to &quot;elasticsearch&quot;">​</a></h3><blockquote><p>elasticsearch.yml</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cluster.name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">docker-cluster</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">network.host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 9200</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 开启es跨域</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.cors.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.cors.allow-origin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">*</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.cors.allow-headers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Authorization</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 开启安全控制</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.security.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.security.transport.ssl.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span></code></pre></div><blockquote><p>jvm.options</p></blockquote><div class="language-properties vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## JVM configuration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">################################################################</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## IMPORTANT: JVM heap size</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">################################################################</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## You should always set the min and max JVM heap</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## size to the same value. For example, to set</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## the heap to 4 GB, set:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## -Xms4g</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## -Xmx4g</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## See https://www.elastic.co/guide/en/elasticsearch/reference/current/heap-size.html</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## for more information</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">################################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Xms represents the initial size of total heap space</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Xmx represents the maximum size of total heap space</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-Xms1g</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-Xmx1g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">################################################################</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## Expert settings</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">################################################################</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## All settings below this section are considered</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## expert settings. Don&#39;t tamper with them unless</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## you understand what you are doing</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">##</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">################################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## GC configuration</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8-13:-XX:+UseConcMarkSweepGC</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8-13:-XX:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CMSInitiatingOccupancyFraction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">75</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8-13:-XX:+UseCMSInitiatingOccupancyOnly</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## G1GC Configuration</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># NOTE: G1 GC is only supported on JDK version 10 or later</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># to use G1GC, uncomment the next two lines and update the version on the</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># following three lines to your version of the JDK</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 10-13:-XX:-UseConcMarkSweepGC</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 10-13:-XX:-UseCMSInitiatingOccupancyOnly</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">14-:-XX:+UseG1GC</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">14-:-XX:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">G1ReservePercent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">25</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">14-:-XX:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">InitiatingHeapOccupancyPercent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">30</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## JVM temporary directory</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Djava.io.tmpdir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\${ES_TMPDIR}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## heap dumps</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># generate a heap dump when an allocation from the Java heap fails</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># heap dumps are created in the working directory of the JVM</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-XX:+HeapDumpOnOutOfMemoryError</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># specify an alternative path for heap dumps; ensure the directory exists and</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># has sufficient space</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-XX:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">HeapDumpPath</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># specify an alternative path for JVM fatal error logs</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">-XX:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">ErrorFile</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">logs/hs_err_pid%p.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## JDK 8 GC logging</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-XX:+PrintGCDetails</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-XX:+PrintGCDateStamps</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-XX:+PrintTenuringDistribution</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-XX:+PrintGCApplicationStoppedTime</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-Xloggc:logs/gc.log</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-XX:+UseGCLogFileRotation</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-XX:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">NumberOfGCLogFiles</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">32</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">8:-XX:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">GCLogFileSize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">64m</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># JDK 9+ GC logging</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">9-:-Xlog:gc*,gc+</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">trace,safepoint:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">logs/gc.log:utctime,pid,tags:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">filecount</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">32,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">filesize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">64m</span></span></code></pre></div><h3 id="kibana" tabindex="-1">kibana <a class="header-anchor" href="#kibana" aria-label="Permalink to &quot;kibana&quot;">​</a></h3><blockquote><p>kibana.yml</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ** THIS IS AN AUTO-GENERATED FILE **</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Default Kibana configuration for docker target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">server.name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> kibana</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">server.host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0.0.0.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">server.publicBaseUrl</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://ekf_kibana:5601</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 这里地址改为你访问kibana的地址，不能以 / 结尾</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">elasticsearch.hosts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://elkf_elasticsearch:9200</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 使用容器的hostname或者使用自己的ip</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.monitoring.ui.container.elasticsearch.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">elasticsearch.username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">elastic</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # es账号</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">elasticsearch.password</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">123456</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # es密码</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">i18n.locale</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> zh-CN</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 中文</span></span></code></pre></div><h3 id="logstash" tabindex="-1">logstash <a class="header-anchor" href="#logstash" aria-label="Permalink to &quot;logstash&quot;">​</a></h3><blockquote><p>logstash.conf</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Sample Logstash configuration for creating a simple</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Beats -&gt; Logstash -&gt; Elasticsearch pipeline.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">input {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    tcp {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        mode =&gt; &quot;server&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        host =&gt; &quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        port =&gt; 5044</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        codec =&gt; json{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">          charset=&gt;&quot;UTF-8&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # ex: 创建2个微服务demo，建立2个不同的输入，将两个服务的日志分别输入到不同的索引中</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    tcp {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        mode =&gt; &quot;server&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        host =&gt; &quot;0.0.0.0&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         # 允许任意主机发送日志</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        type =&gt; &quot;java_demo_log_1&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 设定type以区分每个输入源</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        port =&gt; 10001</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        codec =&gt; json_lines</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">       # 数据格式</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    tcp {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        mode =&gt; &quot;server&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        host =&gt; &quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        type =&gt; &quot;java_demo_log_2&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        port =&gt; 10002</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        codec =&gt; json_lines</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">output {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # For detail config for elasticsearch as output,</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # See: https://www.elastic.co/guide/en/logstash/current/plugins-outputs-elasticsearch.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # elasticsearch {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #     hosts =&gt; [&quot;http://elkf_elasticsearch:9200&quot;]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #     #index =&gt; &quot;%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #     index =&gt; &quot;demo-log-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #     #user =&gt; &quot;elastic&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #     #password =&gt; &quot;changeme&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    stdout{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        codec =&gt; rubydebug</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    if [type] == &quot;java_demo_log_1&quot; {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        elasticsearch {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            action =&gt; &quot;index&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                            # 输出时创建映射</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            hosts  =&gt; &quot;http://elkf_elasticsearch:9200&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        # ElasticSearch地址和端口</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            index  =&gt; &quot;java_demo_log_1-%{+YYYY.MM.dd}&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # 指定索引名-按天</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            codec  =&gt; &quot;json&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    if [type] == &quot;java_demo_log_2&quot; {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        elasticsearch {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            action =&gt; &quot;index&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            hosts  =&gt; &quot;http://elkf_elasticsearch:9200&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            index  =&gt; &quot;java_demo_log_2-%{+YYYY.MM.dd}&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">            codec  =&gt; &quot;json&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre></div><blockquote><p>logstash.yml</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">http.host</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0.0.0.0</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.monitoring.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.monitoring.elasticsearch.hosts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">http://elkf_elasticsearch:9200</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ]</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.monitoring.elasticsearch.username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">elastic</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xpack.monitoring.elasticsearch.password</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">123456</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span></code></pre></div><blockquote><p>demo.conf</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 日志输入</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">input {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    beats {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        port =&gt; 5044</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">filter {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 让无结构的日志内容结构化</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    grok {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        match =&gt; { &quot;message&quot; =&gt; &quot;(?&lt;datetime&gt;\\d{4}-\\d{2}-\\d{2}\\s\\d{2}:\\d{2}:\\d{2}\\.\\d{3})\\s+(?&lt;level&gt;\\w+)\\s+\\d+\\s+-+\\s\\[[^\\[\\]]+\\]\\s+(?&lt;class&gt;\\S+)\\s+:(?&lt;msg&gt;.*)&quot; }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    mutate {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        # 过滤字段</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        remove_field =&gt; [&quot;LOG_MAX_HISTORY_DAY&quot;, &quot;LOG_HOME&quot;, &quot;APP_NAME&quot;]</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        remove_field =&gt; [&quot;@version&quot;, &quot;_score&quot;, &quot;port&quot;, &quot;level_value&quot;, &quot;tags&quot;, &quot;_type&quot;, &quot;host&quot;]</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        remove_field =&gt; [&quot;agent&quot;, &quot;@timestamp&quot;, &quot;@timestamp&quot;, &quot;ecs&quot;, &quot;input&quot;, &quot;log&quot;]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 日志输出-控制台</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">output {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    stdout{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        codec =&gt; rubydebug</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 日志输出-es</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">output {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    elasticsearch {</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        action =&gt; &quot;index&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                       # 输出时创建映射</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        hosts  =&gt; &quot;http://elkf_elasticsearch:9200&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # ES地址和端口</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        user =&gt; &quot;elastic&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                       # ES用户名</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        password =&gt; &quot;123456&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                    # ES密码</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        index  =&gt; &quot;demo-%{+YYYY.MM.dd}&quot;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">         # 指定索引名-按天</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">        codec  =&gt; &quot;json&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre></div><h3 id="filebeat" tabindex="-1">filebeat <a class="header-anchor" href="#filebeat" aria-label="Permalink to &quot;filebeat&quot;">​</a></h3><blockquote><p>filebeta.yml</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 可参考 https://www.elastic.co/guide/en/beats/filebeat/7.14/filebeat-reference-yml.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 收集系统日志</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">filebeat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  inputs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> log</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      encoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> utf-8</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      paths</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/share/filebeat/my-log/demo*.log</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 系统日志路径</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">demo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> ]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # java多行日志合并</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      multiline</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        pattern</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">^\\d{4}\\-\\d{2}\\-\\d{2}\\s\\d{2}:\\d{2}:\\d{2}</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 匹配的正则 不是以 2021-10-01 12:00:00 格式开头的将合并到上一行</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        negate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                       # 是否反向匹配</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        match</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> after</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                       # 取值为 after 则放到上一行之后，取值为 before 则放到下一行之前</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        timeout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 3s</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 输出到logstash</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">output.logstash</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  hosts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">elkf_logstash:5044</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # logstash服务器地址，可以有多个，以逗号&quot;,&quot;隔开</span></span></code></pre></div>`,24),h=[p];function t(k,e,r,d,g,A){return a(),i("div",null,h)}const o=s(l,[["render",t]]);export{y as __pageData,o as default};
