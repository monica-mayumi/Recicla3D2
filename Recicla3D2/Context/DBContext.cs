using Recicla3D2.Models;
using Microsoft.EntityFrameworkCore;

namespace csharp.Context
{
    public partial class ContextAPI : DbContext
    {
        public virtual DbSet<TFornecedor> TFornecedors { get; set; }
        public virtual DbSet<TLogin> TLogins { get; set; }
        public virtual DbSet<TNotaFiscal> TNotaFiscals { get; set; }
        public virtual DbSet<TNotaFiscalItem> TNotaFiscalItems { get; set; }
        public virtual DbSet<TPedidoCompra> TPedidoCompras { get; set; }
        public virtual DbSet<TPedidoCompraIten> TPedidoCompraItens { get; set; }
        public virtual DbSet<TPerfil> TPerfils { get; set; }
        public virtual DbSet<TProduto> TProdutos { get; set; }
        public virtual DbSet<TUsuario> TUsuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=(local);database=Vendas;user id='sa';password=980098!@123%%Fumamo;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TFornecedor>(entity =>
            {
                entity.ToTable("t_fornecedor");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Bairro)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("bairro");

                entity.Property(e => e.Cep)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .HasColumnName("cep");

                entity.Property(e => e.Cnpj)
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("cnpj");

                entity.Property(e => e.Complemento)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("complemento");

                entity.Property(e => e.Endereco)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("endereco");

                entity.Property(e => e.Municipio)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("municipio");

                entity.Property(e => e.NomeFantasia)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("nome_fantasia");

                entity.Property(e => e.NomeResponsavel)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("nome_responsavel");

                entity.Property(e => e.Numero)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("numero");

                entity.Property(e => e.RazaoSocial)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("razao_social");

                entity.Property(e => e.Uf)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("uf");
            });

            modelBuilder.Entity<TLogin>(entity =>
            {
                entity.HasKey(e => e.LoginId)
                    .HasName("t_login_pkey");

                entity.ToTable("t_login");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.LoginNome)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("login_nome");

                entity.Property(e => e.LoginSenha)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("login_senha");
            });

            modelBuilder.Entity<TNotaFiscal>(entity =>
            {
                entity.ToTable("t_nota_fiscal");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DataNotaFiscal)
                    .HasColumnType("date")
                    .HasColumnName("data_nota_fiscal");

                entity.Property(e => e.DataRecebimento)
                    .HasColumnType("date")
                    .HasColumnName("data_recebimento");

                entity.Property(e => e.NumeroNotaFiscal).HasColumnName("numero_nota_fiscal");

                entity.Property(e => e.PedidoId).HasColumnName("pedido_id");

                entity.Property(e => e.SerieNotaFiscal).HasColumnName("serie_nota_fiscal");
            });

            modelBuilder.Entity<TNotaFiscalItem>(entity =>
            {
                entity.ToTable("t_nota_fiscal_item");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.NotaFiscalId).HasColumnName("nota_fiscal_id");

                entity.Property(e => e.PrecoUnitario)
                    .HasColumnType("numeric(19, 2)")
                    .HasColumnName("preco_unitario");

                entity.Property(e => e.ProdutoId).HasColumnName("produto_id");

                entity.Property(e => e.Quantidade).HasColumnName("quantidade");

                entity.Property(e => e.ValorTotal)
                    .HasColumnType("numeric(19, 2)")
                    .HasColumnName("valor_total");
            });

            modelBuilder.Entity<TPedidoCompra>(entity =>
            {
                entity.ToTable("t_pedido_compra");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CondicaoPagto)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("condicao_pagto");

                entity.Property(e => e.DataEntrega)
                    .HasColumnType("date")
                    .HasColumnName("data_entrega");

                entity.Property(e => e.FornecedorId).HasColumnName("fornecedor_id");

                entity.Property(e => e.Observacao)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("observacao");

                entity.Property(e => e.Status)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("status");

                entity.Property(e => e.ValorTotal)
                    .HasColumnType("numeric(19, 2)")
                    .HasColumnName("valor_total");
            });

            modelBuilder.Entity<TPedidoCompraIten>(entity =>
            {
                entity.ToTable("t_pedido_compra_itens");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.PedidoId).HasColumnName("pedido_id");

                entity.Property(e => e.PrecoUnitario)
                    .HasColumnType("numeric(19, 2)")
                    .HasColumnName("preco_unitario");

                entity.Property(e => e.ProdutoId).HasColumnName("produto_id");

                entity.Property(e => e.Quantidade).HasColumnName("quantidade");
            });

            modelBuilder.Entity<TPerfil>(entity =>
            {
                entity.HasKey(e => e.IdPerfil)
                    .HasName("t_perfil_pkey");

                entity.ToTable("t_perfil");

                entity.Property(e => e.IdPerfil)
                    .HasMaxLength(45)
                    .IsUnicode(false)
                    .HasColumnName("id_perfil");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descricao");
            });

            modelBuilder.Entity<TProduto>(entity =>
            {
                entity.ToTable("t_produto");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Categoria)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("categoria");

                entity.Property(e => e.CustoUnitario)
                    .HasColumnType("numeric(19, 2)")
                    .HasColumnName("custo_unitario");

                entity.Property(e => e.DataValidade)
                    .HasColumnType("date")
                    .HasColumnName("data_validade");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.PrecoVenda)
                    .HasColumnType("numeric(19, 2)")
                    .HasColumnName("preco_venda");

                entity.Property(e => e.SaldoAtual).HasColumnName("saldo_atual");
            });

            modelBuilder.Entity<TUsuario>(entity =>
            {
                entity.ToTable("t_usuario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Bairro)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("bairro");

                entity.Property(e => e.Cep)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .HasColumnName("cep");

                entity.Property(e => e.Complemento)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("complemento");

                entity.Property(e => e.Cpf)
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .HasColumnName("cpf");

                entity.Property(e => e.DataNascimento)
                    .HasColumnType("date")
                    .HasColumnName("data_nascimento");

                entity.Property(e => e.Email)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Endereco)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("endereco");

                entity.Property(e => e.FotoPerfil)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("foto_perfil");

                entity.Property(e => e.Hash)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("hash");

                entity.Property(e => e.Login)
                    .HasMaxLength(45)
                    .IsUnicode(false)
                    .HasColumnName("login");

                entity.Property(e => e.Municipio)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("municipio");

                entity.Property(e => e.NomeCompleto)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("nome_completo");

                entity.Property(e => e.Numero)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("numero");

                entity.Property(e => e.Senha)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.Property(e => e.Uf)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("uf");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}