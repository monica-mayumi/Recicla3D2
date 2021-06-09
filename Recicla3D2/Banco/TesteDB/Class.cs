using System;

namespace Recicla3D2.Banco.TesteDB
{
    class Program
    {
        private static void Main(string[] args)
        {
            var cs = @"Server=localhost\SQLEXPRESS;Database=Vendas;Trusted_Connection=True;";
            var stm = "SELECT @@VERSION";

            using var con = new Microsoft.Data.SqlClient.SqlConnection(cs);
            con.Open();

            using var cmd = new Microsoft.Data.SqlClient.SqlCommand(stm, con);
            string version = cmd.ExecuteScalar().ToString();

            Console.WriteLine(version);
        }
    }
}
