---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

Browse the pages and work on this website. An [XML sitemap]({{ '/sitemap.xml' | relative_url }}) is also available.

## Main pages

<ul>{% for link in site.data.navigation.main %}
  <li><a href="{{ link.url | relative_url }}">{{ link.title | escape }}</a></li>
{% endfor %}</ul>

## Publications

{% assign publications = site.publications | sort: 'date' | reverse %}
<ul>{% for item in publications %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></li>
{% endfor %}</ul>

## Teaching

<ul>{% for item in site.teaching %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></li>
{% endfor %}</ul>

## Awards and fellowships

{% assign awards = site.awards | sort: 'date' | reverse %}
<ul>{% for item in awards %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></li>
{% endfor %}</ul>

## Blog posts

<ul>{% for item in site.posts %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></li>
{% endfor %}</ul>
