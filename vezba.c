#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, j;
    int *p;
    i = 5;
    p = &i;
    j = *p;
    *p = 7;

    printf("i = %d, j = %d\n", i, j);
    return 0;
}
