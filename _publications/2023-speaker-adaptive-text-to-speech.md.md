---
title: "Speaker adaptive text-to-speech with timbre-normalized vector-quantized feature"
collection: publications
category: manuscripts
permalink: /publication/2023-speaker-adaptive-text-to-speech
excerpt: 'This paper proposes TN-VQTTS that leverages timbre-normalized vector-quantized acoustic feature for TTS speaker adaptation with little data.'
date: 2023-08-24
venue: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing'
slidesurl: 
paperurl: 'https://ieeexplore.ieee.org/abstract/document/10229489'
demourl: 'https://tnvq.github.io/'
citation: 'Chenpeng Du, <b>Yiwei Guo</b>, Xie Chen, Kai Yu. (2023). &quot;Speaker adaptive text-to-speech with timbre-normalized vector-quantized feature.&quot; <i>IEEE/ACM Transactions on Audio, Speech, and Language Processing</i>, 2023, vol. 31, pp. 3446-3456.'
---

<img src="/images/tn-vqtts.jpg" alt="drawing" width="500" class="center"/>

Achieving high fidelity and speaker similarity in text-to-speech speaker adaptation with limited amount of data is a challenging task. Most existing methods only consider adapting to the timbre of the target speakers but fail to capture their speaking styles from little data. In this work, we propose a novel TTS system, TN-VQTTS, which leverages timbre-normalized vector-quantized (TN-VQ) acoustic feature for speaker adaptation with little data. With the TN-VQ feature, speaking style and timbre can be effectively decomposed and controlled by the acoustic model and the vocoder separately of VQTTS. Such decomposition enables us to finely mimic both the two characteristics of the target speaker in adaptation with little data. Specifically, we first reduce the dimensionality of self-supervised VQ acoustic feature via PCA and normalize its timbre with a normalizing flow model. The feature is then quantized with k-means and used as the TN-VQ feature for a multi-speaker VQ-TTS system. Furthermore, we optimize timbre-independent style embeddings of the training speakers jointly with the acoustic model and store them in a lookup table. The embedding table later serves as a selectable codebook or a group of basis for representing the style of unseen speakers. Our experiments on LibriTTS dataset first show that the proposed model architecture for VQ feature achieves better performance in multi-speaker text-to-speech synthesis than several existing methods. We also find that the reconstruction performance and the naturalness are almost unchanged after applying timbre normalization and k-means quantization. Finally, we show that TN-VQTTS achieves better performance on speaker similarity in adaptation than both speaker embedding based adaptation method and fine-tuning based baseline AdaSpeech.
