CREATE TABLE aluno (
	id integer auto_increment primary key,
    nome varchar(100),
    matricula varchar(20) unique,
    data_nascimento date,
    pontuacao integer
);

CREATE TABLE atividade (
	id integer auto_increment primary key,
    aluno_id integer,
    nome varchar(100),
    disciplina varchar(100),
    nota decimal(10.2),
    observacao text,
    FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);

insert into aluno values
(default, 'Seila', '20210202', '2003-08-24', 2),
(default, 'Mano', '20210205', '2010-09-29', 7),
(default, 'Brow', '20210232', '1980-10-02', 7),
(default, 'Coisado', '203245201', '2001-05-10', 0);