---
title: "LSCodec: Low-Bitrate and Speaker-Decoupled Discrete Speech Codec"
collection: publications
category: conferences
permalink: /publication/2025-lscodec-low-bitrate-speaker-decoupled
excerpt: 'This paper proposes LSCodec, a low-bitrate (50Hz/0.45kbps and 25Hz/0.25kbps, single codebook), speaker-decoupled discrete speech codec.'
date: 2025-05-19
venue: 'ISCA Interspeech'
paperurl: 'https://arxiv.org/abs/2410.15764/'
# slidesurl: 'https://cantabile-kwok.github.io/files/gyw-VoiceFlow-slides.pptx'
demourl: 'https://cantabile-kwok.github.io/LSCodec/'
codeurl: 'https://github.com/cantabile-kwok/LSCodec-Inference'
citation: '<b>Yiwei Guo</b>, Zhihan Li, Chenpeng Du, Hankun Wang, Xie Chen, Kai Yu (2025) LSCodec: Low-Bitrate and Speaker-Decoupled Discrete Speech Codec. <i>Proc. Interspeech 2025</i>, 5018-5022, doi: 10.21437/Interspeech.2025-1106'
---

<img src="/images/lscodec.png" alt="drawing" width="80%" class="center"/>

Although discrete speech tokens have exhibited strong potential for language model-based speech generation, their high bitrates and redundant timbre information restrict the development of such models. In this work, we propose LSCodec, a discrete speech codec that has both low bitrate and speaker decoupling ability. LSCodec adopts a multi-stage unsupervised training framework with a speaker perturbation technique. A continuous information bottleneck is first established, followed by vector quantization that produces a discrete speaker-decoupled space. A discrete token vocoder finally refines acoustic details from LSCodec. By reconstruction evaluations, LSCodec demonstrates superior intelligibility and audio quality with only a single codebook and smaller vocabulary size than baselines. Voice conversion and speaker probing experiments prove the excellent speaker disentanglement of LSCodec, and ablation study verifies the effectiveness of the proposed training framework.
