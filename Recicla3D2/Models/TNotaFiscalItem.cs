using System;
using System.Collections.Generic;

#nullable disable

namespace Recicla3D2.Models
{
    public partial class TNotaFiscalItem
    {
        public long Id { get; set; }
        public decimal? PrecoUnitario { get; set; }
        public float? Quantidade { get; set; }
        public decimal? ValorTotal { get; set; }
        public long? NotaFiscalId { get; set; }
        public long? ProdutoId { get; set; }
    }
}
