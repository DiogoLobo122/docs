export const data = JSON.parse("{\"key\":\"v-6ce8b9fc\",\"path\":\"/04-HashiCorp/04-Consul/02-Configuration/client.html\",\"title\":\"Consul 클라이언트 설정\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Consul Client Configuration\",\"tag\":[\"Consul\",\"Enterprise\",\"Configuration\",\"Client\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/04-Consul/02-Configuration/client.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Consul 클라이언트 설정\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Consul Client Configuration\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Consul\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Enterprise\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Configuration\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Client\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Consul 클라이언트 설정\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.46,\"words\":138},\"filePathRelative\":\"04-HashiCorp/04-Consul/02-Configuration/client.md\",\"excerpt\":\"<h1> Consul 클라이언트 설정</h1>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">팁</p>\\n<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 Client설정 파일입니다.<br>\\n네트워크는 프라이빗(온프레이머스) 환경입니다.</p>\\n</div>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>#consul client 설정\\nserver = false\\n\\nacl = {\\n  enabled = true\\n  default_policy = \\\"deny\\\"\\n  enable_token_persistence = true\\n  tokens = {\\n    agent = \\\"f820514a-5215-e741-fcb3-c00857405230\\\"\\n  }\\n}\\n\\nlicense_path = \\\"/opt/license/consul.license\\\"\\n\\nretry_join = [\\\"172.30.1.17\\\",\\\"172.30.1.18\\\",\\\"172.30.1.19\\\"]\\n\\nrejoin_after_leave = true\\n\\n\\n#tls 설정\\nca_file = \\\"/opt/ssl/consul/consul-agent-ca.pem\\\"\\nauto_encrypt = {\\n  tls = true\\n}\\n\\nverify_incoming = false\\nverify_outgoing = true\\nverify_server_hostname = true\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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