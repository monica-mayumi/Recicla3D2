using csharp.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recicla3D2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;


namespace Recicla3D2.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class UsuarioController : ControllerBase
    {
        private ContextAPI db;
        public UsuarioController()
        {
            this.db = new ContextAPI();
        }

        [HttpGet]
        public async Task<ActionResult<List<TUsuario>>> Get()
        {
            try
            {
                List<TUsuario> users = this.db.TUsuarios.ToList();
                return users;
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TUsuario>> Get(long id)
        {
            try
            {
                TUsuario user = await this.db.TUsuarios.FindAsync(id);

                if (id == 0)
                {
                    throw new Exception("Invalid ID");
                }
                else if (user == null)
                {
                    return NotFound();
                }
                else
                {
                    return user;
                }
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TUsuario user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (user == null)
            {
                return NotFound();
            }
            this.db.TUsuarios.Add(user);
            await db.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(long id, [FromBody] TUsuario user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (id != user.Id)
            {
                return BadRequest();
            }
            db.Entry(user).State = EntityState.Modified;
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
            TUsuario user = await this.db.TUsuarios.FindAsync(id);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else if (id == 0)
            {
                return BadRequest();
            }
            else if (user == null)
            {
                return NotFound();
            }
            this.db.TUsuarios.Remove(user);
            await db.SaveChangesAsync();

            return NoContent();
        }
    }
}
