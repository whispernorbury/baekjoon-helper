# DHLotto Web Crawler
## For Docker user
```
bash run.sh
```
## W/O Docker
```
pip install requests bs4 && python lotto.py
```
## Note
About **《15673: Lotto》** [(here)](https://www.acmicpc.net/problem/15637) 

나눔로또에 async로 대량의 Request를 한꺼번에 보내면 DDoS공격으로 식별되어 IP가 ban되는 것을 확인했습니다.  
만약 시도해보고 싶다면 proxy설정을 하시거나 요청을 몇 개씩 묶어서 요청해보는 것을 시도하길 바랍니다.

폼 데이터를 담아 post요청을 보낸 후 크롤링하는 것을 반복시행합니다.  
크롤 후 데이터 추출하는데 시간이 오래 걸려 (async하게 요청할 수 없음) 제출 시 __하드코딩__ 해야합니다.