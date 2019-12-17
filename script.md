### CREATE TABLE

CREATE TABLE IF NOT EXISTS Shop (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Picture (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    product_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL, 
    tag_id INT NOT NULL,
    shop_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    count_available INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    credit_card_number VARCHAR(255) NOT NULL,
    balance DOUBLE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO User (type, username, password, email, credit_card_number, balance) VALUES ("owner", "test", "test", "test@gmail.com", "21312321", 0.0);

CREATE TABLE IF NOT EXISTS Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    seller_id INT NOT NULL,
    buyer_id INT NOT NULL,
    count INT NOT NULL,
    state VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    star_rating INT NOT NULL,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    message VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `merchants` ADD FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`);

CREATE INDEX `product_status` ON `products` (`merchant_id`, `status`);

CREATE UNIQUE INDEX `products_index_1` ON `products` (`id`);

