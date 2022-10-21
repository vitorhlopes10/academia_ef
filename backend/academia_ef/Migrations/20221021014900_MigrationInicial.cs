using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace academia_ef.Migrations
{
    public partial class MigrationInicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Biotipo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Tipo = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Biotipo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cargo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cargo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Endereco",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "varchar(150)", nullable: false),
                    Cidade = table.Column<string>(type: "varchar(20)", nullable: false),
                    Estado = table.Column<string>(type: "varchar(20)", nullable: false),
                    Cep = table.Column<string>(type: "varchar(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Endereco", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Plano",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Valor = table.Column<double>(type: "float", nullable: false),
                    Nome = table.Column<string>(type: "varchar(30)", nullable: false),
                    DescricaoRegras = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plano", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sexo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sexo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StatusMensalidade",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StatusMensalidade", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "StatusUsuario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StatusUsuario", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Academia",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "varchar(100)", nullable: false),
                    Cnpj = table.Column<string>(type: "varchar(14)", nullable: false),
                    Telefone = table.Column<string>(type: "varchar(20)", nullable: false),
                    IdEndereco = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Academia", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Academia_Endereco_IdEndereco",
                        column: x => x.IdEndereco,
                        principalTable: "Endereco",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AcordoMensalidade",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DiaDataVencimento = table.Column<int>(type: "int", nullable: false),
                    IdStatusMensalidade = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AcordoMensalidade", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AcordoMensalidade_StatusMensalidade_IdStatusMensalidade",
                        column: x => x.IdStatusMensalidade,
                        principalTable: "StatusMensalidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Login = table.Column<string>(type: "varchar(50)", nullable: false),
                    Senha = table.Column<string>(type: "varchar(50)", nullable: false),
                    IdStatusUsuario = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Usuario_StatusUsuario_IdStatusUsuario",
                        column: x => x.IdStatusUsuario,
                        principalTable: "StatusUsuario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Aluno",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Matricula = table.Column<string>(type: "varchar(20)", nullable: false),
                    Cpf = table.Column<string>(type: "varchar(11)", nullable: false),
                    Nome = table.Column<string>(type: "varchar(150)", nullable: false),
                    Email = table.Column<string>(type: "varchar(100)", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "datetime", nullable: false),
                    Telefone = table.Column<string>(type: "varchar(20)", nullable: false),
                    DataMatricula = table.Column<DateTime>(type: "datetime", nullable: false),
                    IdAcademia = table.Column<int>(type: "int", nullable: false),
                    IdSexo = table.Column<int>(type: "int", nullable: false),
                    IdEndereco = table.Column<int>(type: "int", nullable: false),
                    IdPlano = table.Column<int>(type: "int", nullable: false),
                    IdAcordoMensalidade = table.Column<int>(type: "int", nullable: false),
                    IdUsuario = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aluno", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Aluno_Academia_IdAcademia",
                        column: x => x.IdAcademia,
                        principalTable: "Academia",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Aluno_AcordoMensalidade_IdAcordoMensalidade",
                        column: x => x.IdAcordoMensalidade,
                        principalTable: "AcordoMensalidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Aluno_Endereco_IdEndereco",
                        column: x => x.IdEndereco,
                        principalTable: "Endereco",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Aluno_Plano_IdPlano",
                        column: x => x.IdPlano,
                        principalTable: "Plano",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Aluno_Sexo_IdSexo",
                        column: x => x.IdSexo,
                        principalTable: "Sexo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Aluno_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Funcionario",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Matricula = table.Column<string>(type: "varchar(20)", nullable: false),
                    Cpf = table.Column<string>(type: "varchar(11)", nullable: false),
                    Nome = table.Column<string>(type: "varchar(150)", nullable: false),
                    Email = table.Column<string>(type: "varchar(100)", nullable: false),
                    Fixo = table.Column<bool>(type: "bit", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "datetime", nullable: false),
                    Telefone = table.Column<string>(type: "varchar(20)", nullable: false),
                    IdSexo = table.Column<int>(type: "int", nullable: false),
                    IdEndereco = table.Column<int>(type: "int", nullable: false),
                    IdUsuario = table.Column<int>(type: "int", nullable: false),
                    IdCargo = table.Column<int>(type: "int", nullable: false),
                    IdAcademia = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionario", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Funcionario_Academia_IdAcademia",
                        column: x => x.IdAcademia,
                        principalTable: "Academia",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Funcionario_Cargo_IdCargo",
                        column: x => x.IdCargo,
                        principalTable: "Cargo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Funcionario_Endereco_IdEndereco",
                        column: x => x.IdEndereco,
                        principalTable: "Endereco",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Funcionario_Sexo_IdSexo",
                        column: x => x.IdSexo,
                        principalTable: "Sexo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Funcionario_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AvaliacaoFisica",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DataCriacao = table.Column<DateTime>(type: "datetime", nullable: false),
                    Idade = table.Column<int>(type: "int", nullable: false),
                    Peso = table.Column<double>(type: "float", nullable: false),
                    Altura = table.Column<double>(type: "float", nullable: false),
                    LarguraEntreOmbros = table.Column<double>(type: "float", nullable: false),
                    LarguraBracoRelaxado = table.Column<double>(type: "float", nullable: false),
                    LarguraBracoContraido = table.Column<double>(type: "float", nullable: false),
                    Antebraco = table.Column<double>(type: "float", nullable: false),
                    Torax = table.Column<double>(type: "float", nullable: false),
                    Panturrilha = table.Column<double>(type: "float", nullable: false),
                    Cintura = table.Column<double>(type: "float", nullable: false),
                    Abdomen = table.Column<double>(type: "float", nullable: false),
                    Quadril = table.Column<double>(type: "float", nullable: false),
                    Coxa = table.Column<double>(type: "float", nullable: false),
                    Imc = table.Column<double>(type: "float", nullable: false),
                    IdBiotipo = table.Column<int>(type: "int", nullable: false),
                    IdAluno = table.Column<int>(type: "int", nullable: false),
                    IdFuncionario = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvaliacaoFisica", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AvaliacaoFisica_Aluno_IdAluno",
                        column: x => x.IdAluno,
                        principalTable: "Aluno",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AvaliacaoFisica_Biotipo_IdBiotipo",
                        column: x => x.IdBiotipo,
                        principalTable: "Biotipo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AvaliacaoFisica_Funcionario_IdFuncionario",
                        column: x => x.IdFuncionario,
                        principalTable: "Funcionario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PagamentoMensalidade",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ValorPago = table.Column<string>(type: "varchar(20)", nullable: false),
                    DataPagamento = table.Column<DateTime>(type: "datetime", nullable: false),
                    IdFuncionario = table.Column<int>(type: "int", nullable: false),
                    IdAcordoMensalidade = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PagamentoMensalidade", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PagamentoMensalidade_AcordoMensalidade_IdAcordoMensalidade",
                        column: x => x.IdAcordoMensalidade,
                        principalTable: "AcordoMensalidade",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PagamentoMensalidade_Funcionario_IdFuncionario",
                        column: x => x.IdFuncionario,
                        principalTable: "Funcionario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Treino",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataCriacao = table.Column<DateTime>(type: "datetime", nullable: false),
                    IdAluno = table.Column<int>(type: "int", nullable: false),
                    IdFuncionario = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Treino", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Treino_Aluno_IdAluno",
                        column: x => x.IdAluno,
                        principalTable: "Aluno",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Treino_Funcionario_IdFuncionario",
                        column: x => x.IdFuncionario,
                        principalTable: "Funcionario",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Biotipo",
                columns: new[] { "Id", "Tipo" },
                values: new object[,]
                {
                    { 1, "Ectomorfo" },
                    { 2, "Mesomorfo" },
                    { 3, "Endomorfo" }
                });

            migrationBuilder.InsertData(
                table: "Cargo",
                columns: new[] { "Id", "Nome" },
                values: new object[,]
                {
                    { 1, "Instrutor" },
                    { 2, "Atendente" }
                });

            migrationBuilder.InsertData(
                table: "Plano",
                columns: new[] { "Id", "DescricaoRegras", "Nome", "Valor" },
                values: new object[,]
                {
                    { 1, "Dá acesso apenas a uma das unidades da Equilíbrio Fitness", "Essential", 80.0 },
                    { 2, "Dá acesso a todas as unidades da Equilíbrio Fitness", "Premiun", 100.0 }
                });

            migrationBuilder.InsertData(
                table: "Sexo",
                columns: new[] { "Id", "Nome" },
                values: new object[,]
                {
                    { 1, "Masculino" },
                    { 2, "Feminino" }
                });

            migrationBuilder.InsertData(
                table: "StatusMensalidade",
                columns: new[] { "Id", "Descricao" },
                values: new object[,]
                {
                    { 1, "Em Aberto" },
                    { 2, "Pago" }
                });

            migrationBuilder.InsertData(
                table: "StatusUsuario",
                columns: new[] { "Id", "Descricao" },
                values: new object[,]
                {
                    { 1, "Ativo" },
                    { 2, "Inativo" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Academia_IdEndereco",
                table: "Academia",
                column: "IdEndereco",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AcordoMensalidade_IdStatusMensalidade",
                table: "AcordoMensalidade",
                column: "IdStatusMensalidade");

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_IdAcademia",
                table: "Aluno",
                column: "IdAcademia",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_IdAcordoMensalidade",
                table: "Aluno",
                column: "IdAcordoMensalidade",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_IdEndereco",
                table: "Aluno",
                column: "IdEndereco",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_IdPlano",
                table: "Aluno",
                column: "IdPlano");

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_IdSexo",
                table: "Aluno",
                column: "IdSexo");

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_IdUsuario",
                table: "Aluno",
                column: "IdUsuario",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AvaliacaoFisica_IdAluno",
                table: "AvaliacaoFisica",
                column: "IdAluno");

            migrationBuilder.CreateIndex(
                name: "IX_AvaliacaoFisica_IdBiotipo",
                table: "AvaliacaoFisica",
                column: "IdBiotipo");

            migrationBuilder.CreateIndex(
                name: "IX_AvaliacaoFisica_IdFuncionario",
                table: "AvaliacaoFisica",
                column: "IdFuncionario");

            migrationBuilder.CreateIndex(
                name: "IX_Funcionario_IdAcademia",
                table: "Funcionario",
                column: "IdAcademia",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Funcionario_IdCargo",
                table: "Funcionario",
                column: "IdCargo");

            migrationBuilder.CreateIndex(
                name: "IX_Funcionario_IdEndereco",
                table: "Funcionario",
                column: "IdEndereco",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Funcionario_IdSexo",
                table: "Funcionario",
                column: "IdSexo");

            migrationBuilder.CreateIndex(
                name: "IX_Funcionario_IdUsuario",
                table: "Funcionario",
                column: "IdUsuario",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PagamentoMensalidade_IdAcordoMensalidade",
                table: "PagamentoMensalidade",
                column: "IdAcordoMensalidade");

            migrationBuilder.CreateIndex(
                name: "IX_PagamentoMensalidade_IdFuncionario",
                table: "PagamentoMensalidade",
                column: "IdFuncionario");

            migrationBuilder.CreateIndex(
                name: "IX_Treino_IdAluno",
                table: "Treino",
                column: "IdAluno");

            migrationBuilder.CreateIndex(
                name: "IX_Treino_IdFuncionario",
                table: "Treino",
                column: "IdFuncionario");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_IdStatusUsuario",
                table: "Usuario",
                column: "IdStatusUsuario");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AvaliacaoFisica");

            migrationBuilder.DropTable(
                name: "PagamentoMensalidade");

            migrationBuilder.DropTable(
                name: "Treino");

            migrationBuilder.DropTable(
                name: "Biotipo");

            migrationBuilder.DropTable(
                name: "Aluno");

            migrationBuilder.DropTable(
                name: "Funcionario");

            migrationBuilder.DropTable(
                name: "AcordoMensalidade");

            migrationBuilder.DropTable(
                name: "Plano");

            migrationBuilder.DropTable(
                name: "Academia");

            migrationBuilder.DropTable(
                name: "Cargo");

            migrationBuilder.DropTable(
                name: "Sexo");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "StatusMensalidade");

            migrationBuilder.DropTable(
                name: "Endereco");

            migrationBuilder.DropTable(
                name: "StatusUsuario");
        }
    }
}
