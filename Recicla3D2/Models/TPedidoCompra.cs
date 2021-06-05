using System;
using System.Collections.Generic;

#nullable disable

namespace Recicla3D2.Models
{
    public partial class TPedidoCompra
    {
        public long Id { get; set; }
        public string CondicaoPagto { get; set; }
        public DateTime? DataEntrega { get; set; }
        public string Observacao { get; set; }
        public string Status { get; set; }
        public decimal? ValorTotal { get; set; }
        public long? FornecedorId { get; set; }
    }
}
