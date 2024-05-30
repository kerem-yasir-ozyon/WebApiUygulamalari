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

        [HttpGet("ArabaListesi")]
        public IActionResult ArabaListesi()
        {
            return Ok(_db.Arabalar.ToList());
        }

        [HttpPost("ArabaEkle")]
        public IActionResult ArabaEkle(Araba araba)
        {
            _db.Arabalar.Add(araba);
            _db.SaveChanges();
            return Ok("Eklenmiştir.");
        }

        [HttpDelete("ArabaSil")]
        public IActionResult ArabaSil(int id)
        {
            _db.Arabalar.Remove(_db.Arabalar.Find(id));
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut("ArabaGuncelle")]
        public IActionResult ArabaGuncelle(Araba araba, int id)
        {
            var guncellenecekAraba = _db.Arabalar.Find(id);

            guncellenecekAraba.Renk = araba.Renk;
            guncellenecekAraba.Marka = araba.Marka;

            _db.Arabalar.Update(guncellenecekAraba);
            _db.SaveChanges();

            return Ok();
        }

        [HttpGet("IdYeGoreGetir")]
        public IActionResult IdYeGoreGetir(int id)
        {
            var arananAraba = _db.Arabalar.Find(id);
            if(arananAraba == null)
            {
                return BadRequest("Aradıgınız araba bulunanmamıstır.");
            }
            return Ok(arananAraba);
        }
    }
}
