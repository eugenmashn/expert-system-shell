using DomainService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Repository
{

    public interface IGenericRepository<TEntity> where TEntity : BaseModel
    {
        Task Create(TEntity item);
        Task <TEntity> FindById(Guid id);
        IQueryable<TEntity> Get();
        IEnumerable<TEntity> Get(Func<TEntity, bool> predicate);
        Task Remove(TEntity item);
        Task Update(TEntity item);
        Task SaveChangesAsync();
    }
}
