using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DomainService.Migrations
{
    public partial class addModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "locations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhotoBase64 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PriceCharacteristic = table.Column<int>(type: "int", nullable: false),
                    LocalityCharacteristic = table.Column<int>(type: "int", nullable: false),
                    AbroadCharacteristic = table.Column<int>(type: "int", nullable: false),
                    CuisineCharacteristic = table.Column<int>(type: "int", nullable: false),
                    TransportCharacteristics = table.Column<int>(type: "int", nullable: false),
                    AccessibilityCharacteristic = table.Column<int>(type: "int", nullable: false),
                    MonumentsCharacteristic = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_locations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "rules",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    LocationId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PriceCharacteristic = table.Column<int>(type: "int", nullable: false),
                    LocalityCharacteristic = table.Column<int>(type: "int", nullable: false),
                    AbroadCharacteristic = table.Column<int>(type: "int", nullable: false),
                    CuisineCharacteristic = table.Column<int>(type: "int", nullable: false),
                    TransportCharacteristics = table.Column<int>(type: "int", nullable: false),
                    AccessibilityCharacteristic = table.Column<int>(type: "int", nullable: false),
                    MonumentsCharacteristic = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_rules", x => x.Id);
                    table.ForeignKey(
                        name: "FK_rules_locations_LocationId",
                        column: x => x.LocationId,
                        principalTable: "locations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_rules_LocationId",
                table: "rules",
                column: "LocationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "rules");

            migrationBuilder.DropTable(
                name: "locations");
        }
    }
}
