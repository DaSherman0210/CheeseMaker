const {Router} = require('express');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const role = require('../models/rol.js');
const {getUsers,postUsers,deleteUsers,putUsers,patchUsers} = require('../controllers/usuario.controllers.js');
const router = Router();

router.get("/",getUsers);
router.post("/", [
    check('email','El correo no es valido').isEmail(),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe de ser minimo de 6 letras').isLength({min: 6}),
    /* check('rol','No es un rol valido').isIn(['ADMIN','USER']), */
    check('rol').custom(async(rol = '')=>{
        const existeRol = await role.findOne({rol});
        if (!existeRol) {
            throw new Error(`El rol ${rol} no esta en la base de datos`)
        }
    }),
    validateDocuments
] ,postUsers);
router.delete ("/",deleteUsers);
router.put("/",putUsers);
router.patch ("/",patchUsers);

module.exports = router;