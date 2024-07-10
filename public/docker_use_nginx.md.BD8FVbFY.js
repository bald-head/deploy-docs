import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.D6RIsNC-.js";const _=JSON.parse('{"title":"安装Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"docker/use/nginx.md","filePath":"docker/use/nginx.md"}'),i={name:"docker/use/nginx.md"},l=p(`<h1 id="安装nginx" tabindex="-1">安装Nginx <a class="header-anchor" href="#安装nginx" aria-label="Permalink to &quot;安装Nginx&quot;">​</a></h1><h2 id="_1-27-0" tabindex="-1">1.27.0 <a class="header-anchor" href="#_1-27-0" aria-label="Permalink to &quot;1.27.0&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes material-theme-lighter material-theme-darker vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">version</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;">3.8</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">services</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">  nginx</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">    image</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> nginx:1.27.0</span><span style="--shiki-light:#90A4AE;--shiki-dark:#EEFFFF;"> </span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">    container_name</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">    restart</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> alawys</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">    volumes</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span></span>
<span class="line"><span style="--shiki-light:#90A4AE;--shiki-dark:#545454;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      # 宿主机时间</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">      -</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> /etc/localtime:/etc/localtime</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">      -</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> /application/dockerData/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">      -</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> /application/dockerData/nginx/conf/conf.d/default.conf:/etc/nginx/conf.d/default.conf</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">      -</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> /application/dockerData/nginx/html:/usr/share/nginx/html</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">      -</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> /application/dockerData/nginx/log:/var/log/nginx</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">    environment</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#90A4AE;--shiki-dark:#EEFFFF;"> </span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">      TZ</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">      LANG</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> en_US.UTF-8</span></span>
<span class="line"><span style="--shiki-light:#E53935;--shiki-dark:#F07178;">    ports</span><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#90A4AE;--shiki-dark:#545454;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                              # 映射端口</span></span>
<span class="line"><span style="--shiki-light:#39ADB5;--shiki-dark:#89DDFF;">      -</span><span style="--shiki-light:#91B859;--shiki-dark:#C3E88D;"> 80:80</span></span></code></pre></div><h3 id="nginx-conf" tabindex="-1">nginx.conf <a class="header-anchor" href="#nginx-conf" aria-label="Permalink to &quot;nginx.conf&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-darker vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>user  nginx;</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>error_log  /var/log/nginx/error.log warn;</span></span>
<span class="line"><span>pid        /var/run/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  localhost; # 服务器地址或绑定域名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;</span></span>
<span class="line"><span>        #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # =========================================================</span></span>
<span class="line"><span>        # ================== ↓↓↓↓↓↓ start ↓↓↓↓↓↓ ==================</span></span>
<span class="line"><span>        # =========================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root   /usr/share/nginx/html;</span></span>
<span class="line"><span>            #try_files $uri $uri/ @router;</span></span>
<span class="line"><span>            index  index.html index.htm;</span></span>
<span class="line"><span>            try_files $uri $uri/ /index.html; # 解决页面刷新 404 问题</span></span>
<span class="line"><span>            #proxy_pass http://zhengqingya.gitee.io; # 代理的ip地址和端口号</span></span>
<span class="line"><span>            #proxy_connect_timeout 600; #代理的连接超时时间（单位：毫秒）</span></span>
<span class="line"><span>            #proxy_read_timeout 600; #代理的读取资源超时时间（单位：毫秒）</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #location @router {</span></span>
<span class="line"><span>            #rewrite ^.*$ /index.html last; # 拦截80端口后的所有请求地址到登录页面 -&gt; 相当于后端的拦截器</span></span>
<span class="line"><span>        #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     #   location ^~ /api {  # ^~/api/表示匹配前缀为api的请求</span></span>
<span class="line"><span>     #       proxy_pass  http://www.zhengqingya.com:5000/api/;  # 注：proxy_pass的结尾有/， -&gt; 效果：会在请求时将/api/*后面的路径直接拼接到后面</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>     #       #  proxy_set_header作用：设置发送到后端服务器(上面proxy_pass)的请求头值</span></span>
<span class="line"><span>     #       #   【当Host设置为 $http_host 时，则不改变请求头的值;</span></span>
<span class="line"><span>     #       #     当Host设置为 $proxy_host 时，则会重新设置请求头中的Host信息;</span></span>
<span class="line"><span>     #       #     当为$host变量时，它的值在请求包含Host请求头时为Host字段的值，在请求未携带Host请求头时为虚拟主机的主域名;</span></span>
<span class="line"><span>     #       #     当为$host:$proxy_port时，即携带端口发送 ex: $host:8080 】</span></span>
<span class="line"><span>     #       proxy_set_header Host $host;</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>     #       proxy_set_header X-Real-IP $remote_addr; # 在web服务器端获得用户的真实ip 需配置条件①    【 $remote_addr值 = 用户ip 】</span></span>
<span class="line"><span>     #       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;# 在web服务器端获得用户的真实ip 需配置条件②</span></span>
<span class="line"><span>     #       proxy_set_header REMOTE-HOST $remote_addr;</span></span>
<span class="line"><span>     #       # proxy_set_header X-Forwarded-For $http_x_forwarded_for; # $http_x_forwarded_for变量 = X-Forwarded-For变量</span></span>
<span class="line"><span>     #   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     #   location ^~ /blog/ {</span></span>
<span class="line"><span>     #       proxy_pass  http://zhengqingya.gitee.io/blog/;  # ^~/blog/表示匹配前缀是blog的请求，proxy_pass的结尾有/， 则会把/blog/*后面的路径直接拼接到后面，即移除blog</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>     #       proxy_set_header Host $proxy_host; # 改变请求头值 -&gt; 转发到码云才会成功</span></span>
<span class="line"><span>     #       proxy_set_header  X-Real-IP  $remote_addr;</span></span>
<span class="line"><span>     #       proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span>     #       proxy_set_header X-NginX-Proxy true;</span></span>
<span class="line"><span>     #   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # =========================================================</span></span>
<span class="line"><span>        # ================== ↑↑↑↑↑↑ end ↑↑↑↑↑↑ ==================</span></span>
<span class="line"><span>        # =========================================================</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>        #</span></span>
<span class="line"><span>        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>        location = /50x.html {</span></span>
<span class="line"><span>            root   /usr/share/nginx/html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="default-conf" tabindex="-1">default.conf <a class="header-anchor" href="#default-conf" aria-label="Permalink to &quot;default.conf&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes material-theme-lighter material-theme-darker vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>  listen       80;</span></span>
<span class="line"><span>  server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  #charset koi8-r;</span></span>
<span class="line"><span>  #access_log  /var/log/nginx/host.access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>    root   /usr/share/nginx/html;</span></span>
<span class="line"><span>    index  index.html index.htm;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  #error_page  404              /404.html;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span>  #</span></span>
<span class="line"><span>  error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span>  location = /50x.html {</span></span>
<span class="line"><span>    root   /usr/share/nginx/html;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>
<span class="line"><span>  #</span></span>
<span class="line"><span>  #location ~ \\.php$ {</span></span>
<span class="line"><span>  #    proxy_pass   http://127.0.0.1;</span></span>
<span class="line"><span>  #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span>  #</span></span>
<span class="line"><span>  #location ~ \\.php$ {</span></span>
<span class="line"><span>  #    root           html;</span></span>
<span class="line"><span>  #    fastcgi_pass   127.0.0.1:9000;</span></span>
<span class="line"><span>  #    fastcgi_index  index.php;</span></span>
<span class="line"><span>  #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>
<span class="line"><span>  #    include        fastcgi_params;</span></span>
<span class="line"><span>  #}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # deny access to .htaccess files, if Apache&#39;s document root</span></span>
<span class="line"><span>  # concurs with nginx&#39;s one</span></span>
<span class="line"><span>  #</span></span>
<span class="line"><span>  #location ~ /\\.ht {</span></span>
<span class="line"><span>  #    deny  all;</span></span>
<span class="line"><span>  #}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,7),e=[l];function t(c,r,o,h,d,k){return a(),n("div",null,e)}const x=s(i,[["render",t]]);export{_ as __pageData,x as default};
