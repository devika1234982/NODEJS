const crypto=require('crypto');


const password="devxx@123"
const algorithm="aes-256-cbc"
const key= crypto.randomBytes(32);
const iv= crypto.randomBytes(16);

// encryption...

function encrypt(text){
    const cipher=crypto.createCipheriv(algorithm, key,iv)
    let encrypted=cipher.update(text,"utf8","hex")
    encrypted+=cipher.final('hex')
    return encrypted
}
encryptedvalue=encrypt(password)
console.log(encryptedvalue);

// decryption...

function decrypt(text){
    const decipher=crypto.createDecipheriv(algorithm, key,iv)
    let decrypted=decipher.update(text,"hex","utf8")
    decrypted+=decipher.final('utf8')
    return decrypted;
}
console.log(decrypt(encryptedvalue))


// hasing...

const hash=crypto.createHash("sha256").update(password).digest('hex');
console.log(hash);

