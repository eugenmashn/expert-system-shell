using DomainService.Models;
using DomainService.Repository;
using DomainService.Repository.Interface;
using Microsoft.AspNetCore.Mvc;

namespace ServerTraveling.Controllers
{
    public class LocationController : BaseController<Location>
    {
        public LocationController(ILocationService service) : base(service)
        {
        }
    }
}