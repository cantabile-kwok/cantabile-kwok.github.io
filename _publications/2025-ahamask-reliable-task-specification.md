---
title: "AHAMask: Reliable Task Specification for Large Audio Language Models without Instructions"
collection: publications
category: conferences
permalink: /publication/2025-ahamask-reliable-task-specification
excerpt: 'This paper proposes to simply mask some attention heads in an LALM (large audio language model) to achieve reliable task specification. This is because selectively masking some attention heads in an LALM can trigger its specific task functionalities well.'
date: 2026-01-20
venue: 'AAAI'
slidesurl: 
paperurl: 'https://arxiv.org/abs/2509.01787'
demourl: 
citation: '<b>Yiwei Guo</b>,  Bohan Li, Hankun Wang, Zhihan Li, Shuai Wang, Xie Chen, Kai Yu (2026). &quot;AHAMask: Reliable Task Specification for Large Audio Language Models without Instructions.&quot; <i>In Proc. AAAI</i>, 2026.'
# header:
#   teaser: "vqtts.jpg"
---

<img src="/images/ahamask.png" width="100%" alt="drawing" class="center"/>

Although current large audio language models (LALMs) extend text large language models (LLMs) with generic acoustic understanding abilities, they usually suffer from instruction sensitivity, where different instructions of the same intention can yield drastically different outcomes. In this work, we propose AHAMask, where we simply mask some of the attention heads in the decoder-only LLM backbone of LALMs, to trigger specific acoustic task functionalities without instructions. These masks are efficiently obtained by training on an LALM, with the number of trainable parameters equal to the attention head count in its LLM backbone. We show by experiments that applying such selective attention head masks achieves comparable or even better performance than using instructions, either on single or composite tasks. Besides achieving reliable acoustic task specification for LALMs, this also reveals that LALMs exhibit certain "functional pathways" in their attention heads.

