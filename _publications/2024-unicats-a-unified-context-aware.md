---
title: "UniCATS: A unified context-aware text-to-speech framework with contextual vq-diffusion and vocoding"
collection: publications
category: conferences
permalink: /publication/2024-unicats-a-unified-context-aware
excerpt: 'This paper proposes a context-aware TTS system with strong zero-shot TTS and speech editing abilities, by a contextual token vocoder CTX-vec2wav and discrete diffusion-based CTX-txt2vec.'
date: 2024-03-24
venue: 'AAAI'
slidesurl: 'https://cantabile-kwok.github.io/files/UniCATS-slides.pptx'
paperurl: 'https://ojs.aaai.org/index.php/AAAI/article/view/29747/31286'
citation: 'Chenpeng Du, Yiwei Guo, Feiyu Shen, Zhijun Liu, Zheng Liang, Xie Chen, Shuai Wang, Hui Zhang, Kai Yu. (2024). &quot;UniCATS: A unified context-aware text-to-speech framework with contextual vq-diffusion and vocoding.&quot; <i>Proc. AAAI</i>, 2024, vol. 38, No. 16, pp. 17924-17932.'
---

The utilization of discrete speech tokens, divided into semantic tokens and acoustic tokens, has been proven superior to traditional acoustic feature mel-spectrograms in terms of naturalness and robustness for text-to-speech (TTS) synthesis. Recent popular models, such as VALL-E and SPEAR-TTS, allow zero-shot speaker adaptation through auto-regressive (AR) continuation of acoustic tokens extracted from a short speech prompt. However, these AR models are restricted to generate speech only in a left-to-right direction, making them unsuitable for speech editing where both preceding and following contexts are provided. Furthermore, these models rely on acoustic tokens, which have audio quality limitations imposed by the performance of audio codec models. In this study, we propose a unified context-aware TTS framework called UniCATS, which is capable of both speech continuation and editing. UniCATS comprises two components, an acoustic model CTX-txt2vec and a vocoder CTX-vec2wav. CTX-txt2vec employs contextual VQ-diffusion to predict semantic tokens from the input text, enabling it to incorporate the semantic context and maintain seamless concatenation with the surrounding context. Following that, CTX-vec2wav utilizes contextual vocoding to convert these semantic tokens into waveforms, taking into consideration the acoustic context. Our experimental results demonstrate that CTX-vec2wav outperforms HifiGAN and AudioLM in terms of speech resynthesis from semantic tokens. Moreover, we show that UniCATS achieves state-of-the-art performance in both speech continuation and editing.
