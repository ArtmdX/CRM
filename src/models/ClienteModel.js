const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
    nome_completo: { type: String, required: true, maxlength: 50 },
    telefone: { type: String, maxlength: 20 },
    email: { type: String, maxlength: 50 },
    ultimo_contato: { type: Number, default: 0 },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente