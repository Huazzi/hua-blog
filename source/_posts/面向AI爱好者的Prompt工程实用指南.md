---
title: 面向AI爱好者的Prompt工程实用指南
cover: 'https://cbc25ff.webp.li/221440.webp'
categories: 技术
tags:
  - Prompt
  - 提示词
  - AI
abbrlink: 62792
date: 2025-04-10 23:02:30
---
## 🌟面向 AI 爱好者的 Prompt 工程实用指南：与 AI 高效对话的艺术

嘿，各位 AI 探索者们！

想让你的 AI 伙伴（比如 DeepSeek、Gemini、GPT 等大语言模型）更懂你，输出**更精准、更有创意**的答案吗？那你就需要掌握“Prompt 工程”这门与 AI 沟通的艺术！这份指南浓缩了谷歌官方白皮书的精华，并结合实践经验，旨在帮你从入门到进阶，真正驾驭 Prompt。记住，Prompt 不仅仅是指令，更是**引导** AI 思维的钥匙，而且**人人可为**，只要掌握方法，你也能写出高质量的 Prompt！

**常见应用场景**：

- 文案撰写（写邮件、写简历、自媒体脚本）
- 内容总结（提炼会议纪要、总结长文）
- 数据生成（自动生成测试数据、表格）
- 代码辅助（补全、解释、重构代码）
- 知识问答（查资料、科普讲解）
- 多语言翻译（上下文保持准确）
- 学术科研（论文润色、论文结构建议）
- 学习助手（解题分析、考试训练）

*废话少说，接下来正篇开始...*

---

### 一、 核心理念：Prompt 是指令，更是引导

1.  **什么是 Prompt？** 简单说，就是你给 AI 的输入文本（有时也包括图片等），用来引导它生成你想要输出的内容。它是你与 AI 对话的起点和核心。
2.  **为什么重要？** Prompt 的质量直接决定 AI 输出的质量。好的 Prompt 能让 AI 更准确、高效地完成任务；差的 Prompt 则可能导致结果模糊、错误百出甚至南辕北辙。
3.  **人人可为：** 不需要你是数据科学家或算法工程师，只要理解基本原理并掌握方法，人人都能写出有效的 Prompt。但这需要不断的**练习和迭代**。

### 二、什么是 Prompt 工程？

Prompt Engineering（提示工程）是与 AI 模型对话的艺术和技术，通过设计高质量的「提示（Prompt）」来引导 AI 更好地理解任务、输出高质量结果。就像程序员通过代码告诉计算机要做什么，提示工程师通过文字告诉 AI 要如何回应。

它不仅适用于开发者，也适合普通用户，只要你想更聪明地使用 AI，Prompt 工程就是你最好的工具箱。

------

### 三、提示的构成与调控要素

要写好 Prompt，得掌握它的构成和影响 AI 输出的关键参数：

#### 1. 基础构成：Prompt 的三要素

- **角色设定（Role）**：告诉 AI 你要它扮演什么角色，例如：

  ```text
  “你是一个资深网文写手”
  或
  “你是一名旅行博主”
  ```

  

- **任务描述（Task）**：具体你要它完成什么，例如：

  ```
  “写一封投诉信”
  或
  “总结以下文章要点”
  ```

- **背景信息（Context）**：提供完成任务所需的上下文信息，例如：

  ```
  “请使用以下数据”
  或
  “以下是客户的评价”
  ```

#### 2. 参数调控：影响输出的关键因素

这些参数通常在 API 调用或高级设置中调整，也适用于部分 AI 工具的高级对话设置：

- **最大输出长度（Max Tokens）**：限制生成内容的最大字数。
- **温度值（Temperature）**：控制回答的“随机程度”。0 代表最严谨（偏保守），1 趋向发散（更有创意）。
- **Top-K / Top-P（Nucleus Sampling）**：控制生成内容的选择范围，Top-K 代表从前 K 个最可能词中随机选，Top-P 表示选出累积概率为 P 的词汇范围。

------

### 三、提示的常见类型与使用场景

这是 Prompt 的核心技巧，让 AI 更懂你的“法术”，掌握这些技巧，能让你的 Prompt 效果倍增：

1. **零样本 (Zero-shot):**

   * **定义：** 最简单直接的方式，只给出任务描述或问题，不给任何范例。

   * **适用：** 简单、常见的任务，或者你想看看 AI 的“原生”表现。

   * *例子：*

     ```
     “写一首关于春天早晨的五言绝句。”
     ```

2. **单样本/少样本 (One-shot / Few-shot):**

   * **定义：** **极其重要！** 在 Prompt 里给 AI 提供一个或几个（通常 3-5 个）完整的“输入 -> 输出”范例，清晰地展示你想要的格式、风格或解题思路。

   * **优势：** 大幅提升 AI 理解任务的能力和输出的准确性、一致性。特别适合需要特定格式、复杂指令或小众任务。

   * **要点：**

     *   提供几个**范例**来帮助 AI 学习格式或风格
     *   范例要**清晰、高质量、多样化**，能代表任务的主要情况，最好包含一些**边缘情况**。
     *   对于**分类任务**，范例要**混合包含不同类别**，避免让 AI 误以为答案总是一类（顺序偏见）。

   * *例子1 (少样本-提取信息):*

     ```
     文本：“张三，电话13812345678，邮箱zhangsan@email.com，住在北京朝阳区。”
     提取：{“姓名”: “张三”, “电话”: “13812345678”, “邮箱”: “zhangsan@email.com”}
     
     文本：“李四的邮箱是lisi@web.com，手机号是13987654321。”
     提取：{“姓名”: “李四”, “电话”: “13987654321”, “邮箱”: “lisi@web.com”}
     
     文本：“王五，住在上海浦东新区，邮箱wangwu@domain.net，电话13777778888。”
     提取：?
     ```

     *例子2(判断情绪正/负面)*：

     ```
     示例1：输入：天气真差！
     输出：负面
     
     示例2：输入：我今天升职了！
     输出：正面
     
     输入：这个产品我不太满意。
     输出：？
     ```

     

3. **角色设定Prompt、系统Prompt和上下文Prompt (System, Contextual, Role Prompting):**

   * **系统 Prompt (System Prompt):** 定义 AI 的**整体行为准则**或**宏观任务背景**。通常放在对话的最开始，影响整个交互过程。 

     * *例子：* 

       ```
       “你是一个专业的、严谨的法律文书助手，回答必须基于提供的法律条文。”
       ```

   * **上下文 Prompt (Contextual Prompt):** 提供与**当前具体任务相关**的背景信息、数据或临时约束。 

     * *例子：* 

       ```
       （在上面的系统 Prompt 后）“上下文：根据《合同法》第 X 条规定，请分析以下合同是否存在违约风险：[合同文本]”
       ```

   * **角色 Prompt (Role Prompt):** 指定 AI 扮演的**角色**，影响其语气、风格、知识侧重。

     * *例子：* 

       ```
       “请你扮演一位经验丰富的旅行向导，用幽默风趣的语言给我推荐三个适合带 5 岁小孩在北京周末游玩的地方。”
       ```

   * **组合使用：** 这三者经常结合使用，明确区分有助于设计意图清晰的 Prompt。

### 四、进阶提示策略

1. **思维链 (Chain of Thought, CoT):**

   * **定义：** **提升推理能力的关键！** 指示 AI 在给出最终答案前，先**一步一步地思考**并展示推理过程。特别适用于数学计算、逻辑推理、复杂问答等任务。

   * **如何触发：** 在 Prompt 中明确要求“请逐步思考并解释你的推理过程”，或在 Few-shot 示例中完整展示“问题 -> 推理步骤 -> 答案”的范式。

   * **优势：** 显著提高复杂任务的准确性；过程**可解释性强**，便于发现错误；对模型版本变化的**鲁棒性较好**。

   * **劣势：** 输出内容更长，消耗更多 Token，**成本更高**。

   * **实践：** 常与 Few-shot 结合效果更佳。对于需要精确答案的推理任务，建议设置 **Temperature=0**。

   * *例子：*

     ```
     “问题：一个篮子里有 5 个苹果，小明拿走了 2 个，妈妈又放进来了 3 个。现在篮子里有几个苹果？请一步步思考。”
     ```

     *预期 AI 输出类似:* 

     ```
     思考过程：1. 初始有 5 个苹果。 2. 小明拿走 2 个，剩下 5 - 2 = 3 个。 3. 妈妈放入 3 个，现有 3 + 3 = 6 个。 最终答案：现在篮子里有 6 个苹果。
     ```

2. **自洽性 (Self-consistency):**

   *   **定义：** CoT 的“加强版”。让 AI 使用 CoT 对同一个问题**多次**（用稍高的 Temperature，如 0.5-0.7）生成不同的推理路径和答案，最后选择**出现次数最多（“投票”最多）**的那个答案。
   *   **优势：** 能显著提高复杂推理任务的**最终准确性**。
   *   **劣势：** 计算成本**更高**（需要多次生成）。

3. **思维树 (Tree of Thoughts, ToT):**

   *   **定义：** CoT 的进一步泛化。允许 AI 同时探索**多个不同的推理分支**（像树枝一样分叉），并能评估不同分支的有效性，进行剪枝或选择更有希望的路径继续探索。
   *   **适用：** 更适合需要**探索和规划**的复杂问题，例如写一篇结构复杂文章的大纲。

4. **后退一步 (Step-back Prompting):**

   * **定义：** 遇到具体问题时，先让 AI 思考一个与该问题相关的、但更**抽象或更高层次**的问题/原则，然后利用这个“后退一步”的思考结果作为上下文来解决原问题。

   * **优势：** 有助于 AI **激活更广泛的相关知识**，减少对表面细节的偏见，提升复杂问题的解决能力。

   * *例子：* 

     ```
     具体问题：“我应该如何为一个物理不好的高中生解释相对论？” 后退一步问题：“解释复杂科学概念给非专业人士的关键原则是什么？” -> 利用原则来回答具体问题。
     ```

5. **ReAct (Reason & Act):**

   *   **定义：** 让 AI 不仅能“思考”（Reason），还能“行动”（Act）。结合推理和使用**外部工具**（如调用搜索引擎 API 获取最新信息、调用计算器进行计算、调用代码执行器运行代码）来获取信息或执行任务，并将结果反馈给推理过程。
   *   **意义：** 是构建**智能代理 (Agent)** 的基础。
   *   **要求：** 通常需要一定的**代码集成**能力来实现工具调用。

6. **自动 Prompt 工程 (Automatic Prompt Engineering, APE):**

   *   **定义：** 用 AI 来**生成和优化** Prompt！你可以给 AI 一个初始 Prompt 或任务描述，加上一些评价标准（或好/坏 Prompt 示例），让它生成更多、更好的候选 Prompt。
   *   **用途：** 帮你探索 Prompt 的可能性，或针对特定任务找到更优的表达方式。

---

### 五、 编码相关 Prompt：AI 助你变身编程高手

一些模型也能很好地处理代码任务：

1. **写代码：** 描述需求，让 AI 生成代码片段（如 Bash 脚本、Python 函数）。 *例子：* `“写一个 Python 函数，输入一个列表，返回其中所有偶数的平方和。”`

2. **解释代码：** 贴上代码，让 AI 解释其功能、逻辑。 *例子：* `“解释一下这段 Python 代码是做什么的：[代码]”`

3. **翻译代码：** 将一种编程语言的代码转换为另一种。 *例子：* `“把这段 Java 代码翻译成等效的 Python 代码：[Java 代码]”`

4. **调试和审查代码：** 贴上代码和错误信息（或无错误但求改进），让 AI 找出问题、提供修复建议或优化方案。 *例子：*

   ```
   “我这段 Python 代码报错了 ‘IndexError: list index out of range’，帮我看看哪里错了，怎么改？[代码]”
   ```

------

### 六、提示工程的辅助技巧

#### 1. 自动提示生成（APE：Automatic Prompt Engineering）

利用 AI 自动帮我们生成 Prompt，比如：

> “请为下面这个数据分析任务生成一个合适的 Prompt。”

#### 2. 结构化输出（JSON / XML）

通过让 AI 生成结构化的格式，便于后续程序处理或数据可视化。例如：

> “请用 JSON 格式输出下列学生成绩的统计数据。”

#### 3. 多轮对话与上下文延续

提示中合理引用对话历史，让 AI 更自然连贯地回答。

---

### 七、控制 AI 输出：不只是写，还要“调”

在直接与模型 API 或 Vertex AI 等平台交互时，除了 Prompt 本身，你还可以调整一系列参数来“微调”AI 的行为，就像调整乐器的音色：

1.  **输出长度 (Output Length / Max Tokens):**
    *   **作用：** 控制 AI 生成内容的总“字数”（Token 数）。一个汉字通常算 1-2 个 Token，一个英文单词约算 1 个 Token。
    *   **影响：** 太长可能费时费钱；太短可能意犹未尽。
    *   **注意：** 这个设置只是**截断**，并不会让 AI 自动写得更精炼。如果需要简洁的回答，你需要在 Prompt 里明确指示。

2.  **采样控制 (Sampling Controls):** AI 并非只预测一个词，而是预测一堆候选词的概率。采样控制决定它如何从这些候选词中“挑选”下一个词。
    *   **温度 (Temperature):**
        *   **作用：** 控制输出的随机性/创造性。数值范围通常在 0 到 1 (或更高，但 1 以上很少用)。
        *   **低 T 值 (如 0.0 - 0.3):** AI 会更倾向于选择概率最高的词，输出更**确定、保守、符合事实**。适合需要精确答案的任务，如事实问答、代码生成、遵循固定格式。**Temp=0 是“贪心解码”**，总是选概率最高的那个，结果最确定。
        *   **高 T 值 (如 0.7 - 1.0+):** AI 会考虑更多概率较低的词，输出更**有创意、多样化、可能带来惊喜**。适合创意写作、头脑风暴、生成多种选项。但过高可能导致胡言乱语或陷入**重复循环**（不停重复某个词或句子）。
        *   **如何选：** 没有绝对标准，需要根据任务尝试。
    *   **Top-K:**
        *   **作用：** AI 只在概率最高的 K 个候选词里进行选择。
        *   **影响：** K 越小，选择范围越窄，输出越保守、可预测；K 越大，选择范围越宽，越接近纯粹按概率采样。
    *   **Top-P (Nucleus Sampling):**
        *   **作用：** AI 选择概率最高的若干个词，直到这些词的概率加起来达到 P 值，然后在这些词里进行选择。
        *   **影响：** P 越小，选择范围越窄，输出越保守；P=1 则考虑所有概率不为零的词。Top-P 被认为比 Top-K 更灵活，因为它能根据当前预测的概率分布动态调整候选词数量。
    *   **组合使用与起点建议：**
        *   通常平台会结合使用这些参数（例如，先按 Top-K/Top-P 筛选，再用 Temperature 调整概率后采样）。理解你所用平台的具体逻辑很重要。
        *   **通用起点建议：** 可以从 `Temp=0.2`, `Top-P=0.95`, `Top-K=30~40` 开始尝试。需要创意时调高 T/P/K，需要严谨时调低 T (甚至设为 0)。
        *   **重要警告：** 不合适的参数组合（特别是极端值）可能导致模型卡在某个模式出不来，不断重复，这是“重复循环 Bug”，需要细心调整参数解决。

------

### 八、Prompt 设计模板（建议参考）

一个典型的 Prompt 可以包含以下几部分：

```
你是一位 [角色]。
你的任务是 [目标]。
请根据以下信息完成任务：
[补充信息]

要求：
- 语言风格：
- 输出格式：
- 长度控制：
- 给出示例：（如使用 Few-shot 可加）
```

---

### 九、最佳实践：精炼你的 Prompt 技艺

遵循这些原则，能让你的 Prompt 水平更上一层楼：

1.  **提供示例 (Few-shot):** （再次强调！）这是最有效的实践之一，务必掌握。
2.  **简洁明了：** Prompt 要清晰、具体、易于理解。避免复杂的术语和不必要的信息。使用明确的**动词**（如：生成、分类、总结、提取、翻译、重写、判断等）。
3.  **明确输出要求：** 具体说明你想要的输出**格式**（JSON、列表、段落数）、**风格**、**语气**、**包含/排除**的内容。越具体越好。
4.  **指令优于约束：** 尽量告诉 AI **“做什么”**，而不是仅仅**“不做什么”**。正面指令更清晰，不易产生歧义。当然，安全和格式的“不做什么”约束在必要时仍需使用。
5.  **控制长度：** 合理设置最大 Token 数，或在 Prompt 中明确要求长度（如“用不超过 100 字回答”）。
6.  **使用变量：** 对于需要重复使用或动态输入内容的 Prompt，使用占位符/变量（如 `{city}`, `{user_input}`）使 Prompt 更灵活，便于集成到应用中。
7.  **实验！实验！实验！** Prompt 工程没有银弹，唯有不断尝试：
    *   尝试不同的**措辞、风格、Prompt 类型** (Zero/Few-shot, CoT 等)。
    *   尝试不同的**模型、不同的参数** (Temperature, Top-K/P)。
    *   尝试不同的**输入/输出格式**（如要求 JSON 输出，甚至配合 JSON Schema 进行输入）。
8.  **结构化输出 (JSON/XML):** 对于需要提取信息、分类等任务，要求 AI 以 JSON 等结构化格式输出。
    *   **好处：** 便于程序处理，减少“幻觉”（胡编乱造），格式统一。
    *   **配合 `json-repair`:** 输出的 JSON 可能因 Token 限制而不完整，可以使用 `json-repair` (Python 库) 等工具尝试自动修复。
9.  **结构化输入 (JSON Schema):** 对于复杂的输入信息，可以使用 JSON Schema 来定义输入数据的结构。
    *   **好处：** 帮助 AI 更好地理解输入数据的各个字段及其关系，聚焦关键信息，尤其在处理大量或复杂数据时效果显著。
10.  **与人协作：** 和同伴一起尝试、交流经验，不同思路的碰撞往往能带来惊喜。
11.  **适应模型更新：** LLM 在不断进化，关注模型更新，及时调整你的 Prompt 策略以利用新能力。
12.  **详细记录：极其重要！** 创建一个表格（可参考白皮书中 Table 21 模板），记录每一次尝试，至少包含：
     *   **Prompt 名称/版本号**
     *   **目标 (Goal)**
     *   **使用的模型及版本**
     *   **配置参数 (Temperature, Top-K/P, Max Tokens)**
     *   **完整的 Prompt 文本**
     *   **输出结果 (Output) (或多个结果)**
     *   **结果评价 (OK / Not OK / 有时 OK)**
     *   **反馈/备注 (Feedback)**
     *   **(可选) 如果使用 Vertex AI Studio 等工具，保存 Prompt 的链接**
     *   **(重要) 如果是 RAG (检索增强生成) 系统，还要记录：使用的 Query、Chunk 设置、检索到的内容片段等。**
     *   **为什么记录？** 帮你追踪有效策略、调试问题、对比效果、避免重复劳动，是长期进步的关键！

------

## 十、结语：人人都能成为提示工程师

提示工程是一门人人都能学会的技能，不需要懂代码，也无需 AI 背景，只要你愿意动手尝试，就能成为更聪明的 AI 使用者！

从今天起，试着给 ChatGPT 或 Gemini 一个“更好的提问”，你会惊喜地发现，AI 真能“听懂人话”。

