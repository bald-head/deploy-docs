# 安装PowerJob

``` yaml
# https://github.com/PowerJob/PowerJob/blob/master/docker-compose.yml

# 使用说明 V4.1.1
# 1. PowerJob 根目录执行：docker-compose up
# 2. 静静等待服务启动。刚开始启动时，powerjob-worker-samples会启动失败，等powerjob-server启动成功后，powerjob-worker-samples才会启动成功。

version: '3.8'
services:
  powerjob-mysql:
    environment:
      MYSQL_ROOT_HOST: "%"
      MYSQL_ROOT_PASSWORD: 123456!
    restart: always
    container_name: powerjob-mysql
    image: powerjob/powerjob-mysql:latest
    ports:
      - "3307:3306"
    volumes:
      - /application/dockerData/powerjob-data/powerjob-mysql:/var/lib/mysql
    command: --lower_case_table_names=1

  powerjob-server:
    container_name: powerjob-server
    image: powerjob/powerjob-server:latest
    restart: always
    depends_on:
      - powerjob-mysql
    environment:
      PARAMS: "--oms.mongodb.enable=false --spring.datasource.core.jdbc-url=jdbc:mysql://powerjob-mysql:3306/powerjob-daily?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai"
    ports:
      - "7700:7700"
      - "10086:10086"
      - "10010:10010"
    volumes:
      - /application/dockerData/powerjob-data/powerjob-server:/root/powerjob/server/

  powerjob-worker-samples:
    container_name: powerjob-worker-samples
    image: powerjob/powerjob-worker-samples:latest
    restart: always
    depends_on:
      - powerjob-mysql
      - powerjob-server
    environment:
      PARAMS: "--powerjob.worker.server-address=powerjob-server:7700"
    ports:
      - "8081:8081"
      - "27777:27777"
    volumes:
      - /application/dockerData/powerjob-data/powerjob-worker-samples:/root/powerjob/worker

```

