const Crud = require('./model');

const getAllCrud = async (req, res) => {
    try {
        const cruds = await Crud.find();

        res.status(200).json({
            status: 'success',
            results: cruds.length,
            data: {
                cruds
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    } 
};

const getCrud = async (req, res) => {
    try {
        const crud = await Crud.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                crud
            }
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        });
    }
};

const createCrud = async (req, res) => {
    try {
        const newCrud = await Crud.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                crud: newCrud
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid data sent'
        });
    }
};

const updateCrud = async (req, res) => {
    try {
        // const crud = await Crud.findByIdAndUpdate(req.params.id, req.body, {
        //     new: true,
        //     runValidators: true
        // });

        const crud = await Crud.findByIdAndUpdate(req.params.id, {message: req.body.message}, {
            new: true,
            runValidators: true
        });

        res.status(201).json({
            status: 'success',
            data: {
                crud
            }
        });  
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};

const deleteCrud = async (req, res) => {
    try {
        await Crud.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
}

module.exports = {
    getAllCrud,
    getCrud,
    createCrud,
    updateCrud,
    deleteCrud
}