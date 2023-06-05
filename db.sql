CREATE TABLE IF NOT EXISTS `Clinics` (
  `clinic_id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255),
  `website` VARCHAR(255) NOT NULL,
  `clinic_address` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`clinic_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Doctors` (
  `doctor_id` INTEGER auto_increment,
  `clinic_id` VARCHAR(255),
  `field_name` VARCHAR(255),
  `experience` VARCHAR(1000) NOT NULL,
  `education` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(1000),
  `name` VARCHAR(255) NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(255) NOT NULL,
  `date_added` DATETIME NOT NULL,
  PRIMARY KEY (`doctor_id`),
  FOREIGN KEY (`clinic_id`) REFERENCES `Clinics` (`clinic_id`),
  FOREIGN KEY (`field_name`) REFERENCES `Specialities` (`field_name`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Users` (
  `userId` INTEGER auto_increment,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `firstName` VARCHAR(255),
  `lastName` VARCHAR(255),
  `password` VARCHAR(255) NOT NULL,
  `date_added` DATETIME NOT NULL,
  `date_of_birth` DATETIME,
  `is_admin` TINYINT(1),
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `Reviews` (
  `review_id` INTEGER auto_increment,
  `doctor_id` INTEGER,
  `user_id` INTEGER,
  `rate` INTEGER NOT NULL,
  `description` VARCHAR(255),
  `date_added` DATETIME NOT NULL,
  PRIMARY KEY (`review_id`),
  FOREIGN KEY (`doctor_id`) REFERENCES `Doctors` (`doctor_id`),
  FOREIGN KEY (`user_id`) REFERENCES `Users` (`userId`)
) ENGINE=InnoDB;

Executing (default): SHOW INDEX FROM `Reviews`;

CREATE TABLE IF NOT EXISTS `Specialities` (
  `field_id` INTEGER auto_increment,
  `field_name` VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (`field_id`)
) ENGINE=InnoDB;
