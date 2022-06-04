using DomainService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Repository
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class,BaseModel
    {
        DbContext _dbContext;
        DbSet<TEntity> _dbSet;

        public GenericRepository(DbContext context)
        {
            _dbContext = context;
            _dbSet = context.Set<TEntity>();
        }

        public async Task Create(TEntity item)
        {
            await _dbContext.Set<TEntity>().AddAsync(item);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<TEntity> FindById(Guid id)
        {
            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(e => e.Id == id); 
        }

        public IQueryable<TEntity> Get()
        {
            return _dbSet.AsNoTracking();
        }

        public IEnumerable<TEntity> Get(Func<TEntity, bool> predicate)
        {
            return _dbSet.AsNoTracking().Where(predicate);
        }

        public async Task Remove(TEntity item)
        {
            _dbContext.Set<TEntity>().Remove(item);
            await SaveChangesAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
        public async Task Update(TEntity item)
        {
            _dbContext.Set<TEntity>().Update(item);
           await SaveChangesAsync();
        }
    }
}
