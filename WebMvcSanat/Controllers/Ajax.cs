using Microsoft.AspNetCore.Mvc;

namespace WebMvcSanat.Controllers
{
    public class Ajax : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
