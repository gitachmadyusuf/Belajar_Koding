#include <iostream.h>
#include <conio.h>


int main (){
 clrscr();
 float uts,uas,tugas,rata2;
 char grade;

 cout<<"======================"<<endl;
 cout<<"===|Masukkan Nilai|==="<<endl;
 cout<<"======================"<<endl;
 cout<<"nilai uts : ";cin>>uts;
 cout<<"nilai uas : ";cin>>uas;
 cout<<"nilai tugas : ";cin>>tugas;
 rata2=(uts+uas+tugas)/3;
 cout<<"====================="<<endl;
 if(rata2>85){
 grade='A';
 }
 else if(rata2>75){
 grade='B';
 }
 else if(rata2>65){
 grade='C';
 }
 else if(rata2>50){
 grade='D';
 }
 else{
 grade='E';
 }
 cout<<"rata-rata : "<<rata2<<endl;
 cout<<"grade : "<<grade;
 getch();
 }