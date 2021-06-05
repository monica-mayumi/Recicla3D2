using System;
using System.Collections.Generic;

#nullable disable

namespace Recicla3D2.Models
{
    public partial class TNotaFiscal
    {
        public long Id { get; set; }
        public DateTime? DataNotaFiscal { get; set; }
        public DateTime? DataRecebimento { get; set; }
        public long? NumeroNotaFiscal { get; set; }
        public long? SerieNotaFiscal { get; set; }
        public long? PedidoId { get; set; }
    }
}
