using academia_ef.Context;
using academia_ef.Repository;
using academia_ef.Repository.Interfaces;
using academia_ef.Services;
using academia_ef.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AcademiaEfContext>(options =>
options.UseSqlServer(@"Server=localhost;DataBase=ACADEMIA_EF;Uid=sa;Pwd=@Gael10062020"));

//Configuração de Injeção de Dependência dos Serviços da Aplicação
builder.Services.AddScoped<IAlunoService, AlunoService>();

//Configuração de Injeção de Dependência dos Repositórios da Aplicação
builder.Services.AddScoped<IAlunoRepository, AlunoRepository>();

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

app.Run();
