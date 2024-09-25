---
title: "Unsupervised word-level prosody tagging for controllable speech synthesis"
collection: publications
category: conferences
permalink: /publication/2022-unsupervised-word-level-prosody
excerpt: 'This paper aims at enhancing word-level prosody controllability in TTS models by decision tree-based clustering.'
date: 2022-02-15
venue: 'IEEE ICASSP'
slidesurl: 
paperurl: 'https://arxiv.org/pdf/2202.07200'
citation: 'Yiwei Guo, Chenpeng Du, Kai Yu. (2022). &quot;Unsupervised word-level prosody tagging for controllable speech synthesis.&quot; <i>In Proc. IEEE ICASSP</i>, 2022, pp.7597-7601.'
---

Although word-level prosody modeling in neural text-to-speech (TTS) has been investigated in recent research for diverse speech synthesis, it is still challenging to control speech synthesis manually without a specific reference. This is largely due to lack of word-level prosody tags. In this work, we propose a novel approach for unsupervised word-level prosody tagging with two stages, where we first group the words into different types with a decision tree according to their phonetic content and then cluster the prosodies using GMM within each type of words separately. This design is based on the assumption that the prosodies of different type of words, such as long or short words, should be tagged with different label sets. Furthermore, a TTS system with the derived word-level prosody tags is trained for controllable speech synthesis. Experiments on LJSpeech show that the TTS model trained with word-level prosody tags not only achieves better naturalness than a typical FastSpeech2 model, but also gains the ability to manipulate word-level prosody.
