using DomainService.Models;
using DomainService.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ServerTraveling.Controllers
{
    public class LocationController : BaseController<Location>
    {
        public LocationController(IGenericRepository<Location> service) : base(service)
        {
        }
    }
}