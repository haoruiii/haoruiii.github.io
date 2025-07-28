---
page_id: project_2
layout: page
title: Educational Mobility and Its Variation
description: The Experiences of China
img: assets/img/project_2/bg.jpg
importance: 2
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

The statistical results are as follows: 

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
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
