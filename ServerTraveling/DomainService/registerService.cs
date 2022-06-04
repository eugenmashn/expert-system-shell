using DomainService.Repository.Interface;
using DomainService.Repository.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService
{
    public static class registerService
    {
        public static IServiceCollection AddDbContextService(this IServiceCollection services, string connection)
        {
            services.AddDbContext<DbContext,traveling_dbContext>(options => options.UseSqlServer(connection));
            services.AddScoped<ILocationService, LocationService>();
            services.AddScoped<IRuleService, RuleService>();
            return services;
        }
    }
}
