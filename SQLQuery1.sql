create database ECOMMERCE;
GO

USE ECOMMERCE;
GO
select * from Usuarios;
select * from Regiones;
select * from Idiomas;
go
INSERT INTO Regiones (Nombre) VALUES ('América del Norte'), ('Europa'), ('Asia'), ('América Latina');
GO

INSERT INTO Idiomas (Nombre, Codigo) VALUES ('Español', 'ES'), ('Inglés', 'EN'), ('Francés', 'FR'), ('Alemán', 'DE');
GO

USE master;
GO
EXEC xp_readerrorlog 0, 1;
GO


INSERT INTO Usuarios (RegionID, IdiomaID, Nombre, Apellido, Correo, ContrasenaHash) VALUES
(1, 1, 'Juan', 'Perez', 'juan.perez@email.com', 0x02000D3A),
(1, 2, 'Laura', 'Garcia', 'laura.garcia@email.com', 0x02000D3A),
(2, 1, 'Carlos', 'Martinez', 'carlos.martinez@email.com', 0x02000D3A),
(2, 3, 'Sofia', 'Lopez', 'sofia.lopez@email.com', 0x02000D3A),
(3, 2, 'Ana', 'Gonzalez', 'ana.gonzalez@email.com', 0x02000D3A);
GO
DECLARE @Password NVARCHAR(50);
SET @Password = 'tu_contraseña';
SELECT HASHBYTES('SHA2_256', @Password);



CREATE TABLE Regiones (
    RegionID INT PRIMARY KEY IDENTITY,
    Nombre VARCHAR(255) NOT NULL
);
GO

CREATE TABLE Idiomas (
    IdiomaID INT PRIMARY KEY IDENTITY,
    Nombre VARCHAR(255) NOT NULL,
    Codigo VARCHAR(10) NOT NULL
);
GO

CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY IDENTITY,
    RegionID INT,
    IdiomaID INT,
    Nombre VARCHAR(255) NOT NULL,
    Apellido VARCHAR(255) NOT NULL,
    Correo VARCHAR(255) NOT NULL UNIQUE,
    ContrasenaHash VARBINARY(256) NOT NULL,
    FechaRegistro DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (RegionID) REFERENCES Regiones(RegionID),
    FOREIGN KEY (IdiomaID) REFERENCES Idiomas(IdiomaID)
);
GO

/* procedimientos almacenados para registro e inicio de sesión */
CREATE PROCEDURE RegistrarUsuario
    @RegionID INT,
    @IdiomaID INT,
    @Nombre NVARCHAR(100),
    @Apellido NVARCHAR(100),
    @Correo NVARCHAR(255),
    @ContrasenaHash VARBINARY(256)
AS
BEGIN
    INSERT INTO Usuarios (RegionID, IdiomaID, Nombre, Apellido, Correo, ContrasenaHash)
    VALUES (@RegionID, @IdiomaID, @Nombre, @Apellido, @Correo, @ContrasenaHash);
END;
GO

/* procedimiento almacenado que verifica el correo y la contraseña hash: */
CREATE PROCEDURE IniciarSesion
    @Correo NVARCHAR(255),
    @ContrasenaHash VARBINARY(256)
AS
BEGIN
    SELECT UsuarioID, Nombre, Apellido
    FROM Usuarios
    WHERE Correo = @Correo AND ContrasenaHash = @ContrasenaHash;
END;
GO
