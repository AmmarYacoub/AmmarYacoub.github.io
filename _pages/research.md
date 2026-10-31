---
title: "Research"
permalink: /research/
author_profile: true
excerpt: "Experimentally validated nonlinear control, pneumatic force actuation, and haptic interfaces for virtual palpation."
---

I develop and experimentally validate **nonlinear control methods for pneumatic actuation and haptic interfaces**, with applications in medical robotics. My work in the Systems Lab at Southern Methodist University connects friction modeling, adaptive robust control, and mechanical design to the practical challenges of precise force feedback and fingertip localization.

[Force control](#force-control-of-pneumatic-actuators) · [Haptic interfaces](#haptic-interfaces-for-virtual-palpation) · [Small-scale robotics](#small-scale-robotics)

## Force control of pneumatic actuators

### The challenge

Small pneumatic actuators offer a useful force-to-weight ratio for wearable haptic systems, but friction, air compressibility, leakage, and uncertain dynamics complicate precise force tracking. In small cylinders, static friction can account for a substantial portion of the available force, making compensation especially important.

### My contributions

Working with my research collaborators, I investigate how friction depends on pressure, piston position, and direction of motion, and develop controllers that connect these models with real-time force regulation.

- **Friction identification and compensation:** I characterized static friction across 17 piston positions and four supply-pressure levels, developed pressure- and position-dependent models, and integrated compensation into sliding mode control.
- **Adaptive robust control:** I developed an adaptive sliding mode controller with friction compensation, combining online parameter estimation with a robust control term to address slowly varying uncertainties and unmodeled dynamics.
- **Experimental implementation:** I implemented and evaluated the controllers using LabVIEW, NI real-time hardware, proportional pneumatic valves, pressure and displacement sensors, and load-cell force measurements.
- **Related work:** My research also includes adaptive super-twisting sliding mode control for pneumatic force tracking.

<figure class="research-figure">
  <img src="{{ '/images/research/pneumatic-force-test-rig.jpg' | relative_url }}" alt="Small pneumatic cylinder mounted on a rail with a linear displacement sensor and load cell for force-control experiments" width="897" height="585" loading="lazy">
  <figcaption>Force-control test rig with the cylinder, displacement sensor, and load cell. Photograph from the ACC 2026 paper, Fig. 8.</figcaption>
</figure>

### Selected experimental findings

**Friction-compensated sliding mode control.** For a stationary piston tracking a 16 N, 1 Hz haversine reference, compensation reduced the relative force-amplitude error from **31.79% to 4.29%** and time delay from **81 ms to 45 ms**, compared with uncompensated SMC. These are amplitude-error and delay measurements under the reported test conditions, rather than overall RMS tracking errors. [ACC 2026, Table IV]({{ '/publication/ACC' | relative_url }}).

**Adaptive sliding mode control.** In a fixed-piston experiment with a 10 N, 1 Hz sinusoidal reference, the adaptive controller reduced force-amplitude error from **2.465 N to 0.422 N** and zero-crossing delay from **71 ms to 45 ms**, compared with standard SMC. Validation during piston motion remains a next step in that study. [CDC paper, Table II]({{ '/publication/Adaptive' | relative_url }}).

### Related publications

- [Adaptive Sliding Mode Control with Friction Compensation for Force Tracking of a Small Pneumatic Cylinder]({{ '/publication/Adaptive' | relative_url }})
- [Static Friction Modeling and Compensation for Improved Force Tracking in Pneumatic Cylinders using Sliding Mode Control]({{ '/publication/ACC' | relative_url }})
- [Force Control for a Pneumatic Cylinder Using Adaptive Super-Twisting Sliding Mode Control]({{ '/publication/2027-07-01-pneumatic-cylinder-force-control' | relative_url }})
- [Modeling and Compensation of Static Friction to Improve Force Tracking Performance in Miniature Pneumatic Cylinders]({{ '/publication/2015-10-01-paper-title-number-3' | relative_url }})

## Haptic interfaces for virtual palpation

### The challenge

Virtual palpation of 3D elastographic images requires a haptic interface that can locate multiple fingertips and support directional force feedback. The SMU Haptic Glove addresses this challenge through a seven-degree-of-freedom mechanism with six pneumatically actuated degrees of freedom and one additional measured degree of freedom.

### My contributions

My collaborative work combines mechanical design with closed-form kinematic mappings from actuator displacement to fingertip location. I analyze reachable workspaces, manipulability, singularities, and quasi-static force transmission, then evaluate the kinematic predictions against physical measurements.

- **Component-level validation:** I compared embedded-sensor fingertip estimates with a five-camera OptiTrack system for the index-finger and thumb substructures.
- **Full-glove assessment:** I evaluated object-radius estimation using spherical and cylindrical objects grasped by a participant wearing the glove.
- **Design analysis:** I investigated how geometry and joint limits affect localization, workspace, and theoretical fingertip-force capability.

<figure class="research-figure research-figure--glove">
  <img src="{{ '/images/research/smu-haptic-glove.png' | relative_url }}" alt="SMU Haptic Glove worn while touching a billiard ball during an object-size estimation experiment" width="778" height="726" loading="lazy">
  <figcaption>The SMU Haptic Glove during object-size estimation. Photograph from the Mechanism and Machine Theory paper, Fig. 21.</figcaption>
</figure>

### Selected experimental findings

Across **210 index-finger configurations and 142 thumb configurations**, the RMS error in the radial coordinate was **0.38 mm and 0.36 mm**, respectively, relative to motion capture. These component-level measurements do not include the additional effects of donning, alignment, or user-specific fitting. [Glove design paper, Table 4]({{ '/publication/Design' | relative_url }}).

In a preliminary **single-participant** full-glove assessment, object-radius estimation RMSE was at most **1.03 mm** across the tested spheres and cylinders. This supports the localization approach under the tested conditions; it is not a clinical evaluation of virtual palpation. [Glove design paper, Tables 6–7]({{ '/publication/Design' | relative_url }}).

### Related publications

- [Design and kinematic analyses of the SMU haptic glove]({{ '/publication/Design' | relative_url }}) — mechanism design, kinematics, force-transmission analysis, and experimental validation.
- [Comparative Analysis of Fingertip Location for the SMU Haptic Glove by OptiTrack Cameras and Embedded Position Sensors]({{ '/publication/MECC25' | relative_url }}) — the earlier fingertip-localization study.

## Small-scale robotics

My broader collaborative research includes a **magnetically actuated millimeter-scale biped**, extending my interest in actuation, dynamics, and robotic locomotion at small scales.

[Read “Magnetically Actuated Millimeter-Scale Biped” →]({{ '/publication/2009-10-01-paper-title-number-1' | relative_url }})

## Research approach

I connect **modeling → controller design → real-time implementation → experimental validation**. My background in industrial automation informs an emphasis on hardware behavior, measurement quality, and comparisons against meaningful baselines.

For research inquiries or potential collaborations, please [contact me by email](mailto:ayacoub@smu.edu).
