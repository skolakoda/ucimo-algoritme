#include<stdio.h>
#include<stdlib.h>
  
struct cvor
{
    int podatak;
    struct cvor *levi, *desni;
};
  
struct cvor *noviCvor(int item)
{
    struct cvor *novi =  (struct cvor *)malloc(sizeof(struct cvor));
    novi->podatak = item;
    novi->levi = novi->desni = NULL;
    return novi;
}

void ispisi(struct cvor *koren)
{
    if (koren != NULL)
    {
        ispisi(koren->levi);
        printf("%d \n", koren->podatak);
        ispisi(koren->desni);
    }
}

struct cvor* ubaciCvor(struct cvor* cvor, int podatak)
{
    /* ako je stablo prazno, vraca novi cvor */
    if (cvor == NULL) return noviCvor(podatak);
 
    /* inace, rekurise niz stablo */
    if (podatak < cvor->podatak)
        cvor->levi  = ubaciCvor(cvor->levi, podatak);
    else if (podatak > cvor->podatak)
        cvor->desni = ubaciCvor(cvor->desni, podatak);   
 
    /* vraca (nepromenjen) cvor pokazivac */
    return cvor;
}
 

int main()
{
    /* pravimo sledece stablo
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 */
    struct cvor *koren = NULL;
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
