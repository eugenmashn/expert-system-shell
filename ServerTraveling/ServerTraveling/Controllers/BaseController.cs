using DomainService.Models;
using DomainService.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ServerTraveling.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class BaseController<TEntity>: ControllerBase where TEntity : BaseModel
    {
        protected IGenericRepository<TEntity> _service;
        protected BaseController(IGenericRepository<TEntity> service)
        {
            _service = service;
        }

        [HttpGet("getAll")]
        virtual async public Task<ActionResult<List<TEntity>>> GetAll() 
            => await _service.Get().ToListAsync();

        [HttpGet("getById/{id:Guid}")]
        virtual async public Task<ActionResult<TEntity>> GetById(Guid id)
           => await _service.FindById(id);
        [HttpPost("update")]
        virtual async public Task<ActionResult<TEntity>> Update(TEntity entity)
        {
            var domain = _service.FindById(entity.Id);
            if(domain == null)
                return NotFound();
            await _service.Update(entity);
            return entity;
        }

        [HttpPost("create")]
        virtual async public Task<ActionResult<TEntity>> Create(TEntity entity)
        {
            var domain = await _service.FindById(entity.Id);
            if (domain != null)
                return BadRequest();
            await _service.Create(entity);
            return entity;
        }
        [HttpPost("delete/{id:Guid}")]
        virtual async public Task<IActionResult> Delete(Guid id)
        {
            var domain = await _service.FindById(id);
            if (domain == null)
                return NotFound();
            await _service.Remove(domain);
            return Ok();
        }
    }
}
