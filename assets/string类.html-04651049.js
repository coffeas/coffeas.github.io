const n=JSON.parse(`{"key":"v-0207a0fc","path":"/docs/studynodes/Java/Javase/string%E7%B1%BB.html","title":"String类","lang":"en-US","frontmatter":{"title":"String类","index":false,"icon":"discover","author":"Takato","date":"2023-04-19T00:00:00.000Z","category":["Java"],"tag":["Java基础"],"description":"本文内容 1. String基础 String 类表示字符串。Java 程序中的所有字符串字面值，例如 \\"abc\\"，都被实现为该类的实例，因此字符串属于对象。 public final class String implements java.io.Serializable, Comparable&lt;String&gt;, CharSequence, Constable, ConstantDesc { }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/studynodes/Java/Javase/string%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"Takato's domain"}],["meta",{"property":"og:title","content":"String类"}],["meta",{"property":"og:description","content":"本文内容 1. String基础 String 类表示字符串。Java 程序中的所有字符串字面值，例如 \\"abc\\"，都被实现为该类的实例，因此字符串属于对象。 public final class String implements java.io.Serializable, Comparable&lt;String&gt;, CharSequence, Constable, ConstantDesc { }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Takato"}],["meta",{"property":"article:tag","content":"Java基础"}],["meta",{"property":"article:published_time","content":"2023-04-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"String类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Takato\\"}]}"]]},"headers":[{"level":2,"title":"1. String基础","slug":"_1-string基础","link":"#_1-string基础","children":[{"level":3,"title":"1.1 创建字符串的两种方式","slug":"_1-1-创建字符串的两种方式","link":"#_1-1-创建字符串的两种方式","children":[]},{"level":3,"title":"1.2 String 常用方法","slug":"_1-2-string-常用方法","link":"#_1-2-string-常用方法","children":[]}]},{"level":2,"title":"2. String不可变性","slug":"_2-string不可变性","link":"#_2-string不可变性","children":[{"level":3,"title":"2.1 什么是不可变？","slug":"_2-1-什么是不可变","link":"#_2-1-什么是不可变","children":[]},{"level":3,"title":"2.2 探索 String 不可变的真正原因","slug":"_2-2-探索-string-不可变的真正原因","link":"#_2-2-探索-string-不可变的真正原因","children":[]},{"level":3,"title":"2.3 String 为什么要设计成不可变？","slug":"_2-3-string-为什么要设计成不可变","link":"#_2-3-string-为什么要设计成不可变","children":[]}]},{"level":2,"title":"3. String 常见问题","slug":"_3-string-常见问题","link":"#_3-string-常见问题","children":[{"level":3,"title":"3.1 String、StringBuffer、StringBuilder 的区别","slug":"_3-1-string、stringbuffer、stringbuilder-的区别","link":"#_3-1-string、stringbuffer、stringbuilder-的区别","children":[]},{"level":3,"title":"3.2 字符串拼接用 \\"+\\" 还是 StringBuilder？","slug":"_3-2-字符串拼接用-还是-stringbuilder","link":"#_3-2-字符串拼接用-还是-stringbuilder","children":[]},{"level":3,"title":"3.3 String 类型的变量和常量做 \\"+\\" 运算时发生了什么？","slug":"_3-3-string-类型的变量和常量做-运算时发生了什么","link":"#_3-3-string-类型的变量和常量做-运算时发生了什么","children":[]},{"level":3,"title":"3.4 JDK 9 为什么要把 char[] 改为 byte[]？","slug":"_3-4-jdk-9-为什么要把-char-改为-byte","link":"#_3-4-jdk-9-为什么要把-char-改为-byte","children":[]}]},{"level":2,"title":"4. JDK 8 方法区的更变","slug":"_4-jdk-8-方法区的更变","link":"#_4-jdk-8-方法区的更变","children":[{"level":3,"title":"4.1 永久代与元空间","slug":"_4-1-永久代与元空间","link":"#_4-1-永久代与元空间","children":[]},{"level":3,"title":"4.2 字符串延迟加载","slug":"_4-2-字符串延迟加载","link":"#_4-2-字符串延迟加载","children":[]},{"level":3,"title":"4.3 intern() 方法","slug":"_4-3-intern-方法","link":"#_4-3-intern-方法","children":[]}]},{"level":2,"title":"5. 参考文章","slug":"_5-参考文章","link":"#_5-参考文章","children":[]}],"git":{},"readingTime":{"minutes":19.53,"words":5858},"filePathRelative":"docs/studynodes/Java/Javase/string类.md","localizedDate":"April 19, 2023","excerpt":"<details class=\\"hint-container details\\"><summary>本文内容</summary>\\n\\n</details>\\n<h2> 1. String基础</h2>\\n<p>String 类表示字符串。Java 程序中的所有字符串字面值，例如 \\"abc\\"，都被实现为该类的实例，因此字符串属于对象。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">String</span>\\n    <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>io<span class=\\"token punctuation\\">.</span></span>Serializable</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Comparable</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">CharSequence</span><span class=\\"token punctuation\\">,</span>\\n               <span class=\\"token class-name\\">Constable</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">ConstantDesc</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
