#include<stdio.h>
#include<stdlib.h>
  
struct Cvor
{
    int podatak;
    struct Cvor *levi, *desni;
};
  
Cvor *noviCvor(int item)
{
    Cvor *novi =  (Cvor *)malloc(sizeof(Cvor));
    novi->podatak = item;
    novi->levi = novi->desni = NULL;
    return novi;
}

void ispisi(Cvor *koren)
{
    if (koren != NULL)
    {
        ispisi(koren->levi);
        printf("%d \n", koren->podatak);
        ispisi(koren->desni);
    }
}

Cvor* ubaciCvor(Cvor* koren, int podatak)
{
    /* ako je stablo prazno, vraca novi koren */
    if (koren == NULL) return noviCvor(podatak);
 
    /* inace, rekurise niz stablo */
    if (podatak < koren->podatak)
        koren->levi  = ubaciCvor(koren->levi, podatak);
    else if (podatak > koren->podatak)
        koren->desni = ubaciCvor(koren->desni, podatak);   
 
    /* vraca (nepromenjen) koren pokazivac */
    return koren;
}


int main()
{
    /* pravimo sledece stablo:
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 */
    Cvor *koren = NULL;
    koren = ubaciCvor(koren, 50);
    ubaciCvor(koren, 30);
    ubaciCvor(koren, 20);
    ubaciCvor(koren, 40);
    ubaciCvor(koren, 70);
    ubaciCvor(koren, 60);
    ubaciCvor(koren, 80);
  
    ispisi(koren);
  
    return 0;
}
