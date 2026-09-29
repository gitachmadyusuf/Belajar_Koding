bits 64

agus: db "Agus", 0

extern printf
global main
main:
    lea rcx, agus
    mov rax, 0