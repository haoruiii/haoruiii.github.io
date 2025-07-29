---
page_id: project_2
layout: page
title: Educational Mobility and Its Variation
description: The Experiences of China
img: assets/img/project_2/bg.jpg
importance: 2
# redirect: https://unsplash.com
category: Academics
related_publications: false
giscus_comments: true
---

In the Winter 2024 semester, while I needed more time to specify the research question of my thesis, I knew that I would likely use data from the Chinese General Social Survey (CGSS). As a result, I used the opportunity of the class “Sociology 310: Introduction to Research Methods” to have some practice. In this class project, I looked at intergenerational educational mobility in contemporary China and its variation by four variables: 

- Cohort
- Gender
- *Hukou* (household registration)
- Geographic Region

The data I used were the three newest waves of CGSS back then - 2017, 2018, and 2021. The sample size was 13,513 in total after cleaning. I regarded education as a categorical outcome, and converted people's highest level of education into percentile ranks. Mobility was then evaluated by the rank-rank correlation. 

**Statistical Results:**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading = "eager" path = "assets/img/project_2/cohort_gender.jpg" title = "Trends in Intergenerational Educational Mobility in Postsocialist China, Daughters and Sons Compared" class = "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1. Trends in Intergenerational Educational Mobility in Postsocialist China, Daughters and Sons Compared. 
</div>

- Except for the youngest cohort (1999~2003), the rank-rank correlations do not vary a lot by increasing or decreasing for 0.1 or more, showing a stable pattern. 
- For both women and men, the rank-rank correlations ranges between 0.4 and 0.5 (except for the youngest cohort), so that the net effect of gender on educational mobility is minor or even neglectable. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading = "eager" path = "assets/img/project_2/cohort_hukou.jpg" title = "Trends in Intergenerational Educational Mobility in Postsocialist China, Rural and Urban Hukou Compared" class = "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2. Trends in Intergenerational Educational Mobility in Postsocialist China, Rural and Urban Hukou Compared. 
</div>

- Similarly, except for the youngest cohort (1999~2003), the rank-rank correlations do not vary a lot by increasing or decreasing for 0.1 or more, showing a stable pattern. 
- For urban *hukou* holders (right panel), rank-rank correlations are generally higher, indicating a lower mobility than their rural counterparts. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading = "eager" path = "assets/img/project_2/region.jpg" title = "Intergenerational Educational Mobility in Different Geographic Regions in Postsocialist China" class = "img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. Intergenerational Educational Mobility in Different Geographic Regions in Postsocialist China. 
</div>

- Finally, there are higher rank-rank correlations in Eastern, Northeastern, Northern, and Southern China (coastal regions), which represent lower mobility. Therefore, the level of intergenerational educational mobility is higher in northwestern places (inland) than in southeastern regions (coastal) in China. 
