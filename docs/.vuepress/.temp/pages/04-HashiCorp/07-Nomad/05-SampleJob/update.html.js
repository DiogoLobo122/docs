export const data = JSON.parse("{\"key\":\"v-75912650\",\"path\":\"/04-HashiCorp/07-Nomad/05-SampleJob/update.html\",\"title\":\"update\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Nomad Sample\",\"tag\":[\"Nomad\",\"Sample\",\"Job\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/07-Nomad/05-SampleJob/update.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"update\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Nomad Sample\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Nomad\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Sample\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Job\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"update\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.24,\"words\":72},\"filePathRelative\":\"04-HashiCorp/07-Nomad/05-SampleJob/update.md\",\"excerpt\":\"<h1> update</h1>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">팁</p>\\n<p>nomad의 배포 방법 중 canary와 rolling update 관련된 내용입니다.</p>\\n</div>\\n<div class=\\\"language-hcl line-numbers-mode\\\" data-ext=\\\"hcl\\\"><pre class=\\\"language-hcl\\\"><code>...\\n  <span class=\\\"token comment\\\">#canary update - 새로운 버전의 task를 canary 변수의 수만큼 기동시키고 상황에 맞게 확인 후 배포</span>\\n  group <span class=\\\"token string\\\">\\\"canary\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">count</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">5</span>\\n\\n    <span class=\\\"token keyword\\\">update</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token property\\\">max_parallel</span>     <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1</span>\\n      <span class=\\\"token property\\\">canary</span>           <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1</span>\\n      <span class=\\\"token property\\\">min_healthy_time</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"30s\\\"</span>\\n      <span class=\\\"token property\\\">healthy_deadline</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"10m\\\"</span>\\n      <span class=\\\"token comment\\\">#배포 실패시 자동으로 전 버전으로 돌아감(배포 중이던 task 제거됨)</span>\\n      <span class=\\\"token property\\\">auto_revert</span>      <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token boolean\\\">true</span>\\n      <span class=\\\"token comment\\\">#task가 기동되어도 자동으로 다음 버전으로 넘어가지 않음(배포 전 버전 task 제거되지않음)</span>\\n      <span class=\\\"token property\\\">auto_promote</span>     <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token boolean\\\">false</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token comment\\\">#rolling update - 기동 중이던 task를 하나씩(max_parallel만큼) 신규 task로 변환하면서 배포</span>\\n  group <span class=\\\"token string\\\">\\\"api-server\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">count</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">6</span>\\n\\n    <span class=\\\"token keyword\\\">update</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token property\\\">max_parallel</span>     <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">2</span>\\n      <span class=\\\"token property\\\">min_healthy_time</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"30s\\\"</span>\\n      <span class=\\\"token property\\\">healthy_deadline</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"10m\\\"</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token comment\\\">#배포 시 service에 canary로 배포된 task에만 붙일 수 있는 tag 설정</span>\\n  <span class=\\\"token keyword\\\">service</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">port</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"http\\\"</span>\\n    <span class=\\\"token property\\\">name</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"canary-deployments\\\"</span>\\n\\n    <span class=\\\"token property\\\">tags</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n      <span class=\\\"token string\\\">\\\"live\\\"</span>\\n    <span class=\\\"token punctuation\\\">]</span>\\n\\n    <span class=\\\"token property\\\">canary_tags</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n      <span class=\\\"token string\\\">\\\"canary\\\"</span>\\n    <span class=\\\"token punctuation\\\">]</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n...\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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