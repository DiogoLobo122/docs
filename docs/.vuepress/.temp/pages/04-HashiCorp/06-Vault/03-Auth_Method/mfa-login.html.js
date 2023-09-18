export const data = JSON.parse("{\"key\":\"v-69e4c94c\",\"path\":\"/04-HashiCorp/06-Vault/03-Auth_Method/mfa-login.html\",\"title\":\"MFA Login with Vault TOTP\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Vault Login에 Vault TOTP 기반 MFA 추가\",\"tag\":[\"vault auth\",\"MFA\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/06-Vault/03-Auth_Method/mfa-login.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MFA Login with Vault TOTP\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vault Login에 Vault TOTP 기반 MFA 추가\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"MFA Login with Vault TOTP\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vault auth\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"MFA\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MFA Login with Vault TOTP\\\",\\\"image\\\":[\\\"https://vuepress-theme-hope-docs-demo.netlify.app/\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"ENV Setup\",\"slug\":\"env-setup\",\"link\":\"#env-setup\",\"children\":[]},{\"level\":2,\"title\":\"Enable username and password auth method\",\"slug\":\"enable-username-and-password-auth-method\",\"link\":\"#enable-username-and-password-auth-method\",\"children\":[]},{\"level\":2,\"title\":\"Create an entity and alias\",\"slug\":\"create-an-entity-and-alias\",\"link\":\"#create-an-entity-and-alias\",\"children\":[]},{\"level\":2,\"title\":\"Enable MFA method (TOTP)\",\"slug\":\"enable-mfa-method-totp\",\"link\":\"#enable-mfa-method-totp\",\"children\":[]},{\"level\":2,\"title\":\"Create login enforcement\",\"slug\":\"create-login-enforcement\",\"link\":\"#create-login-enforcement\",\"children\":[]},{\"level\":2,\"title\":\"Vault OTP Test (Option)\",\"slug\":\"vault-otp-test-option\",\"link\":\"#vault-otp-test-option\",\"children\":[]},{\"level\":2,\"title\":\"Vault Login Userpass + totp\",\"slug\":\"vault-login-userpass-totp\",\"link\":\"#vault-login-userpass-totp\",\"children\":[{\"level\":3,\"title\":\"CLI\",\"slug\":\"cli\",\"link\":\"#cli\",\"children\":[]},{\"level\":3,\"title\":\"UI\",\"slug\":\"ui\",\"link\":\"#ui\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":0.94,\"words\":282},\"filePathRelative\":\"04-HashiCorp/06-Vault/03-Auth_Method/mfa-login.md\",\"excerpt\":\"<h1> MFA Login with Vault TOTP</h1>\\n<blockquote>\\n<p>HashiCorp Learn - Login MFA : <a href=\\\"https://learn.hashicorp.com/tutorials/vault/multi-factor-authentication\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://learn.hashicorp.com/tutorials/vault/multi-factor-authentication</a><br>\\nConfigure TOTP MFA Method : <a href=\\\"https://www.vaultproject.io/api-docs/secret/identity/mfa/totp\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://www.vaultproject.io/api-docs/secret/identity/mfa/totp</a><br>\\nVault Login MFA Overview : <a href=\\\"https://www.vaultproject.io/docs/auth/login-mfa\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://www.vaultproject.io/docs/auth/login-mfa</a><br>\\n1.10.3+ recommend : <a href=\\\"https://discuss.hashicorp.com/t/vault-1-10-3-released/39394\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://discuss.hashicorp.com/t/vault-1-10-3-released/39394</a></p>\\n</blockquote>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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