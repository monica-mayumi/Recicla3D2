using System;
using System.Collections.Generic;

#nullable disable

namespace Recicla3D2.Models
{
    public partial class TUsuario
    {
        public long Id { get; set; }
        public string FotoPerfil { get; set; }
        public string Cpf { get; set; }
        public DateTime? DataNascimento { get; set; }
        public string Email { get; set; }
        public string Hash { get; set; }
        public string NomeCompleto { get; set; }
        public string Senha { get; set; }
        public string Login { get; set; }
        public string Bairro { get; set; }
        public string Cep { get; set; }
        public string Complemento { get; set; }
        public string Endereco { get; set; }
        public string Municipio { get; set; }
        public string Numero { get; set; }
        public string Uf { get; set; }
    }
}
