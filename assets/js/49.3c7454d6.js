(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{416:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springboot-教程之访问-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springboot-教程之访问-elasticsearch"}},[t._v("#")]),t._v(" SpringBoot 教程之访问 Elasticsearch")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E7%AE%80%E4%BB%8B"}},[t._v("简介")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E9%80%9A%E8%BF%87-rest-%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5-elasticsearch"}},[t._v("通过 REST 客户端连接 Elasticsearch")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%80%9A%E8%BF%87-jest-%E8%BF%9E%E6%8E%A5-elasticsearch"}},[t._v("通过 Jest 连接 Elasticsearch")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%80%9A%E8%BF%87-spring-data-%E8%AE%BF%E9%97%AE-elasticsearch"}},[t._v("通过 Spring Data 访问 Elasticsearch")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#elasticsearch-repositories"}},[t._v("Elasticsearch Repositories")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E6%BA%90%E7%A0%81"}},[t._v("源码")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%BC%95%E7%94%B3%E5%92%8C%E5%BC%95%E7%94%A8"}},[t._v("引申和引用")])])]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.elastic.co/products/elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Elasticsearch"),s("OutboundLink")],1),t._v(" 是一个开源的、分布式的搜索和分析引擎。")]),t._v(" "),s("h3",{attrs:{id:"通过-rest-客户端连接-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-rest-客户端连接-elasticsearch"}},[t._v("#")]),t._v(" 通过 REST 客户端连接 Elasticsearch")]),t._v(" "),s("p",[t._v("如果在 classpath 路径下存在 "),s("code",[t._v("org.elasticsearch.client:elasticsearch-rest-client")]),t._v(" jar 包，Spring Boot 会自动配置并注册一个 "),s("code",[t._v("RestClient")]),t._v(" Bean，它的默认访问路径为："),s("code",[t._v("localhost:9200")]),t._v("。")]),t._v(" "),s("p",[t._v("你可以使用如下方式进行定制：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.elasticsearch.rest.uris")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://search.example.com:9200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.elasticsearch.rest.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("user")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.elasticsearch.rest.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("secret")]),t._v("\n")])])]),s("p",[t._v("您还可以注册实现任意数量的 "),s("code",[t._v("RestClientBuilderCustomizer")]),t._v(" bean，以进行更高级的定制。要完全控制注册，请定义 "),s("code",[t._v("RestClient")]),t._v(" bean。")]),t._v(" "),s("p",[t._v("如果 classpath 路径有 "),s("code",[t._v("org.elasticsearch.client：elasticsearch-rest-high-level-client")]),t._v(" jar 包，Spring Boot 将自动配置一个 "),s("code",[t._v("RestHighLevelClient")]),t._v("，它包装任何现有的 "),s("code",[t._v("RestClient")]),t._v(" bean，重用其 HTTP 配置。")]),t._v(" "),s("h3",{attrs:{id:"通过-jest-连接-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-jest-连接-elasticsearch"}},[t._v("#")]),t._v(" 通过 Jest 连接 Elasticsearch")]),t._v(" "),s("p",[t._v("如果 classpath 上有 Jest，你可以注入一个自动配置的 "),s("code",[t._v("JestClient")]),t._v("，默认情况下是 "),s("code",[t._v("localhost:9200")]),t._v("。您可以进一步调整客户端的配置方式，如以下示例所示：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.elasticsearch.jest.uris")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://search.example.com:9200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.elasticsearch.jest.read-timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("10000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.elasticsearch.jest.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("user")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.elasticsearch.jest.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("secret")]),t._v("\n")])])]),s("p",[t._v("您还可以注册实现任意数量的 "),s("code",[t._v("HttpClientConfigBuilderCustomizer")]),t._v(" bean，以进行更高级的定制。以下示例调整为其他 HTTP 设置：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpSettingsCustomizer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClientConfigBuilderCustomizer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("customize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpClientConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tbuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxTotalConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultMaxTotalConnectionPerRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("要完全控制注册，请定义 "),s("code",[t._v("JestClient")]),t._v(" bean。")]),t._v(" "),s("h3",{attrs:{id:"通过-spring-data-访问-elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-spring-data-访问-elasticsearch"}},[t._v("#")]),t._v(" 通过 Spring Data 访问 Elasticsearch")]),t._v(" "),s("p",[t._v("要连接到 Elasticsearch，您必须提供一个或多个集群节点的地址。可以通过将 "),s("code",[t._v("spring.data.elasticsearch.cluster-nodes")]),t._v(" 属性设置为以逗号分隔的 "),s("code",[t._v("host:port")]),t._v(" 列表来指定地址。使用此配置，可以像任何其他 Spring bean 一样注入 "),s("code",[t._v("ElasticsearchTemplate")]),t._v(" 或 "),s("code",[t._v("TransportClient")]),t._v("，如以下示例所示：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elasticsearch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cluster"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("nodes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9300")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyBean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElasticsearchTemplate")]),t._v(" template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElasticsearchTemplate")]),t._v(" template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果你添加了自定义的 "),s("code",[t._v("ElasticsearchTemplate")]),t._v(" 或 "),s("code",[t._v("TransportClient")]),t._v(" "),s("code",[t._v("@Bean")]),t._v(" ，就会替换默认的配置。")]),t._v(" "),s("h3",{attrs:{id:"elasticsearch-repositories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-repositories"}},[t._v("#")]),t._v(" Elasticsearch Repositories")]),t._v(" "),s("p",[t._v("Spring Data 包含对 Elasticsearch 的 repository 支持。基本原则是根据方法名称自动为您构建查询。")]),t._v(" "),s("p",[t._v("事实上，Spring Data JPA 和 Spring Data Elasticsearch 共享相同的通用基础架构。")]),t._v(" "),s("h2",{attrs:{id:"源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),s("p",[t._v("完整示例："),s("a",{attrs:{href:"https://github.com/dunwu/spring-boot-tutorial/tree/master/codes/spring-boot-data-elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("使用方法：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mvn clean package\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" target\njava -jar spring-boot-data-elasticsearch.jar\n")])])]),s("h2",{attrs:{id:"引申和引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引申和引用"}},[t._v("#")]),t._v(" 引申和引用")]),t._v(" "),s("p",[s("strong",[t._v("引申")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/dunwu/spring-boot-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot 教程"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("参考")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot 官方文档之 boot-features-elasticsearch"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/spring-projects/spring-data-elasticsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Data Elasticsearch Github"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Data Elasticsearch 官方文档"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);