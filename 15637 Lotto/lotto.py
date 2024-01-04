import requests
from bs4 import BeautifulSoup

answer = {}
url = "https://dhlottery.co.kr/gameResult.do?method=byWin"

def crawl(idx):
    payload = { "drwNo": f"{idx}", "drwNoList": f"{idx}" }
    response = requests.post(url, data=payload)
    soup = BeautifulSoup(response.text, "html.parser")
    numwin = soup.find("div", "win")
    nums = numwin.findAll("span", "ball_645")
    for i in nums:
        if i.text in answer:
            answer[i.text] += 1
        else:
            answer[i.text] = 1


print("Crawling started from dhlotto...")
for i in range(1, 701):
    crawl(i)
    if i % 35 == 0:
        print(f"{int(i / 7)}% completed.")


print('all calculated clear!')
print('#####################')
for i in range(1, 46):
    print(f"{i:2}:  {answer[str(i)]}")
print('#####################')
