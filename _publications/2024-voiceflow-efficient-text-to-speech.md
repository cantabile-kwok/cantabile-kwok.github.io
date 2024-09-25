---
title: "VoiceFlow: Efficient text-to-speech with rectified flow matching"
collection: publications
category: conferences
permalink: /publication/2024-voiceflow-efficient-text-to-speech
excerpt: 'This paper applies the rectified flow matching algorithm to improve the efficiency of TTS system in the differential equation family (e.g. diffusion and flow matching).'
date: 2024-04-14
venue: 'IEEE ICASSP'
paperurl: 'https://arxiv.org/pdf/2309.05027'
slidesurl: 'https://cantabile-kwok.github.io/files/gyw-VoiceFlow-slides.pptx'
citation: 'Yiwei Guo, Chenpeng Du, Ziyang Ma, Xie Chen, Kai Yu. (2024). &quot;VoiceFlow: Efficient text-to-speech with rectified flow matching.&quot; <i>In Proc. IEEE ICASSP</i>, 2024, pp. 11121-11125.'
---

Although diffusion models in text-to-speech have become a popular choice due to their strong generative ability, the intrinsic complexity of sampling from diffusion models harms their efficiency. Alternatively, we propose VoiceFlow, an acoustic model that utilizes a rectified flow matching algorithm to achieve high synthesis quality with a limited number of sampling steps. VoiceFlow formulates the process of generating mel-spectrograms into an ordinary differential equation conditional on text inputs, whose vector field is then estimated. The rectified flow technique then effectively straightens its sampling trajectory for efficient synthesis. Subjective and objective evaluations on both single and multi-speaker corpora showed the superior synthesis quality of VoiceFlow compared to the diffusion counterpart. Ablation studies further verified the validity of the rectified flow technique in VoiceFlow.
