export const data = JSON.parse("{\"key\":\"v-0e64242d\",\"path\":\"/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html\",\"title\":\"03. 테라폼 실행\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Naver Cloud Platform에서의 Terraform 실습\",\"tag\":[\"ncloud\",\"ncp\",\"terraform\",\"workshop\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"03. 테라폼 실행\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Naver Cloud Platform에서의 Terraform 실습\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"03. 테라폼 실행\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"ncloud\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"ncp\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"terraform\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"workshop\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"03. 테라폼 실행\\\",\\\"image\\\":[\\\"https://vuepress-theme-hope-docs-demo.netlify.app/\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"리소스 분석\",\"slug\":\"리소스-분석\",\"link\":\"#리소스-분석\",\"children\":[]},{\"level\":2,\"title\":\"Terraform Provider 구성\",\"slug\":\"terraform-provider-구성\",\"link\":\"#terraform-provider-구성\",\"children\":[]},{\"level\":2,\"title\":\"버전관리 연산자\",\"slug\":\"버전관리-연산자\",\"link\":\"#버전관리-연산자\",\"children\":[]},{\"level\":2,\"title\":\"Terraform Apply\",\"slug\":\"terraform-apply\",\"link\":\"#terraform-apply\",\"children\":[]},{\"level\":2,\"title\":\"Terraform Destroy\",\"slug\":\"terraform-destroy\",\"link\":\"#terraform-destroy\",\"children\":[]},{\"level\":2,\"title\":\"Terraform Format\",\"slug\":\"terraform-format\",\"link\":\"#terraform-format\",\"children\":[]},{\"level\":2,\"title\":\"Terraform Data Sources\",\"slug\":\"terraform-data-sources\",\"link\":\"#terraform-data-sources\",\"children\":[]},{\"level\":2,\"title\":\"Terraform Dependency Mapping\",\"slug\":\"terraform-dependency-mapping\",\"link\":\"#terraform-dependency-mapping\",\"children\":[]},{\"level\":2,\"title\":\"Terraform 코드 구성\",\"slug\":\"terraform-코드-구성\",\"link\":\"#terraform-코드-구성\",\"children\":[{\"level\":3,\"title\":\"main.tf 파일\",\"slug\":\"main-tf-파일\",\"link\":\"#main-tf-파일\",\"children\":[]},{\"level\":3,\"title\":\"variable.tf 파일\",\"slug\":\"variable-tf-파일\",\"link\":\"#variable-tf-파일\",\"children\":[]},{\"level\":3,\"title\":\"output.tf 파일\",\"slug\":\"output-tf-파일\",\"link\":\"#output-tf-파일\",\"children\":[]}]},{\"level\":2,\"title\":\"Terraform Dependency Graph\",\"slug\":\"terraform-dependency-graph\",\"link\":\"#terraform-dependency-graph\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":1.34,\"words\":402},\"filePathRelative\":\"03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.md\",\"excerpt\":\"<h1> 03. 테라폼 실행</h1>\\n<h2> 리소스 분석</h2>\\n<p>모든 Terraform으로 구성되는 리소스는 정확히 동일한 방식으로 구성됩니다.</p>\\n<div class=\\\"language-hcl line-numbers-mode\\\" data-ext=\\\"hcl\\\"><pre class=\\\"language-hcl\\\"><code>resource type <span class=\\\"token string\\\">\\\"name\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">parameter</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"foo\\\"</span>\\n  <span class=\\\"token property\\\">parameter2</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"bar\\\"</span>\\n  <span class=\\\"token property\\\">list</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"one\\\"</span>, <span class=\\\"token string\\\">\\\"two\\\"</span>, <span class=\\\"token string\\\">\\\"three\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}