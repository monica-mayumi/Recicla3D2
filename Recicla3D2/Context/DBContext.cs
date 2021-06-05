using Recicla3D2.Models;
using Microsoft.EntityFrameworkCore;

namespace csharp.Context
{
    public class ContextAPI : DbContext
    {
        public DbSet<TFornecedor> Fornecedores{ get; set; }
        public DbSet<TProduto> Produtos { get; set; }
        public DbSet<TUsuario> Usuarios { get; set; }
        public DbSet<TLogin> Logins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-KKPJKI1\SQLEXPRESS;Database=ProjectTables;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}