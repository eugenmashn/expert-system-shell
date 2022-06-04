using System;
using System.Collections.Generic;
using DomainService.Helpers.Enums;
using DomainService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DomainService
{
    public partial class traveling_dbContext : DbContext
    {
        public DbSet<Location> locations { get; set; }
        public DbSet<Rule> rules { get; set; }
        public traveling_dbContext()
        {
        }

        public traveling_dbContext(DbContextOptions<traveling_dbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-3508C71\\SQLEXPRESS;Database=traveling_db;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
