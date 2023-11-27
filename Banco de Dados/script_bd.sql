create database StudyManager;

use StudyManager;

create table metas
(
idMet int primary key not null auto_increment,
tiposMet varchar (30) not null unique,
tempoMet time not null
);

create table materias
(
idMat int primary key not null auto_increment,
nomeMat varchar(45) not null unique,
horasEstudadasMat time not null,
metasHorasEstMat time


);

create table escolaridade
(
idEsc int primary key not null auto_increment,
descricaoEsc varchar(45) unique

);

create table genero 
(
idGen int primary key not null auto_increment,
descricaoGen varchar(40) not null unique
);

create table usario
(
idUsu int primary key not null auto_increment,
nomeUsu varchar(30) not null,
sobrenomeUsu varchar(30) not null ,
nickNameUsu varchar(15) not null unique ,
paisDeResidenciaUsu varchar(25) not null,
 senhaUsu varchar(30) not null,
 dataNascUsu date not null,
 
 idUsuMet_fk int, 
 foreign key(idUsuMet_fk) references metas(idMet),

idUsuMat_fk int, 
 foreign key(idUsuMat_fk) references materias(idMat),
 
idUsuEsc_fk int, 
 foreign key(idUsuEsc_fk) references escolaridade(idEsc),
 
idUsuGen_fk int, 
 foreign key(idUsuGen_fk) references genero(idGen)
 
);