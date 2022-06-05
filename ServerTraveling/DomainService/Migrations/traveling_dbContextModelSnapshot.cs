﻿// <auto-generated />
using System;
using DomainService;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DomainService.Migrations
{
    [DbContext(typeof(traveling_dbContext))]
    partial class traveling_dbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DomainService.Models.Location", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("AbroadCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("AccessibilityCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("CuisineCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("LocalityCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("MonumentsCharacteristic")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhotoBase64")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PriceCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("TransportCharacteristics")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("locations");
                });

            modelBuilder.Entity("DomainService.Models.Rule", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("AbroadCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("AccessibilityCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("CuisineCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("LocalityCharacteristic")
                        .HasColumnType("int");

                    b.Property<Guid>("LocationId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int?>("MonumentsCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("PriceCharacteristic")
                        .HasColumnType("int");

                    b.Property<int?>("TransportCharacteristics")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("LocationId");

                    b.ToTable("rules");
                });

            modelBuilder.Entity("DomainService.Models.Rule", b =>
                {
                    b.HasOne("DomainService.Models.Location", "Location")
                        .WithMany()
                        .HasForeignKey("LocationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Location");
                });
#pragma warning restore 612, 618
        }
    }
}
