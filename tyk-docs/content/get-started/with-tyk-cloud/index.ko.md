---
date: 2017-03-22T11:31:15Z
title: With cloud korean
menu: 
  main:
    parent: "Get started Korean"
weight: 1
url: "/ko-kr/get-started/with-tyk-cloud/"
---

### Tyk Cloud 란 무엇입니까?
 
Tyk Cloud API 관리 플랫폼은 개발자, 신생 기업 및 대기업이 간단하고 확장 가능한 방식으로 Tyk 플랫폼을 시작하여 서비스에 API 관리 레이어를 추가 할 수있는 간편한 호스팅 방식을 제공합니다.

#### 작동 원리
Tyk Cloud는 API 서비스의 프록시 (또는 "게이트웨이") 역할을합니다. 이러한 서비스는 Tyk에서 볼 수 있어야하므로 인터넷에 노출되어야하지만 공개 할 필요는 없습니다.

전용 서비스 엔드 포인트 (`your_organisation.cloud.tyk.io/ {api-slug}`)에서 기본 서비스 URL로 트래픽을 보내도록 Tyk을 설정합니다. Tyk Cloud 만 서비스에 액세스 할 수 있도록 Tyk 특정 액세스 헤더를 삽입하는 등 원하는 방식으로 요청을 수정할 수 있습니다.

그런 다음 직접 또는 개발자 포털을 통해 개발자에게 Tyk 프록시에 대한 액세스 권한을 부여하는 토큰 발행을 시작할 수 있습니다. 그러면 토큰 프록시가 업스트림 서비스를 측정, 관리 및 보안합니다.


#### 시작하기

Tyk Cloud를 시작하려면 [튜토리얼] [1]에 따라 계정을 만드십시오.