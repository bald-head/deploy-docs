import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.B_66xkI7.js";const y=JSON.parse('{"title":"Filebeat","description":"","frontmatter":{},"headers":[],"relativePath":"docker/use/filebeat/filebeat.md","filePath":"docker/use/filebeat/filebeat.md"}'),l={name:"docker/use/filebeat/filebeat.md"},p=n(`<h1 id="filebeat" tabindex="-1">Filebeat <a class="header-anchor" href="#filebeat" aria-label="Permalink to &quot;Filebeat&quot;">​</a></h1><blockquote><p>轻量型日志采集器，可以将指定日志转发到Logstash、Elasticsearch、Kafka、Redis等中。</p></blockquote><nav class="table-of-contents"><ul><li><a href="#filebeat">Filebeat</a><ul><li><a href="#docker-compose">docker-compose</a></li><li><a href="#配置文件">配置文件</a></li></ul></li></ul></nav><h2 id="docker-compose" tabindex="-1">docker-compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;docker-compose&quot;">​</a></h2><blockquote><p>docker-compose.yml</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">services</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  filebeat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    image</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> filebeat:7.14.1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    container_name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> filebeat</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                  # 容器名为&#39;filebeat&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    hostname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> filebeat</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> unless-stopped</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                   # 指定容器退出后的重启策略为始终重启，但是不考虑在Docker守护进程启动时就已经停止了的容器</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    volumes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                  # 数据卷挂载路径设置,将本机目录映射到容器目录</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/filebeat/logs:/usr/share/filebeat/logs</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">/application/middleware/filebeat/my-log:/usr/share/filebeat/my-log</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 设置环境变量,相当于docker run命令中的-e</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      TZ</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      LANG</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> en_US.UTF-8</span></span></code></pre></div><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><blockquote><p>filebeat.yml</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 可参考 https://www.elastic.co/guide/en/beats/filebeat/7.14/filebeat-reference-yml.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ============================== ↓↓↓↓↓↓ Filebeat 输入配置 ↓↓↓↓↓↓ ===============================</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># input设置，支持Docker,Container,HTTP JSON,Log,Kafka,MQTT,NetFlow,Redis,TCP,DCP,Syslog,Stdin</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">filebeat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  inputs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # input类型，默认是log</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 一个type表示一个input，可以有多个，下面举例：采集多个文件到不同的索引</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> log</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 默认log，从日志文件读取每一行。stdin，从标准输入读取</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 配置是否生效</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      fields</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">demo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      #input文件的位置，可以有多个</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      encoding</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> utf-8</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      paths</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        # - /usr/share/filebeat/my-log/*.log</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/share/filebeat/my-log/demo*.log</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">demo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 如果启用任何一个以 json 开头的配置项，则会将每行日志文本按 JSON 格式解析，解析的字段默认保存到一个名为 json 的字段的子字典中</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 解析 JSON 的操作会在 multiline 之前执行。因此建议让 filebeat 只执行 multiline 操作，将日志发送到 Logstash 时才解析 JSON</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # json.add_error_key: true      # 如果解析出错，则加入 error.message 等字段</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # json.message_key: log         # 指定存储日志内容的字段名。如果指定了该字段，当该字段为顶级字段、取值为字符串类型时，会进行 multiline、include、exclude 操作</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # json.keys_under_root: false   # 是否将解析的字典保存为日志的顶级字段</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # json.overwrite_keys: false    # 在启用了 keys_under_root 时，如果解析出的字段与原有字段冲突，是否覆盖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 默认将每行日志文本视作一个日志事件，可以通过 multiline 规则将连续的多行文本记录成同一个日志事件 =&gt; 可解决日志换行问题</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # multiline 操作会在 include_lines 之前执行</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      multiline</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        pattern</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">^\\d{4}\\-\\d{2}\\-\\d{2}\\s\\d{2}:\\d{2}:\\d{2}</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 匹配的正则 不是以 2021-10-01 12:00:00 格式开头的将合并到上一行</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        negate</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                       # 是否反向匹配</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        match</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> after</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                                       # 取值为 after 则放到上一行之后，取值为 before 则放到下一行之前</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        timeout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 3s</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      #encoding: utf-8               # 编码格式</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      scan_frequency</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1s</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">           # 每隔多久扫描一次日志文件，如果有变动则创建 harvester 进行采集</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      ignore_older</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0s</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">              # 不扫描最后修改时间在多久之前的文件，默认不限制时间。其值应该大于 close_inactive</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      harvester_buffer_size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 16384</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 每个 harvester 在采集日志时的缓冲区大小，单位 bytes</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      max_bytes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 102400</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">             # 每条日志的 message 部分的最大字节数，超过的部分不会发送（但依然会读取）。默认为 10 M ，这里设置为 100 K</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      tail_files</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">             # 是否从文件的末尾开始，倒序读取</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      backoff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1s</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                   # 如果 harvester 读取到文件末尾，则每隔多久检查一次文件是否更新</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      backoff_factor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      max_backoff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1s</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">              # 无新日志时隔 backoff * backoff_factor后再次检测，最大达到max_backoff会被重新检测新日志</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 配置 close_* 参数可以让 harvester 尽早关闭文件，但不利于实时采集日志</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # close_timeout: 0s             # harvester 每次读取文件的超时时间，超时之后立即关闭。默认不限制</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # close_eof: false              # 如果 harvester 读取到文件末尾，则立即关闭</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # close_inactive: 5m            # 如果 harvester 读取到文件末尾之后，超过该时长没有读取到新日志，则立即关闭</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # close_removed: true           # 如果 harvester 读取到文件末尾之后，检查发现日志文件被删除，则立即关闭</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # close_renamed: false          # 如果 harvester 读取到文件末尾之后，检查发现日志文件被重命名，则立即关闭</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 配置 clean_* 参数可以自动清理 registry 文件，但可能导致遗漏采集，或重复采集</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # clean_removed: true           # 如果日志文件在磁盘中被删除，则从 registry 中删除它</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # clean_inactive: 0s            # 如果日志文件长时间未活动，则从 registry 中删除它。默认不限制时间。其值应该大于 scan_frequency + ignore_older</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> log</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      fields</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tool</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      paths</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/share/filebeat/my-log/tool*.log</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">demo</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 自定义索引名称 可查看 http://127.0.0.1:5601/app/management/data/index_management/templates</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #setup.ilm.enabled: false</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #setup.template.name: &quot;my-log&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #setup.template.pattern: &quot;my-log-*&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # ================================== ↓↓↓↓↓↓ 输出配置 ↓↓↓↓↓↓ ===================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # output设置，可以output到kafka,logstash,elasticsearch,redis,file,console,elastic cloud</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # output到任意一个都行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # ---------------------------- Elasticsearch Output ----------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 输出到elasticsearch</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # output.elasticsearch:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #   hosts: [&quot;192.168.101.88:9200&quot;] # es地址，可以有多个，用逗号&quot;,&quot;隔开</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #   username: &quot;elastic&quot;            # ES用户名</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #   password: &quot;123456&quot;             # ES密码</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #   indices:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #     - index: &quot;demo-%{+yyyy.MM.dd}&quot;     # 以日期为后缀，每天新建一个索引</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #       when.contains:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #         fields:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #           index: &quot;demo&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #     - index: &quot;tool-%{+yyyy.MM.dd}&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #       when.contains:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #         fields:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #           index: &quot;tool&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 对采集内容进行预处理(过滤等),定义一个pipeline，此处主要是将@timestamps时间修改日志的时间（默认是采集的时间）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #pipeline: &quot;timestamp-pipeline-id&quot;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #document_type: log # 该type会被添加到type字段，对于输出到ES来说，这个输入时的type字段会被存储，默认log</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  #max_retries: 3     # ES重试次数，默认3次，超过3次后，当前事件将被丢弃</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#============================== Kibana =====================================</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># setup.kibana:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   host: &quot;192.168.101.88:5601&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ------------------------------ Logstash Output -------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 输出到logstash</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">output.logstash</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  hosts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">192.168.101.88:5044</span><span style="--shiki-light:#B5695999;--shiki-dark:#C98A7D99;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # logstash服务器地址，可以有多个，以逗号&quot;,&quot;隔开</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> demo</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> #指定output到哪个索引</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ================================== ↓↓↓↓↓↓ Logging ↓↓↓↓↓↓ ===================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#filebeat日志级别，error, warning, info, debug，默认info</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">logging.level</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> debug</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#================================ ↓↓↓↓↓↓ Procesors ↓↓↓↓↓↓ =====================================</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Configure processors to enhance or manipulate events generated by the beat.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># processors:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   # 自定义字段 - 取日志中的时间</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   - script:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       lang: javascript</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       id: my_filter</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       tag: enable</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       source: &gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#         function process(event) {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#             var str= event.Get(&quot;message&quot;);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#             var time =str.substr(0, 23);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#             event.Put(&quot;log_time&quot;,time);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#         }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   # 将自定义的字段替换到系统默认时间戳，解决顺序错乱问题（写入时间与抓取时间不一致导致）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   - timestamp:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       field: log_time</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       timezone: Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       layouts:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#         - &#39;2021-10-01 12:00:00&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#         - &#39;2021-10-01 12:00:00.999&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       test:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#         - &#39;2021-10-01 22:00:00&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   - add_host_metadata: ~     # 主机相关信息</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   - add_cloud_metadata: ~    # 云服务器的元数据信息,包括阿里云ECS 腾讯云QCloud AWS的EC2的相关信息</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   - add_docker_metadata: ~</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ============================== ↓↓↓↓↓↓ Filebeat modules ↓↓↓↓↓↓ ==============================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">filebeat.config</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  modules</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> \${path.config}/modules.d/*.yml</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 用于配置加载的全局模式</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    reload.enabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">                # 是否允许重新加载</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    #reload.period: 10s                  # 重新加载的时间间隔</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ============================== ↓↓↓↓↓↓ Filebeat autodiscover ↓↓↓↓↓↓ ==============================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># filebeat.autodiscover:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#   providers:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#     - type: docker</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#       hints.enabled: true</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">filebeat.registry.flush</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1s</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">queue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  mem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    events</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 32</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    flush.min_events</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    flush.timeout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1s</span></span></code></pre></div>`,9),e=[p];function h(t,k,r,A,d,D){return a(),i("div",null,e)}const c=s(l,[["render",h]]);export{y as __pageData,c as default};
