---
layout: single
title: "Curriculum vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<p><a class="academic-button" href="{{ '/files/Ammar_Yacoub_CV.pdf' | relative_url }}">Download full CV (PDF)</a></p>

## Education

- **Ph.D. in Mechanical Engineering**, Southern Methodist University — in progress
- **M.Sc. in Mechanical/Mechatronics Engineering**, Jordan University of Science and Technology — 2022
- **B.Sc. in Mechatronics Engineering**, University of Jordan — 2018

## Research and industry experience

**Research Assistant · Systems Lab, Southern Methodist University**

Haptic-enabled virtual palpation for 3D elastography medical imaging; mechanical design, kinematics, dynamics, and nonlinear control of the SMU Haptic Glove.

**Automation Engineer · Prior industry experience**

More than five years of experience in industrial automation before doctoral research.

## Teaching experience

{% assign teaching = site.teaching | sort: 'date' | reverse %}
{% for course in teaching %}
- [{{ course.title }}]({{ course.url | relative_url }}) — {{ course.type }}, {{ course.venue }}
{% endfor %}

## Awards and fellowships

{% assign awards = site.awards | sort: 'date' | reverse %}
{% for award in awards %}
- **{{ award.date | date: '%Y' }}** · [{{ award.title }}]({{ award.url | relative_url }})
{% endfor %}

## Publications

See the [publication list]({{ '/publications/' | relative_url }}) for research summaries, papers, and available citations.
