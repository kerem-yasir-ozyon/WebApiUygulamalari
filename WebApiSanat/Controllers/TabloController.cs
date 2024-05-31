using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiSanat.Data;
using WebApiSanat.Data.Context;

namespace WebApiSanat.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TabloController : ControllerBase
    {
        private SanatDbContext _db;

        public TabloController(SanatDbContext db)
        {
            _db = db;
        }

        [HttpGet("TabloListesi")]
        public IActionResult TabloListesi()
        {
            return Ok(_db.Tablolar.ToList());
        }

        [HttpPost("TabloEkle")]
        public IActionResult TabloEkle(Tablo tablo)
        {
            _db.Tablolar.Add(tablo);
            _db.SaveChanges();
            return Ok("Eklenmiştir.");
        }

        [HttpDelete("TabloSil")]
        public IActionResult TabloSil(int id)
        {
            _db.Tablolar.Remove(_db.Tablolar.Find(id));
            _db.SaveChanges();
            return Ok();
        }

        [HttpPut("TabloGuncelle")]
        public IActionResult TabloGuncelle(Tablo tablo)
        {
            var guncellenecekTablo = _db.Tablolar.Find(tablo.Id);

            guncellenecekTablo.Ressam = tablo.Ressam;
            guncellenecekTablo.YapilmaTarihi = tablo.YapilmaTarihi;

            _db.Tablolar.Update(guncellenecekTablo);
            _db.SaveChanges();
            return Ok();
        }

        [HttpGet("IdYeGoreGetir")]
        public IActionResult IdYeGoreGetir(int id)
        {
            var arananTablo = _db.Tablolar.Find(id);
            if(arananTablo == null)
            {
                return BadRequest("Aradıgınız tablo bulunmamaktadır.");
            } 
            return Ok();
        }



        

    }
}
