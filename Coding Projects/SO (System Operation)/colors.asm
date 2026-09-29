
[org 0x7c00]
bits 16

start:
    cli
    xor ax, ax
    mov ds, ax
    mov si, msg

    mov ax, 0xB800
    mov es, ax
    xor di, di

.display_loop:
    lodsb
    or al, al
    jz .hang
    mov es:[di], al
    inc di
    mov byte es:[di], 0x1F
    inc di
    jmp .display_loop

.hang:
    sti
    cli
    jmp $

msg db 'Bootloader with color!', 0


times 510-($-$$) db 0
dw 0xAA55