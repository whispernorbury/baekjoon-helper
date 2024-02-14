# DHLotto Web Crawler
## Install Modules
```
pip install requests bs4
```
## Start
```
python lotto.py
```
## TODO
- asynchronizing
- show progression status with async
## Note
About **《15673: Lotto》** [(here)](https://www.acmicpc.net/problem/15637) 

Iterating Web crawl by post requesting with Form Data.  
Need to __Hard coding__ for output because WebCrawling __takes times too much__...

폼 데이터를 담아 post요청을 보낸 후 크롤링하는 것을 반복시행합니다.  
크롤 후 데이터 추출하는데 시간이 오래 걸려 제출 시 __하드코딩__ 해야합니다.
