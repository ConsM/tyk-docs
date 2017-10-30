---
title: Log Data - 로그 데이터
weight: 120
menu: "main"
url: "/ko-kr/log-data/"
---

## <a name="logging"> </a> 로깅

Tyk은 출력을`stderr`와`stdout`에 로그합니다. 일반적인 설치에서는 프로세스를 실행하는 서비스 관리자가 처리하거나 리디렉션되며 Linux 배포본에 따라`/ var / log /`또는`/ var / log / upstart`에 출력됩니다.

로그 데이터는 일반적으로 오류 수준 이상이지만, 프로세스 실행 명령에`--debug` 플래그를 추가하여 디버그 모드보고 기능을 활성화 할 수 있습니다

> ** 경고 ** : 디버그 모드 로깅은 많은 출력을 생성하므로 권장되지 않습니다.

Tyk은 구조화 된 로그를 출력하려고 시도하므로 가능한 경우 요청 오류와 관련된 컨텍스트 데이터가 포함됩니다.

## <a name="aggregated-logs-with-sentry"> </a> Sentry가 포함 된 집계 된 로그

Tyk의 로거는 여러 개의 백엔드를 지원하며, 현재 Tyk와 함께 배송되는 것은 Sentry 후크입니다. 이렇게하면 Tyk에서 생성 된 HTTP 오류 및 기타 알림에 대한 컨텍스트를 모니터링하기 위해 여러 Tyk 프로세스의 로그 데이터를 Sentry 서버로 보낼 수 있습니다.

Sentry를 로그 애그리 게이터로 사용하려면`tyk.conf`와`tyk_analytics.conf` 둘 다에서 다음 설정을 업데이트하십시오 :

*`use_sentry` : Sentry logger를 활성화하려면 이것을`true`로 설정하고,`sentry_code`에서 Sentry DSN을 지정해야합니다.

*`sentry_code` : Tyk이 로그 데이터를 보낼 수있는 Sentry 할당 DSN (일종의 URL 끝점)입니다.

## <a name="aggregated-logs-with-logstash"> </a> Logstash로 집계 된 로그

Tyk의 로거는 v2.3부터 다중 백엔드를 지원합니다. Logstash는 지원되는 로그 집계 백엔드입니다.

Logstash를 로그 수집기로 사용하려면`tyk.conf`에서 다음 설정을 업데이트하십시오.

*`use_logstash` : 이것을 'true'로 설정하면 Logstash logger가 활성화됩니다.

*`logstash_transport` : 사용할 Logstash 전송은``tcp '`이어야합니다.

*`logstash_network_addr` : Logstash 클라이언트 네트워크 주소로 설정하고,`hostname : port` 형식이어야합니다.

## <a name="aggregated-logs-with-graylog"> </a> Graylog로 집계 된 로그

Tyk의 로거는 v2.3에서 다중 백엔드를 지원합니다. Graylog는 지원되는 로그 집계 백엔드입니다.

Graylog를 로그 애그리 게이터로 사용하려면`tyk.conf`에서 다음 설정을 업데이트하십시오 :

*`use_graylog` : Graylog logger를 활성화하려면 이것을 'true'로 설정하십시오.

*`graylog_network_addr` : Graylog 클라이언트 주소는`<graylog_ip> : <graylog_port>`의 형식입니다.

## <a name="aggregated-logs-with-syslog"> </a> Syslog가있는 집계 된 로그

Tyk의 로거는 v2.3부터 다중 백엔드를 지원합니다. Syslog는 지원되는 로그 집계 백엔드입니다.

Syslog를 로그 수집기로 사용하려면`tyk.conf`에서 다음 설정을 업데이트하십시오 :

*`use_syslog` : 이것을 'true'로 설정하면 Syslog 로거를 사용할 수 있습니다.

*`syslog_transport` : 사용할 Syslog 전송은``udp '`이거나 비어 있어야합니다.

*`syslog_network_addr` : Syslog 클라이언트 네트워크 주소로 설정하고,`hostname : port` 형식이어야합니다
