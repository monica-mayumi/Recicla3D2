using System;
using System.Collections.Generic;

#nullable disable

namespace Recicla3D2.Models
{
    public partial class TFornecedor
    {
        public long Id { get; set; }
        public string Cnpj { get; set; }
        public string Bairro { get; set; }
        public string Cep { get; set; }
        public string Complemento { get; set; }
        public string Endereco { get; set; }
        public string Municipio { get; set; }
        public string Numero { get; set; }
        public string Uf { get; set; }
        public string NomeFantasia { get; set; }
        public string NomeResponsavel { get; set; }
        public string RazaoSocial { get; set; }
    }
}
