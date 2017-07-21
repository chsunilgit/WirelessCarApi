
const CaseLimited = require('../../../models/caseLimited.js')
class VehicleController {

    constructor(router) {
        router.get('/:id', this.returnLimitedCaseData.bind(this));
    }

    returnLimitedCaseData(req, res) {
        console.log('*** returnLimitedCaseData');
        console.log('*** req.body');
        console.log(req.params.id);
        var caseLtd = new CaseLimited("event1234", "1234567889", "John", "Doe");
        res.json(caseLtd);
/*
        if (!req.body || !req.body.stateId) {
            throw new Error('Customer and associated stateId required');
        }

        statesRepo.getState(req.body.stateId, (err, state) => {
            if (err) {
                console.log('*** statesRepo.getState error: ' + util.inspect(err));
                res.json({ status: false, error: 'State not found', customer: null });
            } else {
                customersRepo.updateCustomer(req.params.id, req.body, state, (err, customer) => {
                    if (err) {
                        console.log('*** updateCustomer error: ' + util.inspect(err));
                        res.json({ status: false, error: 'Update failed', customer: null });
                    } else {
                        console.log('*** updateCustomer ok');
                        res.json({ status: true, error: null, customer: customer });
                    }
                });
            }
        });*/
    }


}

module.exports = VehicleController;