const bcrypt = require('bcryptjs');

bcrypt.hash('password123', 10).then(console.log).catch(console.error);
/*
INSERT INTO users (nombre, email, password)
VALUES ('Administrador', 'admin@example.com', '$2b$10$uj8m1sfcZLemIZNPtGRDVOBIZSAu2UlYpolO.eL0V1dsOri7UtN5a');
*/