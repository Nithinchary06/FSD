n=int(input())

arr=list(map(int,input().split()))

arr.sort()
k=sum(arr)//2
ans=arr[-1]
for i in range(n-2,0,-1):
  if 