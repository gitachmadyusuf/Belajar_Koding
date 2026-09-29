#include <iostream.h>
#include <conio.h>
#include <string.h>

int main() {
	clrscr();

   char user[20];
   int pass;

   cout<<"Masukkan Username (text):";
   cin>>user;

   cout<<"Masukkan Password (angka):";
   cin>>pass;

   if(strcmp(user,"amikom")==0&&pass==222){
   	cout<<"Login Berhasil";
   }else{
   	cout<<"Login Gagal";
   }

   getch();
}