// https://en.wikipedia.org/wiki/Maximum_subnizay_problem
#include <stdio.h>
#include <stddef.h>

int maxSequence(const int* nums, size_t n) {
    int max = 0;
    int max_until = 0;
    for (size_t i = 0; i < n; i++) {
      max_until = max_until > 0 ? max_until + nums[i] : nums[i];
      if (max_until > max)
        max = max_until;
    }
    return max;
}

int main ()
{
  int numbers[9] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
  size_t n = sizeof(numbers) / sizeof(numbers[0]);
  int result = maxSequence(numbers, n);
  printf ("%d\n", result);
  return 0;
}
