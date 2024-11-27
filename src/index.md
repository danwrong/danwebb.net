---
layout: home.njk
title:
pagination:
  data: collections.blog
  size: 10
  alias: posts
---
{% for post in posts reversed %}
<article>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p class="posted-at">{{ post.date | date }}</p>
    <div class="post-body">{{ post.templateContent }}</div>
</article>
{% endfor %}