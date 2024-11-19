---
layout: home.njk
title: danwebb.net
pagination:
  data: collections.blog
  size: 10
  alias: posts
---
# Welcome to My Site!

<ul>
  {% for post in posts %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <p>{{ post.data.description }}</p>
    <p><small>{{ post.date }}</small></p> 
  </li>
  {% endfor %}
</ul>