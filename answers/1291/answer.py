def sumOfDigits(n: int):
  nw: str = str(n)
  sum: int = 0
  for i in nw:
    sum += int(i)
  return sum

def numOfPrime(n: int):
  num: int = 0 
  prime: int = 2
  while (n != 1):
    if (n % prime == 0):
      num += 1
      while n % prime == 0:
        n /= prime
    prime += 1
  return num

def isLeemyun(n: int):
  if (sumOfDigits(n) % 2 == 0):
    return False
  if (n == 4 or n >= 6):
    return True
  return False 

def isLeemhyun(n: int):
  if (n == 2 or n == 4):
    return True
  if (numOfPrime(n) > 2 and numOfPrime(n) % 2 == 0):
    return True
  return False

def solve(n: int):
  if (isLeemyun(n)):
    if (isLeemhyun(n)):
      return 4
    else:
      return 1
  else:
    if (isLeemhyun(n)):
      return 2
    else:
      return 3

a: int = int(input())
print(solve(a))