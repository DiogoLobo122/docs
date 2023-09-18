export const data = JSON.parse("{\"key\":\"v-06505cd2\",\"path\":\"/02-PrivatePlatform/Vsphere/Vsphere_template_issue.html\",\"title\":\"VSphere 템플릿 생성 이슈\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"VSphere 템플릿 생성 이슈\",\"tag\":[\"vsphere\",\"template\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/02-PrivatePlatform/Vsphere/Vsphere_template_issue.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"VSphere 템플릿 생성 이슈\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"VSphere 템플릿 생성 이슈\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vsphere\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"template\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"VSphere 템플릿 생성 이슈\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.28,\"words\":83},\"filePathRelative\":\"02-PrivatePlatform/Vsphere/Vsphere_template_issue.md\",\"excerpt\":\"<h1> VSphere 템플릿 생성 이슈</h1>\\n<ol>\\n<li>redhat 계열</li>\\n</ol>\\n<ul>\\n<li>아래 네개의 패키지의 설치가 필요하다. 특히 perl은 거의 설치가 안되어 있음</li>\\n<li>open-vm-tools, open-vm-tools-deploypkg, net-tools, perl</li>\\n<li>설치 후 template 생성하고 배포하면 됨</li>\\n</ul>\\n<ol start=\\\"2\\\">\\n<li>debian 계열</li>\\n</ol>\\n<ul>\\n<li>/etc/systemd/system/vmtoolsd.service 파일에 구문 추가</li>\\n<li>18.04은 추가하여도 가끔 NIC, hostname이 기존에 템플릿의 정보를 가져올때가 있음</li>\\n</ul>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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