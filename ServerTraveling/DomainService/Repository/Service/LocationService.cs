using DomainService.Models;
using DomainService.Repository.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainService.Repository.Service
{
    public class LocationService : GenericRepository<Location>, ILocationService
    {
        public LocationService(DbContext context) : base(context)
        {
        }
    }
}
