//Dalam rangka promo sebuah travel memberikan diskon,dengan ketentuan jika jumlah penumpang
//lebih dari 2 orang maka diskonya 15% dari harga, jika jumlah penumpang >5 maka 25% dari harga.
//selain itu jika lebih dari 10 penumpang maka 50% dari harga

#include <iostream.h>
#include <conio.h>

void main() {

	//deklarasi data dan tipe data
	double penumpang,diskon,harga;
   float bayar;

   cout<<"Masukkan Jumlah Harga:";
   cin>>harga;

   cout<<"Masukkan Jumlah Penumpang:";
   cin>>penumpang;

   if
   (penumpang>2)
   {
    diskon=0.15*harga;
    bayar=harga-diskon;
   }

   else if
   (penumpang>5)
   {
   diskon=0.25*harga;
   bayar=harga-diskon;
   }

   else if
   (penumpang>10)
   {
   diskon=0.50*harga;
   bayar=harga-diskon;
   }

   else
   {
   diskon=0;
   }

   bayar=harga-diskon;
   cout<<"Anda Mendapat Diskon="<<diskon<<endl;
   cout<<"Anda Perlu Bayar="<<bayar;

   getch();
}