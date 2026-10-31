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

I am a Mechanical Engineering Ph.D. candidate and Research Assistant in the Systems Lab at Southern Methodist University, working at the intersection of nonlinear control, haptics, and medical robotics. My research focuses on the SMU Haptic Glove, a pneumatic interface for virtual palpation in 3D elastography medical imaging.

I integrate mechanical design, kinematics, and dynamic modeling with the development and experimental validation of sliding mode, super-twisting sliding mode, and adaptive robust controllers. My goal is to deliver precise, reliable force feedback despite nonlinear dynamics and uncertainty, advancing haptic interaction for medical applications.

With more than five years of prior experience as an Automation Engineer, I bring a practical perspective to research—connecting control theory with hardware implementation and experimental testing.

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
