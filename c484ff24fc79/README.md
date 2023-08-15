# c484ff24fc79
+ `ttl` Equations of parabolic motion
+ `url` https://medium.com/@6unpnp/c484ff24fc79


## trinket
url https://trinket.io/python3/693dc45520

```python
import math
import matplotlib.pyplot as plt

# define environment constant
g = 10

# define initial conditions
x0 = 0
y0 = 0
theta = math.atan(4/3)
v0 = 50
v0x = v0 * math.cos(theta)
v0y = v0 * math.sin(theta)

# calculate coefficients
c0 = y0 - (v0y/v0x)*x0 - (g/2*v0x**2)*x0**2
c1 = (v0y/v0x) + (g/v0x**2)*x0
c2 = -(g/(2*v0x**2))
print("c0 =", c0)
print("c1 =", c1)
print("c2 =", c2)

# create data of x and y
N = 240
x = [*range(0, N+1)]
y = [(c0 + c1*i + c2*i**2) for i in x]

# plot data
plt.xlabel("x")
plt.xlim([0, 240])

plt.ylabel("y")
plt.ylim([0, 100])

plt.grid()

plt.plot(x, y, ".")
plt.show()
```
