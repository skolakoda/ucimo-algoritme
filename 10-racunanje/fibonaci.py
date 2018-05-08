def fibo(n):
    if n == 0:
        result = 0 #Base case
    elif n == 1:
        result = 1 #Base case
    else:
        result = fibo(n-1) + fibo(n-2) #Feeding the 'output' right back into the input function
    return result

print fibo(10)
