using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PaymentIntentAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2337fc92-1581-41b4-a8a9-fca4d9765531");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5f4c47f5-369e-4c77-8ad3-ead8768eb060");

            migrationBuilder.AddColumn<string>(
                name: "ClientSecret",
                table: "Basket",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentIntentId",
                table: "Basket",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "e01d04b5-c7b6-42e3-9e21-a2d830e6bcfa", "15852c46-4c08-45c1-b70b-a5bf677d27f3", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "14d4cba3-a00a-425a-946b-e9ae88bdf0de", "30d74a18-0fcf-4b51-9136-fa249a3f0ded", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "14d4cba3-a00a-425a-946b-e9ae88bdf0de");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e01d04b5-c7b6-42e3-9e21-a2d830e6bcfa");

            migrationBuilder.DropColumn(
                name: "ClientSecret",
                table: "Basket");

            migrationBuilder.DropColumn(
                name: "PaymentIntentId",
                table: "Basket");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "2337fc92-1581-41b4-a8a9-fca4d9765531", "cbfea7c3-2ba0-49dd-8166-2b4b1e106275", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "5f4c47f5-369e-4c77-8ad3-ead8768eb060", "ce75014e-28f9-4900-a5da-e21f417c78a1", "Instructor", "INSTRUCTOR" });
        }
    }
}
