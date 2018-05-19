#include <cstdlib>
#include <iostream>
using namespace std;

int main()
{
        int x = 7; /* uneti broj po zelji */
        int i;

        for (i=1; i<=10; i++)
        {
                cout<<x<<" * "<<i<<" = "<<i*x<<endl;
        }

        return EXIT_SUCCESS;
}
