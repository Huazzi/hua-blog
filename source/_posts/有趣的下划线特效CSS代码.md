---
title: 有趣的下划线特效CSS代码
cover: 'https://cbc25ff.webp.li/underline-motion.webp'
tags:
  - css
categories: 技术
abbrlink: 38734
date: 2025-04-29 23:51:00
---
## 下划线条滑动效果

> 原教程：https://www.bilibili.com/video/BV1S5wEeAEre/?spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=a83fee858f027f7dcf931e57d6111578

```css
				/* 滑动线条效果 */
        .title span {
            background: linear-gradient(to right, #ec695c, #61c454) 
            no-repeat right bottom;
            background-size: 0 5px;
            transition: background-size 1300ms;
            /* border-radius: 3px; */
        }
        .title span:hover {
            background-position-x: left; 
            background-size: 100% 5px;
        }
```



示例效果：

![示例效果](https://cbc25ff.webp.li/UnderLine-Motion.gif)

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>下划线滑动特效</title>
    <style type="text/css">
        .title {
            /*水平居中*/
            text-align: center;
            /*垂直居中*/
            line-height: 100px;
        }
    
        .title span {
            background: linear-gradient(to right, #ec695c, #61c454) no-repeat right bottom;
            background-size: 0 5px;
            transition: background-size 1300ms;
            /* border-radius: 3px; */
        }
    
        .title span:hover {
            background-position-x: left;
            background-size: 100% 5px;
        }
    </style>
</head>
<body>
    <h1 class="title">
        <span>鼠标覆盖以展示下划线滑动特效~~~</span></h1>
</body>
</html>
```