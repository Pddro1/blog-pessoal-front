interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    token: string | null;
    senha: string;
}

export default UsuarioLogin;