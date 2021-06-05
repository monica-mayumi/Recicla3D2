using csharp.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recicla3D2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recicla3D2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private ContextAPI db;
        public ProductController()
        {
            this.db = new ContextAPI();
        }

        [HttpGet]
        public async Task<ActionResult<List<TProduto>>> Get()
        {
            try
            {
                List<TProduto> products = db.Produtos
                            .Include(p => p.TFornecedor)
                            .ToList();
                return products;
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TProduto>> Get(long id)
        {
            try
            {
                TProduto products = await db.Produtos.FindAsync(id);

                if (id == 0)
                {
                    throw new Exception("Invalid ID");
                }
                else if (products == null)
                {
                    return NotFound();
                }
                else
                {
                    return products;
                }
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TProduto product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (product == null)
            {
                return NotFound();
            }
            db.Produtos.Add(product);
            await db.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(long id, [FromBody] TProduto product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (id != product.Id)
            {
                return BadRequest();
            }
            db.Entry(product).State = EntityState.Modified;
            try
            {
                await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(long id)
        {
            TProduto product = await db.Produtos.FindAsync(id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (id == 0)
            {
                return BadRequest();
            }
            else if (product == null)
            {
                return NotFound();
            }
            db.Produtos.Remove(product);
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}