using Microsoft.AspNetCore.Mvc;
using WebApiUygulamalari.Data;
using WebApiUygulamalari.Data.Context;

namespace WebGaleriMvc.Controllers
{
    public class AjaxController : Controller
    {
        //private readonly ILogger<HomeController> _logger;
        //private readonly HttpClient _httpClient;

        //public AjaxController(ILogger<HomeController> logger, HttpClient httpClient)
        //{
        //    _logger = logger;
        //    _httpClient = httpClient;
        //}

        public async Task<IActionResult> Index()
        {
            return View();
        }

    }
}
