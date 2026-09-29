; =====================================================
; Bootloader: Berpindah dari Real Mode ke Protected Mode
; dan menampilkan pesan di layar QEMU
; =====================================================

[org 0x7C00]
bits 16

start: 
    cli                     ;nonaktifkan interrupt
    lgdt[gdt_descriptor]    ;muat GDT

    mov eax, cr 0
    or eax, 1           ;set bit PE (Protected Enable)
    moc cr0, eax

    jmp 0x08:pm_entry   ;lompat jauh ke kode 32-bit

;----------GDT----------
gdt;
    dq 0x0000000000000000 ;null descriptor
gdt_code_descriptor:
    dw 0xFFFF   ;limit low
    dw 0x0000   ;base low
    db 0x00     ;base middle
    db 0x9A     ;access:codesegment
    db 0xCF     ;flags:4KB granularity, 32-bit
    db 0x00     ;base high
    