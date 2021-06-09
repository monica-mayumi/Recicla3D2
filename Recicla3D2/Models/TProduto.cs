using System;
using System.Collections.Generic;

#nullable disable

namespace Recicla3D2.Models
{
    public partial class TProduto
    {
        public long Id { get; set; }
        public string Categoria { get; set; }
        public decimal? CustoUnitario { get; set; }
        public string Descricao { get; set; }
        public decimal? PrecoVenda { get; set; }
        public float? SaldoAtual { get; set; }
        public DateTime? DataValidade { get; set; }
        public long FornecedorId { get;  set; }
    }
}
