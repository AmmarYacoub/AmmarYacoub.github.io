---
title: "Research"
permalink: /research/
author_profile: true
excerpt: "Nonlinear control, pneumatic actuation, and haptic interfaces: from modeling to experimental validation."
---

I develop and experimentally validate **nonlinear control methods and haptic interfaces for medical robotics**. My research at Southern Methodist University connects friction modeling, adaptive robust control, and mechanical design to improve force tracking and fingertip localization.

## Force control of pneumatic actuators

I investigate friction in small pneumatic cylinders and develop **sliding mode, adaptive robust, and adaptive super-twisting controllers** for precise force tracking. My work combines pressure- and position-dependent friction modeling with real-time implementation in LabVIEW and NI hardware.

**Selected results**

- **Friction compensation:** Reduced relative force-amplitude error from **31.79% to 4.29%** versus uncompensated SMC in a fixed-piston, 16 N, 1 Hz haversine test.
- **Adaptive control:** Reduced force-amplitude error from **2.465 N to 0.422 N** versus standard SMC in a fixed-piston, 10 N, 1 Hz sinusoidal test.

<figure class="research-figure">
  <img src="{{ '/images/research/pneumatic-force-test-rig.jpg' | relative_url }}" alt="Pneumatic force-control test rig with a cylinder, displacement sensor, and load cell" width="897" height="585" loading="lazy">
  <figcaption>Pneumatic force-control test rig. ACC 2026, Fig. 8.</figcaption>
</figure>

**Related publications**

- [Adaptive sliding mode control with friction compensation]({{ '/publication/Adaptive' | relative_url }})
- [Static friction compensation and sliding mode force control]({{ '/publication/ACC' | relative_url }})
- [Adaptive super-twisting sliding mode force control]({{ '/publication/2027-07-01-pneumatic-cylinder-force-control' | relative_url }})
- [Static friction modeling in miniature pneumatic cylinders]({{ '/publication/2015-10-01-paper-title-number-3' | relative_url }})

## Haptic interfaces for virtual palpation

My collaborative work on the **SMU Haptic Glove** integrates mechanical design, closed-form kinematics, workspace and singularity analysis, and theoretical force transmission for virtual palpation of 3D elastographic images. I validate fingertip localization using embedded sensors, OptiTrack motion capture, and object-size estimation.

**Selected results**

- **Component-level localization:** Radial-coordinate RMSE of **0.38 mm for the index finger** and **0.36 mm for the thumb**, measured against motion capture across 210 and 142 configurations, respectively.
- **Full-glove assessment:** Object-radius estimation RMSE of at most **1.03 mm** across the tested spheres and cylinders in a preliminary single-participant study.

<figure class="research-figure research-figure--glove">
  <img src="{{ '/images/research/smu-haptic-glove.png' | relative_url }}" alt="SMU Haptic Glove touching a billiard ball during object-size estimation" width="778" height="726" loading="lazy">
  <figcaption>SMU Haptic Glove during object-size estimation. Mechanism and Machine Theory, Fig. 21.</figcaption>
</figure>

**Related publications**

- [SMU Haptic Glove: design and kinematic analyses]({{ '/publication/Design' | relative_url }})
- [Fingertip localization: embedded sensors versus OptiTrack]({{ '/publication/MECC25' | relative_url }})

## Small-scale robotics

My collaborative research also includes **magnetically actuated millimeter-scale locomotion**, extending my work in actuation and robotic dynamics.

[Magnetically Actuated Millimeter-Scale Biped →]({{ '/publication/2009-10-01-paper-title-number-1' | relative_url }})

For research inquiries and collaborations, [contact me](mailto:ayacoub@smu.edu).
