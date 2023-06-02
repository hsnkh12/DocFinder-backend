

INSERT INTO Users(email, password, date_added, is_admin) VALUES ('admin@admin.com','$2b$06$jDBkQ5r45V072CLcQ6LbAOtRI3pM2jqnmRkyIytWSp9J8mU0qwHXm', '2023-06-01T19:45:29.000Z', true);
INSERT INTO Clinics(clinic_id,name,email,website,clinic_address) VALUES ('CCH', 'Cyprus Central Hospital', 'info@cypruscentralhospital.com', 'https://cypruscentralhospital.com', 'Esref Bitlis Cad. Narlik Street, Famagusta');



-- SELECT d.doctor_id, d.name, d.email, d.field_name, d.clinic_id, AVG(r.rate) AS average_rate
-- FROM Doctor d
-- JOIN Reviews r ON d.doctor_id = r.doctor_id
-- GROUP BY d.doctor_id, d.doctor_name
-- ORDER BY average_rate DESC;


INSERT INTO Specialities (field_name) VALUES ('IN VITRO FERTILIZATION');
INSERT INTO Specialities (field_name) VALUES ('General Surgery');
INSERT INTO Specialities (field_name) VALUES ('Physical Treatment and Rehabilitation');
INSERT INTO Specialities (field_name) VALUES ('Pediatrics');
INSERT INTO Specialities (field_name) VALUES ('Gastroenterology');
INSERT INTO Specialities (field_name) VALUES ('X Orthesis and Prosthesis');
INSERT INTO Specialities (field_name) VALUES ('Pathology');
INSERT INTO Specialities (field_name) VALUES ('Internal Medicine');
INSERT INTO Specialities (field_name) VALUES ('Ophthalmology');
INSERT INTO Specialities (field_name) VALUES ('Cardiology');
INSERT INTO Specialities (field_name) VALUES ('Gynecology and Obstetrics');
INSERT INTO Specialities (field_name) VALUES ('Orthopedics and Traumatology');
INSERT INTO Specialities (field_name) VALUES ('Urology');
INSERT INTO Specialities (field_name) VALUES ('Aesthetics and Plastic Reconstructive Surgery');
INSERT INTO Specialities (field_name) VALUES ('Radiology');
INSERT INTO Specialities (field_name) VALUES ('Anesthesia and Reanimation');
INSERT INTO Specialities (field_name) VALUES ('Otorhinolaryngology');
INSERT INTO Specialities (field_name) VALUES ('Neurology');
INSERT INTO Specialities (field_name) VALUES ('Cardiovascular Surgery');
INSERT INTO Specialities (field_name) VALUES ('Eye Health and Diseases');
INSERT INTO Specialities (field_name) VALUES ('Skin Diseases');
INSERT INTO Specialities (field_name) VALUES ('Pulmonology');
INSERT INTO Specialities (field_name) VALUES ('Psychiatry');
INSERT INTO Specialities (field_name) VALUES ('Oral, Dental and Maxillofacial Surgery');
INSERT INTO Specialities (field_name) VALUES ('Orthodontics');
INSERT INTO Specialities (field_name) VALUES ('Periodontology (Gingival Diseases)');
INSERT INTO Specialities (field_name) VALUES ('Dentist');
INSERT INTO Specialities (field_name) VALUES ('Pedodontics (Pediatric Dentistry)');
INSERT INTO Specialities (field_name) VALUES ('Laboratory');
INSERT INTO Specialities (field_name) VALUES ('Language and Speech Disorders');
INSERT INTO Specialities (field_name) VALUES ('Nutrition and Diet');
INSERT INTO Specialities (field_name) VALUES ('Techniques Podology');
INSERT INTO Specialities (field_name) VALUES ('Psychology');