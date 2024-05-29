
using Microsoft.EntityFrameworkCore;
using WebApiUygulamalari.Data.Context;

namespace WebApiUygulamalari
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddDbContext<ArabaDbContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("Baglanti")));

            builder.Services.AddControllers();

            builder.Services.AddCors(options => options.AddDefaultPolicy(p => 
            p.AllowAnyHeader().
            AllowAnyMethod().
            AllowAnyOrigin()

            ));

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.UseCors();

            app.Run();
        }
    }
}
