(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{412:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springboot-教程之处理异步请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-教程之处理异步请求"}},[t._v("#")]),t._v(" SpringBoot 教程之处理异步请求")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#1-enableasync-%E6%B3%A8%E8%A7%A3"}},[t._v("1. "),s("code",[t._v("@EnableAsync")]),t._v(" 注解")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#2-async-%E6%B3%A8%E8%A7%A3"}},[t._v("2. "),s("code",[t._v("@Async")]),t._v(" 注解")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#21-%E6%94%AF%E6%8C%81%E7%9A%84%E7%94%A8%E6%B3%95"}},[t._v("2.1. 支持的用法")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#22-%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E7%94%A8%E6%B3%95"}},[t._v("2.2. 不支持的用法")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#3-%E6%98%8E%E7%A1%AE%E6%8C%87%E5%AE%9A%E6%89%A7%E8%A1%8C%E5%99%A8"}},[t._v("3. 明确指定执行器")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#4-%E7%AE%A1%E7%90%86-async-%E7%9A%84%E5%BC%82%E5%B8%B8"}},[t._v("4. 管理 "),s("code",[t._v("@Async")]),t._v(" 的异常")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#5-%E7%A4%BA%E4%BE%8B%E6%BA%90%E7%A0%81"}},[t._v("5. 示例源码")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#6-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("6. 参考资料")])])]),t._v(" "),s("h2",{attrs:{id:"_1-enableasync-注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-enableasync-注解"}},[t._v("#")]),t._v(" 1. "),s("code",[t._v("@EnableAsync")]),t._v(" 注解")]),t._v(" "),s("p",[t._v("要使用 "),s("code",[t._v("@Async")]),t._v("，首先需要使用 "),s("code",[t._v("@EnableAsync")]),t._v(" 注解开启 Spring Boot 中的异步特性。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableAsync")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("更详细的配置说明，可以参考："),s("a",{attrs:{href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/scheduling/annotation/AsyncConfigurer.html",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("AsyncConfigurer")]),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_2-async-注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-async-注解"}},[t._v("#")]),t._v(" 2. "),s("code",[t._v("@Async")]),t._v(" 注解")]),t._v(" "),s("h3",{attrs:{id:"_2-1-支持的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-支持的用法"}},[t._v("#")]),t._v(" 2.1. 支持的用法")]),t._v(" "),s("p",[t._v("（1）"),s("strong",[t._v("无入参无返回值方法")])]),t._v(" "),s("p",[t._v("您可以用 "),s("code",[t._v("@Async")]),t._v(" 注解修饰方法，这表明这个方法是异步方式调用。换句话说，程序在调用此方法时会立即返回，而方法的实际执行发生在已提交给 Spring "),s("code",[t._v("TaskExecutor")]),t._v(" 的任务中。在最简单的情况下，您可以将注解应用于返回 void 的方法，如以下示例所示：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this will be executed asynchronously")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("（2）"),s("strong",[t._v("有入参无返回值方法")])]),t._v(" "),s("p",[t._v("与使用 "),s("code",[t._v("@Scheduled")]),t._v(" 注释注释的方法不同，这些方法可以指定参数，因为它们在运行时由调用者以“正常”方式调用，而不是由容器管理的调度任务调用。例如，以下代码是 "),s("code",[t._v("@Async")]),t._v(" 注解的合法应用：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this will be executed asynchronously")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("（3）"),s("strong",[t._v("有入参有返回值方法")])]),t._v(" "),s("p",[t._v("甚至可以异步调用返回值的方法。但是，这些方法需要具有 "),s("code",[t._v("Future")]),t._v(" 类型的返回值。这仍然提供了异步执行的好处，以便调用者可以在调用 "),s("code",[t._v("Future")]),t._v(" 上的 "),s("code",[t._v("get()")]),t._v(" 之前执行其他任务。以下示例显示如何在返回值的方法上使用"),s("code",[t._v("@Async")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Future")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("returnSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this will be executed asynchronously")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-不支持的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-不支持的用法"}},[t._v("#")]),t._v(" 2.2. 不支持的用法")]),t._v(" "),s("p",[s("code",[t._v("@Async")]),t._v(" 不能与生命周期回调一起使用，例如 "),s("code",[t._v("@PostConstruct")]),t._v("。")]),t._v(" "),s("p",[t._v("要异步初始化 Spring bean，必须使用单独的初始化 Spring bean，然后在目标上调用 "),s("code",[t._v("@Async")]),t._v(" 带注释的方法，如以下示例所示：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleBeanImpl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleBean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleBeanInitializer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleBean")]),t._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleBeanInitializer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SampleBean")]),t._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@PostConstruct")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        bean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-明确指定执行器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-明确指定执行器"}},[t._v("#")]),t._v(" 3. 明确指定执行器")]),t._v(" "),s("p",[t._v("默认情况下，在方法上指定 "),s("code",[t._v("@Async")]),t._v(" 时，使用的执行器是在启用异步支持时配置的执行器，即如果使用 XML 或 "),s("code",[t._v("AsyncConfigurer")]),t._v(" 实现（如果有），则为 "),s("code",[t._v("annotation-driven")]),t._v(" 元素。但是，如果需要指示在执行给定方法时应使用默认值以外的执行器，则可以使用 "),s("code",[t._v("@Async")]),t._v(" 注解的 value 属性。以下示例显示了如何执行此操作：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Async")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"otherExecutor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// this will be executed asynchronously by "otherExecutor"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在这种情况下，“otherExecutor”可以是 Spring 容器中任何 Executor bean 的名称，也可以是与任何 Executor 关联的限定符的名称（例如，使用 "),s("code",[t._v("<qualifier>")]),t._v(" 元素或 Spring 的 "),s("code",[t._v("@Qualifier")]),t._v(" 注释指定） ）。")]),t._v(" "),s("h2",{attrs:{id:"_4-管理-async-的异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-管理-async-的异常"}},[t._v("#")]),t._v(" 4. 管理 "),s("code",[t._v("@Async")]),t._v(" 的异常")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("@Async")]),t._v(" 方法的返回值类型为 "),s("code",[t._v("Future")]),t._v(" 型时，很容易管理在方法执行期间抛出的异常，因为在调用 "),s("code",[t._v("get")]),t._v(" 结果时会抛出此异常。但是，对于返回值类型为 void 型的方法，异常不会被捕获且无法传输。您可以提供 "),s("code",[t._v("AsyncUncaughtExceptionHandler")]),t._v(" 来处理此类异常。以下示例显示了如何执行此操作：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyAsyncUncaughtExceptionHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsyncUncaughtExceptionHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleUncaughtException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" ex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handle exception")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("默认情况下，仅记录异常。您可以使用 "),s("code",[t._v("AsyncConfigurer")]),t._v(" 或 "),s("code",[t._v("<task：annotation-driven />")]),t._v(" XML 元素定义自定义 "),s("code",[t._v("AsyncUncaughtExceptionHandler")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"_5-示例源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-示例源码"}},[t._v("#")]),t._v(" 5. 示例源码")]),t._v(" "),s("blockquote",[s("p",[t._v("示例源码："),s("a",{attrs:{href:"https://github.com/dunwu/spring-boot-tutorial/tree/master/codes/spring-boot-async",target:"_blank",rel:"noopener noreferrer"}},[t._v("spring-boot-async"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_6-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-参考资料"}},[t._v("#")]),t._v(" 6. 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-external-config",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot 官方文档之 boot-features-external-config"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/integration.html#scheduling-annotation-support",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot 官方文档之 scheduling-annotation-support"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);