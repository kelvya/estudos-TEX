-- MySQL Script generated by MySQL Workbench
-- Wed Feb  8 10:13:14 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DB_hotel
-- -----------------------------------------------------
-- Novo diagrama de classes para o projeto de backend do Hotel Management da escola T.EX

-- -----------------------------------------------------
-- Schema DB_hotel
--
-- Novo diagrama de classes para o projeto de backend do Hotel Management da escola T.EX
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DB_hotel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `DB_hotel` ;

-- -----------------------------------------------------
-- Table `DB_hotel`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `data_cadastro` DATE NOT NULL,
  `ultimo_login` DATE NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Cupons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Cupons` (
  `id_cupom` INT NOT NULL AUTO_INCREMENT,
  `tipo_cupom` VARCHAR(45) NOT NULL,
  `data_criacao_cupom` DATE NOT NULL,
  `data_limite_cupom` DATE NOT NULL,
  `data_aplicacao_cupom` TIMESTAMP NOT NULL,
  `cupom_aplicado` TINYINT NOT NULL,
  PRIMARY KEY (`id_cupom`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Reservas` (
  `id_reserva` INT NOT NULL,
  `tipo_quarto` VARCHAR(45) NOT NULL,
  `data_reserva` TIMESTAMP NOT NULL,
  `previsao_checkin` DATE NOT NULL,
  `previsao_checkout` DATE NOT NULL,
  `quantidade_pessoas` INT(1) NOT NULL,
  `valor_quarto` DECIMAL(5,2) NOT NULL,
  `usuarios_id_usuario` INT NOT NULL,
  `Cupons_id_cupom` INT NULL,
  PRIMARY KEY (`id_reserva`, `usuarios_id_usuario`, `Cupons_id_cupom`),
  INDEX `fk_Reservas_usuarios_idx` (`usuarios_id_usuario` ASC) VISIBLE,
  INDEX `fk_Reservas_Cupons1_idx` (`Cupons_id_cupom` ASC) VISIBLE,
  CONSTRAINT `fk_Reservas_usuarios`
    FOREIGN KEY (`usuarios_id_usuario`)
    REFERENCES `DB_hotel`.`Usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reservas_Cupons1`
    FOREIGN KEY (`Cupons_id_cupom`)
    REFERENCES `DB_hotel`.`Cupons` (`id_cupom`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Checkins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Checkins` (
  `id_checkin` INT NOT NULL,
  `data_checkin` TIMESTAMP NOT NULL,
  `Reservas_id_reserva` INT NOT NULL,
  `Reservas_usuarios_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_checkin`, `Reservas_id_reserva`, `Reservas_usuarios_id_usuario`),
  INDEX `fk_Checkins_Reservas1_idx` (`Reservas_id_reserva` ASC, `Reservas_usuarios_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Checkins_Reservas1`
    FOREIGN KEY (`Reservas_id_reserva` , `Reservas_usuarios_id_usuario`)
    REFERENCES `DB_hotel`.`Reservas` (`id_reserva` , `usuarios_id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Hospedes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Hospedes` (
  `id_hospede` INT NOT NULL AUTO_INCREMENT,
  `cpf` VARCHAR(14) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `telefone` VARCHAR(18) NOT NULL,
  `nivel` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `Checkins_id_checkin` INT NOT NULL,
  `Checkins_Reservas_id_reserva` INT NOT NULL,
  `Checkins_Reservas_usuarios_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_hospede`, `Checkins_id_checkin`, `Checkins_Reservas_id_reserva`, `Checkins_Reservas_usuarios_id_usuario`),
  INDEX `fk_Hospedes_Checkins1_idx` (`Checkins_id_checkin` ASC, `Checkins_Reservas_id_reserva` ASC, `Checkins_Reservas_usuarios_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Hospedes_Checkins1`
    FOREIGN KEY (`Checkins_id_checkin` , `Checkins_Reservas_id_reserva` , `Checkins_Reservas_usuarios_id_usuario`)
    REFERENCES `DB_hotel`.`Checkins` (`id_checkin` , `Reservas_id_reserva` , `Reservas_usuarios_id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Servicos_adicionais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Servicos_adicionais` (
  `idServicos_adicionais` INT NOT NULL AUTO_INCREMENT,
  `nome_servicos` VARCHAR(45) NOT NULL,
  `descricao_servico` VARCHAR(45) NOT NULL,
  `servico_ativo` TINYINT NOT NULL,
  `valor_servico` DECIMAL(5,2) NOT NULL,
  `quantidade_usada` INT(2) NOT NULL,
  PRIMARY KEY (`idServicos_adicionais`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Descontos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Descontos` (
  `id_desconto` INT NOT NULL AUTO_INCREMENT,
  `tipo_desconto` VARCHAR(45) NOT NULL,
  `data_criacao_desconto` DATE NOT NULL,
  `data_limite_desconto` DATE NOT NULL,
  `data_aplicacao_desconto` TIMESTAMP NOT NULL,
  `quantidade_desconto` INT(5) NOT NULL,
  `valor_desconto` DECIMAL(5,2) NOT NULL,
  `desconto_aplicado` TINYINT NOT NULL,
  PRIMARY KEY (`id_desconto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Departamentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Departamentos` (
  `id_departamento` INT NOT NULL AUTO_INCREMENT,
  `nome_departamento` VARCHAR(45) NOT NULL,
  `departamento_ativo` TINYINT NOT NULL,
  PRIMARY KEY (`id_departamento`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Funcionarios` (
  `matricula_funcionario` VARCHAR(10) NOT NULL,
  `nome_funcionario` VARCHAR(50) NOT NULL,
  `telefone_funcionario` VARCHAR(18) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `ultima_entrada` TIMESTAMP NOT NULL,
  `ultima_saida` TIMESTAMP NOT NULL,
  `Departamentos_id_departamento` INT NOT NULL,
  PRIMARY KEY (`matricula_funcionario`, `Departamentos_id_departamento`),
  INDEX `fk_Funcionarios_Departamentos1_idx` (`Departamentos_id_departamento` ASC) VISIBLE,
  CONSTRAINT `fk_Funcionarios_Departamentos1`
    FOREIGN KEY (`Departamentos_id_departamento`)
    REFERENCES `DB_hotel`.`Departamentos` (`id_departamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Consumos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Consumos` (
  `id_consumo` INT NOT NULL AUTO_INCREMENT,
  `nome_produto` VARCHAR(45) NOT NULL,
  `quantidade_consumida` INT(3) NOT NULL,
  `data_consumo` TIMESTAMP NOT NULL,
  `local_consumo` VARCHAR(45) NOT NULL,
  `Funcionarios_matricula_funcionario` VARCHAR(10) NOT NULL,
  `Funcionarios_Departamentos_id_departamento` INT NOT NULL,
  PRIMARY KEY (`id_consumo`, `Funcionarios_matricula_funcionario`, `Funcionarios_Departamentos_id_departamento`),
  INDEX `fk_Consumos_Funcionarios1_idx` (`Funcionarios_matricula_funcionario` ASC, `Funcionarios_Departamentos_id_departamento` ASC) VISIBLE,
  CONSTRAINT `fk_Consumos_Funcionarios1`
    FOREIGN KEY (`Funcionarios_matricula_funcionario` , `Funcionarios_Departamentos_id_departamento`)
    REFERENCES `DB_hotel`.`Funcionarios` (`matricula_funcionario` , `Departamentos_id_departamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Quartos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Quartos` (
  `numero_quarto` INT(3) NOT NULL,
  `tipo_quarto` VARCHAR(45) NOT NULL,
  `descricao_quarto` VARCHAR(500) NOT NULL,
  `imagem` BLOB NOT NULL,
  `valor_quarto` DECIMAL(5,2) NOT NULL,
  `quarto_disponivel` TINYINT NOT NULL,
  `Consumos_id_consumo` INT NOT NULL,
  `Consumos_id_consumo1` INT NOT NULL,
  `Consumos_Funcionarios_matricula_funcionario` VARCHAR(10) NOT NULL,
  `Consumos_Funcionarios_Departamentos_id_departamento` INT NOT NULL,
  PRIMARY KEY (`numero_quarto`, `Consumos_id_consumo`, `Consumos_id_consumo1`, `Consumos_Funcionarios_matricula_funcionario`, `Consumos_Funcionarios_Departamentos_id_departamento`),
  INDEX `fk_Quartos_Consumos1_idx` (`Consumos_id_consumo1` ASC, `Consumos_Funcionarios_matricula_funcionario` ASC, `Consumos_Funcionarios_Departamentos_id_departamento` ASC) VISIBLE,
  CONSTRAINT `fk_Quartos_Consumos1`
    FOREIGN KEY (`Consumos_id_consumo1` , `Consumos_Funcionarios_matricula_funcionario` , `Consumos_Funcionarios_Departamentos_id_departamento`)
    REFERENCES `DB_hotel`.`Consumos` (`id_consumo` , `Funcionarios_matricula_funcionario` , `Funcionarios_Departamentos_id_departamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `DB_hotel`.`Checkouts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_hotel`.`Checkouts` (
  `id_checkout` INT NOT NULL AUTO_INCREMENT,
  `data_checkout` TIMESTAMP NOT NULL,
  `Hospedes_id_hospede` INT NOT NULL,
  `Hospedes_Checkins_id_checkin` INT NOT NULL,
  `Hospedes_Checkins_Reservas_id_reserva` INT NOT NULL,
  `Hospedes_Checkins_Reservas_usuarios_id_usuario` INT NOT NULL,
  `Servicos_adicionais_idServicos_adicionais` INT NOT NULL,
  `Descontos_id_desconto` INT NOT NULL,
  `Quartos_numero_quarto` INT(3) NOT NULL,
  `Quartos_Consumos_id_consumo` INT NOT NULL,
  `Quartos_Consumos_id_consumo1` INT NOT NULL,
  `Quartos_Consumos_Funcionarios_matricula_funcionario` VARCHAR(10) NOT NULL,
  `Quartos_Consumos_Funcionarios_Departamentos_id_departamento` INT NOT NULL,
  PRIMARY KEY (`id_checkout`, `Hospedes_id_hospede`, `Hospedes_Checkins_id_checkin`, `Hospedes_Checkins_Reservas_id_reserva`, `Hospedes_Checkins_Reservas_usuarios_id_usuario`, `Servicos_adicionais_idServicos_adicionais`, `Descontos_id_desconto`, `Quartos_numero_quarto`, `Quartos_Consumos_id_consumo`, `Quartos_Consumos_id_consumo1`, `Quartos_Consumos_Funcionarios_matricula_funcionario`, `Quartos_Consumos_Funcionarios_Departamentos_id_departamento`),
  INDEX `fk_Checkouts_Hospedes1_idx` (`Hospedes_id_hospede` ASC, `Hospedes_Checkins_id_checkin` ASC, `Hospedes_Checkins_Reservas_id_reserva` ASC, `Hospedes_Checkins_Reservas_usuarios_id_usuario` ASC) VISIBLE,
  INDEX `fk_Checkouts_Servicos_adicionais1_idx` (`Servicos_adicionais_idServicos_adicionais` ASC) VISIBLE,
  INDEX `fk_Checkouts_Descontos1_idx` (`Descontos_id_desconto` ASC) VISIBLE,
  INDEX `fk_Checkouts_Quartos1_idx` (`Quartos_numero_quarto` ASC, `Quartos_Consumos_id_consumo` ASC, `Quartos_Consumos_id_consumo1` ASC, `Quartos_Consumos_Funcionarios_matricula_funcionario` ASC, `Quartos_Consumos_Funcionarios_Departamentos_id_departamento` ASC) VISIBLE,
  CONSTRAINT `fk_Checkouts_Hospedes1`
    FOREIGN KEY (`Hospedes_id_hospede` , `Hospedes_Checkins_id_checkin` , `Hospedes_Checkins_Reservas_id_reserva` , `Hospedes_Checkins_Reservas_usuarios_id_usuario`)
    REFERENCES `DB_hotel`.`Hospedes` (`id_hospede` , `Checkins_id_checkin` , `Checkins_Reservas_id_reserva` , `Checkins_Reservas_usuarios_id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Checkouts_Servicos_adicionais1`
    FOREIGN KEY (`Servicos_adicionais_idServicos_adicionais`)
    REFERENCES `DB_hotel`.`Servicos_adicionais` (`idServicos_adicionais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Checkouts_Descontos1`
    FOREIGN KEY (`Descontos_id_desconto`)
    REFERENCES `DB_hotel`.`Descontos` (`id_desconto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Checkouts_Quartos1`
    FOREIGN KEY (`Quartos_numero_quarto` , `Quartos_Consumos_id_consumo` , `Quartos_Consumos_id_consumo1` , `Quartos_Consumos_Funcionarios_matricula_funcionario` , `Quartos_Consumos_Funcionarios_Departamentos_id_departamento`)
    REFERENCES `DB_hotel`.`Quartos` (`numero_quarto` , `Consumos_id_consumo` , `Consumos_id_consumo1` , `Consumos_Funcionarios_matricula_funcionario` , `Consumos_Funcionarios_Departamentos_id_departamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;