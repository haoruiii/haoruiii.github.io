---
page_id: project_2
layout: page
title: 当代中国的教育流动性及其变化
description: 关于年龄组、性别、户口和地域
img: assets/img/project/project_2/bg.jpg
importance: 2
# redirect: https://unsplash.com
category: Academics
related_publications: false
giscus_comments: true
---

2024年春学期主要需完成毕业论文的开题，我则借着必修的310 (研究方法) 课程对中国综合社会调查 (CGSS) 数据的清洗与处理进行练习。这个课程论文主要关注中国的代际教育流动性及其关于年龄组、性别、户口及地域的变化。

本论文使用当时最新的三波CGSS数据 (2017、2018及2021)，共有13513有效样本。受访者的最高教育水平被转化为百分比排名 (percentile rank)，再计算rank-rank关联度以衡量流动性。关联度越高则流动性越低。

**统计结果:**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading = "eager" path = "assets/img/project_2/cohort_gender.jpg" title = "当代中国教育流动性之趋势及其性别差异" class = "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    图1: 当代中国教育流动性之趋势及其性别差异
</div>

- 关联度在年龄组间总体保持稳定、变化范围不超过0.1 (最年轻之组别1999-2003除外)
- 男女之间的关联度似乎没有显著差异，范围都在0.4-0.5之间 (最年轻之组别1999-2003除外)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading = "eager" path = "assets/img/project_2/cohort_hukou.jpg" title = "当代中国教育流动性之趋势及其户口差异" class = "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    图2: 当代中国教育流动性之趋势及其户口差异
</div>

- 关联度在年龄组间总体保持稳定、变化范围不超过0.1 (最年轻之组别1999-2003除外)
- 城市户口持有人之关联度总体相对较高，则流动性较农村户口持有人低。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading = "eager" path = "assets/img/project_2/region.jpg" title = "当代中国各地理区域之教育流动性" class = "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    图3: 当代中国各地理区域之教育流动性
</div>

- 沿海地区（华东、华北、华南）的关联度较高、流动性降低。换言之，沿海地区的教育流动性总体上比内陆地区低。
