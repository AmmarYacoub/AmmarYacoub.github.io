---
permalink: /
title: "About me"
author_profile: true
excerpt: "Ammar H. Yacoub — mechanical engineering Ph.D. candidate at SMU researching haptics, medical robotics, and nonlinear control."
redirect_from:
  - /about/
  - /about.html
---

<div class="academic-intro">
  <p class="eyebrow">Mechanical engineering · Southern Methodist University</p>
  <h2>Connecting control theory<br>with the sense of touch.</h2>
  <p class="intro-lead">I am Ammar H. Yacoub, a Ph.D. candidate working at the intersection of dynamics, nonlinear control, and medical robotics.</p>
  <div class="academic-actions">
    <a class="academic-button" href="{{ '/research/' | relative_url }}">Explore my research →</a>
    <a class="academic-button academic-button--outline" href="{{ '/files/Ammar_Yacoub_CV.pdf' | relative_url }}">Download CV (PDF)</a>
  </div>
</div>

As a Research Assistant in the Systems Lab at Southern Methodist University, I develop haptic interfaces that bring the sense of touch to virtual palpation in 3D elastography medical imaging. My research on the SMU Haptic Glove integrates mechanical design, kinematics, dynamics, and advanced nonlinear control. I investigate, develop, and experimentally validate sliding mode, super-twisting sliding mode, and adaptive robust controllers to achieve precise force tracking under nonlinear dynamics and uncertainty. Through this work, I connect control theory with practical robotic systems to advance haptic feedback for medical applications.

Before my doctoral research, I gained more than five years of industry experience as an Automation Engineer. That experience continues to shape my approach: connecting mathematical models with reliable hardware and experimental validation.

<div class="academic-columns" markdown="1">
<section markdown="1">

## Research interests

- Nonlinear and robust control
- Sliding mode and adaptive control
- Mechatronics and pneumatic actuation
- Medical robotics and haptics

</section>
<section markdown="1">

## Education

<dl class="education-list">
  <dt>Ph.D. in Mechanical Engineering</dt>
  <dd>Southern Methodist University · In progress</dd>
  <dt>M.Sc. in Mechanical/Mechatronics Engineering</dt>
  <dd>Jordan University of Science and Technology · 2022</dd>
  <dt>B.Sc. in Mechatronics Engineering</dt>
  <dd>University of Jordan · 2018</dd>
</dl>

</section>
</div>

## Recent recognition

{% assign recent_awards = site.awards | sort: 'date' | reverse %}
<ul class="recognition-list">
{% for award in recent_awards limit:3 %}
  <li><span class="recognition-year">{{ award.date | date: '%Y' }}</span><a href="{{ award.url | relative_url }}">{{ award.title }}</a></li>
{% endfor %}
</ul>

## Teaching and mentorship

I help undergraduate engineers connect theory with practice through laboratory instruction in control systems, mechanical measurements, and mechatronics. My teaching spans MATLAB/Simulink, LabVIEW, Arduino, and experimental hardware.

[Explore my teaching experience →]({{ '/teaching/' | relative_url }})

<div class="academic-contact">
  <h2>Get in touch</h2>
  <p>For questions about my research, teaching, or potential collaborations, reach me at <a href="mailto:ayacoub@smu.edu">ayacoub@smu.edu</a>.</p>
</div>
