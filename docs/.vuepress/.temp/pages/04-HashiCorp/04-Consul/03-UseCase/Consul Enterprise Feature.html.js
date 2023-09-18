export const data = JSON.parse("{\"key\":\"v-014bd6b4\",\"path\":\"/04-HashiCorp/04-Consul/03-UseCase/Consul%20Enterprise%20Feature.html\",\"title\":\"Consul Mesh Gateway - K8S x BMs/VMs\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Mesh Gateway k8s and VM\",\"tag\":[\"Consul\",\"Hybrid\",\"Kubetenetes\",\"k8s\",\"VM\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/04-Consul/03-UseCase/Consul%20Enterprise%20Feature.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Consul Mesh Gateway - K8S x BMs/VMs\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Mesh Gateway k8s and VM\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Consul\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Hybrid\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Kubetenetes\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"k8s\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"VM\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Consul Mesh Gateway - K8S x BMs/VMs\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 개요\",\"slug\":\"_1-개요\",\"link\":\"#_1-개요\",\"children\":[{\"level\":3,\"title\":\"1.1 아키텍처\",\"slug\":\"_1-1-아키텍처\",\"link\":\"#_1-1-아키텍처\",\"children\":[]},{\"level\":3,\"title\":\"1.2 Port 구성 참고\",\"slug\":\"_1-2-port-구성-참고\",\"link\":\"#_1-2-port-구성-참고\",\"children\":[]}]},{\"level\":2,\"title\":\"2. Kubernetes상에 Consul설치\",\"slug\":\"_2-kubernetes상에-consul설치\",\"link\":\"#_2-kubernetes상에-consul설치\",\"children\":[{\"level\":3,\"title\":\"2.1 사전 준비 사항\",\"slug\":\"_2-1-사전-준비-사항\",\"link\":\"#_2-1-사전-준비-사항\",\"children\":[]},{\"level\":3,\"title\":\"2.2 설치\",\"slug\":\"_2-2-설치\",\"link\":\"#_2-2-설치\",\"children\":[]}]},{\"level\":2,\"title\":\"3. VM/BM상에 Consul설치\",\"slug\":\"_3-vm-bm상에-consul설치\",\"link\":\"#_3-vm-bm상에-consul설치\",\"children\":[{\"level\":3,\"title\":\"3.1 사전 준비 사항\",\"slug\":\"_3-1-사전-준비-사항\",\"link\":\"#_3-1-사전-준비-사항\",\"children\":[]},{\"level\":3,\"title\":\"3.2 Consul 바이너리 다운로드와 PATH 설정\",\"slug\":\"_3-2-consul-바이너리-다운로드와-path-설정\",\"link\":\"#_3-2-consul-바이너리-다운로드와-path-설정\",\"children\":[]},{\"level\":3,\"title\":\"3.3 Primary(k8s) 환경에서 인증서 가져오기\",\"slug\":\"_3-3-primary-k8s-환경에서-인증서-가져오기\",\"link\":\"#_3-3-primary-k8s-환경에서-인증서-가져오기\",\"children\":[]},{\"level\":3,\"title\":\"3.4 Consul 구성 파일 작성\",\"slug\":\"_3-4-consul-구성-파일-작성\",\"link\":\"#_3-4-consul-구성-파일-작성\",\"children\":[]}]},{\"level\":2,\"title\":\"4. BM/VM 환경의 Mesh Gateway 구성\",\"slug\":\"_4-bm-vm-환경의-mesh-gateway-구성\",\"link\":\"#_4-bm-vm-환경의-mesh-gateway-구성\",\"children\":[{\"level\":3,\"title\":\"4.1 Envoy 설치\",\"slug\":\"_4-1-envoy-설치\",\"link\":\"#_4-1-envoy-설치\",\"children\":[]},{\"level\":3,\"title\":\"4.2 Mesh Gateway 실행\",\"slug\":\"_4-2-mesh-gateway-실행\",\"link\":\"#_4-2-mesh-gateway-실행\",\"children\":[]}]},{\"level\":2,\"title\":\"5 TEST (Option)\",\"slug\":\"_5-test-option\",\"link\":\"#_5-test-option\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":8.05,\"words\":2415},\"filePathRelative\":\"04-HashiCorp/04-Consul/03-UseCase/Consul Enterprise Feature.md\",\"excerpt\":\"<h1> Consul Mesh Gateway - K8S x BMs/VMs</h1>\\n<blockquote>\\n<p>이 문서에서는 Consul을 사용하여 상이한 두 Consul로 구성된 클러스터(마스터가 별개)의 서비스를 연계하는 방법을 설명합니다.</p>\\n</blockquote>\\n<h2> 1. 개요</h2>\\n<h3> 1.1 아키텍처</h3>\\n<p>네트워크 영역이 분리되어있는 두 환경의 애플리케이션 서비스들을 Service Mesh로 구성하는 방법을 알아 봅니다. 이번 구성 예에서는 Kubernetes와 Baremetal(BM)이나 VirtualMachine(VM)에 Consul Cluster(Datacenter)를 구성하고 각 환경의 애플리케이션 서비스를 Mesh Gateway로 연계합니다.</p>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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