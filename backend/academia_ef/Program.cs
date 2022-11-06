using academia_ef.Context;
using academia_ef.Repository;
using academia_ef.Repository.Interfaces;
using academia_ef.Services;
using academia_ef.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AcademiaEfContext>(options =>
options.UseSqlServer(@"Server=localhost;DataBase=ACADEMIA_EF;Uid=sa;Pwd=@Gael10062020"));

//Configuração de Injeção de Dependência dos Serviços da Aplicação
builder.Services.AddScoped<IAcordoMensalidadeService, AcordoMensalidadeService>();
builder.Services.AddScoped<IAlunoService, AlunoService>();
builder.Services.AddScoped<IAvaliacaoFisicaService, AvaliacaoFisicaService>();
builder.Services.AddScoped<IBiotipoService, BiotipoService>();
builder.Services.AddScoped<ICargoService, CargoService>();
builder.Services.AddScoped<IEnderecoService, EnderecoService>();
builder.Services.AddScoped<IFuncionarioService, FuncionarioService>();
builder.Services.AddScoped<IPagamentoMensalidadeService, PagamentoMensalidadeService>();
builder.Services.AddScoped<IPatrimonioService, PatrimonioService>();
builder.Services.AddScoped<IPlanoService, PlanoService>();
builder.Services.AddScoped<ISexoService, SexoService>();
builder.Services.AddScoped<IStatusMensalidadeService, StatusMensalidadeService>();
builder.Services.AddScoped<IStatusUsuarioService, StatusUsuarioService>();
builder.Services.AddScoped<ITreinoService, TreinoService>();
builder.Services.AddScoped<IUnidadeService, UnidadeService>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();

//Configuração de Injeção de Dependência dos Repositórios da Aplicação
builder.Services.AddScoped<IAcordoMensalidadeRepository, AcordoMensalidadeRepository>();
builder.Services.AddScoped<IAlunoRepository, AlunoRepository>();
builder.Services.AddScoped<IAvaliacaoFisicaRepository, AvaliacaoFisicaRepository>();
builder.Services.AddScoped<IBiotipoRepository, BiotipoRepository>();
builder.Services.AddScoped<ICargoRepository, CargoRepository>();
builder.Services.AddScoped<IEnderecoRepository, EnderecoRepository>();
builder.Services.AddScoped<IFuncionarioRepository, FuncionarioRepository>();
builder.Services.AddScoped<IPagamentoMensalidadeRepository, PagamentoMensalidadeRepository>();
builder.Services.AddScoped<IPatrimonioRepository, PatrimonioRepository>();
builder.Services.AddScoped<IPlanoRepository, PlanoRepository>();
builder.Services.AddScoped<ISexoRepository, SexoRepository>();
builder.Services.AddScoped<IStatusMensalidadeRepository, StatusMensalidadeRepository>();
builder.Services.AddScoped<IStatusUsuarioRepository, StatusUsuarioRepository>();
builder.Services.AddScoped<ITreinoRepository, TreinoRepository>();
builder.Services.AddScoped<IUnidadeRepository, UnidadeRepository>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
