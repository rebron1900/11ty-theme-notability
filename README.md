# Hugo Theme Notability

My personal stories hugo theme

## 使用方法

```
git submodule add https://github.com/bigfa/hugo-theme-notability.git themes/notability

echo "theme = 'notability'" >> hugo.toml
```

## Release Note

### 0.0.8

-   修改为本地获取条目，无需设置 token

### 0.0.7

-   新增豆瓣条目支持

使用方法

微信扫码登录https://node.wpista.com/

输入你的豆瓣数字 id，点击保存即可自动同步豆瓣记录。

点击 Get integration token 会生成一个 token。

在你的站点配置中加入参数

```
[params]
    wpdToken= '上面生成的token'
```

### 0.0.6

-   修改头部样式
-   移动端样式优化

### 0.0.5

-   列表样式调整
-   修复时间技术错误

### 0.0.4

-   增加相对时间
-   使用`normalize.css`
-   本地化字体

### 0.0.3

-   增加菜单设置
-   移除多余页面

### 0.0.2

-   修复豆瓣页面的一些 UI 问题

### 0.0.1

-   初始化
