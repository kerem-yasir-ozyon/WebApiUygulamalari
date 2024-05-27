using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiUygulamalari.Data;
using WebApiUygulamalari.Data.Context;

namespace WebApiUygulamalari.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArabaController : ControllerBase
    {
        private ArabaDbContext _db;

        public ArabaController(ArabaDbContext db)
        {
            _db = db;
        }

        [HttpGet(Name = "ArabaListesi")]
        public IActionResult ArabaListesi()
        {
            return Ok(_db.Arabalar.ToList());
        }

        [HttpPost(Name = "ArabaEkle")]
        public IActionResult ArabaEkle(Araba araba)
        {
            _db.Arabalar.Add(araba);
            _db.SaveChanges();
            return Created();
        }

        [HttpDelete(Name = "ArabaSil")]
        public IActionResult ArabaSil(int id)
        {
            _db.Arabalar.Remove(_db.Arabalar.Find(id));
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut(Name = "ArabaGuncelle")]
        public IActionResult ArabaGuncelle(Araba araba, int id)
        {
            var guncellenecekAraba = _db.Arabalar.Find(id);

            guncellenecekAraba.Renk = araba.Renk;
            guncellenecekAraba.Marka = araba.Marka;

            _db.Arabalar.Update(guncellenecekAraba);
            _db.SaveChanges();

            return Ok();
        } 
    }
}
