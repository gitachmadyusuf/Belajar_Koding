//Toko Apa Aja Ada Mart akan membuat sebuah program kasir sederhana untuk menghitung total
//pembayaran pembeli. Inputan pada program terdiri darri nama barang, harga satuan, dan jumlah
//barang yang dibeli. Hitunglah total harga, PPN 10% dari total harga, total bayar. Kemudian input
//jumlah uang pembeli dan hitung kembaliannya, sistem juga harus bisa menampilkan struk
//belanja yang berisi : nama barang, total harga, PPN, total bayar, uang bayar, dan kembalian!

//Operator perhitungan:
//1. Total harga = harga satuan × jumlah beli
//2. PPN (Pajak Pertambahan Nilai) sebesar 10% dari total harga
//3. Total yang harus dibayar = total harga + PPN
//4. Jumlah uang yang dibayar pelanggan
//5. Kembalian = uang bayar – total bayar

#include <iostream.h>
#include <conio.h>
#include <stdio.h>

void main() {

	//deklarasi data dan tipe data
   char nmbrg[30];
   float harga,total,ppn,bayar,uangbyr,kembali;
   int jumlah;

cout <<"===PROGRAM PENJUALAN TOKO APA ADA MART===\n\n";

cout<<"Nama Barang	:";
gets(nmbrg);

cout<<"Harga Satuan	:Rp";
cin>>harga;

cout<<"Jumlah Beli	:";
cin>>jumlah;

total=harga*jumlah;	//total harga
ppn=total*0.10;	//ppn 10%
bayar=total+ppn;	//total bayar
cout<<"--------------------\n";
cout<<"\nTotal Pembayaran:Rp"<<bayar;

cout<<"\nUang yang Dibayar:Rp";
cin>>uangbyr;

kembali=uangbyr-bayar;	//hitung kembalian

	cout<<"\n===STRUK PEMBAYARAN===\n";
   cout<<"Nama Barang	:"<<nmbrg<<"\n";
   cout<<"Total Harga	:"<<total<<"\n";
   cout<<"PPN 10%		:"<<ppn<<"\n";
   cout<<"Total Bayar	:"<<bayar<<"\n";
   cout<<"Uang Bayar	:"<<uangbyr<<"\n";
   cout<<"Kembalian	:Rp"<<kembali<<"\n";

   getch();
}

