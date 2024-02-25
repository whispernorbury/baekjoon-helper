import requests
from bs4 import BeautifulSoup

answer = {}
url = "https://dhlottery.co.kr/gameResult.do?method=byWin"

def crawl(idx):
    payload = { "drwNo": f"{idx}", "drwNoList": f"{idx}" }
    response = requests.post(url, data=payload)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        numwin = soup.find("div", "win")
        nums = numwin.findAll("span", "ball_645")
        for i in nums:
            if i.text in answer:
                answer[i.text] += 1
            else:
                answer[i.text] = 1
    else:
        print(f"Request failed with status code: {response.status_code}")
        return
            
print("Crawling started from dhlotto...")
for i in range(1, 701):
    crawl(i)
    if i % 35 == 0:
        print(f"{int(i / 7)}% completed.")

print('all calculated clear!')
print('#####################')
print(answer)
print('#####################')
