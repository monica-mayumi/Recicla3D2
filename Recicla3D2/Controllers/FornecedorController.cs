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
    public class FornecedorController : ControllerBase
    {
        private ContextAPI db;
        public FornecedorController()
        {
            this.db = new ContextAPI();
        }

        [HttpGet]
        public async Task<ActionResult<List<TFornecedor>>> Get()
        {
            try
            {
                List<TFornecedor> fornecedores = this.db.Fornecedores.ToList();
                return fornecedores;
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TFornecedor>> Get(long id)
        {
            try
            {
                TFornecedor fornecedor = await this.db.Fornecedores.FindAsync(id);

                if (id == 0)
                {
                    throw new Exception("Invalid ID");
                }
                else if (fornecedor == null)
                {
                    return NotFound();
                }
                else
                {
                    return fornecedor;
                }
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TFornecedor fornecedor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (fornecedor == null)
            {
                return NotFound();
            }
            this.db.Fornecedores.Add(fornecedor);
            await db.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(long id, [FromBody] TFornecedor fornecedor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (id != fornecedor. Id)
            {
                return BadRequest();
            }
            db.Entry(fornecedor).State = EntityState.Modified;
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(long id)
        {
            TFornecedor fornecedor = await db.Fornecedores.FindAsync(id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (id == 0)
            {
                return BadRequest();
            }
            else if (fornecedor == null)
            {
                return NotFound();
            }
            db.Fornecedores.Remove(fornecedor);
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}