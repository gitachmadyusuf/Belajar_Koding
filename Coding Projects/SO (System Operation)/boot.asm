[org 0x7C00]
mov ah, 0x0E
mov si, msg 
segment
.loop:
    lodsb
    or al, al
    jz .hang
    int 0x10
    jmp .loop
.hang:
    jmp $
msg db 'Hello from my OS!', 0
times 510-($-$$) db 0
dw 0xAA55