[org 0x7C00] 
mov si, msg 
mov bx, 0 
mov di, 0xB8000 
mov cx, 0 
.display_loop: 
    lodsb 
    or al, al 
    jz .hang 
    mov [di + bx], al 
    inc bx 
    mov byte [di + bx], 0x1F 
    inc bx 
    jmp .display_loop 
.hang: 
    jmp $ 
msg db 'Bootloader with color!', 0 
times 510-($-$$) db 0 
dw 0xAA55