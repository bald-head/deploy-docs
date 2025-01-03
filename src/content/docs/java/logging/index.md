---
title: logback
description: 日志切换
---

## logback
> 知识链接
>
> - [logback官方文档](https://logback.qos.ch/manual/layouts.html#coloring)
> - [logback（二）springboot配置日志文件格式、logback-spring配置文件详解、logback为日志自定义颜色【史上最详细】](https://blog.csdn.net/lh155136/article/details/125312351)
> - [logback（三）mybatis-plus结合logback将sql语句输出到日志文件](https://blog.csdn.net/lh155136/article/details/125616984)
> - [Java的日志框架之Logback 详细介绍](https://www.cnblogs.com/rachel-aoao/p/java_logback.html)
>
> - [spring boot logback日志配置文件 样例，包含按日志类型输出](https://blog.csdn.net/qq_17229141/article/details/127924153?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~AD_ESQUERY~yljh-1-127924153-blog-110688104.pc_relevant_3mothn_strategy_and_data_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~AD_ESQUERY~yljh-1-127924153-blog-110688104.pc_relevant_3mothn_strategy_and_data_recovery&utm_relevant_index=2)
###  resource目录新建文件`logback.xml`，复制以下内容，并作适当修改即可完成

- logback可以被自动识别的规范名称：`logback-spring.xml`, `logback-spring.groovy`, `logback.xml`, or `logback.groovy`
- [建议您在日志配置中使用-spring变体（例如，logback-spring.xml而不是logback.xml）。如果您使用标准配置位置，spring无法完全控制日志初始化。](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.logging.custom-log-configuration)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--scan:当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true-->
<!--scanPeriod:设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。默认的时间间隔为1分钟-->
<configuration scan="true" scanPeriod="30 seconds">
    <!--property：自定义的上下文属性配置，可以使用${name}的方式引用value值-->
    <property name="LOG_DIR" value="logs"/>
    <property name="APP_NAME" value="server-name"/>
    <property name="APP_PATH" value="/home"/>

    <!--自定义日志输出格式-->
    <!--<property name="CONSOLE_LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level ${PID:- } [%15thread] %-40.40(%logger{40}.%method) : %msg%n"/>-->
    <!--<property name="FILE_LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level ${PID:- } [%15thread] %-40.40(%logger{40}.%method) : %msg%n"/>-->
    <!--<property name="CONSOLE_COLOR_LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} %highlight(%-5level) %magenta(${PID:- }) [%15thread] %boldCyan(%-40.40(%logger{40}.%method)) : %msg%n"/>-->

    <!--引入spring boot默认的logback配置文件，这里使用和spring一致的输出格式-->
    <include resource="org/springframework/boot/logging/logback/defaults.xml"/>

    <!--标准输出：控制台日志-->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>${CONSOLE_LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!--文件输出：追加日志到文件中-->
    <appender name="FILE-LOG" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!--实时日志文件的存放路径和名称-->
        <file>${APP_PATH}/out.log</file>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>${FILE_LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
        <!--设置滚动策略-->
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--滚动切割产生的历史日志文件的存放路径和名称-->
            <!--%d{yyyy-MM-dd}：按天进行日志滚动-->
            <!--%i：当文件大小超过maxFileSize时，按照i进行文件滚动-->
            <FileNamePattern>${APP_PATH}/${LOG_DIR}/${APP_NAME}.%d{yyyy-MM-dd}.%i.log</FileNamePattern>
            <!--历史日志保存最大天数-->
            <MaxHistory>30</MaxHistory>
            <!--当日志文件超过指定的大小时，根据FileNamePattern标签里提到的%i进行日志文件滚动-->
            <maxFileSize>100MB</maxFileSize>
        </rollingPolicy>
    </appender>

    <!--细化日志中依赖包路径输出级别-->
    <logger name="org.springframework" level="info"/>

    <!--将appender都加入到root根标签-->
    <!--root级别 DEBUG 如果设置为WARN，则低于WARN的信息都不会输出-->
    <!--日志级别从低到高分为TRACE < DEBUG < INFO < WARN < ERROR < FATAL，配置WARN只会记录自身和比高于自身级别的日志-->
    <!--开发调试阶段打开控制台输出，日志级别设置为INFO，生产环境关闭控制台输出，只需要ERROR级别并记录到文件中-->
    <root level="INFO">
        <appender-ref ref="STDOUT"/>
        <appender-ref ref="FILE-LOG"/>
    </root>
</configuration>
```
### 🖊 logback的pattern配置

| 转换字符                    | 效果                                                         |
| :-------------------------- | :----------------------------------------------------------- |
| %logger                     | 生成类名称，假设logger的名字为com.hello.rachel.service.SayService %logger{0} ---> SayService %logger{10} ---> c.h.r.s.SayService %logger{25} ---> c.h.rachel.service.SayService |
| %d{pattern}或%date          | 生成日期： %d ---> 2022-07-05 19:00:00,000                   |
| %caller                     | 生成日志调用者的位置信息，依赖JVM实现 %caller{2} ---> 0 [main] DEBUG - logging statement Caller+0 at mainPackage.sub.sample.Bar.sampleMethodName(Bar.java:22) Caller+1 at mainPackage.sub.sample.Bar.createLoggingRequest(Bar.java:17) |
| %line 或 %L                 | 生成日志请求所在的行号                                       |
| %m 或 %msg 或 %message      | 生成日志具体信息                                             |
| %n                          | 行分隔符                                                     |
| %p 或 %level                | 生成日志级别                                                 |
| %t 或 %thread               | 生成日志事件的线程名                                         |
| %X{key:-defaultVal} 或 %mdc | 生成日志事件线程的MDC内容                                    |
| %replace(p)                 | 在子模式p产生的字符中，将所有出现正则表达式r的地方替换成t    |

## log4j2配置

> 转载：[超级完整log4j2的配置](https://blog.csdn.net/sunrj_niu/article/details/116737348)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--日志级别以及优先级排序: OFF > FATAL > ERROR > WARN > INFO > DEBUG > TRACE > ALL -->
<!--Configuration后面的status,这个用于设置log4j2自身内部的信息输出,可以不设置,当设置成trace时,你会看到log4j2内部各种详细输出-->
<!--monitorInterval：Log4j能够自动检测修改配置 文件和重新配置本身,设置间隔秒数-->
<configuration status="WARN" monitorInterval="1800">

    <Properties>
        <!-- ==============================================公共配置============================================== -->
        <!-- 设置日志文件的目录名称 -->
        <property name="logFileName">koal-account</property>

        <!-- 日志默认存放的位置,可以设置为项目根路径下,也可指定绝对路径 -->
        <!-- 存放路径一:通用路径,window平台 -->
       <!--  <property name="basePath">d:/logs/${logFileName}</property>-->
         <property name="basePath">/usr/local/log/logs/${logFileName}</property>
        <!-- 存放路径二:web工程专用,java项目没有这个变量,需要删掉,否则会报异常,这里把日志放在web项目的根目录下 -->
        <!-- <property name="basePath">${web:rootDir}/${logFileName}</property> -->
        <!-- 存放路径三:web工程专用,java项目没有这个变量,需要删掉,否则会报异常,这里把日志放在tocmat的logs目录下 -->
       <!-- <property name="basePath">${sys:catalina.home}/logs/${logFileName}</property>-->

        <!-- 控制台默认输出格式,"%-5level":日志级别,"%l":输出完整的错误位置,是小写的L,因为有行号显示,所以影响日志输出的性能 -->
        <property name="console_log_pattern">%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] %l - %m%n</property>
        <!-- 日志文件默认输出格式,不带行号输出(行号显示会影响日志输出性能);%C:大写,类名;%M:方法名;%m:错误信息;%n:换行 -->
        <!-- <property name="log_pattern">%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] %C.%M - %m%n</property> -->
        <!-- 日志文件默认输出格式,另类带行号输出(对日志输出性能未知);%C:大写,类名;%M:方法名;%L:行号;%m:错误信息;%n:换行 -->
        <property name="log_pattern">%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level] %C.%M[%L line] - %m%n</property>

        <!-- 日志默认切割的最小单位 -->
        <property name="every_file_size">20MB</property>
        <!-- 日志默认输出级别 -->
        <property name="output_log_level">DEBUG</property>

        <!-- ===========================================所有级别日志配=========================================== -->
        <!-- 日志默认存放路径(所有级别日志) -->
        <property name="rolling_fileName">${basePath}/all.log</property>
        <!-- 日志默认压缩路径,将超过指定文件大小的日志,自动存入按"年月"建立的文件夹下面并进行压缩,作为存档 -->
        <property name="rolling_filePattern">${basePath}/%d{yyyy-MM}/all-%d{yyyy-MM-dd-HH}-%i.log.gz</property>
        <!-- 日志默认同类型日志,同一文件夹下可以存放的数量,不设置此属性则默认为7个,filePattern最后要带%i才会生效 -->
        <property name="rolling_max">500</property>
        <!-- 日志默认同类型日志,多久生成一个新的日志文件,这个配置需要和filePattern结合使用;
                如果设置为1,filePattern是%d{yyyy-MM-dd}到天的格式,则间隔一天生成一个文件
                如果设置为12,filePattern是%d{yyyy-MM-dd-HH}到小时的格式,则间隔12小时生成一个文件 -->
        <property name="rolling_timeInterval">12</property>
        <!-- 日志默认同类型日志,是否对封存时间进行调制,若为true,则封存时间将以0点为边界进行调整,
                如:现在是早上3am,interval是4,那么第一次滚动是在4am,接着是8am,12am...而不是7am -->
        <property name="rolling_timeModulate">true</property>

        <!-- ============================================Info级别日志============================================ -->
        <!-- Info日志默认存放路径(Info级别日志) -->
        <property name="info_fileName">${basePath}/info.log</property>
        <!-- Info日志默认压缩路径,将超过指定文件大小的日志,自动存入按"年月"建立的文件夹下面并进行压缩,作为存档 -->
        <property name="info_filePattern">${basePath}/%d{yyyy-MM}/info-%d{yyyy-MM-dd}-%i.log.gz</property>
        <!-- Info日志默认同一文件夹下可以存放的数量,不设置此属性则默认为7个 -->
        <property name="info_max">100</property>
        <!-- 日志默认同类型日志,多久生成一个新的日志文件,这个配置需要和filePattern结合使用;
                如果设置为1,filePattern是%d{yyyy-MM-dd}到天的格式,则间隔一天生成一个文件
                如果设置为12,filePattern是%d{yyyy-MM-dd-HH}到小时的格式,则间隔12小时生成一个文件 -->
        <property name="info_timeInterval">1</property>
        <!-- 日志默认同类型日志,是否对封存时间进行调制,若为true,则封存时间将以0点为边界进行调整,
                如:现在是早上3am,interval是4,那么第一次滚动是在4am,接着是8am,12am...而不是7am -->
        <property name="info_timeModulate">true</property>

        <!-- ============================================Warn级别日志============================================ -->
        <!-- Warn日志默认存放路径(Warn级别日志) -->
        <property name="warn_fileName">${basePath}/warn.log</property>
        <!-- Warn日志默认压缩路径,将超过指定文件大小的日志,自动存入按"年月"建立的文件夹下面并进行压缩,作为存档 -->
        <property name="warn_filePattern">${basePath}/%d{yyyy-MM}/warn-%d{yyyy-MM-dd}-%i.log.gz</property>
        <!-- Warn日志默认同一文件夹下可以存放的数量,不设置此属性则默认为7个 -->
        <property name="warn_max">100</property>
        <!-- 日志默认同类型日志,多久生成一个新的日志文件,这个配置需要和filePattern结合使用;
                如果设置为1,filePattern是%d{yyyy-MM-dd}到天的格式,则间隔一天生成一个文件
                如果设置为12,filePattern是%d{yyyy-MM-dd-HH}到小时的格式,则间隔12小时生成一个文件 -->
        <property name="warn_timeInterval">1</property>
        <!-- 日志默认同类型日志,是否对封存时间进行调制,若为true,则封存时间将以0点为边界进行调整,
                如:现在是早上3am,interval是4,那么第一次滚动是在4am,接着是8am,12am...而不是7am -->
        <property name="warn_timeModulate">true</property>

        <!-- ============================================Error级别日志============================================ -->
        <!-- Error日志默认存放路径(Error级别日志) -->
        <property name="error_fileName">${basePath}/error.log</property>
        <!-- Error日志默认压缩路径,将超过指定文件大小的日志,自动存入按"年月"建立的文件夹下面并进行压缩,作为存档 -->
        <property name="error_filePattern">${basePath}/%d{yyyy-MM}/error-%d{yyyy-MM-dd}-%i.log.gz</property>
        <!-- Error日志默认同一文件夹下可以存放的数量,不设置此属性则默认为7个 -->
        <property name="error_max">100</property>
        <!-- 日志默认同类型日志,多久生成一个新的日志文件,这个配置需要和filePattern结合使用;
                如果设置为1,filePattern是%d{yyyy-MM-dd}到天的格式,则间隔一天生成一个文件
                如果设置为12,filePattern是%d{yyyy-MM-dd-HH}到小时的格式,则间隔12小时生成一个文件 -->
        <property name="error_timeInterval">1</property>
        <!-- 日志默认同类型日志,是否对封存时间进行调制,若为true,则封存时间将以0点为边界进行调整,
                如:现在是早上3am,interval是4,那么第一次滚动是在4am,接着是8am,12am...而不是7am -->
        <property name="error_timeModulate">true</property>

		 <!-- ============================================DEBUG级别日志============================================ -->
        <!-- Error日志默认存放路径(Error级别日志) -->
        <property name="debug_fileName">${basePath}/debug.log</property>
        <!-- Error日志默认压缩路径,将超过指定文件大小的日志,自动存入按"年月"建立的文件夹下面并进行压缩,作为存档 -->
        <property name="debug_filePattern">${basePath}/%d{yyyy-MM}/error-%d{yyyy-MM-dd}-%i.log.gz</property>
        <!-- Error日志默认同一文件夹下可以存放的数量,不设置此属性则默认为7个 -->
        <property name="debug_max">100</property>
        <!-- 日志默认同类型日志,多久生成一个新的日志文件,这个配置需要和filePattern结合使用;
                如果设置为1,filePattern是%d{yyyy-MM-dd}到天的格式,则间隔一天生成一个文件
                如果设置为12,filePattern是%d{yyyy-MM-dd-HH}到小时的格式,则间隔12小时生成一个文件 -->
        <property name="debug_timeInterval">1</property>
        <!-- 日志默认同类型日志,是否对封存时间进行调制,若为true,则封存时间将以0点为边界进行调整,
                如:现在是早上3am,interval是4,那么第一次滚动是在4am,接着是8am,12am...而不是7am -->
        <property name="debug_timeModulate">true</property>


        <!-- ============================================控制台显示控制============================================ -->
        <!-- 控制台显示的日志最低级别 -->
        <property name="console_print_level">INFO</property>

    </Properties>

    <!--定义appender -->
    <appenders>
        <!-- =======================================用来定义输出到控制台的配置======================================= -->
        <Console name="Console" target="SYSTEM_OUT">
            <!-- 设置控制台只输出level及以上级别的信息(onMatch),其他的直接拒绝(onMismatch)-->
            <ThresholdFilter level="${console_print_level}" onMatch="ACCEPT" onMismatch="DENY"/>
            <!-- 设置输出格式,不设置默认为:%m%n -->
            <PatternLayout pattern="${console_log_pattern}"/>
        </Console>

        <!-- ================================打印root中指定的level级别以上的日志到文件================================ -->
        <RollingFile name="RollingFile" fileName="${rolling_fileName}" filePattern="${rolling_filePattern}">
            <PatternLayout pattern="${log_pattern}"/>
            <Policies>
                <TimeBasedTriggeringPolicy interval="${rolling_timeInterval}" modulate="${warn_timeModulate}"/>
                <SizeBasedTriggeringPolicy size="${every_file_size}"/>
            </Policies>
            <!-- 设置同类型日志,同一文件夹下可以存放的数量,如果不设置此属性则默认存放7个文件 -->
            <DefaultRolloverStrategy max="${rolling_max}" />
        </RollingFile>

        <!-- =======================================打印INFO级别的日志到文件======================================= -->
        <RollingFile name="InfoFile" fileName="${info_fileName}" filePattern="${info_filePattern}">
            <PatternLayout pattern="${log_pattern}"/>
            <Policies>
                <TimeBasedTriggeringPolicy interval="${info_timeInterval}" modulate="${info_timeModulate}"/>
                <SizeBasedTriggeringPolicy size="${every_file_size}"/>
            </Policies>
            <DefaultRolloverStrategy max="${info_max}" />
            <Filters>
                <ThresholdFilter level="WARN" onMatch="DENY" onMismatch="NEUTRAL"/>
                <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>
            </Filters>
        </RollingFile>

        <!-- =======================================打印WARN级别的日志到文件======================================= -->
        <RollingFile name="WarnFile" fileName="${warn_fileName}" filePattern="${warn_filePattern}">
            <PatternLayout pattern="${log_pattern}"/>
            <Policies>
                <TimeBasedTriggeringPolicy interval="${warn_timeInterval}" modulate="${warn_timeModulate}"/>
                <SizeBasedTriggeringPolicy size="${every_file_size}"/>
            </Policies>
            <DefaultRolloverStrategy max="${warn_max}" />
            <Filters>
                <ThresholdFilter level="ERROR" onMatch="DENY" onMismatch="NEUTRAL"/>
                <ThresholdFilter level="WARN" onMatch="ACCEPT" onMismatch="DENY"/>
            </Filters>
        </RollingFile>

        <!-- =======================================打印ERROR级别的日志到文件======================================= -->
        <RollingFile name="ErrorFile" fileName="${error_fileName}" filePattern="${error_filePattern}">
            <PatternLayout pattern="${log_pattern}"/>
            <Policies>
                <TimeBasedTriggeringPolicy interval="${error_timeInterval}" modulate="${error_timeModulate}"/>
                <SizeBasedTriggeringPolicy size="${every_file_size}"/>
            </Policies>
            <DefaultRolloverStrategy max="${error_max}" />
            <Filters>
                <ThresholdFilter level="FATAL" onMatch="DENY" onMismatch="NEUTRAL"/>
                <ThresholdFilter level="ERROR" onMatch="ACCEPT" onMismatch="DENY"/>
            </Filters>
        </RollingFile>

		  <!-- =======================================打印DEBUG级别的日志到文件======================================= -->
        <RollingFile name="DebugFile" fileName="${debug_fileName}" filePattern="${debug_filePattern}">
            <PatternLayout pattern="${log_pattern}"/>
            <Policies>
                <TimeBasedTriggeringPolicy interval="${debug_timeInterval}" modulate="${debug_timeModulate}"/>
                <SizeBasedTriggeringPolicy size="${every_file_size}"/>
            </Policies>
            <DefaultRolloverStrategy max="${debug_max}" />
            <Filters>
                <ThresholdFilter level="INFO" onMatch="DENY" onMismatch="NEUTRAL"/>
                <ThresholdFilter level="DEBUG" onMatch="ACCEPT" onMismatch="DENY"/>
            </Filters>
        </RollingFile>
    </appenders>

    <!--定义logger,只有定义了logger并引入的appender,appender才会生效-->
    <loggers>
        <!-- 设置打印sql语句配置开始,以下两者配合使用,可以优化日志的输出信息,减少一些不必要信息的输出 -->
        <!-- 设置java.sql包下的日志只打印DEBUG及以上级别的日志,此设置可以支持sql语句的日志打印 -->
        <logger name="org.apache.ibatis" level="DEBUG">
            <appender-ref ref="Console"/>
            <appender-ref ref="RollingFile"/>
        </logger>
        <!-- 设置org.mybatis.spring包下的日志只打印WARN及以上级别的日志 -->
        <logger name="org.mybatis.spring" level="WARN" additivity="false">
            <appender-ref ref="Console"/>
        </logger>
        <!-- 设置org.springframework包下的日志只打印WARN及以上级别的日志 -->
        <logger name="org.springframework" level="WARN" additivity="false">
            <appender-ref ref="Console"/>
        </logger>
        <!-- 设置com.qfx.workflow.service包下的日志只打印WARN及以上级别的日志 -->
        <logger name="com.qfx.workflow.service" level="WARN" additivity="false">
            <appender-ref ref="Console"/>
        </logger>

		<logger name="org.apache.ibatis" level="DEBUG"/>
        <!-- 设置打印sql语句配置结束 -->

        <!--建立一个默认的root的logger-->
        <root level="${output_log_level}">
            <appender-ref ref="RollingFile"/>
            <appender-ref ref="Console"/>
            <appender-ref ref="InfoFile"/>
            <appender-ref ref="WarnFile"/>
            <appender-ref ref="ErrorFile"/>
			<appender-ref ref="DebugFile"/>
        </root>
    </loggers>

</configuration>
```
