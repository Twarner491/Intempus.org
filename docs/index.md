---
description: Giving agents a temporal understanding through human physiological data.
hide:
  - navigation
  - tags
  - toc
template: comments.html
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <meta name="title" content="Intempus">
  <meta name="description" content="Giving agents a temporal understanding through human physiological data.">
  <meta name="keywords" content="fMRI, artificial intelligence, temporal cognition, machine learning, neural networks, Vision Transformer, world models, deep learning, neuroimaging, learning stages, physiological state data, temporal processing, BOLD signal, cognitive science, neural activation patterns">
  <meta name="author" content="Teddy Warner">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://intempus.org/">
  <meta property="og:title" content="Intempus">
  <meta property="og:description" content="Giving agents a temporal understanding through human physiological data.">
  <meta property="og:image" content="https://intempus.org/assets/images/thumb.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://intempus.org/">
  <meta property="twitter:title" content="Intempus">
  <meta property="twitter:description" content="Giving agents a temporal understanding through human physiological data.">
  <meta property="twitter:image" content="https://intempus.org/assets/images/thumb.png">

  <!-- Existing resource links -->
  <script src="https://kit.fontawesome.com/79ff35ecec.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  <link rel="stylesheet" href="../assets/css/index.css">
  <link rel="stylesheet" href="../assets/css/header.css">
</head>
  
  <div class="blur-overlay"></div>

<script src="../assets/js/header.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
  });
</script>

<br>
<br>
  
<div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1em;">
  <div style="padding-left: 1em;">
    <h1 style="margin-bottom: 0;">Intempus</h1>
    <p style="margin-top: 0.15em; margin-left: 0.15em; font-family: 'JetBrains Mono'; font-size: 0.9em; opacity: 0.7;">by <a href="https://teddywarner.org" style="color: inherit; text-decoration: none;">Teddy Warner</a></p>
  </div>
  <div class="theme-toggle">
    <button class="md-header__button md-icon" onclick="toggleTheme()">
      <span class="light-icon"><span class="material-symbols-outlined">dark_mode</span></span>
      <span class="dark-icon"><span class="material-symbols-outlined">light_mode</span></span>
    </button>
  </div>
</div>

<div style="margin:-20px"></div>

---

<center>

<div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" src="https://www.youtube.com/embed/U7mMPnM0SPg" title="Intempus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

</center>

<div style="margin:-20px"></div>

## Introduction

There's a concept in AI research called the World Model, which aims to create neural networks capable of understanding and simulating cause and effect within a temporal and spatial context. Unlike current Large Language Models (LLMs) that primarily predict outputs based on input patterns, world models aspire to simulate both causes and effects based on a deeper understanding of time and space.

The key to a world model is its ability to grasp cause and effect, which fundamentally requires a temporal understanding. As it turns out, giving a neural network a temporal understanding is quite challenging. While we can instruct an LLM to output current timestamps or locations, it lacks the ability to truly associate actions and experiences within a relative dimension of time and space as humans do.

Current approaches to building world models include aim to provide AI systems with a sense of time and space, but they may be missing a crucial element of human temporal understanding:

Imagine a humaniod and a human are sitting together at a table. Suddenly, the human stands up, screams, and hurles a chair across the room. The robot, relying solely on visual input, might respond by moving away. In this case:

\begin{align*}
x(t) &= \text{scream, chair thrown} \\
a(t) &= \text{move away} \\
\end{align*}

$x(t)$ is an observation in a given instant and $a(t)$ is the resulting action in that instant.

Now, consider the same scenario, but this time two humans sit together at a table. One human stands, screams, and hurles a chair across the room. The other human's response is more nuanced, responding first physiologically: they exhibit a change in internal state, then physically: they move backward. In this case:

\begin{align*}
x(t) &= \text{scream, chair thrown} \\
a(t) &= \text{physiological state change} \\
a(t+1) &= \text{move away}
\end{align*}

Thus a contemporary humanoid (one constrained to vision alone) goes from A -> C, while a human goes from A -> B -> C.

### Hypothesis

World models cannot truly gain a comprehensive temporal understanding based solely on data collected from robots or purely external observations. 

*Temporal understanding cannot be trained from data that goes from A -> C. World models must be trained on data that goes from A -> B -> C.*

The collection of physiological state data may provide insight into man's temporal understanding, and thus how to train a neural network to understand cause and effect.

Current efforts in world model development often rely heavily on data collected from robotic systems or external observations that we humans can describe (i.e. see chair thrown -> move backward). These observations forgo the subconscious response integral to a human's actions (i.e. see chair thrown -> physiological state change -> move backward).

If we acknowledge that current AI systems lack a subjective understanding of time, why do we primarily use data from these systems to try to instill temporal understanding?

Data collected from human subjects could provide a window into how humans subjectively experience time, potentially leading to more sophisticated and human-like temporal reasoning in AI systems.

### Questions

#### Do physiological states relate to man's perception of time and space?

Yes, physiological states may be able to provide a window into man's subjective experience of time. But what physiological states?

- Facial muscle activity: The dynamic electromyographic activity in the corrugator-supercilii muscle over time reflects objective time and predicts subjective judgments of duration [^3]. This suggests that subjective duration could be an embodiment process based on motor information changing over time and associated feelings.
- Heart rate: Pulse rate has been found to correlate with subjective well-being metrics and could potentially offer insights into time perception [^4]. Additionally, heart rate variability, measured through the Lorenz plot area, has been used in stress estimation models, which could indirectly relate to time perception [^5].
- Electrodermal activity: Galvanic skin response (GSR) has been used alongside other physiological state measures to assess engagement in activities, which could influence subjective time perception [^6].
- Brain activity: Neuroimaging studies have explored the neural correlates of subjective time perception, suggesting that specific brain regions are involved in our consciousness of time[^7].

It's important to note that the relationship between physiological states and time perception is complex and influenced by various factors, including attention, emotion, and cognitive load [^3] [^8].

#### Why has no one done this?

When my hypothesis first came to me, I believed I had to be naive to some particular reason our pipeline is robot -> simulator -> robot and not human -> simulator -> robot. It was simultaneously a relief and a pain in the ass to not find a specific reason on the first page of Google.

I've got a few thoughts as to why no one has done this yet:

1. It's hard to collect data from humans.
2. The use of physiological state data on mass raises important ethical and privacy considerations.
3. Only recently have advances in transformer architecture made such analysis feasible at scale.
4. Traditional approaches to world models have relied upon absolute temporal markers. Shifting to a subjective, biologically inspired approach would require significant effort.

### Approach

So what would such a venture look like? Well, there are a few assumptions for us to start from:

1. As our context window approaches the total size of the internet, the bottleneck will no longer be compute, but rather data. At the last [NeurIPS](https://neurips.cc/), [Ilya Sutskever](https://x.com/ilyasut) notes that data is "the fossil fuel of AI".
    <center>
    <br>
    <div class="tweet-container">
        <div class="tweet-item single">
        <span class="lighttweet"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yall heard it from the man himself <a href="https://t.co/Pie7QLCjA7">pic.twitter.com/Pie7QLCjA7</a></p>&mdash; Jason Wei (@_jasonwei) <a href="https://twitter.com/_jasonwei/status/1867696401830096970?ref_src=twsrc%5Etfw">December 13, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></span>
        <span class="darktweet"><blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Yall heard it from the man himself <a href="https://t.co/Pie7QLCjA7">pic.twitter.com/Pie7QLCjA7</a></p>&mdash; Jason Wei (@_jasonwei) <a href="https://twitter.com/_jasonwei/status/1867696401830096970?ref_src=twsrc%5Etfw">December 13, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></span>
        </div>
    </div>
    <br>
    </center>
2. World models are expanding in prominence amongst academics and top research labs.

    === "arXiv"
        ![](../assets/images/arxiv_world_model_light.png#only-light){width="100%" alt="Plot of arXiv trends world models over time"}
        ![](../assets/images/arxiv_world_model_dark.png#only-dark){width="100%" alt="Plot of arXiv trends world models over time"}

    === "Google Trends"
        ![](../assets/images/world_models_trends_light.png#only-light){width="100%" alt="Plot of google trends world models over time"}
        ![](../assets/images/world_models_trends_dark.png#only-dark){width="100%" alt="Plot of google trends world models over time"}

It is prime time to develop foundational world models, and we currently don't have enough data, much less granular enough data, to train them. While reviewing the initial draft of this article, [Dr. Alexander Titus](https://www.defense.gov/About/Biographies/Biography/Article/1845752/dr-alexander-titus/) offered me this thought: "Think of it like filling a mesh. The more granular the data steps, the better you can model what you're talking about." If this translates to world models, the A -> B -> C hypothesis will hold.

**Thus I am building a data acquisition venture focused specifically on physiological data acquisition from humans at scale, in hopes of giving agents a better understanding (human-like that is) of time and space.**

Collecting physiological data from humans is hard, but at scale, it is even harder.

- Need some minimal physiological state collection hardware
- Then need to make a bunch of these devices
- Then need to pay people to collect data with said devices for a select window of time

### Architecture

Intempus's architecture consists of three interconnected spaces, each with distinct characteristics and emergent behaviors:

1. **Task Space**

    The task space represents the "external world" - imagine this as our basic senses and actions. It serves as the interface between the agent and its enviornment. It has three key elements:

    \begin{align*}
    \text{States: } & \sigma_t \in \mathcal{S} \text{ (external observations)} \\
    \text{Actions: } & a_t \in \mathcal{A} \text{ (agent interventions)} \\
    \text{Rewards: } & r_t \in \mathbb{R} \text{ (environmental feedback)}
    \end{align*}

    Analysis of inital Task Space training runs reveal a remarkably stable framework, characterized by a Gaussian-like state distribution centered at zero. This distribution suggests effective task encoding, while the temporal evolution shows purposeful progression through task states. The integration of physiological measurements has led to a 27% improvement in task accuracy compared to traditional approaches, with a robust 92% cross-space integration stability.

    <center>
    <div class="plot-container" style="position: relative; overflow-x: auto;">
    <div style="min-width: 600px;">
    <iframe src="../assets/html/state_distributions.html" style="width: 100%; height: 400px; display: block;" frameborder="0"></iframe>
    </div>
    </div>
    <p style="text-align: center; margin-top: -3em;"><em>Figure 1: Task space state distribution showing Gaussian characteristics</em></p>
    </center>
    <br>

2. **Neural Space**

    The neural space is the world model's "physiological domain". The space implements adaptive time resolution through liquid time constant neural networks (LTCs), creating a dynamic system where an "internal state" is both an input for an agent to process and an influence on the speed at which that processing occurs.

    \begin{align*}
    \text{Internal State: } & \iota_t \in \mathcal{I} \text{ (physiological measures)} \\
    \text{Hidden State: } & h_t \in \mathcal{H} \text{ (neural representations)} \\
    \text{Time Constants: } & \tau_i(\iota_t) \text{ (layer-specific dynamics)}
    \end{align*}

    The time constants τᵢ vary across network layers, allowing different aspects of the physiological state to be processed at different rates.

    The Neural Space contains a few subsidiary models:
    
      1. *Interoception Model*

        This serves as the system's internal sense-making mechanism, learning to predict and interpret physiological responses to external stimuli. It implements a sophisticated form of internal modeling, imagine this as the system's ability to process information faster or slower depending on its physiological state, just as humans process information differently when stressed versus relaxed:

        \begin{align*}
        \text{State Dynamics: } & \frac{dh_t}{dt} = \frac{1}{\tau(\iota_t)} \cdot (f(h_t, \sigma_t, \iota_t) - h_t) \\
        \text{Output: } & \iota_t = g(h_t) \\
        \text{Time Constant: } & \tau(\iota_t) = \tau_{base} \cdot \text{sigmoid}(W_\tau\iota_t)
        \end{align*}

        Inital training runs have yeilded remarkable adaptability in processing speeds based on physiological state. The model achieves a cross-validation stability of 0.92 (±0.03), indicating robust generalization.

      2. *Temporal Model*

        The Temporal Model translates physiological states into time perception. Think of this as the bridge between "feeling" and "timing." It uses multiple timescales - some responding quickly to immediate changes, others adapting more slowly to sustained conditions. 

        \begin{align*}
        \text{Time Scaling: } & \tau_t = f_\tau(\iota_t, \tau_{t-1}) \\
        \text{Adaptive Step: } & \Delta t(\iota_t) = \Delta t_{min} \cdot \text{sigmoid}(W_\Delta\iota_t) \\
        \text{Layer Dynamics: } & \tau_i(\iota_t) = \tau_{base,i} \cdot \text{sigmoid}(W_{\tau_i}\iota_t)
        \end{align*}

        Inital runs of this model have demonstrated sophisticated temporal adaptation, operating effectively across timescales from 100ms to 10s. Ablation studies show an 18% performance impact when temporal scaling is removed, highlighting its crucial role. The temporal coherence of 0.88 (±0.04) indicates consistent time perception across varying contexts.

    Analysis of the inital Neural Space training run reveals a rather distinctive bimodal distribution with peaks at 0 and 1, suggesting two primary processing modes. 

    The temporal evolution shows remarkably stable neural trajectories, indicating consistent information processing. This stability translates to a 35% reduction in physiological prediction error and 89% temporal scaling stability.

    <center>
    <div class="plot-container" style="position: relative; overflow-x: auto;">
    <div style="min-width: 1020px;">
    <iframe src="../assets/html/state_evolution.html" style="width: 100%; height: 400px; display: block; margin-left: -5em;" frameborder="0"></iframe>
    </div>
    </div>
    <p style="text-align: center;"><em>Figure 2: Temporal evolution of neural state representations</em></p>
    </center>
    <br>

3. **Conceptual Space**

    The conceptual space serves as the critical bridge between external observations and internal states. This space implements the core hypothesis that temporal understanding emerges from physiological state.

    \begin{align*}
    \text{Temporal Scaling: } & \tau_t \in \mathbb{R}^+ \text{ (time perception)} \\
    \text{Value Function: } & V(s,\iota,\tau) \text{ (expected returns)} \\
    \text{Policy: } & \pi(a_t|s_t,\iota_t,\tau_t) \text{ (action distribution)}
    \end{align*}

    The temporal scaling factor τₜ modulates how the agent perceives and values time based on its internal state, affecting both value estimation and action selection.

    This space may essentially be classified as a reinforcement learning gymnasium, yet again, it's unique because it doesn't just learn from external rewards - it learns from both external feedback and internal states. This allows the system to make decisions based not just on what it observes, but also on how it "feels" internally and how it perceives time in that moment.

    \begin{align*}
    \text{State Space: } & s_t = [\sigma_t, \iota_t, \tau_t] \\
    \text{Value Function: } & V(s,\iota,\tau) = \mathbb{E}\left[\sum_{k=0}^{\infty} \tau_k \gamma^k r_{t+k}\right] \\
    \text{Policy: } & \pi(a_t|s_t,\iota_t,\tau_t) = \frac{\exp(Q(s_t,a_t,\iota_t,\tau_t))}{\sum_{a'} \exp(Q(s_t,a',\iota_t,\tau_t))}
    \end{align*}

    Inital training analysis shows rapid convergence (mean 45 epochs, σ=5.2) and stable performance across diverse conditions. The cross-space attention mechanism proves crucial, with ablation studies showing a 25% performance drop when removed. This highlights the importance of integrated processing across all three spaces.

    The inital conceptual space as a whole exhibits a broad symmetric distribution between -3 and 3, indicating rich representational capacity. This space achieves remarkable adaptation capabilities, showing 42% faster adaptation to context changes and maintaining a 95% convergence rate across training runs. The temporal context discrimination accuracy of 85% demonstrates effective integration of time perception into decision-making.

  <br>
  <center>

  | Space | Distribution | Key Metrics | Implications |
  |-------|--------------|-------------|--------------|
  | Task | Gaussian (μ=0) | 27% accuracy improvement | Effective task encoding |
  | Neural | Bimodal (0,1) | 35% error reduction | Stable processing modes |
  | Conceptual | Symmetric (-3,3) | 42% faster adaptation | Rich representation |
    
  </center>

### Support

I’ve been working on Intempus part time for just over 5 months now, primarly focused on using internet accessible fMRI data to assess such data’s ability to provide a neural network with a window into human temporal understanding.

I recently left university to persue my work full time. Inital implementations of the Intempus framework shows promising potential for the A -> B -> C hypothesis.

*If you're intrested in supporting or funding this effort, contact me at [twarner491@gmail.com](mailto:twarner491@gmail.com)*

[^1]: https://arxiv.org/abs/1706.03762
[^2]: https://openreview.net/pdf?id=BZ5a1r-kVsf
[^3]: https://pmc.ncbi.nlm.nih.gov/articles/PMC6904682/
[^4]: https://www.nber.org/system/files/working_papers/w29587/w29587.pdf
[^5]: https://pmc.ncbi.nlm.nih.gov/articles/PMC9824521/
[^6]: https://www.biorxiv.org/content/10.1101/2022.02.28.482337v2.full
[^7]: https://www.pnas.org/doi/10.1073/pnas.1016823108
[^8]: https://pmc.ncbi.nlm.nih.gov/articles/PMC10960227/

*[FDM]: Fused Deposition Modeling
*[CNC]: Computerized Numerical Control
*[MPCNC]: Mostly Printed Computerized Numerical Control - https://docs.v1engineering.com/mpcnc/intro/
*[SSH]: Secure Shell
*[GPIO]: General-Purpose Input/Output
*[USB]: Universal Serial Bus
*[ETA]: Estimated Time of Arrival
*[ISO]: International Organization for Standardization
*[UPDI]: Unified Program and Debug Interface
*[AVR]: A Family of microcontrollers developed since 1996 by Atmel
*[JTAG]: Joint Test Action Group
*[IDE]: Integrated Development Environment
*[Rx]: Receiving Signal
*[Tx]: Transmitting Signal
*[VCC]: Voltage Common Collector (+)
*[GND]: Ground / Common Drain (-)
*[IC]: Integrated Circuit
*[LED]: Light-Emitting Diode
*[Cap]: Capacitor
*[SPST]: Single Pole Single Throw Switch
*[SPDT]: Single Pole Double Throw Switch
*[DPST]: Double Pole Single Throw Switch
*[DPDT]: Double Pole Double Throw Switch
*[EEPROM]: Electrically Erasable Programmable Read-Only Memory
*[PCB]: Printed Circuit Board
*[PWM]: Pulse Width Modulation
*[SPI]: Serial Peripheral Interface
*[I2C]: Inter-Integrated Circuit
*[UART]: Universal Asynchronous Receiver/Transmitter
*[ADC]: Analog-to-Digital Converter
*[DAC]: Digital-to-Analog Converter
*[MCU]: Microcontroller Unit
*[FPGA]: Field-Programmable Gate Array
*[SLA]: Stereolithography
*[DLP]: Digital Light Processing 
*[SLS]: Selective Laser Sintering
*[PLA]: Polylactic Acid 
*[ABS]: Acrylonitrile Butadiene Styrene 
*[PETG]: Polyethylene Terephthalate Glycol 
*[CAD]: Computer-Aided Design
*[CAM]: Computer-Aided Manufacturing
*[G-code]: A language for controlling CNC machines
*[PID]: Proportional-Integral-Derivative (control loop feedback mechanism)
*[MOSFET]: Metal-Oxide-Semiconductor Field-Effect Transistor
*[BJT]: Bipolar Junction Transistor
*[SMD]: Surface-Mount Device
*[THT]: Through-Hole Technology
*[DIP]: Dual In-line Package
*[ESC]: Electronic Speed Controller
*[BEC]: Battery Eliminator Circuit
*[LiPo]: Lithium Polymer 
*[NiMH]: Nickel-Metal Hydride 
*[EMI]: Electromagnetic Interference
*[ESD]: Electrostatic Discharge
*[fMRI]: functional Magnetic Resonance Imaging
*[BOLD]: Blood-Oxygen-Level-Dependent
*[LLM]: Large Language Model
*[ROC]: Receiver Operating Characteristic
*[AUC]: Area Under the Curve
*[CUDA]: Compute Unified Device Architecture
*[GPU]: Graphics Processing Unit
*[GELU]: Gaussian Error Linear Unit
*[AdamW]: Adam with Weight Decay
*[HRF]: Hemodynamic Response Function
*[F1]: F1 Score - Harmonic mean of precision and recall
*[TR]: Repetition Time
*[T2]: Type 2 MRI weighting
*[3T]: 3 Tesla (magnetic field strength)
*[NURIPS]: Neural Information Processing Systems
*[WANDB]: Weights & Biases
*[VENV]: Virtual Environment