using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;

namespace Recicla3D2
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var cs = @"Server=localhost\SQLEXPRESS;Database=Vendas;Trusted_Connection=True;";
            var stm = "SELECT @@VERSION";

            using var con = new Microsoft.Data.SqlClient.SqlConnection(cs);
            con.Open();

            using var cmd = new Microsoft.Data.SqlClient.SqlCommand(stm, con);
            string version = cmd.ExecuteScalar().ToString();

            Console.WriteLine(version);

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
